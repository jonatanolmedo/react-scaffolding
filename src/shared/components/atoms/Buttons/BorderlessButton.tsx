import React, { forwardRef } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  onPress?: () => void;
  testId?: string;
  accesibilityLabel?: string;
}

const BorderlessButton: React.ForwardRefRenderFunction<
  TouchableOpacity,
  Props
> = ({ title, style, textColor, onPress, testId, accesibilityLabel }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      testID={testId}
      accessibilityLabel={accesibilityLabel}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={{ ...styles.txtButton, color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  txtButton: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default forwardRef(BorderlessButton);
