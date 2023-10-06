import React from "react";
import { View, Text, StyleSheet, StyleProp, TextStyle } from "react-native";

interface Props {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  subtitle?: string;
  subtitleStyle?: StyleProp<TextStyle>;
  testId?: string;
  accesibilityLabel?: string;
}

const Header: React.FC<Props> = ({
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
  testId,
  accesibilityLabel,
}) => {
  return (
    <View style={styles.header}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text
        testID={testId}
        accessibilityLabel={accesibilityLabel}
        style={[styles.subtitle, subtitleStyle]}
      >
        {subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    marginBottom: 50,
    alignItems: "center",
  },
  title: {
    marginBottom: 24,
    textAlign: "center",
    color: "#482291",
    fontFamily: "Poppins",
    fontSize: 30,
    fontWeight: "700",
  },
  subtitle: {
    textAlign: "center",
    color: "#000000",
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default Header;
