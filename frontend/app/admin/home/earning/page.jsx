"use client";

import React, { useState } from "react";
import photo from "../../../../public/images/dashboard/sagittarius.png";
import Image from "next/image";
import left from "../../../../public/images/dashboard/left-arrow.svg";
import Link from "next/link";
import bell from "../../../../public/images/dashboard/bell.svg";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import { Menu } from "@headlessui/react";

const PreviousOrdersPage = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [selectedMaterial, setSelectedMaterial] = useState("Plastic");
  const [selectedWeight, setSelectedWeight] = useState(1);
  const previousOrders = [
   
    {
      id: 1,
      date: "2023-08-10",
      items: "PET",
      price: 20.0,
      status: "2 kg",
    },
    {
      id: 2,
      date: "2023-07-10",
      items: "HDPE",
      price: 30.0,
      status: "5 kg",
    },
    {
      id: 3,
      date: "2023-08-21",
      items: "LDPE",
      price: 45.0,
      status: "2 kg",
    },
    {
      id: 4,
      date: "2023-08-17",
      items: "PP",
      price: 20.0,
      status: "3.5 kg",
    },
    {
      id: 5,
      date: "2023-08-15",
      items: "PVC",
      price: 30.0,
      status: "8 kg",
    },
  ];

  return (
    <>
      {isAboveSmallScreens ? (
        <div className="flex panel scroll">
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
          <div className="p-8 w-full">
            <div className="flex justify-between">
              <h2 className="text-3xl font-odesans-semibold text-white my-auto">
                Total Waste Bought
              </h2>
              <Link href="/admin/notifications">
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
                Date
              </div>
              <div className="w-1/4 text-xl text-left ml-4 text-white font-garamond-regular">
                Price/kg
              </div>
              <div className="w-1/4 text-xl text-left ml-4 text-white font-garamond-regular">
                Weight
              </div>
            </div>
            <div className="mt-2 space-y-4 h-screen overflow-y-scroll scroll">
              {previousOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white/10 border-2 border-white/10 hover:border-white/30 transition duration-500 cursor pointer py-4 shadow-md rounded-md flex space-x-4 cursor-pointer"
                >
                  <div className="w-1/4 text-left ml-5 text-white font-space-grostek">
                    {order.id}
                  </div>
                  <div className="w-1/4 text-left ml-5 text-white font-space-grostek">
                    {order.items}
                  </div>
                  <div className="w-1/4 text-left ml-5 text-white font-space-grostek">
                    {order.date}
                  </div>
                  <div className="w-1/4 text-left ml-5 text-white font-space-grostek">
                  ₹{order.price}
                  </div>
                  <div className="w-1/4 text-left ml-5 text-white font-space-grostek">
                    {order.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex panel scroll">
          <div className="phone:px-3 phone:py-5 lg:p-8 w-full">
            <div className="flex justify-between">
              <h2 className="text-2xl font-odesans-semibold text-white my-auto">
                Total Waste Sold
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
                Date
              </div>
              <div className="w-1/4 text-white text-center font-garamond-regular">
                Price/kg
              </div>
              <div className="w-1/4 text-white text-center font-garamond-regular">
                Weight
              </div>
            </div>
            <div className="mt-2 space-y-4 h-[30rem] overflow-y-scroll scroll">
              {previousOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white/10 border-2 border-white/10 hover:border-white/30 transition duration-500 cursor pointer py-4 px-4 shadow-md rounded-md flex space-x-4 cursor-pointer text-sm justify-between"
                >
                  <div className="w-1/4 text-white text-center font-space-grostek">
                    {order.items}
                  </div>
                  <div className="w-1/4 text-white text-center font-space-grostek">
                    {order.date}
                  </div>
                  <div className="w-1/4 text-white text-center font-space-grostek">
                  ₹{order.price}
                  </div>
                  <div className="w-1/4 text-white text-center font-space-grostek">
                    {order.status}
                  </div>
                </div>
              ))}
            </div>
            <div className="justify-center items-center my-10 w-11/12 mx-auto h-[60vh]">
              <h1 className="text-2xl font-odesans-semibold text-white text-center">
                Estimate your Earning
              </h1>
              <div className="flex flex-col gap-3 pt-7">
                <h1 className="text-white text-center text-xl">
                  Enter Quantity
                </h1>
                <input
                  type="number"
                  placeholder="Enter Kilogram"
                  className="py-3 px-5 text-lg bg-white/10 border-white/10 rounded-xl text-white"
                  value={selectedWeight}
                  onChange={(e) => setSelectedWeight(e.target.value)}
                />
              </div>
              <h1 className="text-white text-center text-xl mt-7">
                  Enter Product Type
              </h1>
              <Menu>
                <Menu.Button className="px-4 py-2 bg-white/10 rounded-sm mx-auto justify-center flex mt-3 font-medium text-white w-32">
                  <h1>
                    {selectedMaterial}
                  </h1>
                </Menu.Button>
                <Menu.Items className="py-2 text-sm font-medium text-gray-700 flex flex-col gap-3">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`bg-white/10 py-3 px-5 text-center rounded-xl text-white w-20 mx-auto ${
                          active && "bg-white/20"
                        }`}
                        onClick={() => setSelectedMaterial("Cloths")}
                      >
                        Cloths
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`bg-white/10 py-3 px-5 text-center rounded-xl text-white w-20 mx-auto ${
                          active && "bg-white/20"
                        }`}
                        onClick={() => setSelectedMaterial("Plastic")}
                      >
                        Plastic
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`bg-white/10 py-3 px-5 text-center rounded-xl text-white w-20 mx-auto ${
                          active && "bg-white/20"
                        }`}
                        onClick={() => setSelectedMaterial("Metal")}
                      >
                        Metal
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              <div className="text-4xl gap-5 font-odesans-semibold text-white flex my-5 justify-center mb-auto">
                <h1>Earning:</h1>
                <h1>$2000</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviousOrdersPage;
