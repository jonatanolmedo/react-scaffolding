import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  renderChildren,
  renderTrackMarkComponent,
} from "../../../utils/sliderUtils/sliderUtils";

const DEFAULT_VALUE = 0.2;

export const SliderContainer = (props: {
  caption: string;
  children: React.ReactElement;
  sliderValue?: Array<number>;
  trackMarks?: Array<number>;
}) => {
  const { caption, sliderValue, trackMarks } = props;
  const [value, setValue] = React.useState(sliderValue ?? DEFAULT_VALUE);
  let _renderTrackMarkComponent: any = () => {}; // Función vacía predeterminada

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    _renderTrackMarkComponent = (index: number) =>
      renderTrackMarkComponent(trackMarks, value, index);
  }

  const _renderChildren = () =>
    renderChildren(
      props.children,
      setValue,
      _renderTrackMarkComponent,
      trackMarks,
      value
    );

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.titleContainer}>
        {caption !== "" && <Text style={styles.text}>{caption}</Text>}
        <Text testID="slider-container" style={styles.text}>
          {Array.isArray(value)
            ? "$" + value.join(".00           $") + ".00"
            : value}
        </Text>
      </View>
      {_renderChildren()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    margin: 16,
    paddingBottom: 32,
  },
  sliderContainer: {
    paddingVertical: 16,
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: 16,
    color: "black",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
