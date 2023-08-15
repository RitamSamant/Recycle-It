import Image from "next/image";
import React from "react";
import flower from "../../public/images/hero/flower.png";
import lotus from "../../public/images/hero/lotus.png";
import { SiteBlob } from "../../components/site-blob";
import left from "../../public/images/hero/bgleft.svg";
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="hero">
      <div className="absolute -top-5 -left-[1rem] w-60 h-60 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute -top-24 right-2 w-[20rem] h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      <div className="flex justify-between w-5/6 mx-auto mt-36 mb-20">
        <Image src={flower} alt="" className="w-20 h-20" />
        <div className="mx-auto grid gap-5 relative -z-10">
          <div className="absolute -top-16 -left-[3rem] w-[17rem] h-[20rem] bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob"></div>
          <div className="absolute -top-16 -right-10 w-72 h-72 bg-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -top-16 right-32 w-[15rem] h-[17rem] bg-amber-300 rounded-xl mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          <h1 className="font-odesans-semibold text-6xl text-center">
            Recyclit
          </h1>
          <p className="font-garamond-regular text-xl w-[30rem] text-center">
            Championing a Greener Future by Embracing Recycling and Harnessing
            the Potential of Recycled Products to Safeguard Our Planet's Health
            and Promote Sustainable Prosperity.
          </p>
        </div>
        <Image src={lotus} alt="" className="w-20 h-20 mt-auto" />
        <button></button>
      </div>
      <div className="relative">
        <div className="flex w-2/3 mx-auto">
          <Image src={left} alt="" className="mx-auto h-60" />
        </div>
        <SiteBlob />
      </div>
      <Link href="/welcome" className="bg-purple-600 px-10 py-3 rounded-lg font-space-grostek text-xl text-white flex mx-auto shadow-lg w-52">
        <div className="flex mx-auto">
          Be a part
        </div>
      </Link>
    </section>
  );
};

export default Hero;
