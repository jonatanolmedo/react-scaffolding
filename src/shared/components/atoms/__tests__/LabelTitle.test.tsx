import React from "react";
import { render } from "@testing-library/react-native";
import LabelTitle from "../Labels/LabelTitle";

describe("LabelTitle component", () => {
  const testId = "test-label";
  const accessibilityLabel = "Label Accessibility Label";
  const title = "Sample Title";

  test("should render label title", () => {
    const { getByTestId, getByText } = render(
      <LabelTitle
        title={title}
        testId={testId}
        accesibilityLabel={accessibilityLabel}
      />
    );

    const labelElement = getByTestId(testId);
    const textElement = getByText(title);

    expect(labelElement).toBeTruthy();
    expect(textElement).toBeTruthy();
  });

  test("applies custom style to the label", () => {
    const customStyle: any = {
      color: "red",
      fontSize: 18,
      fontWeight: "normal",
    };

    const { getByTestId } = render(
      <LabelTitle
        title={title}
        style={customStyle}
        testId={testId}
        accesibilityLabel={accessibilityLabel}
      />
    );

    const labelElement = getByTestId(testId);
    const style = labelElement.props.style;

    expect(style).toContainEqual(customStyle);
  });
});
