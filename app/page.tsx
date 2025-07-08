import { InfiniteMovingCardsDemo } from "@/components/cards";
// import Footer from "@/components/Footer";
import { LinkPreviewDemo } from "@/components/footerlinks";
import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import { WavyBackgroundDemo } from "@/components/mailme";
import { AnimatedPinDemo } from "@/components/projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { AiFillHome } from "react-icons/ai";
import { LuAirplay } from "react-icons/lu";
import { MdContactMail } from "react-icons/md";
import { ToastContainer } from "react-toastify";

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
      link: "https://drive.google.com/file/d/1IYR_auDQVsSVXY8duNPpMZfZfkDhr_5i/view?usp=sharing",
      icon: (
        <MdContactMail className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <main className="min-h-screen relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <FloatingNav navItems={navItems} />

      <Hero />
      <Grid />
      <AnimatedPinDemo />

      <div className="relative h-screen mb-5 flex flex-col items-center justify-center">
        <WavyBackgroundDemo />
        <InfiniteMovingCardsDemo />
      </div>

      <LinkPreviewDemo />

      {/* Footer component is currently under review*/}
      {/* <Footer/>  */}
    </main>
  );
}
