import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ItemCard from "../../atoms/Cards/ItemCard";

describe("ItemCard component", () => {
  const sampleItem = {
    id: "Item1",
    title: "Sample Item",
    description: "Sample Description",
    imageSource: require("../../../../shared/assets/images/ic_heart.png"),
  };

  test("renders correctly", () => {
    const { getByTestId } = render(
      <ItemCard
        item={sampleItem}
        onPressFavorite={() => {}}
        onPressMinus={() => {}}
        onPressPlus={() => {}}
      />
    );

    const card = getByTestId(`card${sampleItem.id}`);
    expect(card).toBeDefined();
  });

  test("calls onPressFavorite when the favorite button is pressed", () => {
    const onPressFavoriteMock = jest.fn();
    const { getByTestId } = render(
      <ItemCard
        item={sampleItem}
        onPressFavorite={onPressFavoriteMock}
        onPressMinus={() => {}}
        onPressPlus={() => {}}
      />
    );

    const favoriteButton = getByTestId(`btnFavorite${sampleItem.id}`);
    expect(favoriteButton).toBeDefined();

    fireEvent.press(favoriteButton);
    expect(onPressFavoriteMock).toHaveBeenCalled();
  });

  test("calls onPressMinus when the minus button is pressed", () => {
    const onPressMinusMock = jest.fn();
    const { getByTestId } = render(
      <ItemCard
        item={sampleItem}
        onPressFavorite={() => {}}
        onPressMinus={onPressMinusMock}
        onPressPlus={() => {}}
      />
    );

    const minusButton = getByTestId(`btnMinus${sampleItem.id}`);
    expect(minusButton).toBeDefined();

    fireEvent.press(minusButton);
    expect(onPressMinusMock).toHaveBeenCalled();
  });

  test("calls onPressPlus when the plus button is pressed", () => {
    const onPressPlusMock = jest.fn();
    const { getByTestId } = render(
      <ItemCard
        item={sampleItem}
        onPressFavorite={() => {}}
        onPressMinus={() => {}}
        onPressPlus={onPressPlusMock}
      />
    );

    const plusButton = getByTestId(`btnPlus${sampleItem.id}`);
    expect(plusButton).toBeDefined();

    fireEvent.press(plusButton);
    expect(onPressPlusMock).toHaveBeenCalled();
  });
});
