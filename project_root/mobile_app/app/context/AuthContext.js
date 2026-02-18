/**
 * AuthContext.js
 * 
 * This file provides centralized authentication management for the mobile app.
 * It creates a React Context that handles user authentication state, JWT tokens,
 * and communicates with the backend API for all auth-related operations.
 * 
 * Key responsibilities:
 * - User registration and account activation
 * - Login/logout with JWT token management
 * - Password reset functionality
 * - Persistent authentication across app sessions
 * - Fetching and caching user profile data
 * 
 * Usage:
 * 1. Wrap your app with <AuthProvider> in _layout.js
 * 2. Use the useAuth() hook in any component to access auth functions
 */

import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ============================================================================
// CONFIGURATION
// ============================================================================

/**
 * Base URL for the backend API
 * 
 * For local development:
 * - iOS Simulator: use 'http://localhost:3000'
 * - Android Emulator: use 'http://10.0.2.2:3000'
 * - Physical Device: use your computer's IP address (e.g., 'http://192.168.1.100:3000')
 * 
 * For production: Update this to your deployed backend URL
 */
const API_BASE_URL = 'http://localhost:3000'; // Update this to your backend URL

// ============================================================================
// CONTEXT CREATION
// ============================================================================

/**
 * Create the authentication context
 * This will be used to provide auth state and functions throughout the app
 */
const AuthContext = createContext({});

// ============================================================================
// AUTH PROVIDER COMPONENT
// ============================================================================

/**
 * AuthProvider Component
 * 
 * This component wraps the entire app and provides authentication state
 * and functions to all child components through React Context.
 * 
 * @param {Object} children - Child components that will have access to auth context
 */
