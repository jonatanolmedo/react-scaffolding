import React, { useRef, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { usePrintScreenName } from "../../../../context/hooks/MyHook/usePrintScreenName";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeaderProfile from "../../../../../shared/components/atoms/Header/HeaderProfile";
import { ScrollView } from "react-native-gesture-handler";
import ProfileNavigationParamsList from "../../../../navigators/ProfileNavigatorParamsList";
import StringsId from "../../../../../constants/StringsId";
import TextInputName from "../../../../../shared/components/atoms/TextInputField/TextInputName";
import LabelTitle from "../../../../../shared/components/atoms/Labels/LabelTitle";
import Button from "../../../../../shared/components/atoms/Buttons/Button";
import TextInputPassword from "../../../../../shared/components/atoms/TextInputField/TextInputPassword";

interface Props
  extends StackScreenProps<ProfileNavigationParamsList, "EditProfileScreen"> {}

const EditProfileScreen = ({ route, navigation }: Props) => {
  usePrintScreenName();

  const txtName = useRef(null);
  const [inputName, setInputName] = useState("");
  const txtLastName = useRef(null);
  const [inputLastName, setInputLastName] = useState("");
  const txtPhone = useRef(null);
  const [inputPhone, setInputPhone] = useState("");
  const txtEmail = useRef(null);
  const [inputEmail, setInputEmail] = useState("");
  const txtPassword = useRef(null);
  const [inputPassword, setInputPassword] = useState("");
  const txtRepeatPassword = useRef(null);
  const [inputRepeatPassword, setInputRepeatPassword] = useState("");
  const btnUpdate = useRef(null);

  const handleLogin = () => {
    setInputName(inputName);
    setInputLastName(inputLastName);
    setInputPhone(inputPhone);
    setInputEmail(inputEmail);
    setInputPassword(inputPassword);
    setInputRepeatPassword(inputRepeatPassword);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <HeaderProfile style={{ marginBottom: 50 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <LabelTitle style={styles.title} title="Información personal" />
          <LabelTitle style={styles.txtLabel} title="Nombres" />
          <TextInputName
            ref={txtName}
            testId={StringsId.txtName}
            accesibilityLabel={StringsId.txtName}
            value={inputName}
            style={styles.input}
            autoCorrect={false}
            keyboardType="default"
            autoCapitalize="words"
            onChangeText={setInputName}
          />
          <LabelTitle style={styles.txtLabel} title="Apellido" />
          <TextInputName
            ref={txtLastName}
            testId={StringsId.txtLastName}
            accesibilityLabel={StringsId.txtLastName}
            value={inputLastName}
            style={styles.input}
            autoCorrect={false}
            keyboardType="default"
            autoCapitalize="words"
            onChangeText={setInputLastName}
          />
          <LabelTitle style={styles.txtLabel} title="Teléfono" />
          <TextInputName
            ref={txtPhone}
            testId={StringsId.txtPhone}
            accesibilityLabel={StringsId.txtPhone}
            value={inputPhone}
            style={styles.input}
            autoCorrect={false}
            keyboardType="phone-pad"
            onChangeText={setInputPhone}
          />
          <LabelTitle style={styles.txtLabel} title="Email contacto" />
          <TextInputName
            ref={txtEmail}
            testId={StringsId.txtEmail}
            accesibilityLabel={StringsId.txtEmail}
            value={inputEmail}
            style={styles.input}
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={setInputEmail}
          />
          <Text style={styles.header}>Seguridad</Text>
          <LabelTitle style={styles.txtLabel} title="Contraseña" />
          <TextInputPassword
            ref={txtPassword}
            testId={StringsId.txtPassword}
            accesibilityLabel={StringsId.txtPassword}
            value={inputPassword}
            style={styles.input}
            autoCorrect={false}
            keyboardType="default"
            onChangeText={setInputPassword}
            secureTextEntry={true}
          />
          <LabelTitle style={styles.txtLabel} title="Repetir contraseña" />
          <TextInputPassword
            ref={txtRepeatPassword}
            testId={StringsId.txtRepeatPassword}
            accesibilityLabel={StringsId.txtRepeatPassword}
            value={inputRepeatPassword}
            style={styles.input}
            autoCorrect={false}
            keyboardType="default"
            onChangeText={setInputRepeatPassword}
            secureTextEntry={true}
          />
          <Button
            ref={btnUpdate}
            testId={StringsId.btnUpdate}
            accesibilityLabel={StringsId.btnUpdate}
            title="Aceptar"
            style={styles.button}
            onPress={() => {
              handleLogin();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 24,
  },
  title: {
    marginBottom: 30,
    textAlign: "center",
    color: "#27035F",
    fontFamily: "Poppins",
    fontSize: 30,
    fontWeight: "700",
  },
  txtLabel: {
    marginBottom: 8,
  },
  input: {
    marginBottom: 24,
  },
  button: {
    alignSelf: "center",
    width: "50%",
    backgroundColor: "#482291",
    padding: 10,
    marginBottom: 24,
  },
  header: {
    backgroundColor: "#F6F6F6",
    paddingVertical: 6,
    paddingHorizontal: 24,
    marginBottom: 24,
    color: "black",
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default EditProfileScreen;
