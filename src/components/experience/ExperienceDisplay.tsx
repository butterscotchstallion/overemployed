import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import s from './ExperienceDisplay.module.scss';
import { setExperienceGained } from './levelSlice';
//import { setExperienceGained } from './levelActions';

interface IExperienceDisplayProps {
  gainedExperience: number;
}

export const ExperienceDisplay = ({
  gainedExperience,
}: IExperienceDisplayProps) => {
  const [renderCounter, setRenderCounter] = useState<number>(0);
  const dispatch = useDispatch();
  const level = useSelector((state: RootState) => state.level.level);
  const totalExperience = useSelector(
    (state: RootState) => state.level.totalExperienceForLevel
  );
  const percentComplete = useSelector(
    (state: RootState) => state.level.percentComplete
  );

  useEffect(() => {
    dispatch(setExperienceGained(gainedExperience));
    setRenderCounter(renderCounter + 1);
    console.log('rendering');
  }, [dispatch]);

  function numberWithCommas(x: number) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : x;
  }

  return (
    <div data-testid='ExperienceDisplay' className={s.experienceDisplay}>
      <fieldset className={s.segmentWrapper}>
        <legend>
          <span data-testid='gainedXP'>
            {numberWithCommas(gainedExperience)}
          </span>{' '}
          /{' '}
          <span data-testid='totalXP'>{numberWithCommas(totalExperience)}</span>{' '}
          (<span data-testid='percentComplete'>{percentComplete}%</span>) &bull;
          Level <span data-testid='level'>{level}</span>
        </legend>
        <progress
          value={gainedExperience}
          style={{ width: percentComplete + '%' }}
          data-min='0'
          max='100'
        ></progress>
      </fieldset>
    </div>
  );
};
