import React from "react";

const Hero = () => {
  return (
    <>
      <div className="px-4 md:px-16 lg:px-24 xl:px-80 py-16 dark:bg-black ">
        {/* dark:bg-black */}
        <div className="flex justify-center">
          <div className="flex flex-col justify-center h-[40vh]">
            <h1 className="text-gray-400 font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight">
              Sahil Ambre.
            </h1>
            <h1 className="text-black dark:text-white font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight mt-4">
              Software Developer.
            </h1>
            {/* dark:text-white */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
