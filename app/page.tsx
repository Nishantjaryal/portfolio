import { InfiniteMovingCardsDemo } from "@/components/cards";
import Footer from "@/components/Footer";
import { LinkPreviewDemo } from "@/components/footerlinks";
import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import { WavyBackgroundDemo } from "@/components/mailme";
import { AnimatedPinDemo } from "@/components/projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { AiFillHome } from "react-icons/ai";
import { LuAirplay } from "react-icons/lu";
import { MdContactMail } from "react-icons/md";



export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <AiFillHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Solve",
      link: "https://leetcode.com/u/nishantjaryal/",
      icon: <LuAirplay className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1b6qi5KGSBNI4RbpL01LYXvqtv0cVYy5W/view?usp=drive_link",
      icon: (
        <MdContactMail className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <main className="min-h-screen relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10">
      <FloatingNav navItems={navItems} />

      <Hero />
      <Grid/>
      <AnimatedPinDemo/>

      <div className="relative h-screen mb-10 flex flex-col items-center justify-center">
         <WavyBackgroundDemo/>
      <InfiniteMovingCardsDemo />
      </div>
      
      <LinkPreviewDemo/>

      <Footer/>

      

     
      

    </main>
  );
}
