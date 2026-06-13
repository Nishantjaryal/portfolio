"use client";
import { Tooltip } from "@/components/ui/tooltip-card";

import Link from "next/link";
import { ImagesBadge } from "./ui/images-badge";

export function TooltipContent() {
  return (
    <div className="max-w-2xl h-full w-full justify-start items-start  flex flex-col gap-7 ">
      <div className="flex flex-col h-full gap-7 w-[90%] text-left">
        <div className="text-neutral-500 sm:text-sm text-pretty">
          <b>Retrieval-Augmented Generation</b> React frontend, Express.js as
          the backend API layer, LangChain for orchestrating the
          Retrieval-Augmented Generation pipeline, and Qdrant as the vector
          database for semantic search.{" "}
          {/* <Tooltip
          containerClassName="text-neutral-500 sm:text-sm "
          content="AWS markets itself as the “world's most comprehensive and broadly adopted cloud platform” offering over 200 fully featured services globally."
        >
          <span className="font-bold ">AWS</span>
        </Tooltip>{" "} */}
        </div>
        <div className=" text-neutral-500 sm:text-sm text-pretty ">
          {/* <Tooltip
          containerClassName="text-neutral-500 sm:text-sm"
          content={<TooltipCard />}
        >
          {" "}
          <span className="cursor-pointer font-bold">Tyler Durden.</span>
        </Tooltip>{" "} */}
          <b>Video Conferencing Application</b> A real-time full-stack
          application built with React on the frontend integrated with the
          Stream API for live video, screen sharing, and multi-participant
          session management. The backend handled JWT-based authentication,
          session state, and fault-tolerant reconnection logic
        </div>

        <div className=" text-neutral-500 sm:text-sm text-pretty ">
          {/* <Tooltip
          containerClassName="text-neutral-500 sm:text-sm "
          content={<TestimonialCard />}
        >
          {" "}
          <span className="cursor-pointer font-bold">testimonial.</span>
        </Tooltip>{" "} */}
          <b>AI Face Detection</b> Machine learning classification model to a
          live web interface, handling input preprocessing, model inference, and
          output rendering.
        </div>
        <div className=" text-neutral-500 sm:text-sm text-pretty ">
          {/* <Tooltip
          containerClassName="text-neutral-500 sm:text-sm "
          content={<TestimonialCard />}
        >
          {" "}
          <span className="cursor-pointer font-bold">testimonial.</span>
        </Tooltip>{" "} */}
          <b>Snake Game</b> JavaScript based game itself but the architecture
          decisions: modular OOP design, reusable components, and configurable
          parameters{" "}
        </div>

        <div className="flex items-center">
          <Link href="/projects" className="mr-4">
            <ImagesBadge className="text-neutral-500" text="More Projects" images={[]} />

            {/* <p className="font-semibold sm:text-sm">View More Projects</p> */}
          </Link>
        </div>
      </div>
    </div>
  );
}

const TooltipCard = () => {
  return (
    <div className="bg-slate-100">
      <div className="my-4 flex flex-col">
        <p className="text-lg font-bold">Tyler Durden</p>
        <p className="mt-1 text-xs text-neutral-500 sm:text-sm ">
          Soap Developer from a Tier 3 college. Enthusiastic and exhibits
          entrepreneurial spirit.
        </p>
      </div>
    </div>
  );
};

const TestimonialCard = () => {
  return (
    <div className="bg-slate-100">
      <blockquote className="mb-4 text-neutral-700 ">
        This product is absolutely, grade A horse shit.
      </blockquote>
      <div className="flex items-center gap-2">
        <img
          src="https://assets.aceternity.com/screenshots/tyler.webp"
          alt="Tyler Durden"
          className="size-6 rounded-full object-cover"
        />
        <div>
          <p className="text-xs font-semibold text-neutral-900 ">
            Tyler Durden
          </p>
          <p className="text-[10px] text-neutral-500 sm:text-sm ">
            Senior Product Manager at FC
          </p>
        </div>
      </div>
    </div>
  );
};
