import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyScreen from '../components/screens/MyScreen/MyScreen';

const Stack = createNativeStackNavigator();

const DomainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false // Oculta el encabezado para todas las pantallas dentro del StackNavigator
      }}
    >
      <Stack.Screen name="Home" component={MyScreen} />
      {/* Add more screens here */}
    </Stack.Navigator>
  );
};

export default DomainNavigator;
