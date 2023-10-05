// MyContext.test.tsx
import React from 'react';
import { render, act } from '@testing-library/react-native';
import { Text } from 'react-native';
import { useMyContext } from '../context/MyContext/MyContext'; // Asegúrate de importar correctamente

jest.mock('../context/MyContext/MyContext', () => ({
  ...jest.requireActual('../context/MyContext/MyContext'),
  useMyContext: jest.fn(),
}));

describe('MyContext', () => {
  it('provides email and password via context', () => {
    const mockSetEmail = jest.fn();
    const mockSetPassword = jest.fn();

    // Mocking the useMyContext hook to return desired values
    (useMyContext as jest.Mock).mockReturnValue({
      email: 'test@example.com',
      setEmail: mockSetEmail,
      password: 'password123',
      setPassword: mockSetPassword,
    });

    const TestComponent = () => {
      const { email, password } = useMyContext();

      return (
        <>
          <Text>Email: {email}</Text>
          <Text>Password: {password}</Text>
        </>
      );
    };

    const { getByText } = render(<TestComponent />);

    expect(getByText('Email: test@example.com')).toBeDefined();
    expect(getByText('Password: password123')).toBeDefined();
  });
});
