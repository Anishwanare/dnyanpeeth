import React, { useState } from "react";
import logo from "../images/logo.png";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const onClickMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="mt-10 shadow-xl flex flex-col bg-white md:flex-row justify-between items-center md:h-32 uppercase p-5 fixed top-0 w-full z-20">
      <div className="md:mb-0 text-white flex flex-col md:flex-row md:gap-5 lg:gap-10 flex-1">
        <a href="/">
          <img
            src={logo}
            alt=""
            className="w-12 sm:w-16 md:w-16 lg:w-16 xl:w-24 2xl:w-28"
          />
        </a>
        <div className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-semibold">
          <p className="text-black text-base md:text-xl lg:text-2xl 2xl:text-3xl">
            R.S PATIL COLLEGE OF <br className="md:hidden lg:block" />
            <span className="text-blue-700 md:text-4xl lg:text-5xl 2xl:text-7xl">
              PHARMACY
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between text-4xl flex-1">
        <div
          // className={`flex items-center justify-between pointer md:hidden`}
          className={`hidden`}
          onClick={onClickMenu}
        >
          {menu ? <RxCross1 /> : <RiMenu2Line />}
        </div>
        <div
          // className={`relative hidden ${
          //   menu ? "block" : "hidden"
          // } md:flex mt-4 md:mt-0 md:relative`}
          className="hidden"
        >
          <ul
            className={`flex flex-col whitespace-nowrap ${
              menu ? "transition scale-100 duration-100 ease-in-out" : ""
            } bg-white md:flex-row gap-8 md:gap-10 text-lg md:text-2xl md:right-0 text-black md:static absolute top-8 -right-10 px-10 py-5 z-0`}
          >
            <li>
              <a href="/" className="hover:text-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-700">
                Course
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-700">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block lg:block xl:block 2xl:block">
        {" "}
        <div className="flex items-center space-x-2 ">
          <LuPhoneCall className="2xl:text-3xl xl:text-2xl lg:text-xl fill-red-400" />{" "}
          <div className="md:text-2xl">
            <p className="text-xs md:text-base lg:text-lg">
              <a href="tel:8805754219">8805754219</a>
            </p>
            <a href="tel:838082253">838082253</a>
          </div>{" "}
        </div>{" "}
        <div className="flex items-center space-x-2 ">
          <AiOutlineMail className="md:text-4xl fill-red-600" />{" "}
          <div className="md:text-2xl whitespace-normal">
            <a
              href="mailto:Contact@rspatilpharma.com"
              className="text-xs md:text-base lg:text-lg"
            >
              Contact@rspatilpharma.com
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Header;
