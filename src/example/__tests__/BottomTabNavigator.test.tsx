// BottomTabNavigator.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { BottomTabNavigator } from '../navigators/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';


// Mock para la imagen que está dando error
jest.mock('@react-navigation/elements/lib/commonjs/assets/back-icon.png', () => {
    return {};
  });
  jest.mock('@react-navigation/elements/lib/commonjs/assets/back-icon-mask.png', () => {
    return {};
  });
  
  

describe('BottomTabNavigator', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      );
  
    // Test for components rendered in each tab screen
    expect(getByTestId('btnNavHome')).toBeDefined();
    expect(getByTestId('btnNavCategories')).toBeDefined();
    expect(getByTestId('btnNavShoppingCart')).toBeDefined();
    expect(getByTestId('btnNavProfile')).toBeDefined();
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
