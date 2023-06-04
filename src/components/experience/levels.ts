const levelOne = 5000;
const MAX_LEVEL = 100;
interface ILevelXPMap {
  [level: number]: number;
}
const levelXPMap: ILevelXPMap = {};

for (let j = 1; j <= MAX_LEVEL; j++) {
  levelXPMap[j] = levelOne * j;
}

/**
 *
 * @param xp
 * @returns
 */
function getLevelByGainedExperience(xp: number): string {
  for (const level in levelXPMap) {
    const levelXP = Number(levelXPMap[level]);
    if (levelXP >= xp) {
      return level;
    }
  }
  return '1';
}

function getTotalExperienceByLevel(level: number) {
  return levelXPMap[level];
}

function getPercentageComplete(
  gainedExperience: number,
  totalExperience: number
) {
  return +((gainedExperience / totalExperience) * 100).toFixed(2);
}

export {
  getLevelByGainedExperience,
  getTotalExperienceByLevel,
  getPercentageComplete,
};
