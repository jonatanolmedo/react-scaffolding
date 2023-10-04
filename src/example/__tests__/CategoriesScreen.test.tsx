import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native'; // Importamos Text de react-native

interface MockStackScreenProps {
  route: RouteProp<any, any>;
  navigation: StackNavigationProp<any, any>;
}

const CategoriesScreen = ({ route, navigation }: MockStackScreenProps) => {
  return (
    <Text>
      Categories Screen
    </Text>
  );
};

describe('CategoriesScreen component', () => {
  test('renders correctly', () => {
    const mockRoute = {} as RouteProp<any, any>;
    const mockNavigation = {} as StackNavigationProp<any, any>;

    const { getByText } = render(
      <NavigationContainer>
        <CategoriesScreen route={mockRoute} navigation={mockNavigation} />
      </NavigationContainer>
    );

    const textElement = getByText('Categories Screen');
    expect(textElement).toBeTruthy();
  });
});
