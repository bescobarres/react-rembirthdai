import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyMenu from './MyMenu';

describe('<MyMenu />', () => {
  test('it should mount', () => {
    render(<MyMenu />);
    
    const myMenu = screen.getByTestId('MyMenu');

    expect(myMenu).toBeInTheDocument();
  });
});