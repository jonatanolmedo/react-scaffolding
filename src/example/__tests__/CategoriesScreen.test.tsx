import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../components/screens/CategoriesScreen/CategoriesScreen';

// Mocks para react-native-gesture-handler y @react-navigation/stack
import 'react-native-gesture-handler/jestSetup';
import StringsId from '../../constants/StringsId';

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

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useIsFocused: jest.fn().mockReturnValue(true),
  useRoute: jest.fn().mockReturnValue({ name: 'MockedRoute' }),
}));

jest.mock("@miblanchard/react-native-slider", () => {
  return {
    Slider: () => {},
  };
});

describe('CategoriesScreen', () => {
  it('renders correctly', () => {
    const navigation: any = {};  // Puedes ajustar las props de navegación según sea necesario
    const route: any = {};  // Puedes ajustar las props de ruta según sea necesario
    const { getByTestId } = render(
      <NavigationContainer>
        <CategoriesScreen navigation={navigation} route={route} />
      </NavigationContainer>
    );

    // Para "CategoriesScreen"
    const flatlistCategories = getByTestId(StringsId.flatListCategories);
    expect(flatlistCategories).toBeDefined();

  });
});
