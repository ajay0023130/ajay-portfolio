"use client";
import { motion } from "framer-motion";

const StairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] }
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        // Implicit return of the motion.div
        <motion.div
          key={index}
          variants={StairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4, // Slow duration for the effect
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1 // Staggered delay
          }}
          className="w-full h-full bg-white relative"
          style={{ zIndex: reverseIndex(index) }}
        />
      ))}
    </>
  );
};

export default Stairs;
