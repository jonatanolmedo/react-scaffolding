import React, { useRef } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { usePrintScreenName } from "../../../context/hooks/MyHook/usePrintScreenName";
import { SafeAreaView, Text } from "react-native";
import MainNavigationParamsList from "../../../navigators/MainNavigationParamsList";
import { useIsFocused } from "@react-navigation/native";
import useExitBackButton from "../../../context/hooks/MyHook/useExitBackButton";

interface Props
  extends StackScreenProps<MainNavigationParamsList, "ShoppingCartScreen"> {}

const ShoppingCartScreen = ({ route, navigation }: Props) => {
  useExitBackButton();
  const isFocused = useIsFocused();
  isFocused ? usePrintScreenName() : "";

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Text style={{ color: "black" }}>Shopping Cart Screen</Text>
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;
