import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-blue-900 px-2 py-8 md:px-4 lg:px-8 xl:px-16 2xl:px-32">
      <div className="flex flex-col md:flex-row justify-around text-white">
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          <LuPhoneCall className="md:text-5xl" />
          <div className="md:text-xl">
            <p className="font-semibold">Call us:</p>
            <div className="flex flex-col">
              <a href="tel:8805754219" className="hover:text-black">
                8805754219
              </a>
              <a href="tel:8805754219" className="hover:text-black">
                838082253
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          <AiOutlineMail className="md:text-5xl" />
          <div className="md:text-xl">
            <p className="font-semibold">Email:</p>
            <a
              href="mailto:Contact@rspatilpharma.com"
              className="hover:text-black"
            >
              Contact@rspatilpharma.com
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <CiLocationOn className="md:text-5xl text-3xl " />
          <div className="md:text-xl">
            <p className="font-semibold">Visit us:</p>
            <p>
              Near Govt ITI, Daryapur Road, (khelbabuji) Anjangaon Surji,
              Amaravti, Maharashtra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
