"use client";
import React, { useEffect } from "react";
// import { LinkPreview } from "@/components/ui/link-preview";
import { socialMedia } from "@/data";
import Link from "next/link";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";
import { CanvasText } from "./ui/canvas-text";
import { TooltipContent } from "./footerlinkstooltip";


export function LinkPreviewDemo() {
  useEffect(() => {
    const handler = async () => {
      const textToCopy = "nisnantjaryal24@gmail.com";
      if (textToCopy) {
        await navigator.clipboard.writeText(textToCopy);
        toast.success("Email copied Successfully", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
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
    <div className="flex w-full justify-center  min-h-[35rem] flex-col px-4 z-10 opa mb-12">
    

    </div>
  );
}

