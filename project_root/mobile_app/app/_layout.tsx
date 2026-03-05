// app/_layout.tsx
import { Stack } from 'expo-router';
import { AuthProvider } from './context/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider> // Wrap the entire app in the AuthProvider to provide auth context to all screens
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}