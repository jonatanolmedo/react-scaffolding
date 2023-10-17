import React from "react";
import { Text } from "react-native";

interface Props {
  title?: string;
}

export const Slider = ({ title }: Props) => {
  return <Text testID="slider-mock">{title}</Text>;
};
