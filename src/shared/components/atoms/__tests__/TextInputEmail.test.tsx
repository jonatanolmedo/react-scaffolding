import React from 'react';
import { render } from '@testing-library/react-native';
import TextInputEmail from '../TextInputField/TextInputEmail';

describe('TextInputEmail component', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText } = render(<TextInputEmail placeholder="Test Placeholder" />);
    const inputElement = getByPlaceholderText('Test Placeholder');
    expect(inputElement).toBeDefined();
  });
});
