import React from "react";
import { motion } from "framer-motion";
import { TEXT_VARIANTS, CONTAINER_VARIANTS } from "@/utils/constants";

const HeroSection: React.FC = () => {

  return (
    <section id="product" className="relative flex items-center py-12 lg:py-28">
      <div className="container mx-auto">
        <motion.div
          className="text-center"
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            variants={TEXT_VARIANTS}
          >
            Zenti Pay
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl lg:text-3xl text-gray-700 mb-6"
            variants={TEXT_VARIANTS}
          >
            Send USD like you send a message.
          </motion.p>
          <motion.div className="mb-8" variants={TEXT_VARIANTS}>
            <span className="inline-block px-8 py-4 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-900 bg-clip-text text-transparent">
              COMING SOON
            </span>
            <p className="text-gray-600 mt-2">
              Be the first to experience the change.
            </p>
          </motion.div>
          {/* <TransitionOptions/> */}
          <motion.div
            variants={TEXT_VARIANTS}
            className="relative h-32 md:h-48 max-w-2xl mx-auto"
          >
            <motion.div
              className="absolute h-12 w-12 lg:h-32 lg:w-32 md:h-48 md:w-48 rounded-full bg-blue-500 opacity-75"
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 20, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ left: "10%", top: "10%" }}
            />
            <motion.div
              className="absolute h-20 w-20 md:h-32 md:w-32 rounded-full bg-blue-300 opacity-75"
              animate={{
                scale: [1, 1.15, 1],
                x: [0, 10, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ right: "50%", top: "20%" }}
            />
            <motion.div
              className="absolute h-24 w-24 md:h-40 md:w-40 rounded-full bg-blue-400 opacity-75"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, -30, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ right: "15%", bottom: "5%" }}
            />
            <motion.div
              className="absolute h-20 w-20 md:h-32 md:w-32 rounded-full bg-blue-300 opacity-75"
              animate={{
                scale: [1, 1.15, 1],
                x: [0, 10, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ right: "30%", top: "20%" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
