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
          <span data-testid='totalXP'>{numberWithCommas(totalExperience)}</span>
        </legend>
        <ul className={s.segmentList}>
          {segments.map((segment) => (
            <li className={s.segmentItem} key={segment}>
              <div>&nbsp;</div>
            </li>
          ))}
        </ul>
      </fieldset>
    </div>
  );
};
