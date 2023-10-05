// MyScreen.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import MyScreen from '../components/screens/MyScreen/MyScreen'; // Asegúrate de que la ruta sea correcta

describe('MyScreen', () => {
  it('should render correctly', () => {
    const { getByText } = render(<MyScreen />);
    const emptyScreenText = getByText('Empty Screen');

    expect(emptyScreenText).toBeDefined();
  });
});
