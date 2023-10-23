import React from "react";
import { StyleSheet, View } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

export const renderTrackMarkComponent = (
  trackMarks: any,
  value: any,
  index: number
) => {
  const currentMarkValue = trackMarks[index];
  const currentSliderValue = value || (Array.isArray(value) && value[0]) || 0;
  const style =
    currentMarkValue > Math.max(currentSliderValue)
      ? trackMarkStyles.activeMark
      : trackMarkStyles.inactiveMark;
  return <View testID={`track-mark-${index}`} style={style} />;
};

export const renderChildren = (
  children,
  setValue,
  renderTrackMarkComponent,
  trackMarks,
  value
) => {
  return React.Children.map(children, (child, index) => {
    if (!!child && child.type === Slider) {
      return React.cloneElement(child, {
        onValueChange: setValue,
        renderTrackMarkComponent: (index: number) =>
          renderTrackMarkComponent(trackMarks, value, index),
        trackMarks,
        value,
        testID: `track-mark-${index}`,
      });
    }

    return child;
  });
};

const borderWidth = 4;
const trackMarkStyles = StyleSheet.create({
  activeMark: {
    borderColor: "red",
    borderWidth,
    left: -borderWidth / 2,
  },
  inactiveMark: {
    borderColor: "grey",
    borderWidth,
    left: -borderWidth / 2,
  },
});
