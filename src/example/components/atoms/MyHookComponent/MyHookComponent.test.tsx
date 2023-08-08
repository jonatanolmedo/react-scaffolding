import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyHookComponent from './MyHookComponent';

// Mockear el módulo useMyHook
jest.mock('../../../context/hooks/MyHook/useMyHook', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: [
      {
        login: { uuid: '1' },
        picture: { large: 'https://example.com/image.jpg' },
        name: { title: 'Mr.', first: 'John', last: 'Doe' },
        email: 'john@example.com',
        location: { city: 'New York', state: 'NY', country: 'USA' },
        phone: '123-456-7890',
      },
    ],
    refreshData: jest.fn(),
  })),
}));

describe('MyHookComponent', () => {
  test('renders data correctly', () => {
    const { getByText, getByTestId } = render(<MyHookComponent />);

    // Verificar si el componente muestra los datos correctamente
    expect(getByTestId('user-card')).toBeTruthy();
  });
});
