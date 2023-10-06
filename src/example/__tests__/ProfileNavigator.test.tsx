// BottomTabNavigator.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { ProfileNavigator } from '../navigators/ProfileNavigator';
import { NavigationContainer } from '@react-navigation/native';


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
  });

  it('should navigate to HomeScreen', () => {
    // You can simulate navigation and test if it goes to HomeScreen as expected
  });

  it('should navigate to CategoriesScreen', () => {
    // You can simulate navigation and test if it goes to CategoriesScreen as expected
  });

  it('should navigate to ShoppingCartScreen', () => {
    // You can simulate navigation and test if it goes to ShoppingCartScreen as expected
  });

  it('should navigate to ProfileScreen', () => {
    // You can simulate navigation and test if it goes to ProfileScreen as expected
  });
});
