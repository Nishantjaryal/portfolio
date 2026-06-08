"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import { CanvasText } from "./ui/canvas-text";
import { cn } from "@/lib/utils";

export function WorldMapComponent() {
  return (
    <div className="  flex flex-col items-center bg-[#fff] w-full max-h-[500px] mt-10  ">
      <div className="w-[90%] ">
        <h2
          className={cn(
            "sm:hidden group relative z-50 pb-4 w-full text-left text-4xl leading-20 font-bold tracking-tight text-balance text-neutral-600  bg-transparent",
          )}
        >

          Developing, Evolving &amp; Executing at{" "}


          <CanvasText
            className=""
            text="Lightning Speed"
            backgroundClassName="bg-blue-600 "
            colors={[
              "rgba(0, 153, 255, 1)",
              "rgba(0, 153, 255, 0.9)",
              "rgba(0, 153, 255, 0.8)",
              "rgba(0, 153, 255, 0.7)",
              "rgba(0, 153, 255, 0.6)",
              "rgba(0, 153, 255, 0.5)",
              "rgba(0, 153, 255, 0.4)",
              "rgba(0, 153, 255, 0.3)",
              "rgba(0, 153, 255, 0.2)",
              "rgba(0, 153, 255, 0.1)",
            ]}
            lineGap={4}
            animationDuration={20}
          />
        </h2>

        
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi

            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },

          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}
