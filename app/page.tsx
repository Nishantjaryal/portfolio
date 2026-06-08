import FaceCard from "@/components/FaceCard";
// import Footer from "@/components/Footer";
import { LinkPreviewDemo } from "@/components/footerlinks";

import ProjectList from "@/components/ProjectList";
import { WorldMapComponent } from "@/components/worldMap";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto w-full">
      <div className="w-full flex items-center justify-center bg-[#ebeaea] pb-10 mb-10">
        {/* Background */}
        <FaceCard />
      </div>

      <ProjectList />

      {/* <AnimatedPinDemo /> */}

      {/* <div className="relative h-screen mb-5 flex flex-col items-center justify-center">
        <WavyBackgroundDemo />
        <InfiniteMovingCardsDemo />
      </div> */}

      

      {/* Footer component is currently under review*/}
      <WorldMapComponent />
    </main>
  );
}
