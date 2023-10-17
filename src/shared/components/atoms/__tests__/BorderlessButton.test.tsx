import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import BorderlessButton from "../Buttons/BorderlessButton";

describe("BorderlessButton component", () => {
  const testId = "test-button";
  const accessibilityLabel = "Button Accessibility Label";
  const title = "Sample Button";
  const onPressMock = jest.fn();

  test("should render button with the provided title", () => {
    const { getByTestId, getByText } = render(
      <BorderlessButton
        title={title}
        testId={testId}
        accesibilityLabel={accessibilityLabel}
      />
    );

    const buttonElement = getByTestId(testId);
    const textElement = getByText(title);

    expect(buttonElement).toBeTruthy();
    expect(textElement).toBeTruthy();
  });

  test("applies custom style to the button", () => {
    const customStyle: any = {
      alignItems: "center",
      backgroundColor: "red",
      borderRadius: 5,
      height: 60,
      justifyContent: "center",
      opacity: 1,
    };

    const { getByTestId } = render(
      <BorderlessButton
        title={title}
        style={customStyle}
        testId={testId}
        accesibilityLabel={accessibilityLabel}
      />
    );

    const buttonElement = getByTestId(testId);
    const style = buttonElement.props.style;

    expect(style).toMatchObject(customStyle);
  });

  test("calls the onPress function when the button is pressed", () => {
    const { getByTestId } = render(
      <BorderlessButton
        title={title}
        onPress={onPressMock}
        testId={testId}
        accesibilityLabel={accessibilityLabel}
      />
    );

    const buttonElement = getByTestId(testId);
    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalled();
  });
});
