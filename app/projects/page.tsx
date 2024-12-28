import { HeroHighlightDemo } from '@/components/project-highlight'
import Myprojects from '@/components/ui/myprojects'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full bg-black-100 py-8 px-4 pb-40 box-border md:pt-8 '>
            <Link className='px-4 py-2 pb-2.5 bg-black border shadow-md border-white-100/[0.2] text-center rounded-full' href="/">&lt; Home</Link>

        <HeroHighlightDemo  />
      <Myprojects />
    </div>
  )
}

export default page
