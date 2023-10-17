jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    GestureHandlerRootView: View,
    PanGestureHandler: View,
  };
});


// Mock de react-navigation/stack
jest.mock('@react-navigation/stack', () => ({
  ...jest.requireActual('@react-navigation/stack'),
  createNativeStackNavigator: jest.fn(),
}));

import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../AppExample';

// Mock para la imagen que está dando error
jest.mock('@react-navigation/elements/lib/commonjs/assets/back-icon.png', () => {
  return {};
});
jest.mock('@react-navigation/elements/lib/commonjs/assets/back-icon-mask.png', () => {
  return {};
});

jest.mock("@miblanchard/react-native-slider", () => {
  return {
    Slider: () => {},
  };
});

describe('App', () => {
  it('renders login screen when not authenticated', () => {
    const { getByTestId } = render(<App />);

    // Check if the login screen is rendered when not authenticated
    const loginScreen = getByTestId('loginScreen');
    expect(loginScreen).toBeDefined();
  });

  // Add more test cases as needed
});
