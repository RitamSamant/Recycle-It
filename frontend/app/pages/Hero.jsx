import Image from "next/image";
import React from "react";
import flower from "../../public/images/hero/flower.png";
import lotus from "../../public/images/hero/lotus.png";
import { SiteBlob } from "../../components/site-blob";
import bg from "../../public/images/hero/bg_pattern.svg";
import Link from 'next/link'
import { SiteBlob2 } from "../../components/site-blob-2";

const Hero = () => {
  return (
    <section id="hero">
      <div className="absolute -top-5 -left-[1rem] w-60 h-60 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute -top-24 right-2 w-[20rem] h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      <div className="mx-auto phone:mt-28 lg:mt-36">
        <div className="flex justify-center phone:gap-5 lg:gap-52">
          <Image src={flower} alt="" className="phone:w-9 phone:h-9 lg:w-20 lg:h-20 phone:mb-auto lg:mb-0" />
            <h1 className="font-odesans-semibold phone:text-3xl lg:text-6xl text-center my-auto">
              Recycle It
            </h1>
          <Image src={lotus} alt="" className="phone:w-9 phone:h-9 lg:w-20 lg:h-20 mb-auto" />
        </div>
        <div className="relative phone:opacity-70 lg:opacity-100">
          <SiteBlob/>
        </div>
        <p className="font-garamond-regular lg:text-xl text-center phone:w-11/12 lg:w-2/5 mx-auto phone:mt-7 lg:mt-10 phone:mb-10 lg:mb-20">
          Championing A Greener Future by Embracing Recycling and Harnessing
          the Potential of Recycled Products to Safeguard Our Planet&apos;s Health
          and Promote Sustainable Prosperity.
        </p>
      </div>
      <Link href="/welcome" className="relative bg-purple-600 hover:bg-purple-700 transition duration-500 ease-in-out py-2 rounded-lg font-odesans-medium text-xl text-white flex mx-auto shadow-lg phone:w-2/5 lg:w-[10%]">
        <div className="flex mx-auto">
          Be a Part
        </div>
      </Link>
    </section>
  );
};

export default Hero;
