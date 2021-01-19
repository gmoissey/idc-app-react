import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Week06 from './Week06';

describe('<Week06 />', () => {
  test('it should mount', () => {
    render(<Week06 />);
    
    const week06 = screen.getByTestId('Week06');

    expect(week06).toBeInTheDocument();
  });
});