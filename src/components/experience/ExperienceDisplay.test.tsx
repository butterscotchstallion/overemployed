/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { ExperienceDisplay } from './ExperienceDisplay';

describe('ExperienceDisplay', () => {
  test('should display experience', () => {
    render(
      <Provider store={store}>
        <ExperienceDisplay experienceGained={42} />
      </Provider>
    );

    const features: string[] = [
      'totalXP',
      'gainedXP',
      'percentComplete',
      'level',
    ];

    features.forEach((f: string) => {
      expect(screen.getByTestId(f)).toBeInTheDocument();
    });
  });
});
