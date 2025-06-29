
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to cloth unwrap animation
  const clothRotation = useTransform(scrollYProgress, [0, 0.3], [360, 0]);
  const clothScale = useTransform(scrollYProgress, [0, 0.3], [1.5, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0, rotate: 180 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-red-700 shadow-lg overflow-hidden group"
      >
        {/* Red Cloth Animation */}
        <motion.div
          style={{ 
            rotate: clothRotation,
            scale: clothScale,
          }}
          className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-800 rounded-full"
        >
          <div className="absolute inset-2 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-70" />
          <div className="absolute inset-4 bg-gradient-to-br from-red-300 to-red-500 rounded-full opacity-50" />
        </motion.div>

        {/* Button Content */}
        <motion.div
          style={{ opacity: buttonOpacity }}
          className="relative z-10 w-full h-full flex items-center justify-center"
        >
          <ArrowUp 
            size={20} 
            className="text-white drop-shadow-lg group-hover:text-yellow-200 transition-colors" 
          />
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-yellow-500/20 blur-lg group-hover:blur-xl transition-all duration-500" />
      </motion.button>
    </motion.div>
  );
};

export default ScrollToTop;
