const LEVEL_1_XP = 5000;
const MAX_LEVEL = 100;
interface ILevelXPMap {
  [level: number]: number;
}
const levelXPMap: ILevelXPMap = {};

for (let j = 1; j <= MAX_LEVEL; j++) {
  levelXPMap[j] = LEVEL_1_XP * j;
}

function getMaxXP(): number {
  return levelXPMap[MAX_LEVEL];
}

function getLevelByGainedExperience(xp: number): string {
  const maxXP = getMaxXP();

  if (xp >= maxXP) {
    return MAX_LEVEL.toString();
  }

  for (const level in levelXPMap) {
    const levelXP = Number(levelXPMap[level]);
    if (levelXP >= xp) {
      return level;
    }
  }
  return '1';
}

function getTotalExperienceByLevel(level: number): number {
  return levelXPMap[level];
}

function getPercentageComplete(
  gainedExperience: number,
  totalExperience: number
): number {
  if (gainedExperience >= getMaxXP()) {
    return 100;
  }
  return +((gainedExperience / totalExperience) * 100).toFixed(1);
}

function isMaxLevel(xp: number): boolean {
  return xp >= getMaxXP();
}

export {
  getLevelByGainedExperience,
  getTotalExperienceByLevel,
  getPercentageComplete,
  isMaxLevel,
  getMaxXP,
};
