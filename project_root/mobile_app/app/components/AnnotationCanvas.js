// mobile_app/app/(tabs)/AnnotationCanvas.js

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Rect, Circle } from "react-native-svg";
import { PanResponder } from "react-native";

export default function AnnotationCanvas({
  annotations,
  setAnnotations,
  imageWidth,
  imageHeight,
  color,
  label
}) {

  const [draftBox, setDraftBox] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const normalize = (box) => ({
    x: box.x / imageWidth,
    y: box.y / imageHeight,
    width: box.width / imageWidth,
    height: box.height / imageHeight
  });

  const denormalize = (box) => ({
    x: box.x * imageWidth,
    y: box.y * imageHeight,
    width: box.width * imageWidth,
    height: box.height * imageHeight
  });

  const panResponder = PanResponder.create({

    onStartShouldSetPanResponder: () => true,

    onPanResponderGrant: (evt) => {

      const { locationX, locationY } = evt.nativeEvent;

      setDraftBox({
        x: locationX,
        y: locationY,
        width: 0,
        height: 0
      });
    },

    onPanResponderMove: (evt) => {

      const { locationX, locationY } = evt.nativeEvent;

      setDraftBox((b) => ({
        ...b,
        width: locationX - b.x,
        height: locationY - b.y
      }));
    },

    onPanResponderRelease: () => {

      if (!draftBox) return;

      const normalized = normalize(draftBox);

      const newAnnotation = {
        id: Date.now().toString(),
        label,
        color,
        ...normalized
      };

      setAnnotations([...annotations, newAnnotation]);

      setDraftBox(null);
    }
  });

  const moveAnnotation = (id, dx, dy) => {

    setAnnotations((prev) =>
      prev.map((a) => {

        if (a.id !== id) return a;

        const box = denormalize(a);

        box.x += dx;
        box.y += dy;

        return { ...a, ...normalize(box) };
      })
    );
  };

  return (
    <View
      style={StyleSheet.absoluteFill}
      {...panResponder.panHandlers}
    >

      <Svg width="100%" height="100%">

        {annotations.map((a) => {

          const box = denormalize(a);

          return (
            <Rect
              key={a.id}
              x={box.x}
              y={box.y}
              width={box.width}
              height={box.height}
              stroke={a.color || "yellow"}
              strokeWidth="2"
              fill="transparent"
              onPress={() => setSelectedId(a.id)}
            />
          );
        })}

        {draftBox && (
          <Rect
            x={draftBox.x}
            y={draftBox.y}
            width={draftBox.width}
            height={draftBox.height}
            stroke="blue"
            strokeWidth="2"
            fill="transparent"
          />
        )}

      </Svg>

    </View>
  );
}

const styles = StyleSheet.create({});