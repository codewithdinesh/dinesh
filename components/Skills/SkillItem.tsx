import React from 'react';

interface SkillItemProps {
  skill: string;
  level?: string;
}

const SkillItem = ({ skill, level }: SkillItemProps) => {
  return (
    <div className="shadow-xl  px-2 py-8 hover:bg-blue-200 transition- colorsduration-300 bg-gradient-to-tl from-slate-700 to-slate-500 md:from-slate-900/100 md:to-slate-700/70 rounded-md glassmorphic-bg bg-opacity-70">
      <h3 className="text-white font-bold text-xl">{skill}</h3>
      {level && <p className="text-blue-300 font-semibold mt-2">{level}</p>}
    </div>
  );
};

export default SkillItem;
