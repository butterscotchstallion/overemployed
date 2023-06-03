/**
 * @jest-environment jsdom
 */
import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { ExperienceDisplay } from './ExperienceDisplay';

describe('ExperienceDisplay', function () {
  test('should display experience', function () {
    const totalXP = '500';
    act(() => {
      const container: HTMLElement | null = document.getElementById('app');
      if (container) {
        const root = createRoot(container);
        root.render(<ExperienceDisplay totalExperience={totalXP} />);
        expect(screen.getByTestId('ExperienceDisplay')).toHaveTextContent(
          totalXP
        );
      }
    });
  });
});
