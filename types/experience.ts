interface ExperienceItem {
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  experienceMonth: number;
  type?: "fulltime" | "freelance" | "internship";
  skills?: string[];
  highlights?: string[];
  technologies?: string[];
  achievements?: string[];
  logo?: string;
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

interface ExperienceItemProps {
  experience: ExperienceItem;
  index: number;
}
