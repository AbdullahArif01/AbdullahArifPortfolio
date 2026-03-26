import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Smartphone, Headphones } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projects';

const ProjectsList = () => {
  const [activeTab, setActiveTab] = useState<'vr' | 'web' | 'mobile'>('vr');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = projects.filter(p => p.category === activeTab);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h1>

          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto mb-12 rounded-full" />

          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and problem-solving approaches.
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg flex items-center">
              <button
                onClick={() => setActiveTab('vr')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'vr'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <Headphones className={`transition-all duration-300 ${activeTab === 'vr' ? 'animate-pulse' : ''}`} size={20} />
                <span>VR</span>
              </button>
              <button
                onClick={() => setActiveTab('web')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'web'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <Monitor className={`transition-all duration-300 ${activeTab === 'web' ? 'animate-pulse' : ''}`} size={20} />
                <span>Web</span>
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'mobile'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <Smartphone className={`transition-all duration-300 ${activeTab === 'mobile' ? 'animate-pulse' : ''}`} size={20} />
                <span>Mobile</span>
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/projects/${project.id}`}>
      <div
        className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Parallax Background (use cardImage if provided, else fallback) */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          animate={isHovered ? { scale: 1.06 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={project.cardImage ?? project.images[1] ?? project.images[0] ?? 'https://via.placeholder.com/600x400'}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Glassmorphism Overlay - lighter so card image remains visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent backdrop-blur-xs" />

        {/* Content Container */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Badge */}
          {project.featured && (
            <div className="self-start">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                Featured
              </span>
            </div>
          )}

          {/* Bottom Content */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-200 mb-4 text-sm line-clamp-2">{project.shortDesc}</p>

            {/* Technology Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-blue-100 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-blue-100 text-xs">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Button */}
            <motion.div
              animate={isHovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-2 text-white"
            >
              <span className="font-medium">View Details</span>
              <ArrowRight size={18} className="transition-transform duration-300" />
            </motion.div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsList;
