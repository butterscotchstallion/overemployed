interface ILevelXPMap {
  [level: number]: number;
}
const levelXPMap: ILevelXPMap = {};

levelXPMap[1] = 5000;
levelXPMap[2] = 10000;
levelXPMap[3] = 20000;
levelXPMap[4] = 35000;
levelXPMap[5] = 55000;
levelXPMap[6] = 70000;
levelXPMap[7] = 90000;
levelXPMap[8] = 120000;
levelXPMap[9] = 150000;
levelXPMap[10] = 200000;
levelXPMap[11] = 350000;
levelXPMap[12] = 500000;
levelXPMap[13] = 800000;
levelXPMap[14] = 1000000;
levelXPMap[15] = 3000000;
levelXPMap[16] = 6000000;
levelXPMap[17] = 8000000;
levelXPMap[18] = 10000000;
levelXPMap[19] = 20000000;
levelXPMap[20] = 50000000;

const MAX_LEVEL = 20;

function getXPByLevel(level: number) {
  return levelXPMap[level];
}

function getMaxXP(): number {
  return getXPByLevel(MAX_LEVEL);
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
  getXPByLevel,
};
