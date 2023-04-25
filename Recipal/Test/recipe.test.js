import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SplashScreen from './Screens/SplashScreen';

describe('SplashScreen', () => {
  it('should navigate to Login screen on Login button press', () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByTestId } = render(<SplashScreen navigation={navigationMock} />);
    const loginButton = getByTestId('loginButton');

    fireEvent.press(loginButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('Login');
  });

  it('should navigate to Signup screen on Signup button press', () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByTestId } = render(<SplashScreen navigation={navigationMock} />);
    const signupButton = getByTestId('signupButton');

    fireEvent.press(signupButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('Signup');
  });

  it('should navigate to Home screen on Get Started button press', () => {
    const navigationMock = { navigate: jest.fn() };
    const { getByTestId } = render(<SplashScreen navigation={navigationMock} />);
    const getStartedButton = getByTestId('getStartedButton');

    fireEvent.press(getStartedButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('Home');
  });
});
