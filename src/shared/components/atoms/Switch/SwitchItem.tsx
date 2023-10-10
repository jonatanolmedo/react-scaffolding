import React, { forwardRef } from "react";
import {
  View,
  StyleSheet,
  Switch,
  StyleProp,
  ViewStyle,
  Platform,
  Text,
} from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
  isEnabled?: boolean;
  toggleSwitch?: ((value: boolean) => void | Promise<void>) | null | undefined;
  text?: string;
  testId: string;
  accesibilityLabel: string;
}

const SwitchItem: React.ForwardRefRenderFunction<Switch, Props> = (
  { style, isEnabled, toggleSwitch, text, testId, accesibilityLabel },
  ref
) => {
  return (
    <View style={styles.container}>
      <Switch
        ref={ref}
        style={[Platform.OS === "android" ? styles.switch : null, style]}
        testID={testId}
        accessibilityLabel={accesibilityLabel}
        trackColor={{ false: "#C4C4C4", true: "#F4F4F4" }}
        thumbColor={isEnabled ? "#482291" : "#FFFFFF"}
        ios_backgroundColor="#C4C4C4"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  switch: {
    transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
  },
  text: {
    marginStart: 24,
    color: "black",
    fontFamily: "Poppins",
    fontSize: 16,
  },
});

export default forwardRef(SwitchItem);
