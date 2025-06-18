"use client";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";



export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center absolute bottom-0 z-40 overflow-hidden pop-animation2">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

