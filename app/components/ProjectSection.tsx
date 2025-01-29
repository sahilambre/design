import React from "react";
import Image from "next/image";
import aboutImage from "@/public/iwritecode.webp";
import { FaGithub } from "react-icons/fa";

const ProjectSection = () => {
  return (
    <div className="bg-white text-black dark:text-white dark:bg-black">
      <div className="container mx-auto p-6 py-24 px-4 lg:px-24 xl:px-80 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg shadow-md bg-black text-white dark:bg-white dark:text-black">
            <Image
              src={aboutImage}
              alt="AI Agent"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">AI Agent.</h3>
            <p className="text-white dark:text-black mb-4 ">
              Developed an AI-powered app using LangChain, LangGraph, and Convex
              DB for dynamic data handling and NLP integration. Built a scalable
              Next.js architecture with modular components and optimized API
              interactions.
            </p>
            <button className="bg-white text-black dark:bg-black dark:text-white p-2 rounded-md">
              <a
                href="https://github.com/yourusername/job-seeking-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                View on <FaGithub className="inline text-2xl pb-1" />
              </a>
            </button>
          </div>

          <div className="p-4 border rounded-lg shadow-md bg-black text-white dark:bg-white dark:text-black">
            <Image
              src={aboutImage}
              alt="Elderly gaming platform"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Elderly gaming platform
            </h3>
            <p className="text-white dark:text-black mb-4">
              Built a React and Node.js-based platform with a virtual reward
              system to boost medication adherence. Enhanced reliability with
              Jest testing and integrated Redux for efficient state management.
            </p>
            <button className="bg-white text-black dark:bg-black dark:text-white p-2 rounded-md">
              <a
                href="https://github.com/yourusername/job-seeking-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                View on <FaGithub className="inline text-2xl pb-1" />
              </a>
            </button>
          </div>

          <div className="p-4 border rounded-lg shadow-md bg-black text-white dark:bg-white dark:text-black">
            <Image
              src={aboutImage}
              alt="Full Stack Blogging Web Application"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Full Stack Blogging Web Application
            </h3>
            <p className="text-white dark:text-black mb-4">
              Developed a dynamic blogging platform using MongoDB, Mongoose, and
              Handlebars for optimized data handling and performance.
              Implemented JWT authentication for secure user access and improved
              overall UX.
            </p>
            <button className="bg-white text-black dark:bg-black dark:text-white p-2 rounded-md">
              <a
                href="https://github.com/yourusername/job-seeking-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                View on <FaGithub className="inline text-2xl pb-1" />
              </a>
            </button>
          </div>

          <div className="p-4 border rounded-lg shadow-md bg-black text-white dark:bg-white dark:text-black">
            <Image
              src={aboutImage}
              alt="Job Seeking Platform"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Job Seeking Platform</h3>
            <p className="text-white dark:text-black mb-4">
              Secured user authentication with bcrypt and streamlined resume
              uploads using multer. Designed personalized dashboards with
              dynamic rendering to enhance user engagement.
            </p>
            <button className="bg-white text-black dark:bg-black dark:text-white p-2 rounded-md">
              <a
                href="https://github.com/yourusername/job-seeking-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                View on <FaGithub className="inline text-2xl pb-1" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
