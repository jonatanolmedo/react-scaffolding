// screens/LoginScreen.tsx
import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useMyContext } from "../../../context/MyContext/MyContext";
import Button from "../../../../shared/components/atoms/Buttons/Button";
import Header from "../../../../shared/components/atoms/Header/Header";
import TextInputEmail from "../../../../shared/components/atoms/TextInputField/TextInputEmail";
import TextInputPassword from "../../../../shared/components/atoms/TextInputField/TextInputPassword";
import BorderlessButton from "../../../../shared/components/atoms/Buttons/BorderlessButton";
import BackgroundLogin from "../../../../shared/components/atoms/Background/BackgroundLogin";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoginNavigationParamsList from "../../../navigators/LoginNavigationParamsList";
import { usePrintScreenName } from "../../../context/hooks/MyHook/usePrintScreenName";
import StringsId from "../../../../constants/StringsId";

const LoginScreen = () => {
  usePrintScreenName();

  const { navigate } =
    useNavigation<NativeStackNavigationProp<LoginNavigationParamsList>>();
  const txtEmail = useRef(null);
  const txtPassword = useRef(null);
  const btnLogin = useRef(null);
  const btnForgotPassword = useRef(null);
  const btnRegister = useRef(null);
  const { setEmail } = useMyContext();
  const [inputEmail, setInputEmail] = useState("");
  const { setPassword } = useMyContext();
  const [inputPassword, setInputPassword] = useState("");
  // Estado para verificar si el usuario está autenticado o no
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para manejar el inicio de sesión
  useEffect(() => {
    // Aquí va la lógica para autenticar al usuario
    setIsAuthenticated(true); // Por ejemplo, establece isAuthenticated a true para simular un inicio de sesión exitoso
  });

  const handleLogin = () => {
    setEmail(inputEmail);
    setPassword(inputPassword);
  };

  const goToWelcomeScreen = () => {
    navigate("WelcomeScreen", {
      email: inputEmail,
      password: inputPassword,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.innerContainer}>
        <BackgroundLogin />
        <Header
          testId={StringsId.labelSubtitle}
          accesibilityLabel={StringsId.labelSubtitle}
          title="Pantalla de registro"
          subtitle="Bienvenido de vuelta, por favor confirma tus datos"
        />
        <TextInputEmail
          ref={txtEmail}
          testId={StringsId.txtEmail}
          accesibilityLabel={StringsId.txtEmail}
          value={inputEmail}
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setInputEmail}
        />
        <TextInputPassword
          ref={txtPassword}
          testId={StringsId.txtPassword}
          accesibilityLabel={StringsId.txtPassword}
          placeholder="Password"
          value={inputPassword}
          style={styles.input}
          onChangeText={setInputPassword}
          secureTextEntry={true}
        />
        <BorderlessButton
          ref={btnForgotPassword}
          testId={StringsId.btnForgotPassword}
          accesibilityLabel={StringsId.btnForgotPassword}
          title="¿Olvidaste tu contraseña?"
          style={styles.btnForgotPassword}
          textColor="#AC2777"
        />
        <Button
          ref={btnLogin}
          testId={StringsId.btnLogin}
          accesibilityLabel={StringsId.btnLogin}
          title="Aceptar"
          style={styles.button}
          onPress={() => {
            handleLogin();
            if (isAuthenticated) {
              goToWelcomeScreen();
            }
          }}
        />
        <BorderlessButton
          ref={btnRegister}
          testId={StringsId.btnRegister}
          accesibilityLabel={StringsId.btnRegister}
          title="Crear nueva cuenta"
          style={styles.btnRegister}
          textColor="#27035F"
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
  input: {
    marginBottom: 24,
  },
  btnForgotPassword: {
    alignSelf: "flex-end",
    padding: 10,
    marginBottom: 24,
  },
  button: {
    width: "100%",
    backgroundColor: "#482291",
    padding: 10,
    marginBottom: 24,
  },
  btnRegister: {
    width: "100%",
    alignSelf: "flex-end",
    padding: 10,
  },
});

export default LoginScreen;

export function testProps(id: string) {
  return { testID: id, accessibilityLabel: id };
}
