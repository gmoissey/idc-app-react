import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoggedOut from './LoggedOut';

describe('<LoggedOut />', () => {
  test('it should mount', () => {
    render(<LoggedOut />);
    
    const loggedOut = screen.getByTestId('LoggedOut');

    expect(loggedOut).toBeInTheDocument();
  });
});