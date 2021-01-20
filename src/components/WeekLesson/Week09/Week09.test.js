import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Week09 from './Week09';

describe('<Week09 />', () => {
  test('it should mount', () => {
    render(<Week09 />);
    
    const week09 = screen.getByTestId('Week09');

    expect(week09).toBeInTheDocument();
  });
});