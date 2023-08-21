"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/images/logos/watering-can.png";
import useMediaQuery from "../../hooks/useMediaQuery";
const Navbar = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isAboveSmallScreens ? (
        <section id="navbar" className="flex justify-center z-40 relative">
          <div className="w-5/6 flex bg-yellow-50/90 fixed mx-auto justify-between font-odesans-medium text-xl text-black px-10 py-3 rounded-full mt-7">
            <h1 className="my-auto">About Us</h1>
            <h1 className="my-auto">Services</h1>
            <div className="flex gap-2">
              <Image src={logo} alt="" className="w-10 h-10" />
              <h1 className="my-auto text-xl text-fuchsia-600 font-bold">
                Recycle It
              </h1>
            </div>
            <h1 className="my-auto">Work Flow</h1>
            <h1 className="my-auto">Connect</h1>
          </div>
        </section>
      ) : (
        <>
          <section id="navbar" className="flex justify-center z-40 relative">
            <div className="w-5/6 flex bg-yellow-50/90 fixed mx-auto justify-between px-5 py-1 font-odesans-medium rounded-full mt-7">
              <div className="flex gap-2">
                <Image src={logo} alt="" className="w-9 h-19" />
                <h1 className="my-auto text-lg text-fuchsia-600 font-bold">
                  Recycle It
                </h1>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#8055F7" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 my-auto text-purple-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Navbar;
