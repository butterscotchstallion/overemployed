import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExperienceDisplay } from './components/experience/ExperienceDisplay';
import { setExperienceGained } from './components/experience/levelSlice';
import { RootState } from './store';

function App() {
  const dispatch = useDispatch();
  const randomXP = useMemo(() => ~~(Math.random() * 0), []);
  const currentXP = useSelector(
    (state: RootState) => state.level.experienceGained
  );
  const totalExperienceForLevel = useSelector(
    (state: RootState) => state.level.totalExperienceForLevel
  );
  const [addXPAmount, setAddXPAmount] = useState<number>(0);

  useEffect(() => {
    if (totalExperienceForLevel) {
      const twentyFivePercent = totalExperienceForLevel * 0.25;
      setAddXPAmount(twentyFivePercent);
    }
  }, [totalExperienceForLevel]);

  function addXP() {
    dispatch(setExperienceGained(currentXP + addXPAmount));
  }

  return (
    <>
      <div>
        <ExperienceDisplay experienceGained={randomXP} />
        <button type='button' onClick={addXP}>
          Add {addXPAmount} XP
        </button>
      </div>
    </>
  );
}

export default App;
