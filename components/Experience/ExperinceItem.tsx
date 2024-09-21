"use client"

import { Card } from '@nextui-org/react'
import React from 'react'

const ExperinceItem = ({ experience, index }: ExperienceItemProps,) => {




    return (
        <div
            className={`mb-12 flex justify-between items-center w-full transition-all duration-300 ease-in-out transform hover:scale-105      ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
        >
            <div className="w-5/12 hidden md:block"></div> {/* Hidden on mobile, visible on medium+ */}

            <div className="z-20 md:z-0 flex items-center justify-center order-1 bg-green-500 shadow-lg w-12 h-12 rounded-full  m-1 ">
                <h1 className="font-bold text-white text-lg block md:none ">

                    <img src={'/ic_code.svg'} alt={experience.title} className="w-8 h-8" />
                </h1>
            </div>


            <Card className="order-1 w-full md:w-5/12 px-6 py-8 border border-green-500 hover:bg-green-600 transition-colors duration-300  shadow-xl  bg-gradient-to-tl from-slate-500 to-slate-900 md:from-slate-900/100 md:to-slate-700/70 rounded-md glassmorphic-bg bg-opacity-70">
                <h3 className="mb-2 font-bold text-green-400 text-2xl glow-effect">{experience.title}</h3>
                <h4 className="mb-3 font-semibold text-indigo-300 text-lg">{experience.company}</h4>
                <p className="text-sm leading-relaxed text-gray-300">{experience.description}</p>

                <div className="flex justify-between mt-4 text-sm font-medium text-gray-400">
                    <div className="flex space-x-2">
                        <span>{experience.startDate}</span>
                        <span>-</span>
                        <span>{experience.endDate}</span>
                    </div>
                    <div>
                        {experience.experienceMonth} months
                    </div>
                </div>
            </Card>
        </div >
    )
}

export default ExperinceItem