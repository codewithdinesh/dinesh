import React from 'react'
import ExperienceTimeline from './ExperienceTimeline'

const Experience = () => {



    const experiences: ExperienceItem[] = [
        {
            title: "Software Developer Intern",
            company: "Dista Technologies Private Limited",
            startDate: "July 2024",
            endDate: "Present",
            experienceMonth: 3,
            description: "Contributed to optimize Location Intelligence product using GIS tools and ML. Analyzed satellite images and maps to enhance platform performance and provide geospatial insights."
        },
        {
            title: "Backend Research & Development Associate",
            company: "LvlAlpha Private Limited",
            startDate: "March 2024",
            endDate: "July 2024",
            experienceMonth: 4,
            description: "Develop and optimize content management systems for Defense Products and Hardware devices. Collaborate cross-functionally for seamless integration. Design robust data management solutions for defense-related information."
        },
        {
            title: "Flutter Intern",
            company: "Visanka Technologies Private Limited",
            startDate: "Dec 2023",
            endDate: "Feb 2024",
            experienceMonth: 3,
            description: "Developed a Flutter app integrated with Node.js backend. Collaborated on user-friendly app interfaces and functionality. Ensured optimal performance through data management."
        },
        // {
        //     title: "Development Team Head",
        //     company: "Google Developer Student Club - MMCOE",
        //     startDate: "Jul 2023",
        //     endDate: "June 2024",
        //     experienceMonth: 12,
        //     description: "Mentored peers, enhancing their development skills and fostering an inclusive community."
        // },
        {
            title: "Full-stack Web Developer",
            company: "Freelance",
            startDate: "June 2022",
            endDate: "Present",
            experienceMonth: 26,
            description: "Developed and deployed customized websites and Android applications for diverse clients. Leveraged diverse technologies to create user-friendly and efficient solutions. Developed projects such as QR attendance system, Digital portal for farmers and buyers, Training and Placement Application for College, etc."
        }
    ];





    return (
        <div className="min-h-screen mt-1 rounded-md experience " id='experience'>
            <ExperienceTimeline experiences={experiences} />
        </div>
    )
}

export default Experience
