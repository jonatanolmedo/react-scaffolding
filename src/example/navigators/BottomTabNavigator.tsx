import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoriesScreen from "../components/screens/CategoriesScreen/CategoriesScreen";
import MainNavigationParamsList from "./MainNavigationParamsList";
import HomeScreen from "../components/screens/HomeScreen/HomeScreen.screen";
import ShoppingCartScreen from "../components/screens/ShoppingCartScreen/ShoppingCartScreen";
import ProfileScreen from "../components/screens/ProfileScreen/ProfileScreen";
import { Image } from "react-native";

const BottomTab = createBottomTabNavigator<MainNavigationParamsList>();
const HomeIcon = require("../../shared/assets/images/ic_home_outline.png");
const CategoriesIcon = require("../../shared/assets/images/ic_grid_big.png");
const ShoppingIcon = require("../../shared/assets/images/ic_shopping_bag.png");
const ProfileIcon = require("../../shared/assets/images/ic_user_profile.png");

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="CategoriesScreen"
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
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
            case "ProfileScreen":
              iconName = ProfileIcon;
              break;
          }

          return <Image tintColor={color} source={iconName} />;
        },
        tabBarStyle: {
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
        }}
        component={HomeScreen}
      />
      <BottomTab.Screen
        name="CategoriesScreen"
        options={{ title: "Categorías" }}
        component={CategoriesScreen}
      />
      <BottomTab.Screen
        name="ShoppingCartScreen"
        options={{ title: "Carrito" }}
        component={ShoppingCartScreen}
      />
      <BottomTab.Screen
        name="ProfileScreen"
        options={{ title: "Perfil" }}
        component={ProfileScreen}
      />
    </BottomTab.Navigator>
  );
};
