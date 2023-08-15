import React from "react";
import photo from "../../../../public/images/dashboard/sagittarius.png";
import Image from "next/image";
import left from "../../../../public/images/dashboard/left-arrow.svg";
import Link from "next/link";
import bell from "../../../../public/images/dashboard/bell.svg";

const PreviousOrdersPage = () => {
  const previousOrders = [
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
    {
      id: 1,
      date: "2023-08-10",
      items: "Product A",
      price: 20.0,
      status: "Completed",
    },
  ];

  return (
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
            <Image src={bell} alt="" className="w-10 h-10 my-auto"/>
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
            Price
          </div>
          <div className="w-1/4 text-xl text-left ml-4 text-white font-garamond-regular">
            Status
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
                ${order.price}
              </div>
              <div className="w-1/4 text-left ml-5 text-white font-space-grostek">
                {order.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousOrdersPage;
