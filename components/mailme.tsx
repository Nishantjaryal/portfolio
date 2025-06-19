"use client";
// import React, { useState } from "react";
import WavyBackground from './ui/WavyBackground';
// import MagicButton from "./ui/MagicButton";
// import { FaCopy } from "react-icons/fa";
// import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";


export function WavyBackgroundDemo() {
  // const [text, setText] = useState("Copy Email");
  // const [icon_code, Set_icon_code] = useState(<FaCopy className="w-[18px] h-[18px]" />);
  // const copyToClipboard = async () => {
  //   const textToCopy = "nisnantjaryal24@gmail.com";
  //   if (textToCopy) {
  //     await navigator.clipboard.writeText(textToCopy);
  //   }
  //   setText("Copied");
  //   Set_icon_code(<IoCheckmarkDoneCircleSharp className="w-[22px] h-[22px]"/> )
  // };
  return (
    <WavyBackground className="max-w-4xl z-[100] w-full mx-auto pb-[18rem] sm:pb-[15rem] h-[320px] max-sm:h-[150px]  flex items-center max-sm:mb-10 justify-center flex-col max-sm:gap-4 pop-animation2">
      <p className="w-[90%] md:text-5xl lg:text-7xl relative bg-clip-text text-6xl  font-bold tracking-tight text-transparent bg-no-repeat leading-none  bg-gradient-to-r from-blue-700 via-pink-500 to-violet-600  inter-var text-center">
        Renowned for my work
      </p>
      {/* <p className="  text-lg  mb-5 text-gray-200 font-normal inter-var text-center max-sm:px-5">
      Showcase skills, passion, creativity and Collaborate. Copy my Email to get in Touch
      </p> */}
      {/* <MagicButton
        title={text}
        otherClasses="bg-black-200 mt-0"
        icon={icon_code}
        position="left"
        handleClick={copyToClipboard}
      /> */}
    </WavyBackground>
  );
}
