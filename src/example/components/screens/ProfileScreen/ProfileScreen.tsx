import React, { useRef } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { usePrintScreenName } from "../../../context/hooks/MyHook/usePrintScreenName";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import MainNavigationParamsList from "../../../navigators/MainNavigationParamsList";
import { useIsFocused } from "@react-navigation/native";
import HeaderProfile from "../../../../shared/components/atoms/Header/HeaderProfile";
import FlatListWithHeader from "../../../../shared/components/atoms/Lists/FlatListWithHeader";

const DATA: ItemData[] = [
  {
    id: "key0",
    title: "Información personal",
  },
  {
    id: "key1",
    title: "Inicio de sesión",
  },
  {
    id: "key2",
    title: "Pago y envío",
  },
  {
    id: "key3",
    title: "Suscripciones",
  },
];

interface Props
  extends StackScreenProps<MainNavigationParamsList, "ProfileScreen"> {}

const ProfileScreen = ({ route, navigation }: Props) => {
  const isFocused = useIsFocused();
  isFocused ? usePrintScreenName() : "";

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <HeaderProfile />
      <FlatListWithHeader
        styleList={styles.flatListStyle}
        dataList={DATA}
        titleHeader="Perfil"
      />
      <FlatListWithHeader
        styleList={styles.flatListStyle}
        dataList={DATA}
        titleHeader="Perfil"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    flex: 1,
    width: "100%",
    marginTop: 50,
    paddingHorizontal: 24,
  },
});

export default ProfileScreen;
