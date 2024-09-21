
import React from 'react'
import ExperinceItem from './ExperinceItem'


export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>
            <div className="relative">

                {/* Vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full 0 bg-slate-400"></div>

                {experiences.map((experience, index) => (

                    <ExperinceItem key={index} experience={experience} index={index} />

                ))}


            </div>
        </div>
    )
}

