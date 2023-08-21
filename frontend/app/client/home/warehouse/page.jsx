"use client"

import React, { useEffect, useState } from "react";
import love from "../../../../public/images/logo/love(1).svg";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { request } from "http";

const page2 = () => {

  const [Data, setData] = useState();
  const [selectedName, setSelectedName] = useState();
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedId, setSelectedId] = useState()
  const [selectedDescription, setSelectedDescription] = useState();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
        "https://recycle-it.onrender.com/client/dashboard/products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(res.data.products);
      console.log(res.data.products[1]._id)
      } catch(error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])


  // const Key = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
  // const stripe = new Stripe(Key, {
  //   apiVersion: "2022-11-15",
  // });


  const handleCheckout = async (items) => {
    setSelectedId(items._id)
    setSelectedName(items.type);
    setSelectedPrice(items.price);
    setSelectedDescription(items.desc);
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ["card"],
    //   line_items: [
    //     {
    //       price_data: {
    //         currency: "inr",
    //         product_data: {
    //           name: selectedName,
    //         },
    //         unit_amount: selectedPrice*100,
    //       },
    //       quantity: 1,
    //     },
    //   ],
    //   shipping_address_collection: {
    //     allowed_countries: ["IN"],
    //   },
    //   mode: "payment",
    //   success_url: `${origin}/client/success`,
    // });

    // if (session.url) {
    //   window.location.href = session.url;
    // }
  };

  return (
    <div className="grid grid-cols-3 panel w-[100%] px-10 mx-auto py-10 gap-5">
      {Data ? (
        Data.map((items, index) => (
          <div className="bg-white/10 border-2 border-white/10 h-72 rounded-2xl grid grid-cols-2 gap-5 px-3" key={index}>
            <img
              src={items.img}
              alt=""
              className="m-auto overflow-hidden h-60 w-full object-cover rounded-3xl"
            />
            <div className="my-5 flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="flex my-auto justify-between w-full">
                  <div className="font-odesans-semibold text-3xl text-white break-words">
                    {items.type}
                  </div>
                  <button>
                    <Image src={love} alt="" className="w-9 h-9 mt-auto" />
                  </button>
                </div>
              </div>
              <p className="font-space-grostek text-gray-300">
                {items.desc}
              </p>
              <div className="flex flex-col gap-5">
                <p className="text-4xl font-odesans-semibold text-white">
                  ₹{items.price}
                </p>
                <button onClick={() =>handleCheckout(items)} className="font-space-grostek py-3 bg-black text-white rounded-lg shadow-lg my-auto w-[50%]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>Loading</>
      )}
    </div>
  );
};

export default page2;
