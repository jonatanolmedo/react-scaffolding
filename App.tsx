// Importaciones necesarias
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DomainNavigator from './src/domain/navigators/DomainNavigator'; // Importa el navigator que contiene la navegación de la aplicación
import MyProvider from './src/domain/context/MyContext/MyProvider';

// App principal
const App: React.FC = () => {
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

export default App;
