"use client";

import { motion } from "framer-motion";

interface AnimatedUnderlineProps {
  children: React.ReactNode;
}

export default function AnimatedUnderline({ children }: AnimatedUnderlineProps) {
  return (
    <span className="relative inline-block">
      <motion.span
        className="absolute bottom-0 left-0 h-1 bg-gray-800"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </span>
  );
}
