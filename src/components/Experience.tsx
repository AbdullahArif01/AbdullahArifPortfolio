import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const width = useTransform(x, [-100, 0, 100], ['90%', '100%', '90%']);

  const experiences = [
    {
      title: 'Unity Game Developer | Level 2 Seller',
      company: 'Fiverr',
      period: '2020 - Present',
      description: [
        'Delivered 50+ Unity game projects including VR experiences, multiplayer games, and mobile applications.',
        'Specialized in Meta Quest VR development with hand tracking and mixed reality features.',
        'Developed multiplayer games using Photon PUN/Fusion with real-time networking.',
        'Created educational VR simulations, open-world games, and hypercasual mobile titles.',
        'Maintained consistent 5-star rating with excellent client communication and project delivery.'
      ]
    },
    {
      title: 'Game Developer Intern',
      company: 'Aperio Games Studio',
      period: '2022',
      description: [
        'Worked on commercial Unity game projects with professional development team.',
        'Contributed to 3D game mechanics, level design, and gameplay programming.',
        'Learned industry-standard workflows including Git version control and Agile methodologies.',
        'Participated in daily standups, code reviews, and sprint planning.',
        'Gained experience in optimization techniques for mobile and PC platforms.'
      ]
    },
    {
      title: 'Game Developer Intern',
      company: 'NineTails',
      period: '2021',
      description: [
        'Assisted in mobile game development using Unity Engine for Android and iOS.',
        'Implemented core game mechanics, UI systems, and player progression features.',
        'Created reusable scripts and prefabs for efficient development.',
        'Participated in code reviews, bug fixing, and testing processes.',
        'Learned best practices for mobile game optimization and performance.'
      ]
    },
    {
      title: 'Programming Instructor',
      company: 'Fiverr & YouTube',
      period: '2021 - Present',
      description: [
        'Teaching Unity game development, C# programming, and VR development to students globally.',
        'Creating educational content and tutorials for aspiring game developers.',
        'Providing one-on-one mentoring on multiplayer networking and game optimization.',
        'Helping students build portfolios and launch game development careers.',
        'Teaching 100+ students with focus on practical project-based learning.'
      ]
    }
  ];

  useEffect(() => {
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

  const connectorVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const handleDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (timelineRef.current) {
      const newX = x.get() + info.delta.x;
      x.set(newX);
    }
  };

  const toggleExpand = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">

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
            className="fill-gray-50 dark:fill-gray-800"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white"
          >
            Work <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1.5 bg-primary-600 dark:bg-primary-400 mx-auto mb-10 rounded-full"
          />

          {/* Interactive Date Scrubber */}
          <motion.div
            className="mb-8 mx-auto max-w-3xl relative"
            drag="x"
            dragConstraints={timelineRef}
            onDrag={handleDrag}
            style={{ x }}
          >
            <div className="flex justify-between px-4">
              {experiences.map((exp, i) => (
                <motion.button
                  key={i}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeIndex === i
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  onClick={() => toggleExpand(i)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {exp.period}
                </motion.button>
              ))}
            </div>
            <motion.div
              className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 mx-4"
              style={{ width }}
            />
          </motion.div>

          <div className="relative" ref={timelineRef}>
            {/* Animated Timeline line */}
            <motion.div
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"
              variants={connectorVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />

            {/* Experience items */}
            <div className="relative md:min-h-[500px]">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative mb-8 ${index % 2 === 0
                      ? 'md:mr-[50%] md:pr-8 md:text-right'
                      : 'md:ml-[50%] md:pl-8'
                    }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute left-0 top-6 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 transform -translate-x-1/2 z-10 ${index % 2 === 0 ? 'md:left-auto md:right-0 md:translate-x-1/2' : ''
                      }`}
                    whileHover={{ scale: 1.5 }}
                  />

                  {/* Content box */}
                  <motion.div
                    className="ml-8 md:ml-0 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="p-6 cursor-pointer">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white">{experience.title}</h3>
                        <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">
                          {experience.period}
                        </span>
                      </div>

                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <Briefcase size={16} className="mr-2" />
                        <span>{experience.company}</span>
                      </div>

                      <ul className="space-y-2">
                        {experience.description.slice(0, activeIndex === index ? undefined : 3).map((item, i) => (
                          <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="min-w-4 h-4 mt-1 mr-2 bg-primary-500/20 dark:bg-primary-400/20 text-primary-800 dark:text-primary-300 flex items-center justify-center rounded-full">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {experience.description.length > 3 && (
                        <div className="mt-4 flex justify-end">
                          <button
                            className="flex items-center text-primary-600 dark:text-primary-400 text-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(index);
                            }}
                          >
                            {activeIndex === index ? (
                              <>
                                Show Less <ChevronUp size={16} className="ml-1" />
                              </>
                            ) : (
                              <>
                                Show More <ChevronDown size={16} className="ml-1" />
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;