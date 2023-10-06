import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { usePrintScreenName } from "../../../context/hooks/MyHook/usePrintScreenName";
import LoginNavigationParamsList from "../../../navigators/LoginNavigationParamsList";
import BackgroundLogin from "../../../../shared/components/atoms/Background/BackgroundLogin";
import Header from "../../../../shared/components/atoms/Header/Header";
import Button from "../../../../shared/components/atoms/Buttons/Button";
import BackgroundWelcome from "../../../../shared/components/atoms/Background/BackgroundWelcome";
import StringsId from "../../../../constants/StringsId";
import useExitBackButton from "../../../context/hooks/MyHook/useExitBackButton";

interface Props
  extends StackScreenProps<LoginNavigationParamsList, "WelcomeScreen"> {}

const WelcomeScreen = ({ route, navigation }: Props) => {
  useExitBackButton();
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
        <BackgroundWelcome />
        <Button
          ref={btnContinue}
          testId={StringsId.btnContinue}
          accesibilityLabel={StringsId.btnContinue}
          title="Aceptar"
          style={styles.button}
          onPress={() => navigation.navigate("BottomTabNavigator")}
        />
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
