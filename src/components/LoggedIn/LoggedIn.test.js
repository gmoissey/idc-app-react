import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoggedIn from './LoggedIn';

describe('<LoggedIn />', () => {
  test('it should mount', () => {
    render(<LoggedIn />);
    
    const loggedIn = screen.getByTestId('LoggedIn');

    expect(loggedIn).toBeInTheDocument();
  });
});