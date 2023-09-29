// App.tsx
// Importaciones necesarias
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DomainNavigator from "./src/example/navigators/DomainNavigator"; // Importa el navigator que contiene la navegación de la aplicación
import MyProvider from "./src/example/context/MyContext/MyProvider";
import LoginScreen from "./src/example/components/screens/HomeScreen/LoginScreen/LoginScreen"; // Importa la pantalla de inicio de sesión
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

// App principal
const App: React.FC = () => {
  // Estado para verificar si el usuario está autenticado o no
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    // Aquí va la lógica para autenticar al usuario
    setIsAuthenticated(true); // Por ejemplo, establece isAuthenticated a true para simular un inicio de sesión exitoso
  };

  // Verifica si el usuario está autenticado antes de mostrar la pantalla principal
  if (!isAuthenticated) {
    // Si el usuario no está autenticado, muestra la pantalla de inicio de sesión
    return (
      <MyProvider>
        {/* Wrap NavigationContainer con el proveedor del contexto personalizado */}
        <NavigationContainer>
          <SafeAreaView
            style={{
              flex: 1,
              paddingTop: Platform.OS === "ios" ? 48 : 0,
            }}
          >
            <KeyboardAvoidingView
              style={styles.container}
              behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
              {/* Renderiza la pantalla de inicio de sesión y pasa la función de manejo del inicio de sesión */}
              <LoginScreen onLogin={handleLogin} />
            </KeyboardAvoidingView>
          </SafeAreaView>
        </NavigationContainer>
      </MyProvider>
    );
  }

  // Si el usuario está autenticado, muestra la pantalla principal (DomainNavigator)
  return (
    <MyProvider>
      {/* Wrap NavigationContainer con el proveedor del contexto personalizado */}
      <NavigationContainer>
        {/* Renderiza el DomainNavigator que contiene la navegación de la aplicación */}
        <DomainNavigator />
      </NavigationContainer>
    </MyProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
