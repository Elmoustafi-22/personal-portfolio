import React from 'react';
import { skills } from '../../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <a key={index} href={skill.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {skill.icon}
              <span className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
