import React from 'react';
import { render } from '@testing-library/react-native';
import BackgroundWelcome from '../Background/BackgroundWelcome';

describe('BackgroundWelcome component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<BackgroundWelcome />);
    const container = getByTestId('background-welcome');
    expect(container).toBeDefined();
  });
});
