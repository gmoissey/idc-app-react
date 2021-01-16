import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuLinks from './MenuLinks';

describe('<MenuLinks />', () => {
  test('it should mount', () => {
    render(<MenuLinks />);
    
    const menuLinks = screen.getByTestId('MenuLinks');

    expect(menuLinks).toBeInTheDocument();
  });
});