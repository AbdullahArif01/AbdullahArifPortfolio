import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Cpu, Database, Zap, Layers } from 'lucide-react';

const TechStack: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const controls = useAnimation();
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const technologies = [
    {
      name: 'Unity Engine',
      icon: <Smartphone size={24} />,
      color: '#ffffff',
      description: 'Cross-platform game development with 2D, 3D, VR/AR capabilities',
      proficiency: 92
    },
    {
      name: 'C#',
      icon: <Code size={24} />,
      color: '#239120',
      description: 'Object-oriented programming, Unity scripting, .NET development',
      proficiency: 90
    },
    {
      name: 'Photon Networking',
      icon: <Cpu size={24} />,
      color: '#ec2025',
      description: 'Multiplayer game development with real-time networking',
      proficiency: 85
    },
    {
      name: 'Meta Quest SDK',
      icon: <Smartphone size={24} />,
      color: '#1f1f1f',
      description: 'VR game development for Meta Quest 2, 3, and Pro',
      proficiency: 90
    },
    {
      name: 'Java & Spring Boot',
      icon: <Cpu size={24} />,
      color: '#007396',
      description: 'Backend development, RESTful APIs, enterprise applications',
      proficiency: 80
    },
    {
      name: 'Cross-Platform Dev',
      icon: <Database size={24} />,
      color: '#00d4ff',
      description: 'Android, iOS, PC, WebGL, and VR platform deployment',
      proficiency: 88
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.1, 0.7, 0.3, 1]
      },
    },
  };

  const techCardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (proficiency: number) => ({
      width: `${proficiency}%`,
      transition: {
        duration: 1.5,
        delay: 0.3,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Wave divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          className="w-full h-[40px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white dark:fill-gray-900"
          ></path>
        </svg>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute -left-20 top-1/3 w-72 h-72 bg-secondary-100 dark:bg-secondary-900/10 rounded-full filter blur-3xl opacity-50"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-20 bottom-1/4 w-64 h-64 bg-primary-100 dark:bg-primary-900/10 rounded-full filter blur-3xl opacity-50"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white"
          >
            My <span className="text-primary-600 dark:text-primary-400">Tech Stack</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1.5 bg-primary-600 dark:bg-primary-400 mx-auto mb-10 rounded-full"
          />

          <motion.p
            variants={itemVariants}
            className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg"
          >
            Technologies and tools I use to bring products to life
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 cursor-pointer group relative overflow-hidden"
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Hover overlay effect */}
                <motion.div
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredTech === index ? 0.1 : 0,
                    backgroundColor: tech.color
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="p-3 rounded-xl mr-4 flex-shrink-0"
                      style={{
                        backgroundColor: `${tech.color}20`,
                        color: tech.color
                      }}
                      animate={{
                        scale: hoveredTech === index ? 1.1 : 1,
                        rotate: hoveredTech === index ? 5 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tech.icon}
                    </motion.div>
                    <motion.h3
                      className="font-bold text-lg text-gray-900 dark:text-white"
                      animate={{
                        color: hoveredTech === index ? tech.color : ''
                      }}
                    >
                      {tech.name}
                    </motion.h3>
                  </div>

                  <motion.p
                    className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1"
                    animate={{
                      opacity: hoveredTech === index ? 1 : 0.8,
                    }}
                  >
                    {tech.description}
                  </motion.p>

                  <div className="mt-auto">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>Proficiency</span>
                      <span>{tech.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        custom={tech.proficiency}
                        variants={progressBarVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="h-full rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;