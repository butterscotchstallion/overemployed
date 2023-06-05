import {
  getLevelByGainedExperience,
  getPercentageComplete,
  getTotalExperienceByLevel,
  getXPByLevel,
} from './levels';

describe('Levels', () => {
  test('getTotalExperienceByLevel', () => {
    expect(getTotalExperienceByLevel(1)).toBe(5000);
  });

  test('getLevelByGainedExperience', () => {
    const level = 1;
    const xp = getXPByLevel(level);
    expect(getLevelByGainedExperience(xp)).toBe(level.toString());
    expect(getPercentageComplete(xp, xp)).toBe(100);
  });
});
