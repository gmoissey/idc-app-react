import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Week08 from './Week08';

describe('<Week08 />', () => {
  test('it should mount', () => {
    render(<Week08 />);
    
    const week08 = screen.getByTestId('Week08');

    expect(week08).toBeInTheDocument();
  });
});