import React from 'react';
import { motion } from 'framer-motion';

interface SkillProps {
  skill: {
    name: string;
    level: number;
    description: string;
  };
  index: number;
  inView: boolean;
}

const SkillCard: React.FC<SkillProps> = ({ skill, index, inView }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${skill.level}%`,
      transition: { duration: 0.8, delay: 0.3 + (index * 0.1), ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{skill.name}</h3>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
        <motion.div 
          className="h-2 bg-primary-600 dark:bg-primary-500 rounded-full"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={progressVariants}
        ></motion.div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
    </motion.div>
  );
};

export default SkillCard;