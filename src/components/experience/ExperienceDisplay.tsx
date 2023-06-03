interface IExperienceDisplayProps {
  totalExperience: string;
}

export const ExperienceDisplay = ({
  totalExperience,
}: IExperienceDisplayProps) => {
  return <div data-testid='ExperienceDisplay'>{totalExperience}</div>;
};
