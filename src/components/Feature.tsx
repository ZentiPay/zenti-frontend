"use client";

import React from "react";
import { motion } from "framer-motion";
import { CONTAINER_VARIANTS, FEATURES, TEXT_VARIANTS } from "@/utils/constants";
import Image from "next/image";

const Feature = () => {
  return (
    <div id="features" className="py-12 lg:py-24">
      <motion.div
        className=""
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            className="text-lg font-semibold text-light-primary"
            variants={TEXT_VARIANTS}
          >
            ZentiPay Features{" "}
          </motion.h1>
          <motion.p
            className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-pretty text-gray-900 lg:text-balance"
            variants={TEXT_VARIANTS}
          >
            Everything you need
          </motion.p>
        </div>
        <div className="mx-auto mt-16 lg:mt-24">
          <div className="flex flex-col md:flex-row lg:flex-row justify-center text-center gap-y-12 md:gap-x-12 lg:gap-x-12">
            {FEATURES.map((feature) => (
              <motion.div
                key={feature.name}
                className="relative w-full md:w-48 lg:w-84 flex flex-col items-center px-8 pt-4 pb-8 border-1 border-light-border rounded-xl shadow-light-card-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="absolute top-[-20px] flex size-10 items-center justify-center rounded-lg bg-light-bubble-user">
                  <Image
                    aria-hidden="true"
                    src={feature.icon}
                    width={24}
                    height={24}
                    alt="icon"
                    className="text-light-primary"
                  />
                </div>
                <p className="text-lg font-bold pt-4">{feature.name}</p>

                <p className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Feature;
