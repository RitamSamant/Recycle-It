"use client";

import Link from "next/link";
import React from "react";
import photo from "../../../public/images/dashboard/sagittarius.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  CategoryScale,
  LinearScale,
  Chart as CHARTJS,
  LineElement,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  ArcElement,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";
import pattern1 from "../../../public/images/dashboard/pattern_01.svg";
import pattern2 from "../../../public/images/dashboard/pattern_02.svg";
import pattern3 from "../../../public/images/dashboard/pattern_03.svg";
import pattern4 from "../../../public/images/dashboard/pattern_04.svg";
import pattern6 from "../../../public/images/dashboard/pattern_06.svg";
import useMediaQuery from "@/hooks/useMediaQuery";

CHARTJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  ArcElement
);

const DashboardPage = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/admin/warehouse");
  };

  //dummy data for react-chartjs-2 (Line)
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Bought",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(0,0,0,0.4)",
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  //dummy data for react-chartjs-2 (Pie)
  const dataPie = {
    labels: ["23/08", "yesterday", "Today", "Tomorrow", "27/08"],
    datasets: [
      {
        label: "Bookings",
        fill: false,
        lineTension: 0.5,
        backgroundColor: [
          "rgba(75,192,192,0.4)",
          "#000080",
          " #FF1493",
          "#964B00",
          "rgba(75,192,192,0.4)",
        ],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        data: [45, 39, 70, 61, 56],
      },
    ],
  };

  //dummy data for react-chartjs-2 (bar)
  const dataBar = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Earnings",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 2,
        data: [85, 59, 90, 95, 86],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            family: "Space-Grostek",
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
          font: {
            family: "Space-Grostek",
            size: 12,
          },
        },
        title: {
          display: true,
          color: "white",
          font: {
            family: "Space-Grostek",
            size: 16,
          },
        },
      },
      y: {
        ticks: {
          color: "white",
          font: {
            family: "Space-Grostek",
            size: 12,
          },
        },
        title: {
          display: true,
          color: "white",
          font: {
            family: "Helvetica",
            size: 16,
          },
        },
      },
    },
  };

  return (
    <>
      {isAboveSmallScreens ? (
        <div className="flex h-full panel pb-5">
          {/* Left Panel */}
          <div className="w-60 border-r-2 flex justify-center pt-16 border-white/10">
            <div className="text-white mb-4">
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
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full">
            <div className="lg:py-3 border-b-2 border-white/10 text-center text-5xl  text-white font-odesans-semibold">
              Recycle It
            </div>
            <div className="flex px-4 mt-3">
              {/* Top Row */}
              <Link href="/client/home/warehouse" className="w-1/3 p-4">
                <div className="relative cursor-pointer flex justify-center items-center bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-lg hover:shadow-xl shadow-neutral-950 text-white  overflow-hidden">
                  <Image
                    src={pattern1}
                    alt=""
                    className="opacity-10 absolute"
                  />
                  <h1 className=" text-5xl absolute font-odesans-medium">Warehouse</h1>
                </div>
              </Link>
              <Link href="/client/home/wishlist" className="w-1/3 p-4">
                <div className="relative cursor-pointer flex justify-center items-center bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-lg hover:shadow-xl shadow-neutral-950 text-white  overflow-hidden">
                  <Image
                    src={pattern3}
                    alt=""
                    className="opacity-30 absolute"
                  />
                  <p className=" text-5xl absolute font-odesans-medium">Wishlist</p>
                </div>
              </Link>
              <Link href="/client/home/wastebought" className="w-1/3 p-4">
                <div className="cursor-pointer flex flex-col justify-between p-5 bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
                  <p className=" text-center text-2xl">Waste Bought</p>
                  <Line data={data} options={options} className="" />
                </div>
              </Link>
            </div>

            <div className="flex px-4">
              {/* Bottom Row */}
              <Link href="/client/home/booking" className="w-1/3 p-4">
                <div className="relative cursor-pointer flex justify-center items-center bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-lg hover:shadow-xl shadow-neutral-950 text-white  overflow-hidden">
                  <Image
                    src={pattern4}
                    alt=""
                    className="opacity-30 absolute"
                  />
                  <h1 className=" text-5xl absolute font-odesans-medium">Booking</h1>
                </div>
              </Link>
              <Link href="/client/home/earning" className="w-1/3 p-4">
                <div className="cursor-pointer p-5 flex flex-col justify-between bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
                  <p className=" text-center text-2xl">Earnings</p>
                  <Bar data={dataBar} options={options} className="" />
                </div>
              </Link>
              <Link href="/client/home/faq" className="w-1/3 p-4">
                <div className="relative cursor-pointer flex justify-center items-center bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-lg hover:shadow-xl shadow-neutral-950 text-white  overflow-hidden">
                  <Image
                    src={pattern2}
                    alt=""
                    className="opacity-30 absolute"
                  />
                  <p className=" text-5xl absolute font-odesans-medium">FAQ</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="panel h-full">
            <div className="flex gap-[3.5rem] justify-between border-b-2 border-white/10 px-2">
              <Image
                height={100}
                width={100}
                src={photo}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white/20 m-auto"
              />
              <div className="py-3 border-white/10 text-center text-5xl text-white font-odesans-semibold">
                Recycle It
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#8055F7" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 my-auto text-purple-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>

            <div className="px-4 mt-3">
              {/* Top Row */}
              <Link href="/client/home/warehouse" className="w-1/3 p-4">
                <div className="relative cursor-pointer flex justify-center items-center bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-lg hover:shadow-xl shadow-neutral-950 text-white  overflow-hidden">
                  <Image
                    src={pattern1}
                    alt=""
                    className="opacity-10 absolute"
                  />
                  <h1 className=" text-5xl absolute font-odesans-medium">Warehouse</h1>
                </div>
              </Link>
              <Link href="/client/home/wishlist" className="w-1/3 p-4">
                <div className="relative cursor-pointer flex justify-center items-center bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-lg hover:shadow-xl shadow-neutral-950 text-white  overflow-hidden">
                  <Image
                    src={pattern3}
                    alt=""
                    className="opacity-30 absolute"
                  />
                  <p className=" text-5xl absolute font-odesans-medium">Wishlist</p>
                </div>
              </Link>
              <Link href="/client/home/wastebought" className="w-1/3 p-4">
                <div className="cursor-pointer flex flex-col justify-between p-5 bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
                  <p className=" text-center text-2xl">Waste Bought</p>
                  <Line data={data} options={options} className="" />
                </div>
              </Link>
            </div>
            <div className="lg:flex px-4 phone:-mt-6">
              {/* Bottom Row */}
              <Link href="/client/home/booking" className="w-1/3 p-4">
                <div className="relative cursor-pointer flex justify-center items-center bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-lg hover:shadow-xl shadow-neutral-950 text-white  overflow-hidden">
                  <Image
                    src={pattern4}
                    alt=""
                    className="opacity-30 absolute"
                  />
                  <h1 className=" text-5xl absolute font-odesans-medium">Booking</h1>
                </div>
              </Link>
              <Link href="/client/home/earning" className="w-1/3 p-4">
                <div className="cursor-pointer p-5 flex flex-col justify-between bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-md shadow-neutral-950 text-white">
                  <p className=" text-center text-2xl">Earnings</p>
                  <Bar data={dataBar} options={options} className="" />
                </div>
              </Link>
              <Link href="/client/home/faq" className="w-1/3 p-4">
                <div className="relative cursor-pointer flex justify-center items-center bg-white/10 border-2 border-white/10 hover:border-white/20 transition duration-300 h-[18rem] rounded-2xl shadow-lg hover:shadow-xl shadow-neutral-950 text-white  overflow-hidden">
                  <Image
                    src={pattern2}
                    alt=""
                    className="opacity-30 absolute"
                  />
                  <p className=" text-5xl absolute font-odesans-medium">FAQ</p>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DashboardPage;
