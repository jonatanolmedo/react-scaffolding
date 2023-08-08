import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from './HomeScreen.screen';

test('renders HomeScreen correctly', () => {
    const { getByTestId } = render(<HomeScreen />);
  
    // Verificar que los elementos con testID se encuentren en la pantalla
    expect(getByTestId('header-component')).toBeTruthy();
  });
