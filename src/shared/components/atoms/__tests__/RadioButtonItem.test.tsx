import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import RadioButtonItem from "../RadioButton/RadioButtonItem";
import { ColorItemsList } from "../../../../constants/Lists";

describe("RadioButtonItem component", () => {
  test("should render radio buttons", () => {
    const { getAllByTestId } = render(
      <RadioButtonItem
        selectedButtonId={ColorItemsList[0].id}
        onSelectButton={() => {}}
      />
    );

    // Verifica que los radio buttons se rendericen correctamente:
    const radioButtons = getAllByTestId(/radioOption\d/); // Usa una expresión regular para coincidir con todos los radioOption

    expect(radioButtons).toHaveLength(ColorItemsList.length);
  });

  test("calls onPress when the radioOption1 is selected", () => {
    const onSelectButton = jest.fn();
    const { getAllByTestId } = render(
      <RadioButtonItem
        selectedButtonId={ColorItemsList[0].id}
        onSelectButton={onSelectButton(ColorItemsList[0].id)}
      />
    );

    const radioButtons = getAllByTestId(/radioOption\d/);

    // Simula la selección del primer radio button:
    fireEvent.press(radioButtons[0]);

    // Verifica que la función onSelectButton se haya llamado con el ID correcto:
    expect(onSelectButton).toHaveBeenCalledWith(ColorItemsList[0].id);
  });

  test("calls onPress when the radioOption2 is selected", () => {
    const onSelectButton = jest.fn();
    const { getAllByTestId } = render(
      <RadioButtonItem
        selectedButtonId={ColorItemsList[1].id}
        onSelectButton={onSelectButton(ColorItemsList[1].id)}
      />
    );

    const radioButtons = getAllByTestId(/radioOption\d/);

    // Simula la selección del segundo radio button:
    fireEvent.press(radioButtons[1]);

    // Verifica que la función onSelectButton se haya llamado con el ID correcto:
    expect(onSelectButton).toHaveBeenCalledWith(ColorItemsList[1].id);
  });

  test("calls onPress when the radioOption3 is selected", () => {
    const onSelectButton = jest.fn();
    const { getAllByTestId } = render(
      <RadioButtonItem
        selectedButtonId={ColorItemsList[2].id}
        onSelectButton={onSelectButton(ColorItemsList[2].id)}
      />
    );

    const radioButtons = getAllByTestId(/radioOption\d/);

    // Simula la selección del tercer radio button:
    fireEvent.press(radioButtons[2]);

    // Verifica que la función onSelectButton se haya llamado con el ID correcto:
    expect(onSelectButton).toHaveBeenCalledWith(ColorItemsList[2].id);
  });

  test("calls onPress when the radioOption4 is selected", () => {
    const onSelectButton = jest.fn();
    const { getAllByTestId } = render(
      <RadioButtonItem
        selectedButtonId={ColorItemsList[3].id}
        onSelectButton={onSelectButton(ColorItemsList[3].id)}
      />
    );

    const radioButtons = getAllByTestId(/radioOption\d/);

    // Simula la selección del cuarto radio button:
    fireEvent.press(radioButtons[3]);

    // Verifica que la función onSelectButton se haya llamado con el ID correcto:
    expect(onSelectButton).toHaveBeenCalledWith(ColorItemsList[3].id);
  });

  test("calls onPress when the radioOption5 is selected", () => {
    const onSelectButton = jest.fn();
    const { getAllByTestId } = render(
      <RadioButtonItem
        selectedButtonId={ColorItemsList[4].id}
        onSelectButton={onSelectButton(ColorItemsList[4].id)}
      />
    );

    const radioButtons = getAllByTestId(/radioOption\d/);

    // Simula la selección del quinto radio button:
    fireEvent.press(radioButtons[4]);

    // Verifica que la función onSelectButton se haya llamado con el ID correcto:
    expect(onSelectButton).toHaveBeenCalledWith(ColorItemsList[4].id);
  });

  test("calls onPress when the radioOption6 is selected", () => {
    const onSelectButton = jest.fn();
    const { getAllByTestId } = render(
      <RadioButtonItem
        selectedButtonId={ColorItemsList[5].id}
        onSelectButton={onSelectButton(ColorItemsList[5].id)}
      />
    );

    const radioButtons = getAllByTestId(/radioOption\d/);

    // Simula la selección del sexto radio button:
    fireEvent.press(radioButtons[5]);

    // Verifica que la función onSelectButton se haya llamado con el ID correcto:
    expect(onSelectButton).toHaveBeenCalledWith(ColorItemsList[5].id);
  });
});
