import React from "react";
import Image from "next/image";
import aboutImage from "@/public/aboutImage.webp";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-beige px-4 md:px-16 lg:px-24 xl:px-80 py-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={aboutImage}
            alt="About Image"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Section - Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 leading-snug">
            Full Stack Developer, <br /> Graduated <br /> in Computer Science,{" "}
            <br /> Lorem, ipsum dolor..
          </h1>
          <p className="text-lg text-gray-700 mt-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            similique quidem delectus dolor quam id saepe. Illo earum rem
            deleniti!{" "}
            <span className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              ea ad, in fugit corrupti odio.
            </span>
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            cumque quia non aliquam voluptatum praesentium vel tempora
            voluptatem atque eaque error cupiditate, earum possimus nemo!{" "}
            <span className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              quisquam?
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-16 py-12 pl-0 md:pl-20 lg:pl-20">
        {/* Skills & Interests Column */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            iste dicta nam obcaecati incidunt exercitationem atque eaque ullam
            facere eos voluptatem, totam nesciunt repellat ipsum reprehenderit
            minima! Assumenda, cum qui.
          </p>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            iure quam veniam excepturi iste minima asperiores quae et debitis
            voluptas hic nulla maiores, quia quo?
          </p>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            quidem eos consequatur rem dolore suscipit sed perferendis inventore
            eligendi unde.
          </p>
        </div>

        {/* Experience Column */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
          <ul className="text-gray-700 space-y-4">
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
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Contact</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">Email</h3>
          <p className="text-gray-700 text-lg">sahil01ambre@gmail.com</p>
          <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
            Social
          </h3>
          <div className="flex gap-2">
            <Link href="https://twitter.com/sahilambre">
              {" "}
              <RiTwitterXLine className="text-xl text-black " />{" "}
            </Link>
            <Link
              href="https://github.com/sahilambre"
              className="text-xl text-black "
            >
              <IoLogoGithub />
            </Link>
          </div>
        </div>

        {/* Education Column */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
          <ul className="text-gray-700 space-y-4">
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
            <button className="px-4 py-2 bg-black text-white font-semibold rounded-lg">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
