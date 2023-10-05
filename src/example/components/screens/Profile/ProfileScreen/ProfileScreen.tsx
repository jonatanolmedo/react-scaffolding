import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { usePrintScreenName } from "../../../../context/hooks/MyHook/usePrintScreenName";
import { SafeAreaView, StyleSheet } from "react-native";
import MainNavigationParamsList from "../../../../navigators/MainNavigationParamsList";
import { useIsFocused } from "@react-navigation/native";
import HeaderProfile from "../../../../../shared/components/atoms/Header/HeaderProfile";
import FlatListWithHeader from "../../../../../shared/components/atoms/Lists/FlatListWithHeader";
import {
  ProfileItemList,
  SettingsItemList,
} from "../../../../../constants/Lists";
import { ScrollView } from "react-native-gesture-handler";
import StringsId from "../../../../../constants/StringsId";
import useExitBackButton from "../../../../context/hooks/MyHook/useExitBackButton";

interface Props
  extends StackScreenProps<MainNavigationParamsList, "ProfileScreen"> {}

const ProfileScreen = ({ route, navigation }: Props) => {
  useExitBackButton();
  const isFocused = useIsFocused();
  isFocused ? usePrintScreenName() : "";

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <HeaderProfile style={{ marginBottom: 50 }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatListWithHeader
          styleList={styles.profileListStyle}
          dataList={ProfileItemList}
          titleHeader="Perfil"
          navigation={navigation}
          testIdList={StringsId.listProfile}
          accesibilityLabelList={StringsId.listProfile}
          testId={StringsId.item}
          accesibilityLabel={StringsId.item}
        />
        <FlatListWithHeader
          styleList={styles.profileSettingsStyle}
          dataList={SettingsItemList}
          titleHeader="Configuración"
          navigation={navigation}
          testIdList={StringsId.listSettings}
          accesibilityLabelList={StringsId.listSettings}
          testId={StringsId.item}
          accesibilityLabel={StringsId.item}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileListStyle: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 24,
  },
  profileSettingsStyle: {
    flex: 1,
    width: "100%",
    marginTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 24,
  },
});

export default ProfileScreen;
