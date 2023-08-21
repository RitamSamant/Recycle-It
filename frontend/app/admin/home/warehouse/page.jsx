"use client"

import React, { useEffect, useState } from "react";
import love from "../../../../public/images/logo/love(1).svg";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";


const page2 = () => {

  const [Data, setData] = useState();
  let SelectedName = ''
  let SelectedPrice = 0
  useEffect(() => {
    const getProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
        "https://recycle-it.onrender.com/org/dashboard/products",
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


  const Key = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
  const stripe = new Stripe(Key, {
    apiVersion: "2022-11-15",
  });
  
  const handleCheckout = async (items) => {
  
    const saveProducts = async ()=>{
      //console.log(items._id)
      const token = localStorage.getItem('token')
      const url = `https://recycle-it.onrender.com/org/products/`+items._id
      //console.log(url)
      try {
        
        const res = await axios.post(url,null,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        })
        //console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    

    const getSavedProd = async () =>{
      const token = localStorage.getItem('token')
      try {
        
        const url = "https://recycle-it.onrender.com/org/dashboard/orderedItems"
        const res = await axios.get(url,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        })
        const last = res.data.orderforOrg.length - 1
        //console.log(res.data.orderforclient)
        //console.log(last)
        SelectedName = res.data.orderforOrg[last].type
        SelectedPrice = res.data.orderforOrg[last].price
        //console.log(SelectedName,SelectedPrice)
      } catch (err) {
        console.log(err)
      }
    }
    await saveProducts()
    await getSavedProd()
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: SelectedName,
            },
            unit_amount: SelectedPrice*100,
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["IN"],
      },
      mode: "payment",
      success_url: `${origin}/client/success`,
    });

    if (session.url) {
      window.location.href = session.url;
    }
   };

   const handleWish = async(items)=>{
    const token = localStorage.getItem('token')
    try {
      
      const res = await axios.post('https://recycle-it.onrender.com/org/wishlist/products/'+items._id,null,{
        headers : {
          Authorization :  `Bearer ${token}`
        }
      })
      console.log(res.data)
      alert("Added to wishlist!")
    } catch (err) {
      console.log(err)
    }
   }

  return (
   <>
    <div className="lg:grid lg:grid-cols-3 panel w-[100%] h-full px-10 mx-auto py-10 gap-5">
      {Data ? (
        Data.map((items, index) => (
          <div className="bg-white/10 border-2 flex flex-col justify-between gap-5  border-white/10 lg:h-72 h-full rounded-2xl lg:grid lg:grid-cols-2 py-2 lg:my-0 my-5  px-3" key={index}>
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
                    <Image src={love} alt="" className="w-9 h-9 mt-auto" onClick={()=>{handleWish(items)}}/>
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
    </>
  );
};

export default page2;
