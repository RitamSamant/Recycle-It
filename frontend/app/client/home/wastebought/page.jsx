"use client";

import React,{useEffect,useState} from "react";
import photo from "../../../../public/images/dashboard/sagittarius.png";
import Image from "next/image";
import left from "../../../../public/images/dashboard/left-arrow.svg";
import Link from "next/link";
import bell from "../../../../public/images/dashboard/bell.svg";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import axios from "axios";


const PreviousOrdersPage = () => {
  const [Data , setData] = useState()
  const getWishlist = async () =>{
    const token = localStorage.getItem('token')
    try {

      const res = await axios.get('https://recycle-it.onrender.com/client/dashboard/orderedItems',{
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      console.log(res.data.wishlistforClient)
      setData(res.data.orderforclient)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(()=>{
    getWishlist()
  },[])
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isAboveSmallScreens ? (
        <div className="flex panel scroll min-h-screen">
          <div className="w-60 border-r-2 flex justify-center pt-8 border-white/10">
            <div className="text-white mb-4">
              <Link href="/client/home" className="flex">
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
          <div className="p-8 w-full">
            <div className="flex justify-between">
              <h2 className="text-3xl font-odesans-semibold text-white my-auto">
                Recycled Items Bought
              </h2>
              <Link href="/client/notifications">
                <Image src={bell} alt="" className="w-10 h-10 my-auto" />
              </Link>
            </div>
            <div className="flex space-x-4 mt-10">
              <div className="w-1/4 text-xl text-left ml-4 text-white font-garamond-regular">
                Id
              </div>
              <div className="w-1/4 text-xl text-left ml-4 text-white font-garamond-regular">
                Items
              </div>
              <div className="w-1/4 text-xl text-left ml-4 text-white font-garamond-regular">
                Time
              </div>
              <div className="w-1/4 text-xl text-left ml-4 text-white font-garamond-regular">
                Price
              </div>
              <div className="w-1/4 text-xl text-left ml-4 text-white font-garamond-regular">
                Status
              </div>
            </div>
            <div className="mt-2 space-y-4 h-screen overflow-y-scroll scroll">
              {Data ? Data.map((items,index) => (
                <div
                  key={items._id}
                  className="bg-white/10 border-2 border-white/10 hover:border-white/30 transition duration-500 cursor pointer py-4 shadow-md rounded-md flex space-x-4 cursor-pointer"
                >
                  <div className="w-1/4 text-left text-sm ml-5 text-white font-space-grostek">
                    {index+1}
                  </div>
                  <div className="w-1/4 text-left ml-5 text-white font-space-grostek">
                    {items.type}
                  </div>
                  <div className="w-1/4 text-left ml-5 text-white font-space-grostek">
                    Recently
                  </div>
                  <div className="w-1/4 text-left ml-5 text-white font-space-grostek">
                  ₹{items.price}
                  </div>
                  <div className="w-1/4 text-left ml-5 text-white font-space-grostek">
                    Processing
                  </div>
                </div>
              )):"Loading!"}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex panel scroll">

          <div className="phone:p-4 lg:p-8 w-full">
            <div className="flex justify-between">
              <h2 className="text-2xl font-odesans-semibold text-white my-auto">
                Recycled Items Bought
              </h2>
              <Link href="/admin/notifications">
                <Image src={bell} alt="" className="w-8 h-8 my-auto" />
              </Link>
            </div>
            <div className="flex space-x-4 mt-10">
              <div className="w-1/4 text-white text-center font-garamond-regular">
                Items
              </div>
              <div className="w-1/4 text-white text-center font-garamond-regular">
                Time
              </div>
              <div className="w-1/4 text-white text-center font-garamond-regular">
                Price
              </div>
              <div className="w-1/4 text-white text-center font-garamond-regular">
                Status
              </div>
            </div>
            <div className="mt-2 space-y-4 h-screen overflow-y-scroll scroll">
              {Data ? Data.map((items,index) => (
                <div
                  key={index+1}
                  className="bg-white/10 border-2 border-white/10 hover:border-white/30 transition duration-500 cursor pointer py-4 px-4 shadow-md rounded-md flex space-x-4 cursor-pointer text-sm justify-between"
                >
                  <div className="w-1/4 text-white text-center font-space-grostek">
                    {items.type}
                  </div>
                  <div className="w-1/4 text-white text-center font-space-grostek">
                    Recently
                  </div>
                  <div className="w-1/4 text-white text-center font-space-grostek">
                  ₹{items.price}
                  </div>
                  <div className="w-1/4 text-white text-center font-space-grostek">
                    Processing
                  </div>
                </div>
              )):""}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviousOrdersPage;
