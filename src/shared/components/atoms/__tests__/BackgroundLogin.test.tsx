import React from 'react';
import { render } from '@testing-library/react-native';
import BackgroundLogin from '../Background/BackgroundLogin';

describe('BackgroundLogin component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<BackgroundLogin test-id='background-container' />);
    const container = getByTestId('background-container');
    expect(container).toBeDefined();
  });
});
