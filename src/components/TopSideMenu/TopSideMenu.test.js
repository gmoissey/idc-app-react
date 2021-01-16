import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopSideMenu from './TopSideMenu';

describe('<TopSideMenu />', () => {
  test('it should mount', () => {
    render(<TopSideMenu />);
    
    const topSideMenu = screen.getByTestId('TopSideMenu');

    expect(topSideMenu).toBeInTheDocument();
  });
});