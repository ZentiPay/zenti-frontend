"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="min-h-screen flex flex-col bg-light-bg"
    >
      <Header />
      <div className="max-w-xs md:max-w-5xl lg:max-w-7xl mx-auto">
        <HeroSection />
        <Feature />
        <Contact />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Home;
