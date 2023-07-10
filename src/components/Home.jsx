import React from "react";
import Image from "../assets/profileimg-1.jpg";
import { MdArrowRightAlt, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
            odio, dolor perspiciatis veritatis quibusdam maiores recusandae
            libero iste quas voluptates expedita commodi, atque molestias nihil
            vitae voluptatem voluptas! Tempore, quas?
          </p>

          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer">
              Portfolio
              <span className="hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />

              </span>
            </button>
          </div>
        </div>
        <div className=" w-1/2">
          <img src={Image} alt="my profile image" className="rounded-2xl mx-auto h-min w- md:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
