import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import ShoppingCartScreen from '../components/screens/ShoppingCartScreen/ShoppingCartScreen';
import { usePrintScreenName } from '../context/hooks/MyHook/usePrintScreenName';

// Mocks para react-native-gesture-handler y @react-navigation/stack
import 'react-native-gesture-handler/jestSetup';

// Mock de MyProvider
jest.mock('../context/MyContext/MyProvider', () => ({
  MyProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock de usePrintScreenName
jest.mock('../context/hooks/MyHook/usePrintScreenName', () => ({
  usePrintScreenName: jest.fn().mockReturnValue('MockedScreen'),
}));

jest.mock('@react-navigation/stack', () => ({
  ...jest.requireActual('@react-navigation/stack'),
  createNativeStackNavigator: jest.fn(),
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

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useIsFocused: jest.fn().mockReturnValue(true),
  useRoute: jest.fn().mockReturnValue({ name: 'MockedRoute' }),
}));

describe('CategoriesScreen', () => {
  it('renders correctly', () => {
    const navigation: any = {};  // Puedes ajustar las props de navegación según sea necesario
    const route: any = {};  // Puedes ajustar las props de ruta según sea necesario
    const { getByText } = render(
      <NavigationContainer>
        <ShoppingCartScreen navigation={navigation} route={route} />
      </NavigationContainer>
    );

    // Para "Categories Screen"
    expect(getByText(/Shopping Cart Screen.*/)).toBeDefined();

  });
});

// Mock de useIsFocused para que devuelva true
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useIsFocused: jest.fn().mockReturnValue(true),
}));

describe('ShoppingCartScreen', () => {
  it('renders correctly when isFocused is true', () => {
    const navigation: any = {};
    const route: any = {};
    const { getByText } = render(
      <ShoppingCartScreen navigation={navigation} route={route} />
    );

    // Asegúrate de que el componente se comporte como se espera cuando isFocused es true
    expect(getByText('Shopping Cart Screen')).toBeDefined();

    // Agrega más comprobaciones según sea necesario
  });
});
