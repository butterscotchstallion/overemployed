import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import s from './ExperienceDisplay.module.scss';
import { setExperienceGained } from './levelSlice';

interface IExperienceDisplayProps {
  experienceGained: number;
}

export const ExperienceDisplay = ({
  experienceGained,
}: IExperienceDisplayProps) => {
  const dispatch = useDispatch();
  const level = useSelector((state: RootState) => state.level.level);
  const currentExperience = useSelector(
    (state: RootState) => state.level.experienceGained
  );
  const totalExperience = useSelector(
    (state: RootState) => state.level.totalExperienceForLevel
  );
  const percentComplete = useSelector(
    (state: RootState) => state.level.percentComplete
  );

  useEffect(() => {
    dispatch(setExperienceGained(experienceGained));
  }, [dispatch, experienceGained]);

  function numberWithCommas(x: number) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : x;
  }

  return (
    <div data-testid='ExperienceDisplay' className={s.experienceDisplay}>
      <fieldset className={s.segmentWrapper}>
        <legend>
          <span data-testid='gainedXP'>
            {numberWithCommas(currentExperience)}
          </span>{' '}
          /{' '}
          <span data-testid='totalXP'>{numberWithCommas(totalExperience)}</span>{' '}
          (<span data-testid='percentComplete'>{percentComplete}%</span>) &bull;
          Level <span data-testid='level'>{level}</span>
        </legend>
        <div className={[s.meter, s.orange].join(' ')}>
          <span style={{ width: percentComplete + '%' }}></span>
        </div>
      </fieldset>
    </div>
  );
};
