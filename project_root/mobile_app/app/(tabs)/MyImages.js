// mobile_app/app/(tabs)/UploadImages.js

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';

const API_BASE_URL = 'http://10.0.0.198:3000';

export default function MyImages() {

  const { token } = useAuth();
  const router = useRouter();

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {

    if(!token) return; // don't call API if id or token is not available yet

    try {

      const response = await fetch(`${API_BASE_URL}/image/my-image`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setImages(data);

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator style={{ flex: 1 }} size="large" />
    );
  }

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 20 }}

      renderItem={({ item }) => (

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            router.push(`/ImageViewer?id=${item.id}`)
          }
        >

          <Image
          source={{
          uri: `${API_BASE_URL}/${item.filePath.replace(/\\/g, "/")}`,
          }}
          style={styles.image}
          />

          <Text>ID: {item.id}</Text>

        </TouchableOpacity>

      )}
    />
  );
}

const styles = StyleSheet.create({

  card: {
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },

});