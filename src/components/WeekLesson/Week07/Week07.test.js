import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Week07 from './Week07';

describe('<Week07 />', () => {
  test('it should mount', () => {
    render(<Week07 />);
    
    const week07 = screen.getByTestId('Week07');

    expect(week07).toBeInTheDocument();
  });
});