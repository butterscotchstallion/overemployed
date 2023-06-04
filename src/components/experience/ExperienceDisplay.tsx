import s from './ExperienceDisplay.module.scss';

interface IExperienceDisplayProps {
  gainedExperience: number;
  totalExperience: number;
}

export const ExperienceDisplay = ({
  totalExperience,
  gainedExperience,
}: IExperienceDisplayProps) => {
  const TOTAL_XP_SEGMENTS = 6;
  const segments: number[] = [];
  const percentComplete = +((gainedExperience / totalExperience) * 100).toFixed(
    2
  );

  for (let j = 1; j <= TOTAL_XP_SEGMENTS; j++) {
    segments.push(j);
  }

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <div data-testid='ExperienceDisplay'>
      <fieldset className={s.segmentWrapper}>
        <legend>
          <span data-testid='gainedXP'>
            {numberWithCommas(gainedExperience)}
          </span>{' '}
          /{' '}
          <span data-testid='totalXP'>{numberWithCommas(totalExperience)}</span>{' '}
          (<span data-testid='percentComplete'>{percentComplete}%</span>)
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
