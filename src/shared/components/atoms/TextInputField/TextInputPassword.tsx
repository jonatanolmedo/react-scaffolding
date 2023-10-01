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
  secureTextEntry?: boolean | undefined;
}

const TextInputPassword: React.ForwardRefRenderFunction<TextInput, Props> = (
  {
    style,
    value,
    placeholder,
    autoCorrect,
    keyboardType,
    autoCapitalize,
    onChangeText,
    secureTextEntry,
  },
  ref
) => {
  return (
    <TextInput
      ref={ref}
      value={value}
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={styles.placeholderColor.color}
      cursorColor={styles.placeholderColor.color}
      autoCorrect={autoCorrect}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
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

export default forwardRef(TextInputPassword);
