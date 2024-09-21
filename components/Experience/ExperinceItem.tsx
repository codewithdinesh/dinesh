import React from 'react'

const ExperinceItem = ({ experience, index }: ExperienceItemProps,) => {




    return (
        <div
            className={`mb-12 flex justify-between items-center w-full transition-all duration-300 ease-in-out transform hover:scale-105 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
        >
            <div className="w-5/12 hidden md:block"></div> {/* Hidden on mobile, visible on medium+ */}

            <div className="z-20 flex items-center justify-center order-1 bg-purple-600 shadow-lg w-12 h-12 rounded-full">
                <h1 className="font-bold text-white text-lg">
                    {/* {index + 1} */}

                    <img src={'/ic_code.svg'} alt={experience.title} className="w-8 h-8" />
                </h1>
            </div>

            <div className="order-1 shadow-xl w-full md:w-5/12 px-6 py-8 hover:bg-blue-300 transition-colors duration-300 bg-gradient-to-tl from-slate-500 to-slate-700 md:from-slate-900/100 md:to-slate-700/70 rounded-md glassmorphic-bg bg-opacity-70">
                <h3 className="mb-2 font-bold text-white text-2xl">{experience.title}</h3>
                <h4 className="mb-3 font-semibold text-indigo-200 text-lg">{experience.company}</h4>
                <p className="text-sm leading-relaxed text-gray-200">{experience.description}</p>

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
            </div>
        </div>
    )
}

export default ExperinceItem