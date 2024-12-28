"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center min-h-[30rem] flex-col px-4 z-10 opa">

<div className="relative bg-clip-text text-5xl mb-12 font-bold tracking-tighter text-transparent bg-no-repeat leading-none  bg-gradient-to-r from-blue-500 via-green-500 to-violet-500 py-4">
            <span className="">Let&apos;s Connect Socially</span>
          </div>

          <div className=" text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          Have a project in mind? Ping me on 
      {" "}<LinkPreview url="https://wa.me/qr/W77MEDT33RPON1" className="font-bold">
          WhatsApp
        </LinkPreview>{" "}
        or{" "}
        <LinkPreview url="https://t.me/+917986349492" className="font-bold">
          TeleGram
        </LinkPreview>{" "}
        , I&apos;m just a message away! 
      </div>
      <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
      Because every great project starts with a great friendship. Let&apos;s connect on {" "}

        <LinkPreview
          url="https://www.instagram.com/_nishant.jaryal/
"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Instagram
        </LinkPreview>{" "}
      </div>
    </div>
  );
}

