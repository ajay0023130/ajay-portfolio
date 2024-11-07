"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] xl:w-[506px] xl:h-[506px] rounded-full overflow-hidden mix-blend-lighten relative"
        >
          <Image
            src="/assets/ajay.png"
            priority
            quality={100}
            fill
            alt="alt"
            className="object-cover"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="absolute top-0 left-0 w-[202px] h-[202px] sm:w-[252px] sm:h-[252px] md:w-[352px] md:h-[352px] xl:w-[508px] xl:h-[508px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2009/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
