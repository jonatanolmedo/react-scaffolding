import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button/Button';

describe('Button component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Button title="Test Button" onPress={() => {}} />);
    const buttonElement = getByText('Test Button');
    expect(buttonElement).toBeDefined();
  });

  test('calls onPress handler when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Test Button" onPress={onPressMock} />);
    const buttonElement = getByText('Test Button');
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });
});
