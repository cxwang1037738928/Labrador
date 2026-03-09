// mobile_app/app/(tabs)/UploadImages.js

import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';



const API_BASE_URL = 'http://10.0.0.198:3000';

export default function UploadImage() {

  const router = useRouter();

  const { token } = useAuth();

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
    });;

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const uploadImage = async () => {

    if (!image) {
      Alert.alert("Please choose an image first");
      return;
    }

    try {

      setUploading(true);


      const formData = new FormData();

      const filename = image.uri.split('/').pop();


      formData.append('image', {
        uri: image.uri,
        name: filename,
        type: 'image/jpeg'
      });

      // DEBUG LOGS
      // console.log("Uploading image:", image.uri);
      // console.log("Token:", token);
      // DEBUG LOGS END

      const response = await fetch(`${API_BASE_URL}/image/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // explicitly set content type for file upload 
        },
        body: formData,
      });

      // DEBUG LOGS
      // console.log("Status:", response.status);
      const text = await response.text();
      // console.log("Response:", text);
      // DEBUG LOGS END

      const data = JSON.parse(text); // parse JSON after logging raw text for better debugging


      if (response.status === 201) {

        const imageId = data.imageId;

        router.push(`/ImageViewer?id=${imageId}`);
        } else {
        Alert.alert("Upload failed", data.message || "Error uploading image");
      }

    } catch (error) {
      console.error(error);
      Alert.alert("Error uploading image");
    } finally {
      setUploading(false);
    }

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Upload Image</Text>

      {image && (
        <Image
          source={{ uri: image.uri }}
          style={styles.preview}
        />
      )}

      <Button title="Select Image" onPress={pickImage} />

      <View style={{ height: 20 }} />

      <Button
        title={uploading ? "Uploading..." : "Upload"}
        onPress={uploadImage}
        disabled={uploading}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  preview: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },

});