// mobile_app/app/(tabs)/UploadImages.js

// allows user to view a single image and its annotations, and add new annotations
// by dragging on the image to create a bounding box and entering a label for the annotation

import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Text
} from "react-native";

import AnnotationCanvas from "../components/AnnotationCanvas";
import { useLocalSearchParams } from "expo-router";

const API_BASE_URL = "http://10.0.0.198:3000";

export default function ImageViewer() {

  const { id, token } = useLocalSearchParams();

  const [image, setImage] = useState(null);
  const [annotations, setAnnotations] = useState([]);

  const [imageLayout, setImageLayout] = useState({
    width: 1,
    height: 1
  });
  

  const [label, setLabel] = useState("");
  const [color, setColor] = useState("red");

  useEffect(() => {
    fetchImage();
    fetchAnnotations();
  }, []);

const fetchImage = async () => {
  if (!id || !token) return; // don't fetch if id or token is missing

  try {
    const res = await fetch(`${API_BASE_URL}/image/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // include your JWT token
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log("SERVER RESPONSE:", data);

    if (!data.error) setImage(data);
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

  const fetchAnnotations = async () => {
    if (!id || !token) return;

    try {
      const res = await fetch(`${API_BASE_URL}/image/${id}/annotations`, {
        headers: {
          Authorization: `Bearer ${token}`, // include JWT here as well
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      if (!data.error) setAnnotations(data);
      } catch (error) {
        console.error("Error fetching annotations:", error);
      }
    };

    if (!image) {
      return <Text>Loading...</Text>;
    }

  return (
    <View style={styles.container}>

      <View
        style={styles.imageContainer}
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          setImageLayout({ width, height });
        }}
      >

        <Image
          source={{
            uri: `${API_BASE_URL}/${image.filePath.replace(/\\/g, "/")}`
          }}
          style={styles.image}
          resizeMode="contain"
        />

        <AnnotationCanvas
          annotations={annotations}
          setAnnotations={setAnnotations}
          imageWidth={imageLayout.width}
          imageHeight={imageLayout.height}
          label={label}
          color={color}
        />

      </View>

      <View style={styles.toolbar}>

        <TextInput
          placeholder="Label"
          value={label}
          onChangeText={setLabel}
          style={styles.input}
        />

        <View style={styles.colors}>

          <Button title="Red" onPress={() => setColor("red")} />
          <Button title="Green" onPress={() => setColor("green")} />
          <Button title="Blue" onPress={() => setColor("blue")} />

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  imageContainer: {
    flex: 1,
    position: "relative"
  },

  image: {
    width: "100%",
    height: "100%"
  },

  toolbar: {
    padding: 10,
    backgroundColor: "#eee"
  },

  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10
  },

  colors: {
    flexDirection: "row",
    justifyContent: "space-around"
  }

});