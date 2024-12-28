import React from 'react'

const  SkeletonFour = () => {

    const my_arr =[
        "bg-[#00008C]", "bg-[#0000C8]", "bg-[#000046]", "bg-[#0000D2]", "bg-[#0000DC]", 
        "bg-[#0000B4]", "bg-[#00006E]", "bg-[#0000B4]", "bg-[#0000C8]", "bg-[#0000C8]", 
        "bg-[#0000BE]", "bg-[#000082]", "bg-[#0000F0]", "bg-[#0000F0]", "bg-[#000000]", 
        "bg-[#0000D2]", "bg-[#0000AA]", "bg-[#000064]", "bg-[#000064]", "bg-[#000032]", 
        "bg-[#000096]", "bg-[#0000F0]", "bg-[#00008C]", "bg-[#00000A]", "bg-[#0000A0]", 
        "bg-[#0000FA]", "bg-[#000028]", "bg-[#0000C8]", "bg-[#0000FA]", "bg-[#0000C8]", 
        "bg-[#00006E]", "bg-[#0000FA]", "bg-[#0000A0]", "bg-[#0000AA]", "bg-[#000046]", 
        "bg-[#000082]", "bg-[#00001E]", "bg-[#000000]", "bg-[#000082]", "bg-[#000000]", 
        "bg-[#0000AA]", "bg-[#0000B4]", "bg-[#00005A]", "bg-[#0000F0]", "bg-[#0000A0]", 
        "bg-[#0000D2]", "bg-[#000032]", "bg-[#00000A]", "bg-[#000078]", "bg-[#00001E]", 
        "bg-[#00001E]", "bg-[#0000DC]", "bg-[#00000A]", "bg-[#000078]", "bg-[#000028]", 
        "bg-[#0000E6]", "bg-[#000050]", "bg-[#000000]", "bg-[#0000AA]", "bg-[#00001E]", 
        "bg-[#0000D2]", "bg-[#0000E6]", "bg-[#000032]", "bg-[#0000AA]", "bg-[#0000DC]", 
        "bg-[#00003C]", "bg-[#00003C]", "bg-[#000078]", "bg-[#0000FA]", "bg-[#000046]", 
        "bg-[#00001E]", "bg-[#000046]", "bg-[#000046]", "bg-[#0000A0]", "bg-[#0000FA]", 
        "bg-[#000046]", "bg-[#000028]", "bg-[#0000F0]", "bg-[#00005A]", "bg-[#000082]"
      ]
      
    
   
    return (
      
      <div className="relative w-full rounded-md overflow-hidden  border border-black-200 flex flex-wrap gap-2 items-center  justify-center h-[180px]">
  
        {
          my_arr.map((shade,index)=>(
            <div key={index} className={`blur h-5 w-5 rounded-sm ${shade} m-0`}></div>
          ))
        }

        <h2 className='text-white absolute text-[25px] max-sm:left-4 font-bold font-mono'>
            Focus, Constant Improvement
        </h2>

          
      </div>
    );
  };


  export default SkeletonFour;