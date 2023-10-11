// App.tsx
// Importaciones necesarias
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DomainNavigator from "./src/example/navigators/DomainNavigator"; // Importa el navigator que contiene la navegación de la aplicación
import MyProvider from "./src/example/context/MyContext/MyProvider";
import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet } from "react-native";
import { Navigator } from "./src/example/navigators/Navigator";

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
        <StatusBar
          animated={true}
          backgroundColor="#27035F"
          barStyle="default"
          showHideTransition="none"
          hidden={false}
        />
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
          >
            {/* Renderiza la pantalla de inicio de sesión y pasa la función de manejo del inicio de sesión */}
            <Navigator />
          </KeyboardAvoidingView>
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
