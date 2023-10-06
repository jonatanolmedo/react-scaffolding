import { createStackNavigator } from "@react-navigation/stack";
import EditProfileScreen from "../components/screens/Profile/EditProfileScreen/EditProfileScreen";
import ProfileNavigationParamsList from "./ProfileNavigatorParamsList";
import ProfileScreen from "../components/screens/Profile/ProfileScreen/ProfileScreen";
import BackButton from "../../shared/components/atoms/Buttons/BackButton";
import StringsId from "../../constants/StringsId";
import { View } from "react-native";
import React from "react";

const Stack = createStackNavigator<ProfileNavigationParamsList>();

export const ProfileNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="ProfileScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: "#27035F",
            },
            headerTitleAlign: "center",
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              marginEnd: 24,
              fontSize: 16,
              fontWeight: "bold",
            },
            headerLeftContainerStyle: {
              marginStart: 24,
            },
            title: "Perfil",
            headerTitle: "Editar perfil",
            headerLeft: () => (
              <BackButton
                testId={StringsId.btnBack}
                accesibilityLabel={StringsId.btnBack}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: "#27035F",
            },
            headerTitleAlign: "center",
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              marginEnd: 24,
              fontSize: 16,
              fontWeight: "bold",
            },
            headerLeftContainerStyle: {
              marginStart: 24,
            },
            title: "Perfil",
            headerTitle: "Editar perfil",
            headerLeft: () => (
              <BackButton
                testId={StringsId.btnBack}
                accesibilityLabel={StringsId.btnBack}
                onPress={() => navigation.navigate("ProfileScreen")}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </View>
  );
};
