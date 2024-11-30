import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Animate = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useCallback((node) => {
    if (node !== null) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(node);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(node);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

Animate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Animate;
