// __tests__/mycontext.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyProvider from '../context/MyContext/MyProvider';
import { useMyContext } from '../context/MyContext/MyContext'; // Import useMyContext directly
import { Text, View, Button } from 'react-native';

const MockComponent = () => {
  const { name, setName } = useMyContext();

  return (
    <View>
      <Text testID="name">{name}</Text>
      <Button title="Set Name" onPress={() => setName('John')} testID="button" />
    </View>
  );
};

describe('MyContext', () => {
  it('provides the correct values', () => {
    const { getByTestId } = render(
      <MyProvider>
        <MockComponent />
      </MyProvider>
    );

    const nameElement = getByTestId('name');
    const buttonElement = getByTestId('button');

    expect(nameElement.props.children).toBe('');

    fireEvent.press(buttonElement);
    expect(nameElement.props.children).toBe('John');
  });

  it('throws an error when used outside MyProvider', () => {
    // Renderiza MockComponent directamente sin MyProvider
    expect(() => render(<MockComponent />)).toThrow('useMyContext must be used within a MyProvider');
  });

});
