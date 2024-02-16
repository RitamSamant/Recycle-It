import Image from "next/image";
import React from "react";
import bg from "../../public/images/hero/bg.webp"
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="hero" className="h-screen relative">
      <Image src={bg} alt="" className="h-screen absolute object-cover -z-10 opacity-90"/>
      <div className="z-10 flex flex-col h-screen items-center justify-center">
        <h1 className="phone:text-4xl lg:text-7xl font-playfair text-neutral-800">Recycle It</h1>
        <p className="text-neutral-900 mt-10 phone:w-[90%] lg:w-[40%] text-center font-medium phone:text-sm lg:text-base">Championing A Greener Future by Embracing Recycling and Harnessing the Potential of Recycled Products to Safeguard Our Planet's Health and Promote Sustainable Prosperity.</p>
        <Link href="/welcome" className="mt-7">
          <div className="bg-neutral-800 hover:bg-neutral-900 transition duration-500 ease-in-out px-7 py-2 text-center backdrop-blur-md rounded text-stone-50">
            Get Started
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
