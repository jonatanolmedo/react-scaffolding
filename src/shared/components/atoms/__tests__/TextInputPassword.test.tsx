import React from 'react';
import { render } from '@testing-library/react-native';
import TextInputPassword from '../TextInputField/TextInputPassword';

describe('TextInputPassword component', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText } = render(<TextInputPassword placeholder="Password" />);
    const inputElement = getByPlaceholderText('Password');
    expect(inputElement).toBeDefined();
  });

  test('renders as secure text entry', () => {
    const { getByPlaceholderText } = render(<TextInputPassword placeholder="Password" secureTextEntry />);
    const inputElement = getByPlaceholderText('Password');
    expect(inputElement.props.secureTextEntry).toBe(true);
  });
});
