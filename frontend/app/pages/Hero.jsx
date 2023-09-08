import Image from "next/image";
import React from "react";
import bg from "../../public/images/hero/Recycle_It.webp"
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="hero" className="bg-[#fefae0]/70 phone:pt-24 lg:pt-40">
      <div className="mx-auto">
        <div className="flex justify-center phone:gap-5 lg:gap-52">
          {/* <Image src={flower} alt="" className="phone:w-9 phone:h-9 lg:w-20 lg:h-20 phone:mb-auto lg:mb-0" /> */}
            <h1 className="font-artik phone:text-3xl lg:text-6xl text-center my-auto">
              Recycle It
            </h1>
          {/* <Image src={lotus} alt="" className="phone:w-9 phone:h-9 lg:w-20 lg:h-20 mb-auto" /> */}
        </div>

        <p className="font-roxale lg:text-xl text-center phone:w-11/12 lg:w-2/5 mx-auto phone:mt-7 lg:mt-10">
          Championing A Greener Future by Embracing Recycling and Harnessing
          the Potential of Recycled Products to Safeguard Our Planet&apos;s Health
          and Promote Sustainable Prosperity.
        </p>
      </div>
      <div className="">
        <Image src={bg} alt="" className="py-10 lg:h-full phone:h-[20rem] object-cover"/>
        <Link href="/welcome" className="transition hover:text-[#fefae0] duration-500 ease-in-out rounded-lg font-roxale lg:text-3xl text-white flex mx-auto lg:-mt-32 phone:-mt-20">
        <div className="flex mx-auto bg-black/30 rounded-xl py-2 px-8 backdrop-blur">
          Be a Part
        </div>
      </Link>
      </div>

    </section>
  );
};

export default Hero;
