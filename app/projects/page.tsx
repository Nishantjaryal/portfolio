import Github_chart from '@/components/ui/github_chart'
import Myprojects from '@/components/ui/myprojects'
import Link from 'next/link'

const page = () => {
  return (
    <div className="w-full pt-7 h-full bg-black-100 py-8 px-4 pb-40 box-border md:pt-8 ">
      <Link
        className="px-4 py-2 pb-2.5 bg-card border shadow-md border-border text-center text-foreground rounded-none"
        href="/"
      >
        <svg
          className="inline-block"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
        </svg>{" "}
        Home
      </Link>

      <Github_chart/>
      <Myprojects />
    </div>
  );
}

export default page
