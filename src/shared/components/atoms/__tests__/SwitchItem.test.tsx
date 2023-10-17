import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SwitchItem from "../Switch/SwitchItem";

describe("SwitchItem component", () => {
  const toggleSwitchMock = jest.fn();
  const testId = "test-switch";
  const accessibilityLabel = "Switch Accessibility Label";

  test("should render switch item", () => {
    const { getByTestId } = render(
      <SwitchItem
        isEnabled={true}
        toggleSwitch={toggleSwitchMock}
        text="Switch Label"
        testId={testId}
        accesibilityLabel={accessibilityLabel}
      />
    );

    const switchElement = getByTestId(testId);
    expect(switchElement).toBeTruthy();
  });

  it("calls toggleSwitch function when the switch is toggled", () => {
    const { getByTestId } = render(
      <SwitchItem
        isEnabled={true}
        toggleSwitch={toggleSwitchMock(true)}
        text="Switch Label"
        testId={testId}
        accesibilityLabel={accessibilityLabel}
      />
    );

    const switchElement = getByTestId(testId);
    fireEvent.press(switchElement);

    expect(toggleSwitchMock).toHaveBeenCalledWith(true);
  });
});
