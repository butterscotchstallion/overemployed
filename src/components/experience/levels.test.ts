import {
  getLevelByGainedExperience,
  getPercentageComplete,
  getTotalExperienceByLevel,
} from './levels';

describe('Levels', () => {
  test('getTotalExperienceByLevel', () => {
    expect(getTotalExperienceByLevel(1)).toBe(5000);
  });

  // tres
  test('getLevelByGainedExperience', () => {
    expect(getLevelByGainedExperience(5000)).toBe('1');
    expect(getLevelByGainedExperience(10000)).toBe('2');
    expect(getLevelByGainedExperience(500000)).toBe('100');
    expect(getPercentageComplete(5000, 5000)).toBe(100);
  });
});
