import React from 'react';
import { render } from '@testing-library/react-native';
import TextInputName from '../TextInputField/TextInputName'; // Asegúrate de que estás importando desde la ubicación correcta
import "@testing-library/jest-native/extend-expect";

describe('TextInputPassword component', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <TextInputName
        placeholder="Test"
        testId="test-id" // Agrega testId como prop
        accesibilityLabel="accessibility-label" // Agrega accesibilityLabel como prop
      />
    );
    const inputElement = getByPlaceholderText('Test');
    expect(inputElement).toBeDefined();
  });

  test('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <TextInputName
        placeholder="Test"
        testId="test-id" // Agrega testId como prop
        accesibilityLabel="accessibility-label" // Agrega accesibilityLabel como prop
        error // Simula un estado de error
      />
    );
    const inputElement = getByPlaceholderText('Test');
    expect(inputElement).toBeDefined();
    expect(inputElement).toHaveStyle({ borderColor: '#AC2777', color: '#AC2777' });
  });

  
});
