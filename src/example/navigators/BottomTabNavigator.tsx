import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "../components/screens/CategoriesScreen/CategoriesScreen";
import MainNavigationParamsList from "./MainNavigationParamsList";
import HomeScreen from "../components/screens/HomeScreen/HomeScreen.screen";
import ShoppingCartScreen from "../components/screens/ShoppingCartScreen/ShoppingCartScreen";
import { Image, View } from "react-native";
import BackButton from "../../shared/components/atoms/Buttons/BackButton";
import StringsId from "../../constants/StringsId";
import { ProfileNavigator } from "./ProfileNavigator";

const BottomTab = createBottomTabNavigator<MainNavigationParamsList>();
const HomeIcon = require("../../shared/assets/images/ic_home_outline.png");
const CategoriesIcon = require("../../shared/assets/images/ic_grid_big.png");
const ShoppingIcon = require("../../shared/assets/images/ic_shopping_bag.png");
const ProfileIcon = require("../../shared/assets/images/ic_user_profile.png");

export const BottomTabNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <BottomTab.Navigator
        initialRouteName="HomeScreen"
        sceneContainerStyle={{
          backgroundColor: "white",
        }}
        screenOptions={({ route, navigation }) => ({
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
          tabBarIcon: ({ color }) => {
            let iconName: any;

            switch (route.name) {
              case "HomeScreen":
                iconName = HomeIcon;
                break;
              case "CategoriesScreen":
                iconName = CategoriesIcon;
                break;
              case "ShoppingCartScreen":
                iconName = ShoppingIcon;
                break;
              case "ProfileNavigator":
                iconName = ProfileIcon;
                break;
            }

            return <Image tintColor={color} source={iconName} />;
          },
          tabBarStyle: {
            display: "flex",
            backgroundColor: "black",
            borderTopColor: "black",
            borderTopWidth: 0,
            elevation: 0,
          },
          tabBarInactiveBackgroundColor: "black",
          tabBarActiveTintColor: "white",
          tabBarLabelStyle: {
            fontSize: 12,
          },
        })}
      >
        <BottomTab.Screen
          name="HomeScreen"
          options={{
            title: "Inicio",
            tabBarTestID: StringsId.btnNavHome,
            tabBarAccessibilityLabel: StringsId.btnNavHome,
          }}
          component={HomeScreen}
        />
        <BottomTab.Screen
          name="CategoriesScreen"
          options={({ navigation }) => ({
            headerShown: false,
            title: "Categorías",
            tabBarTestID: StringsId.btnNavCategories,
            tabBarAccessibilityLabel: StringsId.btnNavCategories,
            headerLeft: () => (
              <BackButton
                testId={StringsId.btnBack}
                accesibilityLabel={StringsId.btnBack}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
          component={CategoriesScreen}
        />
        <BottomTab.Screen
          name="ShoppingCartScreen"
          options={{
            title: "Carrito",
            tabBarTestID: StringsId.btnNavShoppingCart,
            tabBarAccessibilityLabel: StringsId.btnNavShoppingCart,
          }}
          component={ShoppingCartScreen}
        />
        <BottomTab.Screen
          name="ProfileNavigator"
          options={{
            headerShown: false,
            tabBarLabel: "Perfil",
            tabBarTestID: StringsId.btnNavProfile,
            tabBarAccessibilityLabel: StringsId.btnNavProfile,
          }}
          component={ProfileNavigator}
        />
      </BottomTab.Navigator>
    </View>
  );
};
