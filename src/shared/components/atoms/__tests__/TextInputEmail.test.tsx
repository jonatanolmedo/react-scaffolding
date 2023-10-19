import React from 'react';
import { render } from '@testing-library/react-native';
import TextInputEmail from '../TextInputField/TextInputEmail';
import "@testing-library/jest-native/extend-expect";

// Resto de tu código de prueba
describe('TextInputEmail component', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <TextInputEmail
        placeholder="Test Placeholder"
        testId="test-id" // Agrega testId como prop
        accesibilityLabel="accessibility-label" // Agrega accesibilityLabel como prop
      />
    );
    const inputElement = getByPlaceholderText('Test Placeholder');
    expect(inputElement).toBeDefined();
  });

  it('should render correctly with an error state', () => {
    const { getByTestId } = render(
      <TextInputEmail
        placeholder="Test Placeholder"
        testId="test-id"
        accesibilityLabel="accessibility-label"
        error // Simula un estado de error
      />
    );
    const inputElement = getByTestId('test-id');
    // Verifica que el elemento tenga una clase o estilo específico para representar el estado de error
    expect(inputElement).toHaveStyle({ borderColor: '#AC2777', color: '#AC2777' });
  });  
});
