import React from "react";
import { IconCloud } from "./ui/IconCloud";
import { RainbowButton } from "./RainbowButton";

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
  "langChain",
  "redux",
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
          <div className="relative flex size-full max-w-lg items-between justify-center overflow-hidden rounded-lg border bg-gray-800 dark:bg-white">
            <IconCloud images={images} />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-4xl">i am skilled in.</h2>
          <br />
          <div className="flex flex-wrap justify-center gap-2">
            <RainbowButton className="shadow-2xl bg-black text-white dark:bg-white dark:text-black">
              Frontend Developement
            </RainbowButton>
            <RainbowButton className="shadow-2xl bg-black text-white dark:bg-white dark:text-black">
              Backend Developement
            </RainbowButton>
            <RainbowButton className="shadow-2xl bg-black text-white dark:bg-white dark:text-black">
              Testing
            </RainbowButton>
            <RainbowButton className="shadow-2xl bg-black text-white dark:bg-white dark:text-black">
              Collaboration
            </RainbowButton>
            <RainbowButton className="shadow-2xl bg-black text-white dark:bg-white dark:text-black">
              Wireframing
            </RainbowButton>
            <RainbowButton className="shadow-2xl bg-black text-white dark:bg-white dark:text-black">
              Prototyping
            </RainbowButton>
            <RainbowButton className="shadow-2xl bg-black text-white dark:bg-white dark:text-black">
              CI/ CD Pipelines
            </RainbowButton>
            <RainbowButton className="shadow-2xl bg-black text-white dark:bg-white dark:text-black">
              Debugging
            </RainbowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
