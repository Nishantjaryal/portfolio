import Image from "next/image";

function FaceCard() {
  return (
    <div className="grid my-8 grid-cols-1 md:grid-cols-2 items-stretch gap-6 bg-[#000] h-full p-2 rounded-sm w-[85%] min-w-[300px] min-h-[500px]">
      <div className="w-full min-w-[290px]  flex flex-col items-start justify-between p-8">
        <h1 className="text-4xl tracking-tighter leading-tight text-[#fff] mb-4">
          Aspiring Software Engineer passionate about scalable systems and AI
        </h1>
        <div className="text-[#FFF] ">
          <p className="text-sm font-semibold">Nishant Singh</p>
        <p className="text-xs">Software Developer</p>
        </div>
        
      </div>
      <div className="relative aspect-square overflow-hidden rounded-sm">
        
        <div className="absolute inset-0 *:size-full *:object-cover">
          <img loading="lazy" width="1024" height="1024" decoding="async"   sizes="100vw" 
          src="/bghero.jpg" />
          </div>
          <div className="absolute inset-0 flex p-4 items-start justify-end">
            <div className=" flex justify-end relative max-h-4/5 max-w-4/5 overflow-hidden rounded-[var(--radius-sm)]   shadow-none ">
            <img alt="Marco Casalaina" loading="lazy"  decoding="async"  className=" w-[50%] h-[50%]"   
            src="/nj.webp"/>
            </div></div></div>
      
    </div>
  );
}

export default FaceCard;
