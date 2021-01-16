import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Week01 from './Week01';

describe('<Week01 />', () => {
  test('it should mount', () => {
    render(<Week01 />);
    
    const week01 = screen.getByTestId('Week01');

    expect(week01).toBeInTheDocument();
  });
});