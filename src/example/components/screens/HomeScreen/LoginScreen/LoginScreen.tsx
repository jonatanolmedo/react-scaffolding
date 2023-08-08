// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useMyContext } from '../../../../context/MyContext/MyContext';

interface LoginScreenProps {
  onLogin: () => void; // Agrega la definición de la prop 'onLogin'
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const { setName } = useMyContext();
  const [inputName, setInputName] = useState('');

  const handleLogin = () => {
    setName(inputName);
    onLogin(); // Llama a la función 'onLogin' para indicar que el usuario se ha autenticado
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={inputName}
        onChangeText={setInputName}
      />
      <Button title="Login" onPress={handleLogin} />
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
});

export default LoginScreen;
