import React from "react";
import { render } from "@testing-library/react-native";
import {
  renderTrackMarkComponent,
  renderChildren,
} from "../../shared/utils/sliderUtils/sliderUtils";
import { SliderMock } from "../../shared/components/atoms/__mocks__/react-native-slider";
import { View } from "react-native";

jest.mock("react-native-gesture-handler", () => {
  const View = require("react-native/Libraries/Components/View/View");
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    Directions: {},
  };
});

jest.mock("@miblanchard/react-native-slider", () => {
  return {
    SliderMock: () => {},
  };
});

describe("sliderUtils", () => {
  describe("renderTrackMarkComponent", () => {
    test("renders an active mark when currentMarkValue > currentSliderValue", () => {
      const trackMarks = [1, 2, 3];
      const value = 2;
      const index = 1;
      const { getByTestId } = render(
        renderTrackMarkComponent(trackMarks, value, index)
      );
      const mark = getByTestId(`track-mark-${index}`);
      // Aserciones
      expect(mark).toBeDefined();
      expect(mark.props.style).toEqual(
        expect.objectContaining({
          borderColor: "grey",
          borderWidth: 4,
          left: -2,
        })
      );
    });

    test("renders an inactive mark when currentMarkValue <= currentSliderValue", () => {
      const trackMarks = [1, 2, 3];
      const value = 2;
      const index = 0;
      const { getByTestId } = render(
        renderTrackMarkComponent(trackMarks, value, index)
      );
      const mark = getByTestId(`track-mark-${index}`);
      // Aserciones
      expect(mark).toBeDefined();
      expect(mark.props.style).toEqual(
        expect.objectContaining({ borderColor: "grey" })
      );
    });
  });

  describe("renderChildren", () => {
    test("renders children with updated props for Slider element", () => {
      const mockSlider = <SliderMock title="Test Slider" />;
      const mockChildren = [mockSlider];
      const setValue = jest.fn();
      const trackMarks = [1, 2, 3];
      const value = 2;
      const { getByTestId } = render(
        renderChildren(
          mockChildren,
          setValue,
          renderTrackMarkComponent,
          trackMarks,
          value
        )
      );
      const updatedSlider = getByTestId("slider-mock");
      // Aserciones
      expect(updatedSlider.props.children).toBe("Test Slider");
    });

    test("renders children without changes for non-Slider elements", () => {
      const mockNonSlider = <View testID="view" />;
      const mockChildren = [mockNonSlider];
      const setValue = jest.fn();
      const { getByTestId } = render(
        renderChildren(
          mockChildren,
          setValue,
          renderTrackMarkComponent,
          [],
          null
        )
      );
      const updatedNonSlider = getByTestId("view");
      // Aserciones
      expect(updatedNonSlider).toBeDefined();
      expect(updatedNonSlider.props).toEqual(
        expect.objectContaining({ children: undefined, testID: "view" })
      );
    });
  });
});
