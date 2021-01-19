import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LessonHeader from './LessonHeader';

describe('<LessonHeader />', () => {
  test('it should mount', () => {
    render(<LessonHeader />);
    
    const lessonHeader = screen.getByTestId('LessonHeader');

    expect(lessonHeader).toBeInTheDocument();
  });
});