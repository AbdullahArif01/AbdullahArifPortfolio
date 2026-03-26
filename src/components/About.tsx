import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Mail, Phone, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <>
      <section id="about" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white"
            >
              About <span className="text-primary-600 dark:text-primary-400">Me</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="w-20 h-1.5 bg-primary-600 dark:bg-primary-400 mx-auto mb-10 rounded-full"
            />

            <div className="flex flex-col md:flex-row gap-8 mb-10">
              {/* Animated Profile Image */}
              <motion.div
                className="flex-shrink-0 mx-auto md:mx-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -15, 0]
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-900/30 shadow-lg">
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow flex-1"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.p
                  className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  I'm a passionate <span className="text-primary-600 dark:text-primary-400 font-medium">Unity Game Developer</span> with 4+ years of expertise in <span className="text-primary-600 dark:text-primary-400 font-medium">VR/AR development</span>, multiplayer games, and <span className="text-primary-600 dark:text-primary-400 font-medium">C# programming</span>.
                </motion.p>
                <motion.p
                  className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Specializing in Meta Quest VR experiences, Photon multiplayer networking, and cross-platform optimization. I deliver high-performance, scalable games with exceptional user experiences for clients worldwide.
                </motion.p>
              </motion.div>
            </div>
            {/* Video Section */}
            <motion.div
              variants={itemVariants}
              className="mb-16"
            >
              <h3 className="font-bold text-2xl mb-6 text-gray-900 dark:text-white">Intro Video</h3>

              <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                  <div className="relative w-full bg-black rounded-xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full border-0"
                      src="https://www.youtube.com/embed/F-RAmWSsyj4?si=QdO792-VnX3NK7-r"
                      title="Abdullah Arif - Portfolio Intro"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Interactive Timeline */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <h3 className="font-bold text-2xl mb-6 text-gray-900 dark:text-white">My Journey</h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                {[
                  {
                    year: "2019",
                    title: "Started University",
                    description: "Began my Bachelor's in Software Engineering",
                    icon: <GraduationCap size={18} />
                  },
                  {
                    year: "2021",
                    title: "First Internship - NineTails",
                    description: "Game Developer Intern, working on mobile games and Unity development",
                    icon: <ChevronRight size={18} />
                  },
                  {
                    year: "2020-Present",
                    title: "Fiverr Level 2 Seller",
                    description: "Delivered 50+ game projects including VR, multiplayer, and mobile games",
                    icon: <ChevronRight size={18} />
                  },
                  {
                    year: "2022",
                    title: "Aperio Games Studio",
                    description: "Game Developer Intern, contributing to commercial projects",
                    icon: <ChevronRight size={18} />
                  },
                  {
                    year: "2023-Present",
                    title: "Teaching & Mentoring",
                    description: "Teaching Unity game development and VR programming to 100+ students",
                    icon: <ChevronRight size={18} />
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-12 pb-8 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary-600 dark:bg-primary-400 transform -translate-x-1/2 z-10"></div>

                    {/* Timeline content */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-5 group-hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-2">
                        <div className="p-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-3">
                          {item.icon}
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                        <span className="ml-auto px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <motion.p
                        className="text-gray-700 dark:text-gray-300 text-sm pl-9"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Liquid shape divider at bottom */}
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
              className="fill-white dark:fill-gray-800"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default About;