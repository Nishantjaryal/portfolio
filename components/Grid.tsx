"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bentoGrid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import SkeletonFour from "./ui/SkeletonFour";



const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[150px] bg-black-100 overflow-hidden rounded-lg flex-col relative  "
    >
      <div className="absolute w-full rounded-md overflow-hidden">
        <BackgroundGradientAnimation />
      </div>

      <motion.div className=" flex flex-col p-1 gap-1 absolute">
        <motion.div
          variants={variants}
          className=" w-4/5 flex flex-row rounded-lg border border-white/[0.2] p-2  items-start space-x-2 bg-black"
        >
          <Image
            src="/ava2-min.png"
            alt="avatar"
            height={100}
            width={100}
            className="rounded-full h-14 w-14"
          />
          <p className="text-xs  text-neutral-500">
            There are a lot of cool framerworks out there like React, Angular,
            Vue, Svelte that can make your life ....
          </p>
        </motion.div>
        <motion.div
          variants={variantsSecond}
          className="z-10 bg-black flex flex-row rounded-lg border border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto "
        >
          <p className="text-xs text-neutral-500">well done</p>
          <div className="h-7 w-7 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function BentoGridThirdDemo() {
  const items = [
    {
      title: "Your Idea, My Code",
      description: (
        <span className="text-sm">
          Delivering tailored solutions to bring your vision to life.
        </span>
      ),
      header: (
        <Image
        width={1000}
        height={1000}
          src="/z.webp"
          alt="code"

          className="w-full h-[170px] object-cover rounded-lg"
        />
      ),
      className: "md:col-span-1",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Crafting Digital Magic",
      description: (
        <span className="text-sm">
          Designing visually stunning and highly efficient web interfaces.
        </span>
      ),
      header: (
        <Image
        width={1000}
        height={1000}
          src="/b1.svg"
          className="w-full h-[170px] object-cover rounded-lg"
          alt="code"

        />
      ),
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Engineering Excellence",
      description: (
        <span className="text-sm">
          Focused on clean code and seamless user experience.
        </span>
      ),
      header: (
        <Image
          width={1000}
          height={1000}
          src="/code.webp"
          alt="code"
          className="w-full h-[170px] object-cover scale-[1.1] "
        />
      ),
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Code Meets Creativity",
      description: (
        <span className="text-sm">
          Innovative solutions for modern web challenges.
        </span>
      ),
      header: <SkeletonFour />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },

    {
      title: "Next.js Visionary",
      description: (
        <span className="text-sm">
          Building lightning-fast, scalable, and elegant web applications.
        </span>
      ),
      header: <SkeletonFive />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <BentoGrid className="max-w-[950px] max-sm:mb-10 mb-5 w-full mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
