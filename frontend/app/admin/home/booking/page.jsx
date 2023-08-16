"use client";

import React from "react";
import photo from "../../../../public/images/dashboard/sagittarius.png";
import Image from "next/image";
import left from "../../../../public/images/dashboard/left-arrow.svg";
import Link from "next/link";
import bell from "../../../../public/images/dashboard/bell.svg";
import { useState } from "react";

const PreviousOrdersPage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex panel scroll overscroll-none h-screen">
      {/* Sidebar */}
      <div className="w-60 border-r-2 flex justify-center pt-8 border-white/10">
        <div className="text-white mb-4">
          <Link href="/admin/home" className="flex">
            <Image src={left} alt="" className="w-12 h-12 mx-auto mb-10" />
          </Link>
          <Image
            src={photo}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-white/20 mx-auto"
          />
          <p className="text-white/30 font-space-grostek mt-1 text-center">
            @johndoe
          </p>
          <div>
            <p className="font-space-grostek mt-5 text-lg text-center">
              John Doe
            </p>
            <div className="flex flex-col">
              <button className="px-5 rounded-full border-2 border-white/10 font-space-grostek mt-2">
                Edit
              </button>
              <Link
                href="/admin/warehouse"
                className="mt-[22rem] rounded-2xl border-2 bg-white/10 border-white/20 px-5 py-1"
              >
                Go To Warehouse
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="w-full">
        <div className="flex justify-between border-b-2 border-white/10 p-5">
          <h2 className="text-3xl font-odesans-semibold text-white my-auto">
            Previous Orders
          </h2>
          <Link href="/admin/notifications">
            <Image src={bell} alt="" className="w-10 h-10 my-auto"/>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PreviousOrdersPage;

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
