"use client";
import React from "react";
import Image from "next/image";
import aboutImage from "@/public/aboutImage.webp";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";
import { motion } from "motion/react";

const AboutPage = () => {
  return (
    <div className="bg-beige text-black dark:bg-black px-4 md:px-16 lg:px-24 xl:px-80 py-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Section - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={aboutImage}
            alt="About Image"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right Section - Info */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold text-black dark:text-white leading-snug">
            Full Stack Developer, <br /> Graduated <br /> in Computer Science,{" "}
            <br /> Lorem, ipsum dolor..
          </h1>
          <p className="text-lg text-black dark:text-white mt-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            similique quidem delectus dolor quam id saepe. Illo earum rem
            deleniti!{" "}
            <span className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              ea ad, in fugit corrupti odio.
            </span>
          </p>
          <p className="text-lg text-black dark:text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            cumque quia non aliquam voluptatum praesentium vel tempora
            voluptatem atque eaque error cupiditate, earum possimus nemo!{" "}
            <span className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              quisquam?
            </span>
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row gap-16 py-12 pl-0 md:pl-20 lg:pl-20">
        {/* Skills & Interests Column */}
        <motion.div
          className="w-full lg:w-1/3"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-black dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            iste dicta nam obcaecati incidunt exercitationem atque eaque ullam
            facere eos voluptatem, totam nesciunt repellat ipsum reprehenderit
            minima! Assumenda, cum qui.
          </p>
          <p className="text-black dark:text-white mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            iure quam veniam excepturi iste minima asperiores quae et debitis
            voluptas hic nulla maiores, quia quo?
          </p>
          <p className="text-black dark:text-white mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            quidem eos consequatur rem dolore suscipit sed perferendis inventore
            eligendi unde.
          </p>
        </motion.div>

        {/* Experience Column */}
        <motion.div
          className="w-full lg:w-1/3"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Experience
          </h2>
          <ul className="text-black dark:text-white space-y-4">
            <li>
              <strong>Company</strong> · 20xx - 20xx · (Remote) <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              nam sed itaque laborum qui ab eaque dicta cum culpa corporis.
            </li>
            <li>
              <strong>Company</strong> · 20xx
            </li>
            <li>
              <strong>Company</strong> · Intern · 20xx <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus nulla dolore laborum totam! Enim nulla quaerat facere
              et cumque odit.
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-black dark:text-white mt-4">
            Contact
          </h2>
          <h3 className="text-xl font-semibold text-black dark:text-white mt-4">
            Email
          </h3>
          <p className="text-black dark:text-white text-lg">
            sahil01ambre@gmail.com
          </p>
          <h3 className="text-xl font-semibold text-black dark:text-white mt-2 mb-3">
            Social
          </h3>
          <div className="flex gap-2">
            <Link href="https://twitter.com/sahilambre">
              {" "}
              <RiTwitterXLine className="text-xl text-black dark:text-white " />{" "}
            </Link>
            <Link
              href="https://github.com/sahilambre"
              className="text-xl text-black dark:text-white"
            >
              <IoLogoGithub />
            </Link>
          </div>
        </motion.div>

        {/* Education Column */}
        <motion.div
          className="w-full lg:w-1/3"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Education
          </h2>
          <ul className="text-black dark:text-white space-y-4">
            <li>
              <strong>Stevens Institute of Technology</strong> <br />
              20XX - 20XX <br />
              Degree Name
            </li>
            <li>
              <strong>Mumbai University</strong> <br />
              2018 - 2022
              <br />
              Degree Name
            </li>
          </ul>
          <div className="mt-6">
            <button className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-lg">
              Resume
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
