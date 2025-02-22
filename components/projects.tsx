"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import Morebtn from "./ui/morebtn";
import Certbtn from "./ui/certbutton";

export function AnimatedPinDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <h2
        className="relative text-center text-[35px] 
            md:text-4xl lg:text-6xl tracking-tight leading-none font-bold text-white "
      >
        Exploring Modern Tech
        <div
          className=" text-center text-[35px] 
            md:text-4xl lg:text-6xl tracking-tight leading-none relative bg-clip-text text-transparent bg-no-repeat font-bold  bg-gradient-to-r from-yellow-500 via-violet-500 to-pink-500 py-4"
        >
          <span className="">To Create Solutions</span>
        </div>
      </h2>

      <div className="flex flex-row flex-wrap justify-center items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" h-[32rem] max-md:h-[28rem]  flex items-center justify-center "
          >
            <PinContainer title={`🔗 ${project.title}`} href={project.link}>
              <div className="flex basis-full flex-col p-2 h-[22rem] tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{project.des}</span>
                </div>

                <div className="flex relative z-10 mt-3 ">
                  {project.iconLists.map((img, idx) => (
                    <Image
                      key={idx}
                      src={img}
                      width={50}
                      height={50}
                      alt="Technology"
                      className="rounded-full  bg-black-200 w-10 h-10 p-1 object-contain"
                    />
                  ))}
                </div>

                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-pink-500 to-blue-500">
                  <Image
                    width={500}
                    height={500}
                    src={project.img}
                    alt={project.des}
                    className="rotate-[2deg] flex flex-1 w-full rounded-lg "
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <div className="p-4 flex gap-4 max-sm:flex-col items-center justify-center">
        <Link href="/projects">
          <Morebtn />
        </Link>
        <Link href="/certifications">
          <Certbtn />
        </Link>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
