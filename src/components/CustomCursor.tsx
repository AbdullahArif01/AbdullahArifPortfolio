import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('.interactive').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      // Cleanup event listeners
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('.interactive').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none transition-transform duration-300 ${
        hovered ? 'bg-blue-600 scale-150' : 'bg-gray-800'
      }`}
      style={{
        transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
      }}
    />
  );
};

export default CustomCursor;