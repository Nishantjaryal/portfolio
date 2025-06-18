"use client";
import React, { useEffect } from "react";
// import { LinkPreview } from "@/components/ui/link-preview";
import { socialMedia } from "@/data";
import Link from "next/link";
import { toast } from "react-toastify";


export function LinkPreviewDemo() {
  useEffect(() => {
    const handler = async () => {
      const textToCopy = "nisnantjaryal24@gmail.com";
      if (textToCopy) {
        await navigator.clipboard.writeText(textToCopy);
        toast.success("Success: Email copied", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };

    const btn = document.getElementById("show_popup");
    btn?.addEventListener("click", handler);

    return () => {
      btn?.removeEventListener("click", handler); // Clean up
    };
  }, []);
  return (
    <div className="flex justify-center items-center min-h-[30rem] flex-col px-4 z-10 opa mb-10">
      <div className="relative bg-clip-text text-6xl h-full mb-12 font-bold tracking-tighter text-transparent bg-no-repeat leading-none  bg-gradient-to-r from-blue-500 via-green-500 to-violet-500 pt-4">
        <span className="">Let&apos;s Build it Togeather</span>
      </div>

      <div className=" text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-6 lg:mb-8">
        Have a project in mind? Ping me on{" "}
        {/* <LinkPreview
          url="https://wa.me/qr/W77MEDT33RPON1"
          className="font-bold text-white"
        >
          WhatsApp
        </LinkPreview>{" "} */}
        <Link
          href={socialMedia[1].link}
          className="font-bold text-white"
        >
          Linkedin
        </Link>{" "}
        or{" "}
        <p
          id = "show_popup"
          className="font-bold inline text-white"
        >
          Mail Me
        </p>{" "}
         I&apos;m just a message away!
      </div>
      <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        Because every great project starts with a great Collab. Let&apos;s
        explore me on{" "}
        <Link
          href={socialMedia[0].link}

          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 text-white"
        >
          Github
        </Link>{" "}
      </div>
    </div>
  );
}

