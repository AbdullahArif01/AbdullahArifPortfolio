import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setFocusedFields(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setFocusedFields(prev => ({ ...prev, [field]: false }));
  };

  const createRipple = (e: React.MouseEvent) => {
    const button = buttonRef.current;
    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - (button.getBoundingClientRect().left + radius)}px`;
    circle.style.top = `${e.clientY - (button.getBoundingClientRect().top + radius)}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

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

  const mapVariants = {
    hidden: { rotateY: 0, scale: 0.9 },
    visible: {
      rotateY: 360,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
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
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white"
          >
            Let's Build Your<span className="text-primary-600 dark:text-primary-400"> Dream Game</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1.5 bg-primary-600 dark:bg-primary-400 mx-auto mb-10 rounded-full"
          />

          <motion.p
            variants={itemVariants}
            className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg"
          >
            Whether you need an immersive VR experience for Meta Quest, a multiplayer battle royale, a mobile hypercasual game, or a professional backend system – I'm here to help turn your vision into reality. With 4+ years of experience and 50+ successful projects, I deliver quality, performance, and reliability.
          </motion.p>

          <div className="grid md:grid-cols-5 gap-8">
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 space-y-6"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href="mailto:arifa2908@gmail.com" className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
                        arifa2908@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <a href="tel:+923440456836" className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
                        +92 344 0456836
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-gray-900 dark:text-white">
                        Lahore, Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Resume</h4>
                  <motion.a
                    href="/Abdullah_Arif_CV.pdf"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-sm relative overflow-hidden"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={16} className="mr-2" />
                    Download CV
                  </motion.a>
                </div>

                {/* 3D Map Element */}
                <motion.div
                  className="mt-8 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden"
                  variants={mapVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <div className="relative h-48">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.4869427902!2d74.2037425!3d31.4832208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                      <MapPin size={16} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="md:col-span-3 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">Send a Message</h3>

              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit}>
                {/* Floating Label Name Field */}
                <div className="relative mb-6">
                  <motion.label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-200 ${focusedFields.name || formData.name
                      ? 'top-0 text-xs text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-900 px-1 -mt-2'
                      : 'top-3 text-gray-500 dark:text-gray-400'
                      }`}
                    initial={false}
                    animate={{
                      y: focusedFields.name || formData.name ? -12 : 0,
                      fontSize: focusedFields.name || formData.name ? '0.75rem' : '1rem'
                    }}
                  >
                    Your Name
                  </motion.label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                {/* Floating Label Email Field */}
                <div className="relative mb-6">
                  <motion.label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 ${focusedFields.email || formData.email
                      ? 'top-0 text-xs text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-900 px-1 -mt-2'
                      : 'top-3 text-gray-500 dark:text-gray-400'
                      }`}
                    initial={false}
                    animate={{
                      y: focusedFields.email || formData.email ? -12 : 0,
                      fontSize: focusedFields.email || formData.email ? '0.75rem' : '1rem'
                    }}
                  >
                    Your Email
                  </motion.label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                {/* Floating Label Message Field */}
                <div className="relative mb-6">
                  <motion.label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-200 ${focusedFields.message || formData.message
                      ? 'top-0 text-xs text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-900 px-1 -mt-2'
                      : 'top-3 text-gray-500 dark:text-gray-400'
                      }`}
                    initial={false}
                    animate={{
                      y: focusedFields.message || formData.message ? -12 : 0,
                      fontSize: focusedFields.message || formData.message ? '0.75rem' : '1rem'
                    }}
                  >
                    Your Message
                  </motion.label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <button
                  ref={buttonRef}
                  type="submit"
                  disabled={isSubmitting}
                  onClick={createRipple}
                  className={`relative overflow-hidden inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-md ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
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
      {/* Ripple effect styles */}
      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.7);
          transform: scale(0);
          animation: ripple 600ms linear;
          pointer-events: none;
        }

        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;