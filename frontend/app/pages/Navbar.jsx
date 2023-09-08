"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/images/logos/watering-can.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isAboveSmallScreens ? (
        <section id="navbar" className="flex justify-center z-40 relative">
          <div className="w-5/6 flex backdrop-blur bg-white/50 border border-white/30 fixed mx-auto justify-between font-roxale text-xl text-black px-10 py-3 rounded-full mt-7">
            <AnchorLink href='#process' className="my-auto hover:text-neutral-600 transition duration-300 font-roxale">Process</AnchorLink>
            <AnchorLink href='#benefits' className="my-auto hover:text-neutral-600 transition duration-300 font-roxale">Benefits</AnchorLink>
            <AnchorLink href="#hero" className="flex gap-2">
              <Image src={logo} alt="" className="w-10 h-10" />
              <h1 className="my-auto text-xl text-fuchsia-600 font-bold font-roxale">
                Recycle It
              </h1>
            </AnchorLink>
            <AnchorLink href='#reviews' className="my-auto hover:text-neutral-600 transition duration-300 font-roxale">Reviews</AnchorLink>
            <AnchorLink href='#connect' className="my-auto hover:text-neutral-600 transition duration-300 font-roxale">Connect</AnchorLink>
          </div>
        </section>
      ) : (
        <>
          <section id="navbar" className="flex justify-center z-20 relative">
            <div className="w-5/6 flex backdrop-blur bg-white/50 border border-white/30 fixed mx-auto justify-center px-5 py-1 font-roxale rounded-full mt-7">
              <div className="flex gap-2">
                <Image src={logo} alt="" className="w-8 h-8" />
                <h1 className="my-auto text-xl text-fuchsia-600 font-roxale">
                  Recycle It
                </h1>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Navbar;
