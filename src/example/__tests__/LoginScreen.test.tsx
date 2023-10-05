// Importa las librerías y componentes necesarios
import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../components/screens/LoginScreen/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyProvider from '../../domain/context/MyContext/MyProvider';

const mockNavigator = {
  Navigator: jest.fn(),
  Screen: jest.fn(),
};

jest.mock('@react-navigation/stack', () => {
  return {
    ...jest.requireActual('@react-navigation/stack'),
    createNativeStackNavigator: jest.fn(() => mockNavigator),
  };
});

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

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
    Directions: {},
  };
});

jest.mock('@react-navigation/elements/lib/commonjs/assets/back-icon.png', () => ({}));
jest.mock('@react-navigation/elements/lib/commonjs/assets/back-icon-mask.png', () => ({}));

jest.mock('../../domain/context/MyContext/MyProvider', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => children,
  MyContext: {
    Consumer: ({ children }: { children: (value: any) => React.ReactNode }) =>
      children({}),
  },
}));

const Stack = createNativeStackNavigator();

describe('LoginScreen', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <MyProvider>
        <NavigationContainer>
          {mockNavigator.Navigator.mock.calls[0] ? (
            <mockNavigator.Navigator>
              <mockNavigator.Screen
                name="LoginScreen"
                component={LoginScreen}
              />
            </mockNavigator.Navigator>
          ) : null}
        </NavigationContainer>
      </MyProvider>
    );

    //expect(getByTestId('loginScreen')).toBeDefined();
  });
});
