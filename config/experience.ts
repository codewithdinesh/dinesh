function calculateMonthsBetween(startDate: string) {
    // Get the current date
    const currentDate = new Date();

    const start = new Date(Date.parse(startDate));

    if (isNaN(start.getTime())) {
        throw new Error("Invalid date format. Please use 'Month YYYY' format.");
    }

    const yearsDifference = currentDate.getFullYear() - start.getFullYear();
    const monthsDifference = currentDate.getMonth() - start.getMonth();

    const totalMonthsDifference = yearsDifference * 12 + monthsDifference;

    return Math.max(totalMonthsDifference, 0);
}


export const ExperiencesData: ExperienceItem[] = [
    {
        title: "Software Developer Intern",
        company: "Dista Technologies Private Limited",
        startDate: "July 2024",
        endDate: "Present",
        experienceMonth: calculateMonthsBetween("July 2024"),
        description: "Contributing to optimize Location Intelligence product using GIS tools and ML. Analyzed satellite images and maps to enhance platform performance and provide geospatial insights."
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
        experienceMonth: 2,
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
        experienceMonth: calculateMonthsBetween("June 2022"),
        description: "Developed and deployed customized websites and Android applications for diverse clients. Leveraged diverse technologies to create user-friendly and efficient solutions. Developed projects such as QR attendance system, Digital portal for farmers and buyers, Training and Placement Application for College, etc."
    }
];

