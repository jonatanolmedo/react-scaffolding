import React, { useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { usePrintScreenName } from "../../../context/hooks/MyHook/usePrintScreenName";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import MainNavigationParamsList from "../../../navigators/MainNavigationParamsList";
import { useIsFocused } from "@react-navigation/native";
import useExitBackButton from "../../../context/hooks/MyHook/useExitBackButton";
import SwitchItem from "../../../../shared/components/atoms/Switch/SwitchItem";
import StringsId from "../../../../constants/StringsId";
import HeaderCategories from "../../../../shared/components/atoms/Header/HeaderCategories";
import LabelTitle from "../../../../shared/components/atoms/Labels/LabelTitle";
import BorderlessButton from "../../../../shared/components/atoms/Buttons/BorderlessButton";
import { Slider } from "@miblanchard/react-native-slider";
import { SliderContainer } from "../../../../shared/components/atoms/Slider/SliderContainer";
import RadioButtonItem from "../../../../shared/components/atoms/RadioButton/RadioButtonItem";
import ItemCard from "../../../../shared/components/atoms/Cards/ItemCard";
import { ProductsList } from "../../../../constants/Lists";

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
  const productsList = ProductsList;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#27035F",
      }}
    >
      <StatusBar
        animated={true}
        backgroundColor="#27035F"
        barStyle="default"
        showHideTransition="none"
        hidden={false}
      />
      <HeaderCategories
        onPressBack={() => navigation.goBack()}
        onPressFilter={() => setShowCardContainer(!showCardContainer)}
      />
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1, width: "100%", paddingBottom: 24 }}
          columnWrapperStyle={{ justifyContent: "center" }}
          data={productsList}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <ItemCard
                item={item}
                onPressFavorite={() =>
                  console.log(`${item.title}: Click favorite button (♥︎)!`)
                }
                onPressMinus={() =>
                  console.log(`${item.title}: Click minus button (-)!`)
                }
                onPressPlus={() =>
                  console.log(`${item.title}: Click plus button (+)!`)
                }
              />
            );
          }}
        />
        {showCardContainer && (
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <LabelTitle title="Filtro" style={styles.titleText} />
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
              <LabelTitle title="Rango de precio" style={styles.titleText} />
              <SliderContainer caption="" sliderValue={[5, 50]}>
                <Slider
                  animateTransitions
                  maximumTrackTintColor="#F4F4F4"
                  maximumValue={100}
                  minimumTrackTintColor="#482291"
                  minimumValue={0}
                  step={1}
                  thumbTintColor="#C4C4C4"
                />
              </SliderContainer>
              <LabelTitle title="Color" style={styles.titleText} />
              <RadioButtonItem />
              <View style={styles.containerButtons}>
                <BorderlessButton
                  testId={StringsId.btnCancel}
                  accesibilityLabel={StringsId.btnCancel}
                  title="Cancelar"
                  style={styles.btnCancel}
                  textColor="#27035F"
                  onPress={() => setShowCardContainer(!showCardContainer)}
                />
                <BorderlessButton
                  testId={StringsId.btnApply}
                  accesibilityLabel={StringsId.btnApply}
                  title="Aplicar"
                  style={styles.btnApply}
                  textColor="white"
                  onPress={() => setShowCardContainer(!showCardContainer)}
                />
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
    backgroundColor: "white",
  },
  cardContainer: {
    position: "absolute",
    width: "96%",
    height: 450,
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
    flex: 1,
    width: "96%",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 16,
  },
  switchsContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  titleText: {
    marginBottom: 10,
    color: "black",
  },
  containerButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnCancel: {
    width: "45%",
    height: 40,
    borderColor: "#482291",
    borderWidth: 1,
    padding: 10,
  },
  btnApply: {
    width: "45%",
    height: 40,
    backgroundColor: "#482291",
    padding: 10,
  },
});

export default CategoriesScreen;
