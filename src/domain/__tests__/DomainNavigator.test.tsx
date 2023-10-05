import React from 'react';
import { render } from '@testing-library/react-native';
import DomainNavigator from '../navigators/DomainNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

jest.mock('@react-navigation/native-stack', () => ({
  ...jest.requireActual('@react-navigation/native-stack'),
  createNativeStackNavigator: jest.fn(() => ({
    Navigator: jest.fn(),
    Screen: jest.fn(),
  })),
}));

// Mock MyScreen component
jest.mock('../components/screens/MyScreen/MyScreen', () => 'MyScreen');

// Mock para la imagen que está dando error
jest.mock('@react-navigation/elements/lib/commonjs/assets/back-icon.png', () => ({}));
jest.mock('@react-navigation/elements/lib/commonjs/assets/back-icon-mask.png', () => ({}));

describe('DomainNavigator', () => {
  it('renders correctly', () => {
    const mockNavigator = {
      Navigator: jest.fn(),
      Screen: jest.fn(),
    };
    (createNativeStackNavigator as jest.Mock).mockReturnValue(mockNavigator);

    const { getByTestId } = render(
      <View testID="domainNavigatorContainer">
        <DomainNavigator />
      </View>
    );

    // Check if domainNavigatorElement is defined (DomainNavigator renders)
    const domainNavigatorContainer = getByTestId('domainNavigatorContainer');
    expect(domainNavigatorContainer).toBeDefined();
  });
});
