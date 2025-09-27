import React, { useState } from "react";
// import {assets} from '../assets/assets'

import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-32 bg-transparent ">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white ">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          src={assets.menu_icon}
          className="md:hidden w-6 cursor-pointer"
          alt=""
        />
      </div>
      {isOpen && (
        <div className=" md:hidden flex flex-col items-center gap-7 ">
          <ul className=" flex flex-col items-center gap-7 text-white ">
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>
            <a href="#Projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
            <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
              Testimonials
            </a>
          </ul>
          <button className=" bg-white px-8 py-2 rounded-full">Sign up</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
