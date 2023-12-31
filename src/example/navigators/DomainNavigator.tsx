import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/screens/HomeScreen/HomeScreen.screen';

const Stack = createNativeStackNavigator();

const DomainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false // Oculta el encabezado para todas las pantallas dentro del StackNavigator
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Add more screens here */}
    </Stack.Navigator>
  );
};

export default DomainNavigator;
