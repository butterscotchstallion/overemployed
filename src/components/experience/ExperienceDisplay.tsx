import s from './ExperienceDisplay.module.scss';
import {
  getLevelByGainedExperience,
  getPercentageComplete,
  getTotalExperienceByLevel,
} from './levels';

interface IExperienceDisplayProps {
  gainedExperience: number;
}

export const ExperienceDisplay = ({
  gainedExperience,
}: IExperienceDisplayProps) => {
  const level: string = getLevelByGainedExperience(gainedExperience);
  const totalExperience: number = getTotalExperienceByLevel(Number(level));
  const percentComplete: number = getPercentageComplete(
    gainedExperience,
    totalExperience
  );

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
