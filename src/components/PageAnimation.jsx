import { motion } from 'framer-motion';

export default function PageAnimation({ children }) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
  )
}