export const AuthProvider = ({ children }) => {
  // --------------------------------------------------------------------------
  // STATE MANAGEMENT
  // --------------------------------------------------------------------------
  
  /**
   * user: Stores the current logged-in user's data
   * Structure matches the User model from Prisma schema including:
   * - id, name, email, role, points, validityPercentage
   * - profile (bio, image)
   * - organizations (all orgs user is part of)
   * - ledOrganization (orgs user leads)
   */
  const [user, setUser] = useState(null);
  
  /**
   * loading: Indicates if the app is checking for existing authentication
   * Set to true initially while checking AsyncStorage for saved tokens
   * Set to false once auth check is complete
   */
  const [loading, setLoading] = useState(true);
  
  /**
   * token: Stores the JWT authentication token
   * Used in Authorization header for all authenticated API requests
   * Format: "Bearer <token>"
   */
  const [token, setToken] = useState(null);

  // --------------------------------------------------------------------------
  // INITIALIZATION
  // --------------------------------------------------------------------------
  
  /**
   * On component mount, check if user is already logged in
   * This enables persistent login across app restarts
   */
  useEffect(() => {
    // Check if user is logged in on app start
    checkLoginStatus();
  }, []);

  // --------------------------------------------------------------------------
  // HELPER FUNCTIONS
  // --------------------------------------------------------------------------

  /**
   * checkLoginStatus
   * 
   * Checks AsyncStorage for a saved JWT token on app startup.
   * If a token exists, attempts to fetch the user's current data from the backend.
   * This enables automatic login when the app is reopened.
   * 
   * Flow:
   * 1. Check AsyncStorage for 'userToken'
   * 2. If token exists, set it in state and fetch user data
   * 3. Set loading to false when complete
   */
  const checkLoginStatus = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('userToken');
      
      if (storedToken) {
        setToken(storedToken);
        // Fetch current user data using /user/me endpoint
        await fetchUserData(storedToken);
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * fetchUserData
   * 
   * Fetches the current user's complete profile data from the backend.
   * Uses the GET /user/me endpoint which returns user info including:
   * - Basic user data (id, name, email, role, points)
   * - Profile (bio, image)
   * - Organizations the user is part of
   * - Organizations the user leads
   * 
   * @param {string} authToken - JWT token to authenticate the request
   * 
   * Success: Updates user state and caches data in AsyncStorage
   * Failure: Clears authentication (token invalid/expired)
   */
  const fetchUserData = async (authToken) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        // Cache user data locally for offline access
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
      } else {
        // Token is invalid or expired, clear authentication
        await logout();
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // --------------------------------------------------------------------------
  // AUTHENTICATION FUNCTIONS
  // --------------------------------------------------------------------------

  /**
   * register
   * 
   * Registers a new user account with the backend.
   * 
   * API: POST /auth/register
   * Payload: { name: String, email: String, password: String }
   * Success Response: 201 Created
   * 
   * Note: After successful registration, the user must activate their account
   * via email before they can log in. An activation key is sent to their email.
   * 
   * @param {string} name - User's full name
   * @param {string} email - User's email address (must be unique)
   * @param {string} password - User's password
   * @returns {Object} { success: boolean, message?: string, error?: string }
   */
  const register = async (name, email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.status === 201) {
        return { 
          success: true, 
          message: 'Registration successful! Please check your email to activate your account.' 
        };
      } else {
        return { success: false, error: data.message || 'Registration failed' };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  /**
   * activateAccount
   * 
   * Activates a newly registered user account using the activation key
   * sent to their email.
   * 
   * API: POST /auth/activate
   * Payload: { email: String, Activation_key: String }
   * Success Response: 200 OK
   * Error: 400 Bad Request (invalid key)
   * 
   * After activation, the user can log in with their credentials.
   * 
   * @param {string} email - User's email address
   * @param {string} activationKey - Activation key from email
   * @returns {Object} { success: boolean, message?: string, error?: string }
   */
  const activateAccount = async (email, activationKey) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/activate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, Activation_key: activationKey }),
      });

      if (response.ok) {
        return { success: true, message: 'Account activated successfully!' };
      } else {
        return { success: false, error: 'Invalid activation key' };
      }
    } catch (error) {
      console.error('Activation error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  /**
   * login
   * 
   * Authenticates a user with email and password.
   * 
   * API: POST /auth/login
   * Payload: { email: String, password: String }
   * Success Response: 200 OK with signed JWT token
   * Error: 401 Unauthorized
   * 
   * Flow:
   * 1. Send credentials to backend
   * 2. Receive JWT token
   * 3. Store token in AsyncStorage for persistent login
   * 4. Fetch user profile data using the token
   * 5. Update app state with user data
   * 
   * @param {string} email - User's email address
   * @param {string} password - User's password
   * @returns {Object} { success: boolean, error?: string }
   */
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store JWT token (backend returns signed JWT token)
        const jwtToken = data.token || data;
        await AsyncStorage.setItem('userToken', jwtToken);
        setToken(jwtToken);
        
        // Fetch complete user profile data
        await fetchUserData(jwtToken);
        
        return { success: true };
      } else {
        return { success: false, error: data.message || 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  /**
   * logout
   * 
   * Logs out the current user by clearing all authentication data.
   * 
   * Flow:
   * 1. Remove JWT token from AsyncStorage
   * 2. Remove cached user data from AsyncStorage
   * 3. Clear user and token from app state
   * 
   * After logout, the user will need to log in again to access protected features.
   */
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('userData');
      setUser(null);
      setToken(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  /**
   * requestPasswordReset
   * 
   * Initiates the password reset process by sending a reset token to the user's email.
   * 
   * API: POST /auth/reset
   * Payload: { email: String }
   * Success Response: 200 OK
   * Error: 404 Not Found (unknown email)
   * 
   * After successful request, user will receive an email with a reset token
   * that can be used with the resetPassword function.
   * 
   * @param {string} email - User's email address
   * @returns {Object} { success: boolean, message?: string, error?: string }
   */
  const requestPasswordReset = async (email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        return { success: true, message: 'Password reset email sent!' };
      } else {
        return { success: false, error: 'Email not found' };
      }
    } catch (error) {
      console.error('Password reset request error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  /**
   * resetPassword
   * 
   * Completes the password reset process using the token received via email.
   * 
   * API: POST /auth/reset/:resetToken
   * Payload: { email: String, resetToken: Int, new_password: String }
   * Success Response: 200 OK
   * Error: 400 Bad Request (wrong reset token)
   * 
   * After successful reset, user can log in with their new password.
   * 
   * @param {string} email - User's email address
   * @param {string} resetToken - Reset token from email
   * @param {string} newPassword - New password to set
   * @returns {Object} { success: boolean, message?: string, error?: string }
   */
  const resetPassword = async (email, resetToken, newPassword) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/reset/${resetToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, resetToken, new_password: newPassword }),
      });

      if (response.ok) {
        return { success: true, message: 'Password reset successful!' };
      } else {
        return { success: false, error: 'Invalid reset token' };
      }
    } catch (error) {
      console.error('Password reset error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  // --------------------------------------------------------------------------
  // CONTEXT PROVIDER
  // --------------------------------------------------------------------------

  /**
   * Provide authentication state and functions to all child components
   * 
   * Available values:
   * - user: Current user object (null if not logged in)
   * - loading: Boolean indicating if auth check is in progress
   * - token: JWT authentication token
   * - login: Function to log in a user
   * - logout: Function to log out the current user
   * - register: Function to register a new user
   * - activateAccount: Function to activate a registered account
   * - requestPasswordReset: Function to request password reset email
   * - resetPassword: Function to reset password with token
   * - refreshUser: Function to manually refresh user data from backend
   */
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        token,
        login,
        logout,
        register,
        activateAccount,
        requestPasswordReset,
        resetPassword,
        refreshUser: () => fetchUserData(token),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ============================================================================
// CUSTOM HOOK
// ============================================================================

/**
 * useAuth Hook
 * 
 * Custom React hook to access authentication context in any component.
 * 
 * Usage example:
 * ```javascript
 * import { useAuth } from '../context/AuthContext';
 * 
 * function MyComponent() {
 *   const { user, login, logout } = useAuth();
 *   
 *   if (user) {
 *     return <Text>Welcome, {user.name}!</Text>;
 *   }
 *   
 *   return <Button onPress={() => login(email, password)} />;
 * }
 * ```
 * 
 * @throws {Error} If used outside of AuthProvider
 * @returns {Object} Authentication context with user state and auth functions
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};