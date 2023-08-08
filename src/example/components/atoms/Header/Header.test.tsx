import React from 'react';
import { render } from '@testing-library/react-native';
import Header from './Header';

describe('Header component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<Header />);
    
    // Check if the Header component is rendered correctly
    const headerComponent = getByTestId('header-component');
    expect(headerComponent).toBeTruthy();
  });
});
