import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Week03 from './Week03';

describe('<Week03 />', () => {
  test('it should mount', () => {
    render(<Week03 />);
    
    const week03 = screen.getByTestId('Week03');

    expect(week03).toBeInTheDocument();
  });
});