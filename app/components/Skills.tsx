import React from "react";
import { IconCloud } from "./ui/IconCloud";
import { ShimmerButton } from "./ui/ShimmerButton";

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
          <div className="flex flex-wrap justify-center gap-2">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Frontend
              </span>
            </ShimmerButton>
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Backend
              </span>
            </ShimmerButton>
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Testing
              </span>
            </ShimmerButton>
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Collaboration
              </span>
            </ShimmerButton>
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Wireframing
              </span>
            </ShimmerButton>
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Prototyping
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
