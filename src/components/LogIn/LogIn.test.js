import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogIn from './LogIn';

describe('<LogIn />', () => {
  test('it should mount', () => {
    render(<LogIn />);
    
    const logIn = screen.getByTestId('LogIn');

    expect(logIn).toBeInTheDocument();
  });
});