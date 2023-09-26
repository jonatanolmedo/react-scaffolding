// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useMyContext } from '../../../../context/MyContext/MyContext';

interface LoginScreenProps {
  onLogin: () => void; // Agrega la definición de la prop 'onLogin'
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const { setEmail } = useMyContext();
  const [inputEmail, setInputEmail] = useState('');
  const { setPassword } = useMyContext();
  const [inputPassword, setInputPassword] = useState('');

  const handleLogin = () => {
    setEmail(inputEmail);
    setPassword(inputPassword);
    onLogin(); // Llama a la función 'onLogin' para indicar que el usuario se ha autenticado
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={inputEmail}
        onChangeText={setInputEmail}
        autoCorrect={false}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={inputPassword}
        onChangeText={setInputPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  }
});

export default LoginScreen;
