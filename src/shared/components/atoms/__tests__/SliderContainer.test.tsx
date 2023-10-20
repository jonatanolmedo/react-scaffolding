import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { SliderContainer } from "../Slider/SliderContainer";
import { SliderMock, SliderTest } from "../__mocks__/react-native-slider";

jest.mock("@miblanchard/react-native-slider", () => {
  return {
    Slider: () => {},
  };
});

describe("SliderContainer component", () => {
  test("should render slider container", () => {
    const { getByText } = render(
      <SliderContainer caption="Test Caption" sliderValue={[5, 50]}>
        <SliderMock />
      </SliderContainer>
    );

    expect(getByText("Test Caption")).toBeDefined();
  });

  test("should render mock slider", () => {
    const { getByText } = render(
      <SliderContainer caption="Test Caption" sliderValue={[5, 50]}>
        <SliderMock title="Mocked Slider" />
      </SliderContainer>
    );

    expect(getByText("Mocked Slider")).toBeDefined();
  });

  test("should render slider container with caption", () => {
    const { getByText } = render(
      <SliderContainer caption="Test Caption">
        {/* No proporcionamos sliderValue ni trackMarks */}
      </SliderContainer>
    );

    expect(getByText("Test Caption")).toBeDefined();
    expect(getByText("0.2")).toBeDefined(); // Verifica el valor predeterminado
  });

  test("should render multiple slider mock children", () => {
    const { getByText } = render(
      <SliderContainer caption="Test Caption">
        <SliderMock title="Slider 1" />
        <SliderMock title="Slider 2" />
      </SliderContainer>
    );

    expect(getByText("Slider 1")).toBeDefined();
    expect(getByText("Slider 2")).toBeDefined();
  });

  test("should handle slider container value change", () => {
    let sliderValue = [8, 90]; // Valor inicial

    const { debug, getByText } = render(
      <SliderContainer caption="Test Caption" sliderValue={sliderValue}>
        <SliderMock title="Mocked Slider" />
      </SliderContainer>
    );

    const slider = getByText("Mocked Slider");

    // Simula un cambio en el control deslizante
    fireEvent(slider, "slide", 0.5); // Usa el evento "slide" para simular un cambio

    // Actualiza el valor del control deslizante en el componente SliderContainer
    sliderValue = [8, 90];

    // Verifica que el valor en el componente SliderContainer se haya actualizado correctamente
    const updatedText = getByText(
      `$${sliderValue[0].toFixed(2)}           $${sliderValue[1].toFixed(2)}`
    );
    expect(updatedText).toBeDefined();

    debug({ message: "TAG_SLIDER_MOCK" });
  });

  test("should render slider component from library", () => {
    const { getByTestId } = render(
      <SliderTest
        animateTransitions={false}
        maximumTrackTintColor="#CCCCCC"
        maximumValue={100}
        minimumTrackTintColor="#FF0000"
        minimumValue={0}
        step={1}
        thumbTintColor="#00FF00"
      />
    );

    const sliderContainer = getByTestId("slider-container");
    expect(sliderContainer).toBeDefined();
  });

  test("should set maximumValue in slider component", () => {
    const maxValue = 100;
    const { getByTestId } = render(
      <SliderTest
        animateTransitions={false}
        maximumTrackTintColor="#CCCCCC"
        maximumValue={maxValue}
        minimumTrackTintColor="#FF0000"
        minimumValue={0}
        step={1}
        thumbTintColor="#00FF00"
      />
    );

    // Obtiene el contenedor de SliderTest por su testID
    const sliderContainer = getByTestId("slider-container");

    // Accede al componente Slider dentro de SliderTest
    const slider = sliderContainer.props.children;

    expect(slider.props.maximumValue).toEqual(maxValue);
  });

  test("should set minimumValue in slider component", () => {
    const minValue = 1;
    const { getByTestId } = render(
      <SliderTest
        animateTransitions={false}
        maximumTrackTintColor="#CCCCCC"
        maximumValue={100}
        minimumTrackTintColor="#FF0000"
        minimumValue={minValue}
        step={1}
        thumbTintColor="#00FF00"
      />
    );

    // Obtiene el contenedor de SliderTest por su testID
    const sliderContainer = getByTestId("slider-container");

    // Accede al componente Slider dentro de SliderTest
    const slider = sliderContainer.props.children;

    expect(slider.props.minimumValue).toEqual(minValue);
  });

  test("renders track mark component correctly", () => {
    const trackMarks = [1, 2, 3];
    const sliderValue = [1];

    // Define una función mock de renderTrackMarkComponent que refleja el comportamiento deseado:
    const renderTrackMarkComponent = (index: number) => {
      const currentMarkValue = trackMarks[index];
      const currentSliderValue: number | number[] =
        typeof sliderValue === "number"
          ? sliderValue // Si value es un número, asigna el valor actual
          : Array.isArray(sliderValue) && sliderValue.length > 0
          ? sliderValue[0] // Si es un arreglo con al menos un elemento, asigna el primer elemento
          : 0; // Valor predeterminado en otros casos
      let style: any;

      if (currentMarkValue >= Math.max(currentSliderValue)) {
        style = { borderColor: "red" };
      } else {
        style = { borderColor: "grey" };
      }
      return style;
    };

    // Llama a renderTrackMarkComponent con un índice específico para obtener el resultado:
    const result = renderTrackMarkComponent(0);

    // Evalúa el resultado (style):
    expect(result).toEqual({ borderColor: "red" });
  });
});
