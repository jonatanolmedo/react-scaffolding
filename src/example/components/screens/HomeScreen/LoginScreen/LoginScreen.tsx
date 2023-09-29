// screens/LoginScreen.tsx
import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useMyContext } from "../../../../context/MyContext/MyContext";
import Button from "../../../../../shared/components/atoms/Buttons/Button";
import Header from "../../../../../shared/components/atoms/Header/Header";
import TextInputEmail from "../../../../../shared/components/atoms/TextInputField/TextInputEmail";
import TextInputPassword from "../../../../../shared/components/atoms/TextInputField/TextInputPassword";
import BorderlessButton from "../../../../../shared/components/atoms/Buttons/BorderlessButton";
import BackgroundLogin from "../../../../../shared/components/atoms/Background/BackgroundLogin";

interface LoginScreenProps {
  onLogin: () => void; // Agrega la definición de la prop 'onLogin'
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const txtEmail = useRef(null);
  const txtPassword = useRef(null);
  const btnLogin = useRef(null);
  const btnForgotPassword = useRef(null);
  const btnRegister = useRef(null);
  const { setEmail } = useMyContext();
  const [inputEmail, setInputEmail] = useState("");
  const { setPassword } = useMyContext();
  const [inputPassword, setInputPassword] = useState("");

  const handleLogin = () => {
    setEmail(inputEmail);
    setPassword(inputPassword);
    onLogin(); // Llama a la función 'onLogin' para indicar que el usuario se ha autenticado
  };

  return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.innerContainer}>
          <BackgroundLogin />
          <Header
            title="Pantalla de registro"
            subtitle="Bienvenido de vuelta, por favor confirma tus datos"
          />
          <TextInputEmail
            ref={txtEmail}
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
            placeholder="Password"
            value={inputPassword}
            style={styles.input}
            onChangeText={setInputPassword}
            secureTextEntry={true}
          />
          <BorderlessButton
            ref={btnForgotPassword}
            title="¿Olvidaste tu contraseña?"
            style={styles.btnForgotPassword}
            textColor="#AC2777"
          />
          <Button
            ref={btnLogin}
            title="Aceptar"
            style={styles.button}
            onPress={handleLogin}
          />
          <BorderlessButton
            ref={btnRegister}
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
