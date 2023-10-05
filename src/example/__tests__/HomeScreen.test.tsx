import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/screens/HomeScreen/HomeScreen.screen';
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

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );

    // Para "Welcome,"
    expect(getByText(/Welcome,.*/)).toBeDefined();
    // Para "Today's Date:"
    expect(getByText(/Today's Date:/)).toBeDefined();

  });
});
