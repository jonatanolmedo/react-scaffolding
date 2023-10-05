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
          options={{
            title: "Perfil",
            headerTitle: "Editar perfil",
            headerLeft: () => (
              <BackButton
                testId={StringsId.btnBack}
                accesibilityLabel={StringsId.btnBack}
                onPress={() => console.log("Click!")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditProfileScreen}
          options={{
            title: "Editar perfil",
          }}
        />
      </Stack.Navigator>
    </View>
  );
};
function getFocusedRouteNameFromRoute(route: any) {
  throw new Error("Function not implemented.");
}
