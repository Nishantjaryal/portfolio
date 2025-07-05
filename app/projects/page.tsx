import { HeroHighlightDemo } from '@/components/project-highlight'
import Github_chart from '@/components/ui/github_chart'
import Myprojects from '@/components/ui/myprojects'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="w-full h-full bg-black-100 py-8 px-4 pb-40 box-border md:pt-8 ">
      <Link
        className="px-4 py-2 pb-2.5 bg-black border shadow-md border-white-100/[0.2] text-center text-gray-100 rounded-full"
        href="/"
      >
        <svg
          className="inline-block"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
        </svg>{" "}
        Home
      </Link>

      <HeroHighlightDemo />
      <Github_chart/>
      <Myprojects />
    </div>
  );
}

export default page
