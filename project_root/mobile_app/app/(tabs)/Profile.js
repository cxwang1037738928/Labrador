// mobile_app/app/(tabs)/Profile.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';

export default function Profile() {

  const { user, loading, logout, refreshUser } = useAuth();
  const [refreshing, setRefreshing] = React.useState(false);
  const router = useRouter();

  const onRefresh = async () => {
    setRefreshing(true);
    await refreshUser();
    setRefreshing(false);
  };

  const handleLogout = async () => {
  await logout();
  router.replace('/(auth)/LoginScreen');
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.center}>
        <Text>No user data found.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >

      {/* Profile Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.role}>Role: {user.role}</Text>
      </View>

      {/* Stats */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Stats</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Points</Text>
          <Text style={styles.value}>{user.points ?? 0}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Validity</Text>
          <Text style={styles.value}>
            {user.validityPercentage ?? 0}%
          </Text>
        </View>
      </View>

      {/* Organizations */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Organizations</Text>

        {user.organizations?.length === 0 && (
          <Text style={styles.empty}>Not part of any organizations</Text>
        )}

        {user.organizations?.map((org) => (
          <View key={org.id} style={styles.orgItem}>
            <Text style={styles.orgName}>{org.name}</Text>
          </View>
        ))}
      </View>

      {/* Organizations Led */}
      {user.ledOrganization?.length > 0 && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Organizations You Lead</Text>

          {user.ledOrganization.map((org) => (
            <View key={org.id} style={styles.orgItem}>
              <Text style={styles.orgName}>{org.name}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },

  role: {
    marginTop: 6,
    fontSize: 14,
    color: '#888',
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },

  label: {
    fontSize: 16,
    color: '#444',
  },

  value: {
    fontSize: 16,
    fontWeight: '500',
  },

  empty: {
    color: '#888',
    fontStyle: 'italic',
  },

  orgItem: {
    paddingVertical: 6,
  },

  orgName: {
    fontSize: 16,
  },

  logoutButton: {
    marginHorizontal: 16,
    marginBottom: 30,
    padding: 16,
    backgroundColor: '#d9534f',
    borderRadius: 10,
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});