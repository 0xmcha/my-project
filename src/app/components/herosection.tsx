'use client';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.png';
import { motion } from 'framer-motion';
import stripes1 from '../../../public/stripe2.png';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-bl from-neutral-900 md:h-[600px] h-fit  to-neutral-900">
      {/* stripes */}
      <Image
        className="absolute invisible md:visible h-[593px]  object-cover "
        src={stripes1}
        width={10800}
        alt="stripes"
      />
      <div className="container mx-auto flex  px-5 py-24 md:flex-row flex-col items-center">
        {/* Logo */}

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={logo}
            width={400}
            height={200}
          />
        </div>
        {/* Text Center */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <motion.h1
            className="title-font sm:text-7xl text-3xl mb-4 font-medium text-zinc-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We build clever
          </motion.h1>
          <motion.p
            className="mb-8 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent text-4xl leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Custom Application and Websites
          </motion.p>
          <motion.p
            className="title-font sm:text-5xl text-2xl mb-4 font-medium text-zinc-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            that create change.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
