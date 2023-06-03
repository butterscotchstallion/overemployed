/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { ExperienceDisplay } from './ExperienceDisplay';
import '@testing-library/jest-dom/extend-expect';

describe('ExperienceDisplay', function () {
  test('should display experience', function () {
    const totalXP = '500';
    render(<ExperienceDisplay totalExperience={totalXP} />);
    const testEl: HTMLElement = screen.getByTestId('ExperienceDisplay');
    expect(testEl).toHaveTextContent(totalXP);
  });
});
