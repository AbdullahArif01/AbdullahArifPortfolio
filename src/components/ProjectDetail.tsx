import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Play } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { projects, Project } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <HeroSection project={project} />

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Description */}
          <DescriptionSection project={project} />

          {/* Technologies & Features */}
          <div className="grid md:grid-cols-2 gap-12 my-16">
            <TechnologiesSection project={project} />
            <FeaturesSection project={project} />
          </div>

          {/* Image Gallery (exclude hero/card images) */}
          {project.images && project.images.filter(img => img && img !== project.heroImage && img !== project.cardImage).length > 0 && (
            <GallerySection project={project} />
          )}

          {/* Links */}
          <LinksSection project={project} />

          {/* Back Button */}
          <div className="mt-12 flex justify-center">
            <motion.button
              onClick={() => navigate('/projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeft size={20} />
              <span>Back to All Projects</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection: React.FC<{ project: Project }> = ({ project }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <img
          src={project.heroImage ?? project.images[1] ?? 'https://via.placeholder.com/1200x600'}
          alt={project.title}
          className="w-full h-full object-cover "
        />
      </motion.div>

      {/* <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            {project.shortDesc}
          </motion.p>
        </div>
      </div> */}
    </section>
  );
};

const DescriptionSection: React.FC<{ project: Project }> = ({ project }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        About This Project
      </h2>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {project.longDesc}
        </p>
      </div>
    </motion.section>
  );
};

const TechnologiesSection: React.FC<{ project: Project }> = ({ project }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Technologies Used
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="flex flex-wrap gap-3"
      >
        {project.technologies.map((tech) => (
          <motion.span
            key={tech}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg font-semibold shadow-md"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
};

const FeaturesSection: React.FC<{ project: Project }> = ({ project }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Key Features
      </h2>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="space-y-3"
      >
        {project.features.map((feature, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="flex items-start space-x-3"
          >
            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

const GallerySection: React.FC<{ project: Project }> = ({ project }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="my-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Project Gallery
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {project.images
          .filter((img) => img && img !== project.heroImage && img !== project.cardImage)
          .map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
      </motion.div>
    </motion.section>
  );
};

const LinksSection: React.FC<{ project: Project }> = ({ project }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="my-16"
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Project Links
      </h2>
      <div className="flex flex-wrap gap-4">
        {project.links.live && (
          <motion.a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </motion.a>
        )}
        {project.links.github && (
          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github size={20} />
            <span>View Code</span>
          </motion.a>
        )}
        {project.links.demo && (
          <motion.a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Play size={20} />
            <span>Demo Video</span>
          </motion.a>
        )}
      </div>
    </motion.section>
  );
};

export default ProjectDetail;
