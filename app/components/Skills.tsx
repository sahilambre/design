import React from "react";
import { IconCloud } from "./ui/IconCloud";

const slugs = [
  // "visualstudiocode", todo
  "typescript",
  "javascript",
  // "java",todo
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  // "amazonaws", TODO: add aws
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "git",
  "jira",
  "github",
  "gitlab",
  "figma",
  "mongodb",
];

const Skills = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="text-black bg-white dark:bg-black dark:text-white font-[poppins]">
      <div className="container flex flex-col py-4 md:py-16 md:flex-row mx-auto px-4 md:px-16 lg:px-24 xl:px-80 gap-8 ">
        <div className="w-full md:w-1/2">
          {/* Skillset animation cloud Component */}
          <div className="relative flex size-full max-w-lg items-between justify-center overflow-hidden rounded-lg border bg-white">
            <IconCloud images={images} />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-4xl">i am skilled in.</h2>
          <br />
          <div className="flex flex-wrap justify-center">
            <button className="border border-black p-3 rounded-full my-1 mr-1 bg-black text-white dark:bg-white dark:text-black font-[poppins]">
              Backend
            </button>
            <button className="border border-black p-3 rounded-full my-1 mr-1 bg-black text-white dark:bg-white dark:text-black font-[poppins]">
              Frontend
            </button>
            <button className="border border-black p-3 rounded-full my-1 mr-1 bg-black text-white dark:bg-white dark:text-black font-[poppins]">
              Testing
            </button>
            <button className="border border-black p-3 rounded-full my-1 mr-1 bg-black text-white dark:bg-white dark:text-black font-[poppins]">
              Wireframing
            </button>
            <button className="border border-black p-3 rounded-full my-1 mr-1 bg-black text-white dark:bg-white dark:text-black font-[poppins]">
              Collaboration
            </button>
            <button className="border border-black p-3 rounded-full my-1 mr-1 bg-black text-white dark:bg-white dark:text-black font-[poppins]">
              Prototyping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
