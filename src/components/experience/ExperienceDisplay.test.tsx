/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { ExperienceDisplay } from './ExperienceDisplay';
import { getXPByLevel } from './levels';

describe('ExperienceDisplay', () => {
  test('should display experience', () => {
    const level = 5;
    const gainedXP = getXPByLevel(level);
    render(
      <Provider store={store}>
        <ExperienceDisplay experienceGained={gainedXP} />
      </Provider>
    );

    const totalXPEl: HTMLElement = screen.getByTestId('totalXP');
    expect(totalXPEl).toBeInTheDocument();

    const gainedXPEl: HTMLElement = screen.getByTestId('gainedXP');
    expect(gainedXPEl).toBeInTheDocument();

    const percentEl: HTMLElement = screen.getByTestId('percentComplete');
    expect(percentEl).toHaveTextContent('100%');

    const levelEl: HTMLElement = screen.getByTestId('level');
    expect(levelEl).toHaveTextContent(level.toString());
  });
});
