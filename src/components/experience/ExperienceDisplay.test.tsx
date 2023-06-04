/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { ExperienceDisplay } from './ExperienceDisplay';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('ExperienceDisplay', () => {
  test('should display experience', () => {
    const gainedXP = 10000;
    render(
      <Provider store={store}>
        <ExperienceDisplay gainedExperience={gainedXP} />
      </Provider>
    );

    const totalXPEl: HTMLElement = screen.getByTestId('totalXP');
    expect(totalXPEl).toHaveTextContent('10,000');

    const gainedXPEl: HTMLElement = screen.getByTestId('gainedXP');
    expect(gainedXPEl).toHaveTextContent('10,000');

    const percentEl: HTMLElement = screen.getByTestId('percentComplete');
    expect(percentEl).toHaveTextContent('100%');

    const levelEl: HTMLElement = screen.getByTestId('level');
    expect(levelEl).toHaveTextContent('2');
  });
});
