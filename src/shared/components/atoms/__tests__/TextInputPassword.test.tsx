import React from 'react';
import { render } from '@testing-library/react-native';
import TextInputPassword from '../TextInputField/TextInputPassword';
import "@testing-library/jest-native/extend-expect";

describe('TextInputPassword component', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <TextInputPassword
        placeholder="Password"
        testId="test-id" // Agrega testId como prop
        accesibilityLabel="accessibility-label" // Agrega accesibilityLabel como prop
      />
    );
    const inputElement = getByPlaceholderText('Password');
    expect(inputElement).toBeDefined();
  });

  test('renders as secure text entry', () => {
    const { getByPlaceholderText } = render(
      <TextInputPassword
        placeholder="Password"
        secureTextEntry
        testId="test-id" // Agrega testId como prop
        accesibilityLabel="accessibility-label" // Agrega accesibilityLabel como prop
      />
    );
    const inputElement = getByPlaceholderText('Password');
    expect(inputElement.props.secureTextEntry).toBe(true);
  });

  test('renders as secure text entry', () => {
    const { getByPlaceholderText } = render(
      <TextInputPassword
        placeholder="Password"
        secureTextEntry
        testId="test-id" // Agrega testId como prop
        accesibilityLabel="accessibility-label" // Agrega accesibilityLabel como prop
        error // Simula un estado de error
      />
    );
    const inputElement = getByPlaceholderText('Password');
    expect(inputElement.props.secureTextEntry).toBe(true);
  
    // Verifica que el estilo sea el de error
    expect(inputElement).toHaveStyle({ borderColor: '#AC2777', color: '#AC2777' });
  });
  
});
