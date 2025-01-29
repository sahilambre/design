"use client";
import React from "react";
import Image from "next/image";
import aboutImage from "@/public/aboutImage.webp";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";
import { motion } from "motion/react";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div>
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
              <br /> Part-time Guitarist.
            </h1>
            <p className="text-lg text-black dark:text-white mt-6">
              I enjoy crafting intuitive and interactive digital experiences.
              With expertise in modern web technologies like React, Next.js, and
              Node.js, I focus on creating seamless and optimized applications.
              <br />
              <span className="font-semibold">
                Beyond coding, I love exploring AI integrations, optimizing
                performance, and staying updated with emerging tech trends. When
                I’m not at my desk, you’ll find me strumming my guitar or
                refining my fitness goals.
              </span>
            </p>
            {/* <p className="text-lg text-black dark:text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            cumque quia non aliquam voluptatum praesentium vel tempora
            voluptatem atque eaque error cupiditate, earum possimus nemo!{" "}
            <span className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              quisquam?
            </span>
          </p> */}
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
              I specialize in full-stack web development, with expertise in
              React.js, Next.js, TypeScript, and Tailwind CSS for building
              dynamic and responsive user interfaces. On the backend, I work
              with Node.js, Express.js, and Python, ensuring robust and scalable
              server-side applications.
            </p>
            <p className="text-black dark:text-white mt-4">
              I have experience with databases like MongoDB, MySQL, and
              PostgreSQL, along with cloud services such as Firebase and AWS for
              seamless deployment and data management. My background in AI/ML
              includes working with TensorFlow, Scikit-Learn, Pandas, and NumPy,
              allowing me to integrate intelligent solutions into applications.
            </p>
            <p className="text-black dark:text-white mt-4">
              I’m also proficient in Git, GitHub, and Jira, making collaboration
              and project management efficient. Passionate about
              problem-solving, I continuously explore new technologies to create
              innovative, high-performance solutions.
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
                <strong>
                  The Yiddish Arts and Academics Association of North America{" "}
                </strong>{" "}
                ·
                <br />
                <em>Aug 2024 - Present</em> <br />
                Full Stack Developer
              </li>
              <li>
                <strong>Vighnahara Engineering Solutions</strong>· <br />
                <em>August 2021 - July 2022</em> <br />
                Full Stack Developer
              </li>
              <li>
                <strong>Dezignolics Web and Software Solutions </strong> ·{" "}
                <br /> <em>Dec 2020 - July 2021</em>
                <br />
                Software Engineering Intern
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
              <Link href="https://twitter.com/_sahilambre">
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
                2022 - 2024 <br />
                Master&apos;s in Computer Science
              </li>
              <li>
                <strong>Mumbai University</strong> <br />
                2018 - 2022
                <br />
                Bachelor&apos;s in Computer Engineering
              </li>
            </ul>
            <div className="mt-6">
              {/* <button className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-lg">
              Resume
            </button> */}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
