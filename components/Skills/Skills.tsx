import React from 'react';

const skillCategories = [
    {
        category: 'Web Development',
        skills: [
            { skill: 'JavaScript', level: 'Expert' },
            { skill: 'Next.js', level: 'Advanced' },
            { skill: 'React.js', level: 'Advanced' },
            { skill: 'Node.js', level: 'Advanced' },
            { skill: 'Express.js', level: 'Intermediate' },
            { skill: 'HTML5', level: 'Expert' },
            { skill: 'CSS', level: 'Expert' },
            { skill: 'Tailwind CSS', level: 'Intermediate' },
            { skill: 'Bootstrap', level: 'Intermediate' },
        ],
    },

    {
        category: 'Application Development',
        skills: [
            { skill: 'Android Development', level: 'Advanced' },
            { skill: 'Flutter', level: 'Advanced' },
            { skill: 'Material Design', level: 'Intermediate' },
            { skill: 'React Native', level: 'Intermediate' },
            { skill: 'Expo', level: 'Intermediate' },

        ],


    },

    {
        category: 'Programming Languages',
        skills: [
            { skill: 'Python', level: 'Expert' },
            { skill: 'C++', level: 'Intermediate' },
            { skill: 'Java', level: 'Intermediate' },
            { skill: 'Kotlin', level: 'Intermediate' },
            { skill: 'TypeScript', level: 'Intermediate' },
        ],
    },

    {
        category: 'Databases & Cloud',
        skills: [
            { skill: 'MySQL', level: 'Intermediate' },
            { skill: 'MongoDB', level: 'Intermediate' },
            { skill: 'Google Firebase', level: 'Advanced' },
            { skill: 'AWS', level: 'Intermediate' },
            { skill: 'Vercel', level: 'Intermediate' },
        ],
    },

    {
        category: 'Version Control & DevOps',
        skills: [
            { skill: 'Git', level: 'Advanced' },
            { skill: 'GitHub', level: 'Advanced' },
            { skill: 'NPM', level: 'Intermediate' },
            { skill: 'Postman', level: 'Intermediate' },
        ],
    },

    {
        category: 'Data Science & AI',
        skills: [
            { skill: 'Pandas', level: 'Intermediate' },
            { skill: 'NumPy', level: 'Intermediate' },
            { skill: 'Matplotlib', level: 'Intermediate' },
            { skill: 'Seaborn', level: 'Intermediate' },
            { skill: 'Scikit-learn', level: 'Intermediate' },
            { skill: 'TensorFlow', level: 'Beginner' },
            { skill: 'Data Visualization', level: 'Intermediate' },
        ],
    },
];



const SkillsList = () => {
    return (
        <div className="terminal-style p-4  font-mono">

            <h2 className="text-3xl font-bold text-center mb-10 skills" id='skills'>Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategories.map((category, index) => (
                    <div key={index} className="mb-6 border-l-4 border-green-500 pl-4">
                        <h3 className="text-lg font-semibold text-green-300">{category.category}</h3>
                        <ul className="list-disc pl-5">
                            {category.skills.map((item, idx) => (
                                <li key={idx} className="text-green-300 hover:scale-110 hover:text-green-200">
                                    {item.skill} - <span className="text-gray-400 hover:text-white">{item.level}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsList;

