"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="dark:text-white mb-4 text-[28px] sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, Im{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Richard Dela Cruz",
                1000,
                "WordPress Developer",
                1000,
                "Shopify Developer",
                1000,
                "React Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="dark:text-white text-base w-full sm:text-lg mb-6 lg:text-xl lg:w-5/6">
            Skilled in developing responsive websites using WordPress, Shopify, React, Next.js, and Native technologies, with expertise in HTML, CSS, JavaScript, and jQuery.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-400 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://docs.google.com/document/d/1vGhbGtdyU5JCdx-rEbV0iBPHhSSPst_Ds3Mge9ooTTk/export?format=pdf&tab=correctTabId"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="block text-lightText dark:text-darkText bg-lightBackground dark:bg-darkBackground hover:bg-lightBackground dark:hover:bg-darkBackground rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full dark:text-white text-black bg-[#f3f3f3] dark:bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/banner.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
