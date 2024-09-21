interface ExperienceItem {
    title: string;
    company: string;
    description: string;
    startDate: string;
    endDate: string;
    experienceMonth: number;
}


interface ExperienceTimelineProps {
    experiences: ExperienceItem[]
}

interface ExperienceItemProps {
    experience: ExperienceItem
    index: number
}

