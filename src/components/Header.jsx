import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50 flex items-center justify-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <h1 className="text-xl font-bold text-gray-800">Hot Programs</h1>
    </motion.header>
  );
}

export default Header;