import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import LoginScreen from "../components/screens/LoginScreen/LoginScreen";
import WelcomeScreen from "../components/screens/WelcomeScreen/WelcomeScreen";
import HomeScreen from "../components/screens/HomeScreen/HomeScreen.screen";
import LoginNavigationParamsList from "./LoginNavigationParamsList";
import { BottomTabNavigator } from "./BottomTabNavigator";
import React from "react";

const Stack = createStackNavigator<LoginNavigationParamsList>();

export const Navigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </View>
  );
};
