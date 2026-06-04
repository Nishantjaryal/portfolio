import { cn } from "@/lib/utils";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { LuAirplay } from "react-icons/lu";
import { MdContactMail } from "react-icons/md";

const NavIcons = () => {

    const navItems = [
    {
      name: "Home",
      link: "/projects",
      icon: <AiFillHome className="h-4 w-4 text-muted-foreground" />,
    },
    {
      name: "Solve",
      link: "https://leetcode.com/u/nishantjaryal/",
      icon: <LuAirplay className="h-4 w-4 text-muted-foreground" />,
    },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1IYR_auDQVsSVXY8duNPpMZfZfkDhr_5i/view?usp=sharing",
      icon: (
        <MdContactMail className="h-4 w-4 text-muted-foreground" />
      ),
    },
  ];


  return (
    <div
     
        className={cn(
          "flex max-w-fit border border-white/[0.2] rounded-full bg-black-100 px-1 py-1 pl-4 items-center justify-center space-x-4 mb-6",
        )}
      >
        {navItems.map((navItem: { name: string; link: string; icon?: React.ReactNode; }, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-800 items-center flex space-x-1 hover:text-neutral-500 "
            )}
          >
            <span className="block">{navItem.icon}</span>
            {/* <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span> */}
          </Link>
        ))}
        <a href="https://www.linkedin.com/in/nishant-singh-jaryal/" target="_blank">
        <button className="border text-sm font-medium relative border-white/[0.2] text-neutral-700 px-3 py-1 pb-1.5 rounded-full hover:scale-[1.03] transition-all">
          <span>Connect</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
        </a>
        
      </div>
  )
}

export default NavIcons