import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, ArrowRight, Palette, Home, Server, Activity, Hand, Target, Download, Lock, Video, Dumbbell, Sparkles, BookOpen, Headphones } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projects';

// Icon mapping for projects
const getProjectIcon = (projectId: string) => {
  const iconProps = { size: 24 };
  switch (projectId) {
    case 'arthub':
      return <Palette {...iconProps} />;
    case 'rentelligence':
      return <Home {...iconProps} />;
    case 'rentelligence-backend':
      return <Server {...iconProps} />;
    case 'hand-rehab':
      return <Hand {...iconProps} />;
    case 'habit-tracker':
      return <Target {...iconProps} />;
    case 'status-saver':
      return <Download {...iconProps} />;
    case 'vault':
      return <Lock {...iconProps} />;
    case 'camera-feed':
      return <Video {...iconProps} />;
    case 'gym-management-system':
      return <Dumbbell {...iconProps} />;
    case 'artivibe':
      return <Sparkles {...iconProps} />;
    case 'blog-website':
      return <BookOpen {...iconProps} />;
    default:
      return <Monitor {...iconProps} />;
  }
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'vr' | 'web' | 'mobile'>('vr');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isChanging, setIsChanging] = useState(false);

  const handleTabChange = (tab: 'vr' | 'web' | 'mobile') => {
    setIsChanging(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => {
        setIsChanging(false);
      }, 100);
    }, 400);
  };

  // Get featured projects or limit to 3 per category
  const vrProjects = projects
    .filter(p => p.category === 'vr')
    .slice(0, 3)
    .map(project => ({
      id: project.id,
      title: project.title,
      icon: getProjectIcon(project.id),
      description: project.shortDesc,
      technology: project.technologies.slice(0, 3).join(', '),
      image: (project.cardImage ?? project.images[1] ?? project.images[0]) || 'https://via.placeholder.com/600/400',
      link: `/projects/${project.id}`
    }));

  const webProjects = projects
    .filter(p => p.category === 'web')
    .slice(0, 3)
    .map(project => ({
      id: project.id,
      title: project.title,
      icon: getProjectIcon(project.id),
      description: project.shortDesc,
      technology: project.technologies.slice(0, 3).join(', '),
      image: (project.cardImage ?? project.images[1] ?? project.images[0]) || 'https://via.placeholder.com/600/400',
      link: `/projects/${project.id}`
    }));

  const mobileProjects = projects
    .filter(p => p.category === 'mobile')
    .slice(0, 3)
    .map(project => ({
      id: project.id,
      title: project.title,
      icon: getProjectIcon(project.id),
      description: project.shortDesc,
      technology: project.technologies.slice(0, 3).join(', '),
      image: (project.cardImage ?? project.images[1] ?? project.images[0]) || 'https://via.placeholder.com/600/400',
      link: `/projects/${project.id}`
    }));

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>

          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto mb-12 rounded-full" />

          {/* Tab Switcher with Animated Icons */}
          <div className="flex justify-center mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg flex items-center">
              <button
                onClick={() => handleTabChange('vr')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'vr'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <Headphones className={`transition-all duration-300 ${activeTab === 'vr' ? 'animate-pulse' : ''}`} size={20} />
                <span>VR</span>
              </button>
              <button
                onClick={() => handleTabChange('web')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${activeTab === 'web'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <Monitor className={`transition-all duration-300 ${activeTab === 'web' ? 'animate-pulse' : ''}`} size={20} />
                <span>Web</span>
              </button>
              <button
                onClick={() => handleTabChange('mobile')}
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

          {/* Projects Grid with Morphing Animation */}
          <div className={`transition-all duration-500 ease-in-out transform ${isChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {(activeTab === 'vr' ? vrProjects : activeTab === 'web' ? webProjects : mobileProjects).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(activeTab === 'vr' ? vrProjects : activeTab === 'web' ? webProjects : mobileProjects).map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No {activeTab === 'vr' ? 'VR' : activeTab === 'web' ? 'web' : 'mobile'} projects available at the moment.
                </p>
              </div>
            )}
          </div>

          {/* View All Button */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/projects"
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Background Pulse Effect */}
              <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <span className="relative flex items-center space-x-2">
                <span className="font-medium">View All Projects</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>

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
    </section>
  );
};

// Project card type
interface ProjectCardType {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  technology: string;
  image: string;
  link: string;
}

interface ProjectCardProps {
  project: ProjectCardType;
  index: number;
  inView: boolean;
}

// Simpler Project Card Component with reveal effect
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full h-80 transition-all duration-700 delay-${index * 100} transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl group">
        {/* Parallax Background */}
        <div className="absolute inset-0 transition-transform duration-700 ease-out transform group-hover:scale-105">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 backdrop-blur-sm" />

        {/* Content Container */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between transition-all duration-500">
          {/* Icon and Title - Always Visible */}
          <div className="flex items-center space-x-3">
            <div className={`p-2 bg-blue-600 text-white rounded-full transition-all ${isHovered ? 'scale-110' : ''}`}>
              {project.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>

          {/* Description - Always Visible */}
          <div className="mb-4">
            <p className="text-gray-200 mb-2">{project.description}</p>

            {/* Technology Stack - Reveal on Hover */}
            <div
              className={`bg-white/10 backdrop-blur-md rounded-lg p-3 transform transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <p className="text-blue-100 text-sm font-mono">{project.technology}</p>
            </div>
          </div>

          {/* Button - Slide In on Hover */}
          <Link
            to={project.link}
            className={`inline-flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <span>View Project</span>
            <ArrowRight size={16} className={`transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </Link>
        </div>
      </div>

    </div>
  );
}
export default Projects;