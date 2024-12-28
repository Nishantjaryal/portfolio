import { projectSheet } from '@/data'
import Link from 'next/link'
import React from 'react'
import { LinkPreview } from './link-preview'

const Myprojects = () => {
  return (
    <div className='relative w-full min-h-screen  flex flex-row flex-wrap items-center justify-center gap-5 bg-black-100'>
      {projectSheet.map((post, index) => (
            <article
              key={index}
              className="p-6 bg-black rounded-lg border border-gray-200/[0.2] shadow-md min-w-[300px] max-w-[550px]"
            >
                 <LinkPreview
              url={post.link}
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
                <div className="flex justify-between items-center mb-5 text-white">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded  ">
                  {post.type === "pdf" && (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4b47cc"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-160h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Z"/></svg>
                  )}
                  {post.type === "zip" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#4b47cc"
                    >
                      <path d="M146.67-160q-27 0-46.84-20.17Q80-200.33 80-226.67v-506.66q0-26.34 19.83-46.5Q119.67-800 146.67-800H414l66.67 66.67h332.66q26.34 0 46.5 20.16Q880-693 880-666.67v440q0 26.34-20.17 46.5Q839.67-160 813.33-160H146.67ZM552-226.67h88v-88h88v-88h-88v-88h88v-88h-88v-88h-88v88h88v88h-88v88h88v88h-88v88Z" />
                    </svg>
                  )}
                  {post.type === "docs" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#4b47cc"
                    >
                      <path d="M320-453.33h320V-520H320v66.67Zm0 120h320V-400H320v66.67Zm0 120h200V-280H320v66.67ZM226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880H574l226 226v507.33q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm314-542.67h192.66L540.67-813.33v190.66Z" />
                    </svg>
                  )}
                  {post.type === "post" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#4b47cc"
                    >
                      <path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67ZM363-310l117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133Z" />
                    </svg>
                  )}
                  {post.type === "link" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#4b47cc"
                    >
                      <path d="M327.33-242Q224-242 152-314.45 80-386.9 80-490.12 80-593.33 152-666t175.33-72.67H704q73.33 0 124.67 51.84Q880-635 880-562t-51.33 124.83Q777.33-385.33 704-385.33H347.33q-43.33 0-74-30.67-30.66-30.67-30.66-74.33 0-43.67 30.45-74.34 30.44-30.66 74.21-30.66h370v66.66h-370q-15.66 0-26.83 11.17-11.17 11.17-11.17 27.59 0 16.43 11.17 27.17Q331.67-452 347.33-452H704q46-.33 77.67-32.17 31.66-31.83 31.66-77.97t-31.7-78Q749.92-672 704-672H327.33q-75.66-.33-128.16 52.98-52.5 53.31-52.5 129.02 0 75.28 52.5 127.97 52.5 52.7 128.16 53.36h390V-242h-390Z" />
                    </svg>
                  )}
                  {post.type === "news" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#4b47cc"
                    >
                      <path d="M146.67-120q-27.5 0-47.09-19.58Q80-159.17 80-186.67V-840l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v653.33q0 27.5-19.58 47.09Q840.83-120 813.33-120H146.67Zm0-66.67h300v-266.66h-300v266.66Zm366.66 0h300v-100h-300v100Zm0-166.66h300v-100h-300v100ZM146.67-520h666.66v-120H146.67v120Z" />
                    </svg>
                  )}
                  {post.type === "media" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#4b47cc"
                    >
                      <path d="M146.67-80q-27 0-46.84-19.83Q80-119.67 80-146.67v-426.66q0-27 19.83-46.84Q119.67-640 146.67-640h666.66q27 0 46.84 19.83Q880-600.33 880-573.33v426.66q0 27-19.83 46.84Q840.33-80 813.33-80H146.67Zm258-127.33L632-360 404.67-512v304.67Zm-252-486V-760h654.66v66.67H152.67Zm127.33-120V-880h400v66.67H280Z" />
                    </svg>
                  )}
                </span>

                
                {post.state === "testing" && (
                  <span className="w-3.5 h-2.5 bg-testing rounded-full cursor-pointer"></span>
                )}
                {post.state === "completed" && (
                  <span className="w-3.5 h-2.5 bg-completed rounded-full cursor-pointer"></span>
                )}
                {post.state === "checked" && (
                  <span className="w-3.5 h-2.5 bg-checked rounded-full cursor-pointer"></span>
                )}
                {post.state === "warning" && (
                  <span className="w-3.5 h-2.5 bg-warning rounded-full cursor-pointer"></span>
                )}
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                <a href="#">{post.heading}</a>
              </h2>
              <p className="mb-5 text-[14px] md:text-[16px] font-light text-gray-100 ">
                {post.description}
              </p>
              <div className="flex justify-between items-center">
                <Link href={post.authorLink} target="_blank">
                
                  <div className="flex items-center space-x-3 z-20">
                    <img
                      className="rounded-full w-[40px] h-[40px]"
                      src={post.image}
                      alt="author"
                    />
                    <span className="font-medium text-sm">{post.author}</span>{" "}
                  </div>
                </Link>

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
            </LinkPreview>
              
            </article>
          ))}
    </div>
  )
}

export default Myprojects
