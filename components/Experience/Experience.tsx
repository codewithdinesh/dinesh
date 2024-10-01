import React from 'react'
import ExperienceTimeline from './ExperienceTimeline'
import { ExperiencesData } from '@/config/experience'

const Experience = () => {

    return (
        <div className="min-h-screen mt-1 rounded-md experience " id='experience'>
            <ExperienceTimeline experiences={ExperiencesData} />
        </div>
    )
}

export default Experience
