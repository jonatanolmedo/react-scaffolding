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
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoginNavigationParamsList from "../../../navigators/LoginNavigationParamsList";
import { usePrintScreenName } from "../../../context/hooks/MyHook/usePrintScreenName";
import StringsId from "../../../../constants/StringsId";
import {
  testCheckPasswordIncorrect,
  testCheckUserNotRegistered,
} from "../../../../shared/utils/testCaseLogin/testCaseLogin";
import { validateEmail } from "../../../../shared/utils/regex/regexValidate";

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
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userExistsError, setUserExistsError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      goToWelcomeScreen();
    }
  }, [isAuthenticated]);

  useFocusEffect(
    React.useCallback(() => {
      setIsAuthenticated(false);
    }, [])
  );

  const handleLogin = () => {
    if (!testCheckUserNotRegistered(inputEmail) && inputPassword.length > 0) {
      setUserExistsError(true);
      return;
    } else {
      setUserExistsError(false);
    }

    if (!testCheckPasswordIncorrect(inputEmail, inputPassword)) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    if (!validateEmail(inputEmail)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (inputPassword.length < 6) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    if (!emailError && !passwordError) {
      setIsAuthenticated(true);
    }

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
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      testID="loginScreen"
    >
      <View style={styles.innerContainer}>
        <BackgroundLogin />
        <Header
          testId={StringsId.labelSubtitle}
          accesibilityLabel={StringsId.labelSubtitle}
          title="Pantalla de registro"
          subtitle={
            emailError
              ? "Datos incorrectos, tu email no coincide. Verifica tus datos y probemos otra vez."
              : passwordError
              ? "Ups, tu contraseña no coincide. Revisa tu información e intenta de nuevo."
              : userExistsError
              ? "El usuario no existe"
              : "Bienvenido de vuelta, por favor confirma tus datos"
          }
          subtitleStyle={
            emailError
              ? styles.subtitleError
              : passwordError
              ? styles.subtitleError
              : userExistsError
              ? styles.subtitleError
              : null
          }
        />
        <TextInputEmail
          ref={txtEmail}
          testId={StringsId.txtEmail}
          accesibilityLabel={StringsId.txtEmail}
          value={inputEmail}
          style={styles.input}
          error={emailError || userExistsError}
          placeholder="Email"
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => {
            setInputEmail(text);
            setEmailError(false);
          }}
        />
        <TextInputPassword
          ref={txtPassword}
          testId={StringsId.txtPassword}
          accesibilityLabel={StringsId.txtPassword}
          placeholder="Password"
          value={inputPassword}
          style={styles.input}
          error={passwordError}
          onChangeText={(text) => {
            setInputPassword(text);
            setPasswordError(false);
          }}
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
  subtitleError: {
    textAlign: "center",
    color: "#AC2777",
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: "700",
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
