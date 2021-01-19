import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Week04 from './Week04';

describe('<Week04 />', () => {
  test('it should mount', () => {
    render(<Week04 />);
    
    const week04 = screen.getByTestId('Week04');

    expect(week04).toBeInTheDocument();
  });
});