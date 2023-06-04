import { RootState } from '../../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  getLevelByGainedExperience,
  getPercentageComplete,
  getTotalExperienceByLevel,
} from './levels';

export interface IInitialLevelState {
  experienceGained: number;
  level: number;
  totalExperienceForLevel: number;
  percentComplete: number;
}

const initialState: IInitialLevelState = {
  experienceGained: 0,
  level: 0,
  totalExperienceForLevel: 0,
  percentComplete: 0,
};

function setLevelByExperienceGained(
  state: RootState,
  experienceGained: number
) {
  state.level = getLevelByGainedExperience(experienceGained);
}

function setTotalExperienceForLevel(state: RootState) {
  state.totalExperienceForLevel = getTotalExperienceByLevel(state.level);
}

function setPercentComplete(state: RootState) {
  state.percentComplete = getPercentageComplete(
    state.experiencedGained,
    state.totalExperienceForLevel
  );
}

export const levelSlice = createSlice({
  name: 'level',
  initialState,
  reducers: {
    /**
     * When experience gained is set, update the total experience required
     * for that level, and percent complete.
     * @param state
     * @param action
     */
    setExperienceGained: (state: RootState, action: PayloadAction<number>) => {
      state.experiencedGained = action.payload;
      setLevelByExperienceGained(state, action.payload);
      setTotalExperienceForLevel(state);
      setPercentComplete(state);
    },
  },
});

export const { setExperienceGained } = levelSlice.actions;
export default levelSlice.reducer;
