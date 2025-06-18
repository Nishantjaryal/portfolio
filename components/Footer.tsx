import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-72">
        <Image
          width={1000}
          height={1000}
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex mt-12 md:flex-row flex-col gap-4 justify-between items-center pop-animation2">
        <p className="md:text-base text-sm md:font-normal text-gray-400 font-light">
          Copyright © 2025 Nishant Singh
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a key={info.id} href={info.link}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                {/* <Image src={info?.img} alt="icons" width={20} height={20} /> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
