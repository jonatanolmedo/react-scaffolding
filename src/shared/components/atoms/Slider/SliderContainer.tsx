import { Slider } from "@miblanchard/react-native-slider";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DEFAULT_VALUE = 0.2;

export const SliderContainer = (props: {
  caption: string;
  children: React.ReactElement;
  sliderValue?: Array<number>;
  trackMarks?: Array<number>;
}) => {
  const { caption, sliderValue, trackMarks } = props;
  const [value, setValue] = React.useState(sliderValue ?? DEFAULT_VALUE);
  let renderTrackMarkComponent: any;

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = (index: number) => {
      const currentMarkValue = trackMarks[index];
      const currentSliderValue =
        value || (Array.isArray(value) && value[0]) || 0;
      const style =
        currentMarkValue > Math.max(currentSliderValue)
          ? trackMarkStyles.activeMark
          : trackMarkStyles.inactiveMark;
      return <View testID={`track-mark-${index}`} style={style} />;
    };
  }

  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };

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
      {renderChildren()}
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
