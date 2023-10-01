import React, { useRef } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import Button from "../../../../../shared/components/atoms/Buttons/Button";
import Header from "../../../../../shared/components/atoms/Header/Header";
import BackgroundLogin from "../../../../../shared/components/atoms/Background/BackgroundLogin";
import { WithLocalSvg } from "react-native-svg";
import { StackScreenProps } from "@react-navigation/stack";
import LoginNavigationParamsList from "../../../../navigators/LoginNavigationParamsList";
import { usePrintScreenName } from "../../../../context/hooks/MyHook/usePrintScreenName";

interface Props
  extends StackScreenProps<LoginNavigationParamsList, "WelcomeScreen"> {}

const ImageFile = require("../../../../../shared/assets/images/work-from-home.svg");

const WelcomeScreen = ({ route }: Props) => {
  usePrintScreenName();
  const btnContinue = useRef(null);
  const params = route.params;
  console.log("TAG_PARAMS", JSON.stringify(params, null, 2));

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.innerContainer}>
        <BackgroundLogin />
        <Header
          title="¡Felicidades!"
          subtitle="¡Has ingresado con éxito! Ahora estás listo para comenzar."
        />
        <WithLocalSvg
          style={{ marginBottom: 72 }}
          width="100%"
          height="200"
          asset={ImageFile}
        />
        <Button ref={btnContinue} title="Aceptar" style={styles.button} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 48,
  },
  innerContainer: {
    flex: 1,
    padding: 24,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#482291",
    padding: 10,
    marginBottom: 24,
  },
});

export default WelcomeScreen;
