import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start items-center relative">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="./video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full flex justify-center items-center flex-col bg-black/70 z-10 py-14 px-4">
        <p className="text-justify text-white justify-start flex flex-col text-l text- relative z-10 mb-10 text-lg w-[90%]">
          Habulus Groups is an epitome of class, quality and luxury. We work and
          innovate consistently to raise the bar of providing luxurious living
          spaces for our customers.
        </p>
        <div className="flex w-[90%]">
          <div className="w-[40%] md:w-[20%] h-[60vh] flex flex-col justify-start text-left self-start relative z-10">
            <p className="mb-5 text-xl font-semibold text-white">QUICK LINKS</p>
            <a href="#" className="mb-2 font-medium text-white">
              Home
            </a>
            <a href="#" className="mb-2 font-medium text-white">
              Companies
            </a>
            <a href="#" className="mb-2 font-medium text-white">
              Projects
            </a>
            <a href="#" className="mb-2 font-medium text-white">
              Property
            </a>
            <a href="#" className="mb-2 font-medium text-white">
              About us
            </a>
          </div>
          <div className="w-[60%] md:w-[80%] flex justify-start text-left self-start relative z-10">
            <p className="flex mb-5 ml-8 text-xl font-semibold text-white">
              CONTACT DETAILS
            </p>
          </div>
        </div>
        <div className="flex w-[90%] justify-center md:justify-between items-center flex-col md:flex-row gap-3">
          <p className="text-xl font-bold text-white">
            <p> designed by Phoenix Tech</p>
          </p>
          <div className="flex gap-4">
            <FaFacebook size={24} className="cursor-pointer text-white" />
            <FaTwitter size={24} className="cursor-pointer text-white" />
            <FaInstagram size={24} className="cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
