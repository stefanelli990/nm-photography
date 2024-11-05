import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function PageAnimation({ children }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  >
    {children}
  </motion.div>
  )
}