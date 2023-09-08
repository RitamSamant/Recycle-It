"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import welcome from "../../public/images/welcome/welcome.svg";
import ".././globals.css";
import logo from "../../public/images/logos/watering-can.png";
import business from "../../public/images/welcome/businessman.png";
import user from "../../public/images/welcome/man.png";
import useMediaQuery from "../../hooks/useMediaQuery";

const Page = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <div className="panel min-h-screen">
      <div className="phone:py-3 lg:py-5 border-b-2 border-white/10">
        <div className="flex mx-auto justify-center">
          <Image
            src={logo}
            alt=""
            className="phone:w-7 phone:h-7 lg:w-10 lg:h-10 my-auto"
          />
          <Link href="/" className="font-artik phone:text-3xl lg:text-5xl text-center text-purple-600">
            Recycle It
          </Link>
        </div>
      </div>
      <div className="lg:flex w-5/6 mx-auto justify-center gap-5 mt-5">
        <div className="w-full border-2 phone:rounded-t-[10rem] lg:rounded-t-[20rem] border-sky-100/10">
          <div className="my-auto h-full flex flex-col justify-center items-center gap-10 py-5">
            <Image
              src={user}
              alt=""
              className="h-16 w-16 border rounded-full"
            />
            <p className="font-roxale text-lg text-sky-50 w-2/3 text-justify">
              We offer our services to households and small business too, as
              long as it keeps the Earth clean.
            </p>
            <Link
              href="/client/login"
              className="font-roxale text-lg px-7 py-2 border border-sky-100 hover:border-sky-900 rounded-lg text-sky-50 transition duration-500"
            >
              Client
            </Link>
          </div>
        </div>
        <Image
          src={welcome}
          alt=""
          className="phone:h-[25rem] lg:h-[40rem] w-[30rem] border-2 lg:rounded-t-[20rem] phone:mt-1 border-sky-100/10"
        />
        <div className="w-full border-2 py-5 phone:rounded-b-[10rem] lg:rounded-b-[0rem] lg:rounded-t-[20rem] border-sky-100/10 mt-1">
          <div className="my-auto h-full flex flex-col justify-center items-center gap-10">
            {isAboveSmallScreens ? (
              <>
                {" "}
                <Image
                  src={business}
                  alt=""
                  className="h-16 w-16 border rounded-full"
                />
                <p className="font-roxale text-lg w-2/3 text-justify text-sky-50">
                  Join us as a business, we have special perks you may wanna
                  chcek out
                </p>
                <Link
                  href="/admin/login"
                  className="font-roxale text-lg px-7 py-2 border border-sky-100 hover:border-sky-900 rounded-lg text-sky-50 transition duration-500"
                >
                  Business
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/admin/login"
                  className="font-roxale text-lg px-7 py-2 border border-sky-100 hover:border-sky-900 rounded-lg text-sky-50 transition duration-500"
                >
                  Business
                </Link>
                <p className="font-roxale text-lg w-2/3 text-justify text-sky-50">
                  Join us as a business, we have special perks you may wanna
                  chcek out
                </p>
                <Image
                  src={business}
                  alt=""
                  className="h-16 w-16 border rounded-full"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
