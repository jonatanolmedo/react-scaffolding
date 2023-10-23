import React from "react";
import { Text, View } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

interface Props {
  title?: string;
}

interface PropsSlider {
  animateTransitions?: boolean | undefined;
  maximumTrackTintColor?: string | undefined;
  maximumValue?: number | undefined;
  minimumTrackTintColor?: string | undefined;
  minimumValue?: number | undefined;
  step?: number | undefined;
  thumbTintColor?: string | undefined;
}

export const SliderMock = ({ title }: Props) => {
  return <Text testID="slider-mock">{title}</Text>;
};

export const SliderTest = ({
  animateTransitions,
  maximumTrackTintColor,
  maximumValue,
  minimumTrackTintColor,
  minimumValue,
  step,
  thumbTintColor,
}: PropsSlider) => {
  return (
    <View testID="slider-container" style={{ flex: 1 }}>
      <Slider
        animateTransitions={animateTransitions}
        maximumTrackTintColor={maximumTrackTintColor}
        maximumValue={maximumValue}
        minimumTrackTintColor={minimumTrackTintColor}
        minimumValue={minimumValue}
        step={step}
        thumbTintColor={thumbTintColor}
      />
    </View>
  );
};
