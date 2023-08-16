import Image from "next/image";
import Link from "next/link";
import React from "react";
import welcome from "../../public/images/welcome/welcome.svg";
import ".././globals.css"
import logo from "../../public/images/logos/watering-can.png"
import business from "../../public/images/welcome/businessman.png";
import user from "../../public/images/welcome/man.png";
import {SiteBlob2 } from "../../components/site-blob-2";

const page = () => {
  return (
    <div className="panel">

      <div className="py-[1rem] border-b-2 border-white/10">
         <div className="flex mx-auto justify-center">
            <Image src={logo} alt='' className='w-10 h-10 my-auto'/>
            <h1 className="font-odesans-semibold text-5xl text-center text-purple-600">Recycle It</h1>
         </div>
      </div>
      <div className="flex w-5/6 mx-auto justify-center gap-5 mt-5">
        <div className="w-full border-2 rounded-t-[20rem] border-sky-100/10">
          <div className="my-auto h-full flex flex-col justify-center items-center gap-10">
            <Image src={user} alt="" className="h-16 w-16 border rounded-full"/>
            <p className="font-garamond-regular text-lg text-sky-50 w-2/3 text-justify">We offer our services to households and small business too, as long as it keeps the Earth clean.</p>
            <Link href="/user/login" className="font-space-grostek text-lg px-7 py-2 border border-sky-100 hover:border-sky-900 rounded-lg text-sky-50 transition duration-500">User</Link>
          </div>
        </div>
        <Image src={welcome} alt="" className="h-[40rem] w-[30rem] border-2 rounded-t-[20rem] border-sky-100/10" />
        <div className="w-full border-2 rounded-t-[20rem] border-sky-100/10">
         <div className="my-auto h-full flex flex-col justify-center items-center gap-10">
          <Image src={business} alt="" className="h-16 w-16 border rounded-full"/>
          <p className="font-garamond-regular text-lg w-2/3 text-justify text-sky-50">Join us as a business, we have special perks you may wanna chcek out</p>
          <Link href="/admin/login" className="font-space-grostek text-lg px-7 py-2 border border-sky-100 hover:border-sky-900 rounded-lg text-sky-50 transition duration-500">Business</Link>
         </div>
        </div>
      </div>
    </div>
  );
};

export default page;
