import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Week05 from './Week05';

describe('<Week05 />', () => {
  test('it should mount', () => {
    render(<Week05 />);
    
    const week05 = screen.getByTestId('Week05');

    expect(week05).toBeInTheDocument();
  });
});