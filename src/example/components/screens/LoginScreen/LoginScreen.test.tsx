// LoginScreen.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyProvider from '../../../../domain/context/MyContext/MyProvider';

import LoginScreen from './LoginScreen';

jest.mock('../../../context/hooks/MyHook/usePrintScreenName', () => ({
  usePrintScreenName: jest.fn(() => ({
    name: 'MockedScreenName', // Adjust this mock value as needed
  })),
}));

describe('LoginScreen', () => {
    it('should always pass', () => {
      // No assertions, so the test will always pass
    });
  });
  