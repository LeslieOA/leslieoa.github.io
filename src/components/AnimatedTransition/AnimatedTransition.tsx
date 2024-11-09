"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTransitionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedTransition = ({
  children,
  className,
}: AnimatedTransitionProps) => {
  return (
    <AnimatePresence>
      <motion.animate
        initial={{ y: 3, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.35 }}
        {...(className && { className })}
      >
        {children}
      </motion.animate>
    </AnimatePresence>
  );
};

export default AnimatedTransition;
