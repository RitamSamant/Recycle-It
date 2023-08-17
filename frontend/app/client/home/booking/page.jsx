"use client";

import React, { useRef } from "react";
import photo from "../../../../public/images/dashboard/sagittarius.png";
import Image from "next/image";
import left from "../../../../public/images/dashboard/left-arrow.svg";
import Link from "next/link";
import bell from "../../../../public/images/dashboard/bell.svg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameMonth,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PreviousOrdersPage = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));

const [selectedDate, setSelectedDate] = useState(null);
const [selectedMonth, setSelectedMonth] = useState(null);

  
  // const previousOrders = [
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  //   {
  //     id: 1,
  //     date: "2023-08-10",
  //     items: "Product A",
  //     price: 20.0,
  //     status: "Completed",
  //   },
  // ];

  return (
    <div className="flex panel scroll">
      <div className="w-60 border-r-2 flex justify-center pt-8 border-white/10">
        <div className="text-white mb-4">
          <Link href="/admin/home" className="flex mb-5">
            <Image src={left} alt="" className="phone:w-8 phone:h-8 lg:w-12 lg:h-12 phone:my-auto mx-auto mb-10" />
          </Link>
          <Image
            src={photo}
            alt="Profile"
            className="phone:w-10 phone:h-10 lg:w-16 lg:h-16 rounded-full border-2 border-white/20 mx-auto phone:my-auto"
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
      </div>) : (<></>)}

      {/* Main */}
      <div className="w-full">
        <div className="flex justify-between border-b-2 border-white/10 p-5">
          <h2 className="phone:text-xl lg:text-3xl font-odesans-semibold text-white my-auto">
            Book A Date & Time
          </h2>
          <Link href="/admin/notifications">
            <Image src={bell} alt="" className="phone:w-7 phone:h-7 lg:w-10 lg:h-10 my-auto" />
          </Link>
        </div>

        {/* Calender and Time Picker */}
        <div className="mt-10 lg:grid grid-cols-[2fr_1.5fr_1fr]">
          {/* Calender */}
          <div className="font-space-grostek panel scroll border-r-2 border-white/10">
            <div className="w-full px-2 mx-auto">
              <div className="flex items-center px-5">
                <h2 className="flex-auto font-semibold text-white font-odesans-semibold phone:text-xl lg:text-3xl">
                  {format(firstDayOfCurrentMonth, "MMMM yyyy")}
                </h2>

                <button
                  onClick={previous}
                  type="button"
                  className="-my-1.5 flex flex-none items-center justify-center p-3 text-white hover:bg-black/40 rounded-full transition duration-500 ease-in-out"
                >
                  <span className="sr-only">Previous month</span>
                  <ChevronLeftIcon className="phone:w-6 phone:h-6 lg:w-8 lg:h-8" aria-hidden="true" />
                </button>
                <button
                  onClick={next}
                  type="button"
                  className="-my-1.5 -mr-1.5 flex flex-none items-center justify-center p-3 text-white hover:bg-black/40 rounded-full transition duration-500 ease-in-out"
                >
                  <span className="sr-only">Next month</span>
                  <ChevronRightIcon className="phone:w-6 phone:h-6 lg:w-8 lg:h-8" aria-hidden="true" />
                </button>
              </div>
              <div className="flex text-gray-100 justify-between mt-8 lg:px-5">
                <div className="border border-white/10 rounded-full phone:w-12 phone:h-12 lg:w-16 lg:h-16 flex items-center justify-center text-lg">
                  S
                </div>
                <div className="border border-white/10 rounded-full phone:w-12 phone:h-12 lg:w-16 lg:h-16 flex items-center justify-center text-lg">
                  M
                </div>
                <div className="border border-white/10 rounded-full phone:w-12 phone:h-12 lg:w-16 lg:h-16 flex items-center justify-center text-lg">
                  T
                </div>
                <div className="border border-white/10 rounded-full phone:w-12 phone:h-12 lg:w-16 lg:h-16 flex items-center justify-center text-lg">
                  W
                </div>
                <div className="border border-white/10 rounded-full phone:w-12 phone:h-12 lg:w-16 lg:h-16 flex items-center justify-center text-lg">
                  T
                </div>
                <div className="border border-white/10 rounded-full phone:w-12 phone:h-12 lg:w-16 lg:h-16 flex items-center justify-center text-lg">
                  F
                </div>
                <div className="border border-white/10 rounded-full phone:w-12 phone:h-12 lg:w-16 lg:h-16 flex items-center justify-center text-lg">
                  S
                </div>
              </div>
              <div className="grid grid-cols-7 mt-2">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.date}
                    className={classNames(
                      // dayIdx > 6 && 'border-t border-gray-200',
                      dayIdx === 0 && colStartClasses[getDay(day.date)],
                      "pb-2 pt-4 text-neutral-500 text-lg"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedDay(day.date)}
                      className={classNames(
                        isEqual(day.date, selectedDay) && "text-white text-lg",
                        !isEqual(day.date, selectedDay) &&
                          isEqual(day.date, today) &&
                          "text-red-500 text-lg",
                        !isEqual(day.date, firstDayOfCurrentMonth) &&
                          !isEqual(day.date, today) &&
                          isSameMonth(
                            day.date,
                            startOfMonth(firstDayOfCurrentMonth)
                          ) &&
                          "text-white/80 text-lg",
                        !isEqual(day.date, firstDayOfCurrentMonth) &&
                          !isEqual(day.date, today) &&
                          !isSameMonth(
                            day.date,
                            startOfMonth(firstDayOfCurrentMonth)
                          ) &&
                          "text-white/20 text-lg",
                        isEqual(day.date, selectedDay) &&
                          isEqual(day.date, today) &&
                          "bg-black/20 border border-white/10",
                        isEqual(day.date, selectedDay) &&
                          !isEqual(day.date, today) &&
                          "bg-black",
                        !isEqual(day.date, selectedDay) && "hover:bg-white/10",
                        (isEqual(day.date, selectedDay) ||
                          isEqual(day.date, today)) &&
                          "",
                        "mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                      )}
                    >
                      <time dateTime={day.date}>{format(day.date, "d")}</time>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Time */}
          <div className="my-auto flex flex-col items-center justify-center phone:mb-12 lg:mb-0 lg:mt-0 phone:bg-white/5 lg:bg-transparent lg:border-0 ">
            <div className="flex justify-center items-center text-white/90 font-technology">
              <div className="phone:text-[9rem] lg:text-[12rem] text-right" onWheel={(e) => handleScroll(e, true)}>
                {selectedHour.toString().padStart(2, '0')}
              </div>
              <p className="text-[12rem] text-white/90 mx-5">:</p>
              <div className="phone:text-[9rem] lg:text-[12rem] text-left" onWheel={(e) => handleScroll(e, false)}>
                {selectedMinute.toString().padStart(2, '0')}
              </div>
            </div>
          ))}
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
