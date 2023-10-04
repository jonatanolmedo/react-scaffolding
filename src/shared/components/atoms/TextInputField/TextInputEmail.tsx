import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput,
  ViewStyle,
  StyleProp,
  KeyboardTypeOptions,
} from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
  value?: string | undefined;
  placeholder?: string;
  autoCorrect?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  testId: string;
  accesibilityLabel: string;
}

const TextInputEmail: React.ForwardRefRenderFunction<TextInput, Props> = (
  {
    style,
    value,
    placeholder,
    autoCorrect,
    keyboardType,
    autoCapitalize,
    onChangeText,
    testId,
    accesibilityLabel,
  },
  ref
) => {
  return (
    <TextInput
      ref={ref}
      testID={testId}
      accessibilityLabel={accesibilityLabel}
      value={value}
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={styles.placeholderColor.color}
      cursorColor={styles.placeholderColor.color}
      autoCorrect={autoCorrect}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flexShrink: 0,
    width: "100%",
    paddingLeft: 20,
    backgroundColor: "#F1F4FF",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: "#626262",
    borderRadius: 10,
  },
  placeholderColor: {
    color: "#626262",
  },
});

export default forwardRef(TextInputEmail);
