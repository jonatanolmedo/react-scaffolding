// BottomTabNavigator.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProfileNavigator } from '../navigators/ProfileNavigator';
import { NavigationContainer } from '@react-navigation/native';
import StringsId from "../../constants/StringsId";


// Mock para la imagen que está dando error
jest.mock('@react-navigation/elements/lib/commonjs/assets/back-icon.png', () => {
    return {};
  });
  jest.mock('@react-navigation/elements/lib/commonjs/assets/back-icon-mask.png', () => {
    return {};
  });

  
  jest.mock('react-native-gesture-handler', () => {
    const View = require('react-native/Libraries/Components/View/View');
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
      /* and so on */
      Directions: {},
    };
  });
  
  

describe('ProfileNavigator', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
        <NavigationContainer>
          <ProfileNavigator />
        </NavigationContainer>
      );
  
    // Test for components rendered in each tab screen
    expect(getByTestId('itemprofile0')).toBeDefined();
    expect(getByTestId('itemprofile1')).toBeDefined();
    expect(getByTestId('itemprofile2')).toBeDefined();
    expect(getByTestId('itemprofile3')).toBeDefined();
    expect(getByTestId(StringsId.btnBack)).toBeDefined();

    const backButton = getByTestId(StringsId.btnBack);
    fireEvent.press(backButton);

  });

  describe('Profile Menu Buttons', () => {
    it('debe contar la cantidad de elementos con data-testid', () => {
      const { queryAllByTestId } = render(
        <NavigationContainer>
          <ProfileNavigator />
        </NavigationContainer>
      );
  
      // Utiliza queryAllByTestId con el valor que deseas contar
      const elementsWithTestId = queryAllByTestId(StringsId.btnBack);
  
      // Verifica la cantidad de elementos
      expect(elementsWithTestId.length).toBe(1); // Ajusta este número según tus expectativas
    });
  });
  
  
});
