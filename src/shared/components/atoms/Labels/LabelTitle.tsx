import React, { forwardRef } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from "react-native";

interface Props {
  title: string;
  style?: StyleProp<TextStyle>;
  textColor?: string;
  testId?: string;
  accesibilityLabel?: string;
}

const LabelTitle: React.ForwardRefRenderFunction<Text, Props> = (
  { title, style, testId, accesibilityLabel },
  ref
) => {
  return (
    <Text
      style={[styles.txtLabel, style]}
      testID={testId}
      accessibilityLabel={accesibilityLabel}
    >
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  txtLabel: {
    color: "#AC2777",
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default forwardRef(LabelTitle);
