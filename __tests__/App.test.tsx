import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';
import { Text } from 'react-native';

const MockedDomainNavigator = () => <Text>DomainNavigator Mock</Text>;


jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) => <>{children}</>,
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
    /* and so on */
    Directions: {},
  };
});

jest.mock('@react-navigation/stack', () => ({
  ...jest.requireActual('@react-navigation/stack'),
  createNativeStackNavigator: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
    NavigationContainer: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  }));



jest.mock('../src/domain/navigators/DomainNavigator', () => {
  const View = require('react-native').View;  // Importa View de React Native

  const MockedDomainNavigator: React.FC = () => {
    return <View testID="domainNavigator">domainNavigator</View>;
  };

  return MockedDomainNavigator;
});
  
  
  jest.mock('../src/domain/context/MyContext/MyProvider', () => ({
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  }));
  
  describe('App', () => {
    it('renders correctly', () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId('domainNavigator')).toBeDefined();
    });
  });
  