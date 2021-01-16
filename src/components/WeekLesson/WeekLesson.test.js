import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WeekLesson from './WeekLesson';

describe('<WeekLesson />', () => {
  test('it should mount', () => {
    render(<WeekLesson />);
    
    const weekLesson = screen.getByTestId('WeekLesson');

    expect(weekLesson).toBeInTheDocument();
  });
});