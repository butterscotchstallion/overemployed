import s from './ExperienceDisplay.module.scss';

interface IExperienceDisplayProps {
  totalExperience: string;
}

export const ExperienceDisplay = ({
  totalExperience,
}: IExperienceDisplayProps) => {
  const TOTAL_XP_SEGMENTS = 6;
  const segments: number[] = [];
  for (let j = 1; j <= TOTAL_XP_SEGMENTS; j++) {
    segments.push(j);
  }
  return (
    <div data-testid='ExperienceDisplay'>
      <fieldset className={s.segmentWrapper}>
        <legend>{totalExperience}</legend>
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
