import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import  MagicButton  from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 w-full ">
      <div className="max-w-7xl w-full">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen opa"
          fill="white"
        />
        <Spotlight
          className="top-10 left-[80vw]  h-[80vh] w-[50vw] opa"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] opa" fill="blue" />
      </div>

      <div className="h-screen w-full bg-black-100 bg-grid-white/[0.03] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="z-10 text-blue-100 uppercase tracking-widest text-xs text-center max-w-80"

            duration={1} filter={false}

            words="Developing modern design solutions"
          />

          <TextGenerateEffect
            className=" text-center text-[35px] 
            md:text-4xl lg:text-6xl tracking-tight leading-none"


            words="Transforming Design Concepts Into Real World Projects"
          />

          <TextGenerateEffect
            className="z-10 text-white text-center md:tracking-wider mb-4 text-sm md:text-lg mt-4 lg:text-2xl"


            duration={2} filter={false}

            words="Hi, I&apos;m Nishant, A Passionated Web Developer"
          />


          <a href="https://github.com/Nishantjaryal"><MagicButton
            title="Show my Work"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="bg-black"
          /></a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
