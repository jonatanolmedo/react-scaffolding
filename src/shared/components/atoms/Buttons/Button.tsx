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
}

const Button: React.ForwardRefRenderFunction<TouchableOpacity, Props> = (
  { title, style, onPress },
  ref
) => {
  return (
    <TouchableOpacity
      ref={ref}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Text style={styles.txtButton}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
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
