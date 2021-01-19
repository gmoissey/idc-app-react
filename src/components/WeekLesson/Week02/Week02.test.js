import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Week02 from './Week02';

describe('<Week02 />', () => {
  test('it should mount', () => {
    render(<Week02 />);
    
    const week02 = screen.getByTestId('Week02');

    expect(week02).toBeInTheDocument();
  });
});