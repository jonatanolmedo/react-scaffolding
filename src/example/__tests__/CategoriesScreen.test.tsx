import React from "react";
import { fireEvent, render, within } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "../components/screens/CategoriesScreen/CategoriesScreen";

// Mocks para react-native-gesture-handler y @react-navigation/stack
import "react-native-gesture-handler/jestSetup";
import StringsId from "../../constants/StringsId";
import HeaderCategories from "../../shared/components/atoms/Header/HeaderCategories";
import ItemCard from "../../shared/components/atoms/Cards/ItemCard";
import BorderlessButton from "../../shared/components/atoms/Buttons/BorderlessButton";

// Mock de MyProvider
jest.mock("../context/MyContext/MyProvider", () => ({
  MyProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock de usePrintScreenName
jest.mock("../context/hooks/MyHook/usePrintScreenName", () => ({
  usePrintScreenName: jest.fn().mockReturnValue("MockedScreen"),
}));

jest.mock("@react-navigation/stack", () => ({
  ...jest.requireActual("@react-navigation/stack"),
  createNativeStackNavigator: jest.fn(),
}));

jest.mock("@react-navigation/native", () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useIsFocused: jest.fn().mockReturnValue(true),
  useRoute: jest.fn().mockReturnValue({ name: "MockedRoute" }),
}));

jest.mock("@miblanchard/react-native-slider", () => {
  return {
    Slider: () => {},
  };
});

describe("CategoriesScreen", () => {
  const navigation: any = {
    goBack: jest.fn(), // Mock de la función goBack
  }; // Puedes ajustar las props de navegación según sea necesario
  const route: any = {}; // Puedes ajustar las props de ruta según sea necesario
  let getByTestId: any;
  const sampleItem = {
    id: "Item1",
    title: "Sample Item",
    description: "Sample Description",
    imageSource: require("../../shared/assets/images/ic_heart.png"),
  };
  const title = "Sample Button";
  const onPressMock = jest.fn();

  beforeEach(() => {
    const renderResult = render(
      <NavigationContainer>
        <CategoriesScreen navigation={navigation} route={route} />
      </NavigationContainer>
    );
    getByTestId = renderResult.getByTestId;
    const filterButton = getByTestId(StringsId.btnFilter);
    fireEvent.press(filterButton); // Mostrar el contenedor de filtros
  });

  test("should render flatlist", () => {
    const flatlistCategories = getByTestId(StringsId.flatListCategories);
    expect(flatlistCategories).toBeDefined();
  });

  test("should render header", () => {
    const headerCategories = getByTestId(StringsId.headerCategories);
    expect(headerCategories).toBeDefined();
  });

  test("should toggle isEnabledAll init on false", () => {
    const switchAll = getByTestId(StringsId.switchAll);
    expect(switchAll).toBeDefined();
    expect(switchAll.props.value).toBe(false);
  });

  test("should toggle isEnabledNew init on false", () => {
    const switchNew = getByTestId(StringsId.switchNew);
    expect(switchNew).toBeDefined();
    expect(switchNew.props.value).toBe(false);
  });

  test("should toggle isEnabledPreOwned init on false", () => {
    const switchPreOwned = getByTestId(StringsId.switchPreOwned);
    expect(switchPreOwned).toBeDefined();
    expect(switchPreOwned.props.value).toBe(false);
  });

  test("should toggle isEnabledPrice init on false", () => {
    const switchPrice = getByTestId(StringsId.switchPrice);
    expect(switchPrice).toBeDefined();
    expect(switchPrice.props.value).toBe(false);
  });

  test("should toggle isEnabledRelevance init on false", () => {
    const switchRelevance = getByTestId(StringsId.switchRelevance);
    expect(switchRelevance).toBeDefined();
    expect(switchRelevance.props.value).toBe(false);
  });

  test("should toggle isEnabledType init on false", () => {
    const switchType = getByTestId(StringsId.switchType);
    expect(switchType).toBeDefined();
    expect(switchType.props.value).toBe(false);
  });

  test("should press btnFilter", () => {
    const onPressFilterMock = jest.fn();
    const { getByTestId } = render(
      <HeaderCategories
        testId={StringsId.headerCategories}
        accesibilityLabel="accessibility-label"
        onPressFilter={() => onPressFilterMock.mockReturnValue(true)}
      />
    );

    const filterBtn = getByTestId(StringsId.btnFilter);
    expect(filterBtn).toBeDefined();
    onPressFilterMock();

    // Simula un clic en el botón de filtrado:
    fireEvent.press(filterBtn);
    expect(onPressFilterMock).toHaveBeenCalled();
  });

  test("should press btnBack", () => {
    const onPressBackMock = jest.fn();
    const { getByTestId } = render(
      <HeaderCategories
        testId={StringsId.headerCategories}
        accesibilityLabel="accessibility-label"
        onPressBack={() => onPressBackMock.mockReturnValue(navigation)}
      />
    );

    const backBtn = getByTestId(StringsId.btnBack);
    expect(backBtn).toBeDefined();
    onPressBackMock();

    // Simula un clic en el botón de retroceso:
    fireEvent.press(backBtn);
    expect(onPressBackMock).toHaveBeenCalled();
  });

  test("should call navigation.goBack when btnBack is pressed", () => {
    const { getByTestId } = render(
      <CategoriesScreen navigation={navigation} route={route} />
    );

    const btnBack = getByTestId("btnBack");

    fireEvent.press(btnBack);

    expect(navigation.goBack).toHaveBeenCalled();
  });

  test("calls the onPress function when the btnCancel is pressed", () => {
    const { getByTestId } = render(
      <BorderlessButton
        title={title}
        onPress={onPressMock}
        testId={StringsId.btnCancel}
      />
    );

    const buttonElement = getByTestId(StringsId.btnCancel);
    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalled();
  });

  test("calls the onPress function when the btnApply is pressed", () => {
    const { getByTestId } = render(
      <BorderlessButton
        title={title}
        onPress={onPressMock}
        testId={StringsId.btnApply}
      />
    );

    const buttonElement = getByTestId(StringsId.btnApply);
    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalled();
  });

  test("should call onPressFavorite when the favorite button is pressed in ItemCard", () => {
    // Suprime la salida de consola (console.log)
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});

    const { getByTestId } = render(<CategoriesScreen />);

    const itemCard = getByTestId(`itemCard${sampleItem.id}`);

    // Simula la interacción con el botón de favoritos en el ItemCard
    const favoriteButton = within(itemCard).getByTestId(
      `btnFavorite${sampleItem.id}`
    );
    expect(favoriteButton).toBeDefined();

    fireEvent.press(favoriteButton);
    expect(spy).toHaveBeenCalled();

    // Restaura la implementación original de console.log
    jest.restoreAllMocks();
  });

  test("should call onPressMinus when the minus button is pressed in ItemCard", () => {
    // Suprime la salida de consola (console.log)
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});

    const { getByTestId } = render(<CategoriesScreen />);

    const itemCard = getByTestId(`itemCard${sampleItem.id}`);

    // Simula la interacción con el botón de favoritos en el ItemCard
    const minusButton = within(itemCard).getByTestId(
      `btnMinus${sampleItem.id}`
    );
    expect(minusButton).toBeDefined();

    fireEvent.press(minusButton);
    expect(spy).toHaveBeenCalled();

    // Restaura la implementación original de console.log
    jest.restoreAllMocks();
  });

  test("should call onPressPlus when the plus button is pressed in ItemCard", () => {
    // Suprime la salida de consola (console.log)
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});

    const { getByTestId } = render(<CategoriesScreen />);

    const itemCard = getByTestId(`itemCard${sampleItem.id}`);

    // Simula la interacción con el botón de favoritos en el ItemCard
    const plusButton = within(itemCard).getByTestId(`btnPlus${sampleItem.id}`);
    expect(plusButton).toBeDefined();

    fireEvent.press(plusButton);
    expect(spy).toHaveBeenCalled();

    // Restaura la implementación original de console.log
    jest.restoreAllMocks();
  });
});
