import React from "react";

const Hero = () => {
  return (
    // <div className="bg-beige px-4 md:px-16 lg:px-24 xl:px-80 py-16">
    //   <div className="flex flex-col justify-center h-[70vh] xl:h-[80vh]">
    //     {/* Name */}
    //     <h1 className="text-gray-400 font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight">
    //       Sahil Ambre.
    //     </h1>
    //     {/* Role */}
    //     <h2 className="text-black font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight mt-4">
    //       Software Developer.
    //     </h2>
    //   </div>
    // </div>

    <>
      <div className="px-4 md:px-16 lg:px-24 xl:px-80 py-16">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center h-[40vh]">
            <h1 className="text-gray-400 font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight">
              Sahil Ambre.
            </h1>
            <h1 className="text-black font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight mt-4">
              Software Developer.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
