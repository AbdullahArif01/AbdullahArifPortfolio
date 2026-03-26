import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, Smartphone, Layout, Database, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const controls = useAnimation();
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const skills = [
    {
      name: 'Unity Game Development',
      level: 92,
      description: 'Building 2D and 3D games with Unity Engine for VR, mobile, PC, and WebGL platforms.',
      icon: <Code size={24} className="text-primary-600 dark:text-primary-400" />
    },
    {
      name: 'VR/AR/XR Development',
      level: 90,
      description: 'Creating immersive virtual reality experiences for Meta Quest 2, Quest 3, and VR platforms.',
      icon: <Smartphone size={24} className="text-primary-600 dark:text-primary-400" />
    },
    {
      name: 'C# Programming',
      level: 90,
      description: 'Expert-level C# scripting, OOP, .NET development, and game logic implementation.',
      icon: <Code size={24} className="text-primary-600 dark:text-primary-400" />
    },
    {
      name: 'Multiplayer Networking',
      level: 85,
      description: 'Developing multiplayer games with Photon PUN, Photon Fusion, and real-time networking.',
      icon: <Cpu size={24} className="text-primary-600 dark:text-primary-400" />
    },
    {
      name: 'Cross-Platform Development',
      level: 88,
      description: 'Building games for Android, iOS, PC, WebGL, and VR with performance optimization.',
      icon: <Smartphone size={24} className="text-primary-600 dark:text-primary-400" />
    },
    {
      name: 'Game Optimization',
      level: 85,
      description: 'Performance optimization, frame rate improvement, build size reduction, and mobile optimization.',
      icon: <Zap size={24} className="text-primary-600 dark:text-primary-400" />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.1, 0.7, 0.3, 1]
      },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "backOut"
      }
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.3,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute -right-20 -top-20 w-96 h-96 bg-primary-100 dark:bg-primary-900/10 rounded-full filter blur-3xl opacity-50"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={headerVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white"
          >
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </motion.h2>

          <motion.div
            variants={headerVariants}
            className="w-20 h-1.5 bg-primary-600 dark:bg-primary-400 mx-auto mb-10 rounded-full"
          />

          <motion.p
            variants={headerVariants}
            className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg"
          >
            My technical expertise and professional skills that I've developed throughout my career.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={skillCardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 cursor-pointer"
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 mr-4">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                    <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="h-2.5 rounded-full bg-primary-600 dark:bg-primary-400"
                        custom={skill.level}
                        variants={progressBarVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
                <motion.p
                  className="text-gray-700 dark:text-gray-300 text-sm pl-14"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeSkill === index ? 'auto' : 0,
                    opacity: activeSkill === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={headerVariants}
            className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Additional Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
              {[
                'Team Collaboration', 'Team Management', 'Fast Learning',
                'API Integration', 'Firebase', 'Git & Version Control',
                'Agile Methodologies', 'Technical Writing', 'Debugging',
                'Performance Optimization', 'Code Review', 'Mentoring'
              ].map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;