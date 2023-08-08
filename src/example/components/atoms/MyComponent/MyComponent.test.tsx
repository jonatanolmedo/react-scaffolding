import React from 'react';
import { render } from '@testing-library/react-native';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  test('renders text correctly', () => {
    const { getByText } = render(<MyComponent />);
    
    // Check if the text "This is MyComponent!" is rendered
    const textElement = getByText("This is MyComponent!");
    expect(textElement).toBeTruthy();
  });
});
