import React from 'react';
import { motion } from 'framer-motion';

const FullScreenGlitch = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black">
      <motion.div
        className="w-full h-full absolute top-0 left-0 bg-white animate-glitch"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.8, 0.6, 0.9, 1] }}
        transition={{ duration: 2, times: [0, 0.2, 0.4, 0.6, 1] }}
      ></motion.div>
      <motion.div
        className="w-full h-full absolute top-0 left-0 bg-red animate-glitch"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.8, 0.6, 0.9, 1] }}
        transition={{ duration: 2, times: [0, 0.2, 0.4, 0.6, 1] }}
      ></motion.div>
    </div>
  );
};

export default FullScreenGlitch;
