import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// CHANGE THIS to backend URL in .ENV file
const API_BASE_URL = ' ';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to all requests
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 errors (token expired)
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (email, password) =>
    apiClient.post('/auth/login', { email, password }),
  
  register: (name, email, password) =>
    apiClient.post('/auth/register', { name, email, password }),
  
  activate: (email, activationKey) =>
    apiClient.post('/auth/activate', { email, Activation_key: activationKey }),
  
  resetPassword: (email) =>
    apiClient.post('/auth/reset', { email }),
  
  resetWithToken: (email, resetToken, newPassword) =>
    apiClient.post(`/auth/reset/${resetToken}`, {
      email,
      resetToken,
      new_password: newPassword,
    }),
};

// User API
export const userAPI = {
  getMe: () => apiClient.get('/user/me'),
  
  // Cashier+ endpoints
  addPoints: (userId, points) =>
    apiClient.patch('/user/points', { userId, points }),
  
  verifyImage: (imageId) =>
    apiClient.post('/user/verify-image', { ImageId: imageId }), // disabled
  
  updateValidity: (userId, percentage) =>
    apiClient.patch('/user/validity-percentage', { userId, percentage }), // disabled
  
  // Manager+ endpoints
  getAllUsers: () => apiClient.get('/user/users'),
  
  getCredentials: () => apiClient.get('/user/credentials'),
  
  getOrganizations: () => apiClient.get('/user/organizations'),
  
  promoteUser: (userId, role) =>
    apiClient.patch('/user/promote', { userId, role }),
  
  demoteUser: (userId) =>
    apiClient.patch('/user/demote', { userId }),
  
  // Admin endpoints
  promoteManager: (userId) =>
    apiClient.patch('/user/admin/promote', { userId }),
  
  demoteManager: (userId) =>
    apiClient.patch('/user/admin/demote', { userId }),
};

// Organization API
export const organizationAPI = {
  create: (name, description) =>
    apiClient.post('/organization', { name, Description: description }),
  
  invite: (organizationId, userId) =>
    apiClient.post(`/organization/${organizationId}/invite`, { userId }),
  
  removeMember: (organizationId, userId) =>
    apiClient.delete(`/organization/${organizationId}/member/${userId}`),
};

// Image API
export const imageAPI = {
  upload: (formData) =>
    apiClient.post('/image/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  
  getMyImages: (status) =>
    apiClient.get('/image/my-image', { params: { status } }),
  
  getImageById: (id) =>
    apiClient.get(`/image/${id}`),
  
  deleteImage: (id) =>
    apiClient.delete(`/image/${id}`),
  
  // Cashier+ endpoints
  getAllImages: (params) =>
    apiClient.get('/image/all/list', { params }),
  
  getPendingImages: (limit = 50) =>
    apiClient.get('/image/pending/list', { params: { limit } }),
  
  verifyImage: (imageId, isValid, notes, mlScore) =>
    apiClient.post(`/image/${imageId}/verify`, { isValid, notes, mlScore }),
  
  getVerifications: (imageId) =>
    apiClient.get(`/image/${imageId}/verifications`),
  
  mlVerify: (imageId) =>
    apiClient.post(`/image/${imageId}/MLverify`),
  
  updateUserValidity: (userId, percentage) =>
    apiClient.patch('/image/user-validity', { userId, Percentage: percentage }),
};

// Annotation API
export const annotationAPI = {
  create: (imageId, label, x, y, width, height, color) =>
    apiClient.post('/image/annotation', {
      imageId,
      label,
      x,
      y,
      width,
      height,
      color,
    }),
  
  createBulk: (imageId, annotations) =>
    apiClient.post('/image/annotation/bulk', { imageId, annotations }),
  
  getImageAnnotations: (imageId) =>
    apiClient.get(`/image/annotation/${imageId}/annotations`),
  
  update: (id, data) =>
    apiClient.patch(`/image/annotation/${id}`, data),
  
  delete: (id) =>
    apiClient.delete(`/image/annotation/${id}`),
  
  validate: (id, isValidated) =>
    apiClient.patch(`/image/annotation/${id}/validate`, { isValidated }),
};

export default apiClient;