import { useRef } from 'react';
import { motion as m, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollToSection = ({ targetId, children, className = '', offset = 80 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Animation fluide avec spring
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springY = useSpring(scrollYProgress, springConfig);
  const opacity = useTransform(springY, [0, 0.5], [0, 1]);
  const y = useTransform(springY, [0, 1], [50, 0]);

  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <m.div
      ref={ref}
      style={{ opacity, y }}
      className={`scroll-section-link ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </m.div>
  );
};

export default ScrollToSection; 