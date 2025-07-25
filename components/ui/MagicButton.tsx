import React from "react";

const MagicButton = ({ title, icon, position, handleClick, otherClasses }:{
    title:string; icon:React.ReactNode; position:string; handleClick?: ()=>void; otherClasses?:string;
}) => {
 
 
  return (
    <div>
      <button className="relative inline-flex mb-2 h-12 overflow-hidden w-full rounded-lg p-[1px] focus:outline-none md:w-48 md:mt-10 
      pop-animation
      ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg  shadow-2xl  px-7 text-sm font-medium text-white backdrop-blur-3xl gap-3 ${otherClasses}`}
        onClick={handleClick}
        >
            {position ==="left" && icon}
          {title}
          {position ==="right" && icon}

        </span>
      </button>
    </div>
  );
};

export default MagicButton;
