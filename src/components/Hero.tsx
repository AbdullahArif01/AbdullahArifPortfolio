import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useAnimation, useSpring } from 'framer-motion';
import { ChevronDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const controls = useAnimation();
  const gradientControls = useAnimation();

  const titles = [
    "Unity Game Developer",
    "VR/AR Specialist",
    "Multiplayer Expert",
    "C# Programmer"
  ];

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 100, damping: 20 });
  const y = useSpring(rawY, { stiffness: 100, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    rawX.set(e.clientX - rect.left - rect.width / 2);
    rawY.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetMouse = () => {
    animate(x, 0, { duration: 0.5 });
    animate(y, 0, { duration: 0.5 });
  };

  // Text morphing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animated gradient background
  useEffect(() => {
    // Use framer-motion's repeat animation instead of an uncontrolled async loop.
    gradientControls.start({
      backgroundPosition: ['0% 50%', '100% 50%'],
      transition: { duration: 15, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }
    });

    return () => {
      gradientControls.stop();
    };
  }, []);

  // Enhanced scroll indicator animation
  useEffect(() => {
    controls.start({
      y: [0, 15, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={gradientControls}
        style={{
          background: 'linear-gradient(135deg, rgba(224,231,255,1) 0%, rgba(199,210,254,1) 20%, rgba(255,255,255,1) 40%, rgba(224,231,255,1) 60%, rgba(199,210,254,1) 80%, rgba(255,255,255,1) 100%)',
          backgroundSize: '300% 300%',
        }}
      />


      {/* Dark mode overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-0 dark:opacity-90 z-0 transition-opacity duration-300" />

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute -right-20 -top-20 w-96 h-96 bg-primary-200 dark:bg-primary-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70"
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
        <motion.div
          className="absolute -left-20 top-1/2 w-72 h-72 bg-secondary-200 dark:bg-secondary-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-70"
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

        {/* Glassmorphism elements */}
        <motion.div
          className="absolute left-1/4 top-1/3 w-48 h-48 rounded-lg backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-gray-700/20"
          animate={{
            rotate: [0, 5, 0, -5, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <motion.span
              className="text-primary-600 dark:text-primary-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Abdullah
            </motion.span> Arif
          </motion.h1>

          {/* Enhanced text morphing animation */}
          <div className="h-12 sm:h-14 md:h-16 overflow-hidden relative mb-8">
            {titles.map((title, index) => (
              <motion.h2
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: textIndex === index ? 1 : 0,
                  y: textIndex === index ? 0 : -20
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className={`text-xl sm:text-2xl absolute left-0 right-0 mx-auto ${textIndex === index ? 'text-gray-700 dark:text-gray-300' : 'text-transparent'
                  }`}
              >
                {title}
              </motion.h2>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-10 text-lg"
          >
            Expert Unity game developer with 4+ years creating VR/AR experiences for Meta Quest,
            multiplayer games using Photon networking, and optimized cross-platform applications.
            Specializing in immersive gameplay, networking architecture, and performance optimization.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex justify-center space-x-4 mb-12"
          >
            {/* Enhanced magnetic button with 3D tilt */}
            <motion.a
              href="#contact"
              style={{
                x,
                y,
              }}
              onMouseMove={handleMouse}
              onMouseLeave={resetMouse}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg relative overflow-hidden"
            >
              {/* Button liquid effect */}
              {hovered && (
                <motion.span
                  className="absolute inset-0 bg-white/20 rounded-lg"
                  initial={{ scale: 0, opacity: 1, borderRadius: '0.5rem' }}
                  animate={{ scale: 10, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Contact Me</span>
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderColor: 'rgba(99, 102, 241, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Enhanced social links with floating effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: GitHub, url: "https://github.com" },
              { icon: Linkedin, url: "https://linkedin.com" },
              { icon: Mail, url: "mailto:ak25117@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -8,
                  scale: 1.2,
                  color: 'rgba(99, 102, 241, 1)',
                  backgroundColor: 'rgba(99, 102, 241, 0.1)'
                }}
                className="text-gray-600 dark:text-gray-400 transition-colors p-3 rounded-full bg-transparent"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator with floating animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        animate={controls}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{
            scaleY: [0.8, 1, 0.8],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-0.5 h-8 bg-gray-500 dark:bg-gray-400 mt-2"
        />
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="text-gray-500 dark:text-gray-400"
        >
          <ChevronDown size={24} />
        </motion.div>

      </motion.div>
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

export default Hero;