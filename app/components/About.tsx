import Image from "next/image";
import React from "react";
import aboutImage from "@/public/iwritecode.webp";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-[80vh]">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 bg-gray-400 dark:bg-black dark:text-white flex justify-center items-center p-4">
          <Image
            src={aboutImage}
            alt="aboutImage"
            width={600}
            height={500}
            objectFit="cover"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4 border border-solid-black dark:bg-black dark:text-white">
          <p className="text-center text-3xl px-12 font-medium font-[source-serif-pro]">
            Welcome to my corner of the web! <br />
            <span className="font-[source-serif-pro] text-2xl">
              I&apos;m a curious individual passionate about exploring
              technology, trends, and intriguing conversations. This site
              reflects my journey, showcasing insights and ideas. I&apos;m
              excited to share my thoughts and connect with others who share
              similar interests.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
