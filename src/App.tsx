import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExperienceDisplay } from './components/experience/ExperienceDisplay';
import { setExperienceGained } from './components/experience/levelSlice';
import { RootState } from './store';

function App() {
  const dispatch = useDispatch();
  const randomXP = useMemo(() => ~~(Math.random() * 500000), []);
  const currentXP = useSelector(
    (state: RootState) => state.level.experienceGained
  );

  function addXP() {
    if (currentXP) {
      dispatch(setExperienceGained(currentXP + 2000));
    }
  }

  return (
    <>
      <div style={{ width: '50%' }}>
        <ExperienceDisplay experienceGained={randomXP} />
        <button type='button' onClick={addXP}>
          Add XP
        </button>
      </div>
    </>
  );
}

export default App;
