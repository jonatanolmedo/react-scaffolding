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
  onPress?: () => void;
  testId?: string;
  accesibilityLabel?: string;
}

const Button: React.ForwardRefRenderFunction<TouchableOpacity, Props> = (
  { title, style, onPress, testId, accesibilityLabel },
  ref
) => {
  return (
    <TouchableOpacity
      ref={ref}
      testID={testId}
      accessibilityLabel={accesibilityLabel}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={styles.txtButton}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtButton: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default forwardRef(Button);
