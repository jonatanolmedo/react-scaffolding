import React from "react";
import { render } from "@testing-library/react-native";
import { SliderContainer } from "../Slider/SliderContainer";
import { Slider } from "../__mocks__/react-native-slider";

jest.mock("@miblanchard/react-native-slider", () => {
  return {
    Slider: () => {},
  };
});

describe("SliderContainer component", () => {
  test("should render slider container", () => {
    const { getByText } = render(
      <SliderContainer caption="Test Caption" sliderValue={[5, 50]}>
        <Slider />
      </SliderContainer>
    );

    expect(getByText("Test Caption")).toBeDefined();
  });

  test("should render mock slider", () => {
    const { getByText, getAllByTestId } = render(
      <SliderContainer caption="Test Caption" sliderValue={[5, 50]}>
        <Slider title="Mocked Slider" />
      </SliderContainer>
    );

    expect(getByText("Mocked Slider")).toBeDefined();
  });
});
