"use client"

import Link from 'next/link';
import React from 'react';
import photo from "../../../public/images/dashboard/sagittarius.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
   const router = useRouter();
   const handleClick = (e) => {
      e.preventDefault();
      router.push("/admin/warehouse")
   }
  return (
    <div className="flex h-screen panel">
      {/* Left Panel */}
      <div className="w-60 border-r-2 flex justify-center pt-16 border-white/10">
        <div className="text-white mb-4">
          <Image
            src={photo}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-white/20 mx-auto"
          />
          <p className="text-white/30 font-space-grostek mt-1 text-center">@johndoe</p>
          <div>
            <p className="font-space-grostek mt-5 text-lg text-center">John Doe</p>
            <div className='flex flex-col'>
               <button className='px-5 rounded-full border-2 border-white/10 font-space-grostek mt-2'>Edit</button>
               <button onClick={handleClick} className='mt-[26rem] rounded-2xl border-2 bg-white/10 border-white/20 px-5 py-1'>
                  Go To Warehouse
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full">
         <div className='py-3 border-b-2 border-white/10 text-center text-5xl text-white font-odesans-semibold'>
            Recyclit
         </div>
        <div className="flex px-4 mt-3">
          {/* Top Row */}
          <Link href="/admin/home/wastebought" className="w-1/3 p-4">
            <div className="cursor-pointer bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
               Total Waste Bought
            </div>
          </Link>
          <Link href="/admin/home/wastesold" className="w-1/3 p-4">
            <div className="cursor-pointer bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
               Total Waste Sold
            </div>
          </Link>
          <Link href="/admin/home/earnings" className="w-1/3 p-4">
            <div className="cursor-pointer bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
               Earnings
            </div>
          </Link>
        </div>

        <div className="flex px-4">
          {/* Bottom Row */}
          <Link href="/admin/home/orders" className="w-1/3 p-4">
            <div className="cursor-pointer bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-lg hover:shadow-xl shadow-neutral-950 text-white">
               Previous Orders
            </div>
          </Link>
          <Link href="/admin/home/booking" className="w-1/3 p-4">
            <div className="cursor-pointer bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
               Track & Schedule order
            </div>
          </Link>
          <Link href="/admin/home/faq" className="w-1/3 p-4">
            <div className="cursor-pointer bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
               FAQs
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
