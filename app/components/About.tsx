import Image from "next/image";
import React from "react";
import aboutImage from "@/public/iwritecode.webp";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-[80vh]">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 bg-gray-400 flex justify-center items-center p-4">
          <Image src={aboutImage} alt="aboutImage" width={600} height={600} />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4 border border-solid-black">
          <p className="text-center text-2xl px-12 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            euismod nisi a risus venenatis, et efficitur metus vehicula. Sed ac
            ligula et ipsum fermentum hendrerit. Duis tristique dui sit amet
            tincidunt volutpat.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
