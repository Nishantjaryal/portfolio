import { CertSheet } from "@/data";
import Link from "next/link";
import React from "react";

const Mycerts = () => {
  return (
    <div className="relative w-full min-h-screen  flex flex-row flex-wrap items-center justify-center gap-5 bg-black-100">
      {CertSheet.map((post, index) => (
        <article
          key={index}
          className="p-6 bg-black rounded-lg border border-gray-200/[0.2] shadow-md min-w-[300px] max-w-[550px]"
        >
          <div
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              <a href="#">{post.heading}</a>
            </h2>
            <p className="mb-5 text-[14px] md:text-[16px] font-light text-gray-100 ">
              {post.description}
            </p>
            <div className="flex justify-between items-center">
              

              <Link
                target="_blank"
                href={post.link}
                className="inline-flex items-center font-medium text-primary hover:text-secondary max-sm:hidden"
              >
                Take a look
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Mycerts;
