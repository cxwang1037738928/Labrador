// mobile_app/app/components/AnnotationCanvas.js

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Rect } from "react-native-svg";
import { PanResponder } from "react-native";

const MIN_BOX_SIZE = 10;

export default function AnnotationCanvas({
  annotations,
  draftAnnotation,
  setDraftAnnotation,
  selectedAnnotation,
  setSelectedAnnotation,
  imageWidth,
  imageHeight,
  color
}) {

  const [drawingBox, setDrawingBox] = useState(null);

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

      // If user taps empty space (no drag), clear selection & draft
      setSelectedAnnotation(null);
      setDraftAnnotation(null);

      setDrawingBox({
        x: locationX,
        y: locationY,
        width: 0,
        height: 0
      });
    },

    onPanResponderMove: (evt) => {

      const { locationX, locationY } = evt.nativeEvent;

      setDrawingBox((b) => {
        if (!b) return b;

        return {
          ...b,
          width: locationX - b.x,
          height: locationY - b.y
        };
      });
    },

    onPanResponderRelease: () => {

      if (!drawingBox) return;

      const width = Math.abs(drawingBox.width);
      const height = Math.abs(drawingBox.height);

      if (width < MIN_BOX_SIZE || height < MIN_BOX_SIZE) {
        setDrawingBox(null);
        return;
      }

      const normalized = normalize({
        x: Math.min(drawingBox.x, drawingBox.x + drawingBox.width),
        y: Math.min(drawingBox.y, drawingBox.y + drawingBox.height),
        width,
        height
      });

      setDraftAnnotation(normalized);
      setDrawingBox(null);
    }
  });

  return (
    <View style={StyleSheet.absoluteFill} {...panResponder.panHandlers}>

      <Svg width="100%" height="100%">

        {annotations.map((a, index) => {

          const box = denormalize(a);
          const selected = selectedAnnotation?.id === a.id;

          return (
            <Rect
              key={a.id ?? `annotation-${index}`}
              x={box.x}
              y={box.y}
              width={box.width}
              height={box.height}
              stroke={a.color || "yellow"}
              strokeWidth={selected ? 4 : 2}
              fill="transparent"
              onPress={() =>
                setSelectedAnnotation(prev =>
                  prev?.id === a.id ? null : a
                )
              }
            />
          );
        })}

        {draftAnnotation && (

          <Rect
            x={draftAnnotation.x * imageWidth}
            y={draftAnnotation.y * imageHeight}
            width={draftAnnotation.width * imageWidth}
            height={draftAnnotation.height * imageHeight}
            stroke={color || "blue"}
            strokeDasharray="4"
            strokeWidth="2"
            fill="transparent"
          />

        )}

        {drawingBox && (

          <Rect
            x={drawingBox.x}
            y={drawingBox.y}
            width={drawingBox.width}
            height={drawingBox.height}
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