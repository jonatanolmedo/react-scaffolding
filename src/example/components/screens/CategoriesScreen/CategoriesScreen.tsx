import React, { useRef, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { usePrintScreenName } from "../../../context/hooks/MyHook/usePrintScreenName";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import MainNavigationParamsList from "../../../navigators/MainNavigationParamsList";
import { useIsFocused } from "@react-navigation/native";
import useExitBackButton from "../../../context/hooks/MyHook/useExitBackButton";
import SwitchItem from "../../../../shared/components/atoms/Switch/SwitchItem";
import StringsId from "../../../../constants/StringsId";
import HeaderCategories from "../../../../shared/components/atoms/Header/HeaderCategories";

interface Props
  extends StackScreenProps<MainNavigationParamsList, "CategoriesScreen"> {}

const CategoriesScreen = ({ route, navigation }: Props) => {
  const [isEnabledAll, setIsEnabledAll] = useState(false);
  const toggleSwitchAll = () =>
    setIsEnabledAll((previousState) => !previousState);
  const [isEnabledPreOwned, setIsEnabledPreOwned] = useState(false);
  const toggleSwitchPreOwned = () =>
    setIsEnabledPreOwned((previousState) => !previousState);
  const [isEnabledRelevance, setIsEnabledRelevance] = useState(false);
  const toggleSwitchRelevance = () =>
    setIsEnabledRelevance((previousState) => !previousState);
  const [isEnabledNew, setIsEnabledNew] = useState(false);
  const toggleSwitchNew = () =>
    setIsEnabledNew((previousState) => !previousState);
  const [isEnabledPrice, setIsEnabledPrice] = useState(false);
  const toggleSwitchPrice = () =>
    setIsEnabledPrice((previousState) => !previousState);
  const [isEnabledType, setIsEnabledType] = useState(false);
  const toggleSwitchType = () =>
    setIsEnabledType((previousState) => !previousState);
  const [showCardContainer, setShowCardContainer] = useState(false);
  useExitBackButton();
  const isFocused = useIsFocused();
  isFocused ? usePrintScreenName() : "";

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <HeaderCategories
        onPressBack={() => navigation.goBack()}
        onPressFilter={() => setShowCardContainer(!showCardContainer)}
      />
      <View style={styles.container}>
        {showCardContainer && (
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={styles.switchsContainer}>
                  <SwitchItem
                    testId={StringsId.switchAll}
                    accesibilityLabel={StringsId.switchAll}
                    isEnabled={isEnabledAll}
                    toggleSwitch={toggleSwitchAll}
                    text="Todo"
                  />
                  <SwitchItem
                    testId={StringsId.switchPreOwned}
                    accesibilityLabel={StringsId.switchPreOwned}
                    isEnabled={isEnabledPreOwned}
                    toggleSwitch={toggleSwitchPreOwned}
                    text="Seminuevo"
                  />
                  <SwitchItem
                    testId={StringsId.switchRelevance}
                    accesibilityLabel={StringsId.switchRelevance}
                    isEnabled={isEnabledRelevance}
                    toggleSwitch={toggleSwitchRelevance}
                    text="Relevancia"
                  />
                </View>
                <View style={styles.switchsContainer}>
                  <SwitchItem
                    testId={StringsId.switchNew}
                    accesibilityLabel={StringsId.switchNew}
                    isEnabled={isEnabledNew}
                    toggleSwitch={toggleSwitchNew}
                    text="Nuevos"
                  />
                  <SwitchItem
                    testId={StringsId.switchPrice}
                    accesibilityLabel={StringsId.switchPrice}
                    isEnabled={isEnabledPrice}
                    toggleSwitch={toggleSwitchPrice}
                    text="Precio"
                  />
                  <SwitchItem
                    testId={StringsId.switchType}
                    accesibilityLabel={StringsId.switchType}
                    isEnabled={isEnabledType}
                    toggleSwitch={toggleSwitchType}
                    text="Tipo"
                  />
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  cardContainer: {
    flex: 0.5,
    width: "96%",
    height: 400,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  card: {
    flex: 0.5,
    width: "96%",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 16,
  },
  switchsContainer: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default CategoriesScreen;
