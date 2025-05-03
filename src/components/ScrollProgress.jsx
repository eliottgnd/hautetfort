import { useScroll, motion as m } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <m.div
      className="scroll-progress-bar"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress; 