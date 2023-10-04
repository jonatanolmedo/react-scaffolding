import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../Header/Header';

describe('Header component', () => {
  test('renders correctly with title', () => {
    const { getByText } = render(<Header title="Test Title" />);
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeDefined();
  });

  test('renders correctly with title and subtitle', () => {
    const { getByText } = render(<Header title="Test Title" subtitle="Test Subtitle" />);
    const titleElement = getByText('Test Title');
    const subtitleElement = getByText('Test Subtitle');
    expect(titleElement).toBeDefined();
    expect(subtitleElement).toBeDefined();
  });
});
