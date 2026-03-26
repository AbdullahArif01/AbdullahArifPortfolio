import React from 'react';
import { Heart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/">
                <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 cursor-pointer">Abdullah Arif</h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Unity Game Developer | VR/AR Expert</p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
              <button
                onClick={() => handleNavClick('#home')}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors text-left sm:text-center"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('#about')}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors text-left sm:text-center"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('#skills')}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors text-left sm:text-center"
              >
                Skills
              </button>
              <Link
                to="/projects"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors text-left sm:text-center"
              >
                Projects
              </Link>
              <button
                onClick={() => handleNavClick('#experience')}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors text-left sm:text-center"
              >
                Experience
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors text-left sm:text-center"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="h-px bg-gray-200 dark:bg-gray-800 my-8"></div>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 sm:mb-0">
              © {currentYear} Abdullah Arif. All rights reserved.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> using React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;