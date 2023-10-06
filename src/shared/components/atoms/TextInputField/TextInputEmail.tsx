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
  error?: boolean;
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
    error,
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
      style={[!error ? styles.input : styles.inputError, style]}
      placeholder={placeholder}
      placeholderTextColor={
        !error
          ? styles.placeholderColor.color
          : styles.placeholderErrorColor.color
      }
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
    color: "black",
  },
  inputError: {
    flexShrink: 0,
    width: "100%",
    paddingLeft: 20,
    backgroundColor: "#F1F4FF",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: "#AC2777",
    borderRadius: 10,
    color: "#AC2777",
  },
  placeholderColor: {
    color: "#626262",
  },
  placeholderErrorColor: {
    color: "#AC2777",
  },
});

export default forwardRef(TextInputEmail);
