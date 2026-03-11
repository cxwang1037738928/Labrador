// mobile_app/app/(tabs)/ImageViewer.js

// allows user to view a single image and its annotations, and add new annotations
// by dragging on the image to create a bounding box and entering a label for the annotation

// mobile_app/app/(tabs)/UploadImages.js

import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Text,
  Alert
} from "react-native";

import AnnotationCanvas from "../components/AnnotationCanvas";
import { useLocalSearchParams } from "expo-router";

const API_BASE_URL = "http://10.0.0.198:3000";

export default function ImageViewer() {

  const { id, token } = useLocalSearchParams();

  const [image, setImage] = useState(null);
  const [annotations, setAnnotations] = useState([]);

  const [draftAnnotation, setDraftAnnotation] = useState(null);
  const [selectedAnnotation, setSelectedAnnotation] = useState(null);

  const [imageLayout, setImageLayout] = useState({
    width: 1,
    height: 1
  });

  const [label, setLabel] = useState("");
  const [color, setColor] = useState("red");

  useEffect(() => {
    if(!id || !token) return; // don't call API if id or token is not available yet
    fetchImage();
    fetchAnnotations();
  }, [id, token]);

  const fetchImage = async () => {
    try {

      const res = await fetch(`${API_BASE_URL}/image/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log("Fetched image:", data);

      if (!data.error) setImage(data);

    } catch (err) {
      console.error("Error fetching image:", err);
    }
  };

  const fetchAnnotations = async () => {
    try {

      const res = await fetch(`${API_BASE_URL}/image/annotation/${id}/annotations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!data.error) setAnnotations(data);

    } catch (err) {
      console.error("Error fetching annotations:", err);
    }
  };

  const submitAnnotation = async () => {

    if (!draftAnnotation) {
      Alert.alert("Draw a box first");
      return;
    }

    if (!label) {
      Alert.alert("Enter a label");
      return;
    }

    try {

      const res = await fetch(`${API_BASE_URL}/image/annotation`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          imageId: Number(id),
          label: label,
          color: color,
          x: draftAnnotation.x,
          y: draftAnnotation.y,
          width: draftAnnotation.width,
          height: draftAnnotation.height
        })
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Server error:", text);
        Alert.alert("Failed to save annotation");
        return;
      }

      // Safely parse JSON
      let data;
      try {
        data = await res.json();
      } catch (err) {
        console.error("Invalid JSON response");
        return;
      }

      if (!data?.error) {

        // Clear local draft state
        setDraftAnnotation(null);
        setLabel("");

        // Reload annotations from backend
        await fetchAnnotations();
      }

    } catch (err) {
      console.error("Submit annotation error:", err);
      Alert.alert("Network error while saving annotation");
    }
  };

  const deleteAnnotation = async () => {

    if (!selectedAnnotation) {
      Alert.alert("Select an annotation first");
      return;
    }

    try {

      await fetch(`${API_BASE_URL}/image/annotation/${selectedAnnotation.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setAnnotations(prev =>
        prev.filter(a => a.id !== selectedAnnotation.id)
      );

      setSelectedAnnotation(null);

    } catch (err) {
      console.error("Delete annotation error:", err);
    }
  };

  if (!image) return <Text>Loading...</Text>;

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
          draftAnnotation={draftAnnotation}
          setDraftAnnotation={setDraftAnnotation}
          selectedAnnotation={selectedAnnotation}
          setSelectedAnnotation={setSelectedAnnotation}
          imageWidth={imageLayout.width}
          imageHeight={imageLayout.height}
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

        <Button title="Submit Annotation" onPress={submitAnnotation} />

        <Button
          title="Delete Selected"
          color="red"
          onPress={deleteAnnotation}
        />

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
    justifyContent: "space-around",
    marginBottom: 10
  }

});