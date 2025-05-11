import React from "react";
import img from "public/image_9.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
         fill
          src={img}
          alt="sample image"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex items-center justify-center h-full">
        <h1 className="text-6xl font-bold text-white">I Love Nature!!</h1>
      </div>
    </div>
  );
};

export default Hero;
