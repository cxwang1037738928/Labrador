// mobile_app/app/(tabs)/UploadImages.js

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import { useAuth } from '../context/AuthContext';

const API_BASE_URL = 'http://10.0.0.198:3000';

export default function ImageViewer() {

  const { id } = useLocalSearchParams();
  const { token } = useAuth();

  const [image, setImage] = useState(null);
  const [annotations, setAnnotations] = useState([]);

  const [label, setLabel] = useState('');

  const fetchImage = async () => {
    
    if (!id) return; // don't call API if id is not available yet
    try{
    const response = await fetch(`${API_BASE_URL}/image/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    console.log("IMAGE RESPONSE:", data);
    //console.log("TOKEN:" , token);

    if(!data.error){
      setImage(data);
    }
  }catch(error){
    console.error("Error fetching image:", error);
  }};

  const fetchAnnotations = async () => {

    console.log("Fetching annotations for image ID:", id||null);

    if (!id) return; // don't call API if id is not available yet
    const response = await fetch(
      `${API_BASE_URL}/image/annotation/${id}/annotations`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    setAnnotations(data);
  };

  const addAnnotation = async () => {

    await fetch(`${API_BASE_URL}/image/annotation`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        imageId: Number(id),
        label,
        x: 0.2,
        y: 0.2,
        width: 0.2,
        height: 0.2,
      }),
    });

    setLabel('');
    fetchAnnotations();
  };

  useEffect(() => {
    if(id && token){
      fetchImage();
      fetchAnnotations();
    }
  }, [id, token]);

  if (!image) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>

      <Image
      source={{
      uri: image?.filePath
      ? `${API_BASE_URL}/${image.filePath.replace(/\\/g, "/")}`
      : undefined,
      }}
      style={styles.image}
      />

      <Text style={styles.title}>Annotations</Text>

      <FlatList
        data={annotations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.label} ({item.x}, {item.y})
          </Text>
        )}
      />

      <TextInput
        placeholder="Label"
        value={label}
        onChangeText={setLabel}
        style={styles.input}
      />

      <Button title="Add Annotation" onPress={addAnnotation} />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },

});