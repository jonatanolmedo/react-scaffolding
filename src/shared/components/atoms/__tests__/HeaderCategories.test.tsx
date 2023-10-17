import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import HeaderCategories from "../../atoms/Header/HeaderCategories";
import StringsId from "../../../../constants/StringsId";

describe("HeaderCategories component", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(
      <HeaderCategories
        testId="test-id"
        accesibilityLabel="accessibility-label"
      />
    );
    const container = getByTestId("test-id");
    expect(container).toBeDefined();
  });

  test("calls onPressBack handler when pressed", () => {
    const onPressBackMock = jest.fn();
    const { getByTestId } = render(
      <HeaderCategories
        testId="test-id"
        accesibilityLabel="accessibility-label"
        onPressBack={onPressBackMock}
      />
    );

    const backButton = getByTestId(StringsId.btnBack);
    expect(backButton).toBeDefined();

    // Simula un clic en el botón de retroceso:
    fireEvent.press(backButton);
    expect(onPressBackMock).toHaveBeenCalled();
  });

  test("calls onPressFilter handler when pressed", () => {
    const onPressFilterMock = jest.fn();
    const { getByTestId } = render(
      <HeaderCategories
        testId="test-id"
        accesibilityLabel="accessibility-label"
        onPressFilter={onPressFilterMock}
      />
    );

    const filterBtn = getByTestId(StringsId.btnFilter);
    expect(filterBtn).toBeDefined();

    // Simula un clic en el botón de filtrado:
    fireEvent.press(filterBtn);
    expect(onPressFilterMock).toHaveBeenCalled();
  });

  test("calls onChangeText handler when text changes", () => {
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(
      <HeaderCategories
        testId="test-id"
        accesibilityLabel="accessibility-label"
        onChangeText={onChangeTextMock}
      />
    );

    const inputElement = getByTestId(StringsId.txtSearch);
    expect(inputElement).toBeDefined();

    // Simula un cambio en el campo de entrada de texto
    fireEvent.changeText(inputElement, "Sample New Text");

    // Verifica que la función onChangeText se haya llamado con el valor correcto
    expect(onChangeTextMock).toHaveBeenCalledWith("Sample New Text");
  });
});
