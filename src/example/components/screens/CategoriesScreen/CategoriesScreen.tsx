import React, { useRef } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { usePrintScreenName } from "../../../context/hooks/MyHook/usePrintScreenName";
import { SafeAreaView, Text } from "react-native";
import MainNavigationParamsList from "../../../navigators/MainNavigationParamsList";
import { useIsFocused } from "@react-navigation/native";

interface Props
  extends StackScreenProps<MainNavigationParamsList, "CategoriesScreen"> {}

const CategoriesScreen = ({ route, navigation }: Props) => {
  const isFocused = useIsFocused();
  isFocused ? usePrintScreenName() : ""

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Text>Categories Screen</Text>
    </SafeAreaView>
  );
};

export default CategoriesScreen;