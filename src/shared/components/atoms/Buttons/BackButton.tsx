import React, { forwardRef } from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
  color?: string;
  onPress?: () => void;
  testId?: string;
  accesibilityLabel?: string;
}

const BackIcon = require("../../../assets/images/ic_back.png");

const BackButton: React.ForwardRefRenderFunction<TouchableOpacity, Props> = (
  { style, color, onPress, testId, accesibilityLabel },
  ref
) => {
  return (
    <TouchableOpacity
      ref={ref}
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Image
        testID={testId}
        accessibilityLabel={accesibilityLabel}
        style={styles.imgButton}
        tintColor={color}
        source={BackIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imgButton: {
    width: 24,
    height: 24,
  },
});

export default forwardRef(BackButton);
