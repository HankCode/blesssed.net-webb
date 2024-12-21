"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="w-6 h-10 border-2 border-gray-800 rounded-full p-1"
      initial={{ y: 0 }}
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
      <motion.div
        className="w-1 h-2 bg-gray-800 rounded-full mx-auto"
        initial={{ y: 0 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
