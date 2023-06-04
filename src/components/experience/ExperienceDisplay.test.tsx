/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { ExperienceDisplay } from './ExperienceDisplay';
import '@testing-library/jest-dom/extend-expect';

describe('ExperienceDisplay', function () {
  test('should display experience', function () {
    const totalXP = 5000;
    const gainedXP = 1000;
    render(
      <ExperienceDisplay
        gainedExperience={gainedXP}
        totalExperience={totalXP}
      />
    );
    const totalXPEl: HTMLElement = screen.getByTestId('totalXP');
    expect(totalXPEl).toHaveTextContent('5,000');
  });
});
