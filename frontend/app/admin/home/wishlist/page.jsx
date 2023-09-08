"use client"

import React, { useEffect, useState } from "react";
import left from "../../../../public/images/dashboard/left-arrow.svg";
import bell from "../../../../public/images/dashboard/bell.svg";
import axios from "axios";
import Image from "next/image";
import Stripe from "stripe";
import Link from "next/link";
import loading from "../../../../public/images/circleLoader.gif";
import { Toaster, toast } from "react-hot-toast"

const Page = () => {
  const [Data, setData] = useState();
  const [shake, setShake] = useState(false);
  const [isButtonLaoding, setIsButtonLaoding] = useState(false);
  const [productOccurrences, setProductOccurrences] = useState({});

  let SelectedName = ''
  let SelectedPrice = 0
  useEffect(() => {
    const getProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
        "https://recycle-it.onrender.com/org/dashboard/wishlistedProduct",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(res.data.wishlistforOrg);
      //console.log(res.data)
      if (res.data.wishlistforOrg) {
        const occurrences = {};
        res.data.wishlistforOrg.forEach(item => {
          if (occurrences[item.type]) {
            occurrences[item.type]++;
          } else {
            occurrences[item.type] = 1;
          }
        });
        setProductOccurrences(occurrences);

        const uniqueProducts = res.data.wishlistforOrg.filter((item, index, self) =>
          index === self.findIndex(t => t.type === item.type)
        );
        setData(uniqueProducts);
      }
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

  const handleCheckout = async (productType) => {
    toast.success("Paymnet initiated..⌛", {
      style: {
        border: "2px solid rgba(255, 255, 255, 0.1)",
        padding: "10px",
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        fontFamily: "Space-Grostek",
        fontSize: '1.1em',
        minWidth: "10em",
      },
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
    });
    setIsButtonLaoding(true);

    const item = Data.find(item => item.type === productType);
    if (!item) {
      setIsButtonLaoding(false);
      return;
    }

    const lineItems = [{
      price_data: {
        currency: "inr",
        product_data: {
          name: item.type,
          images: [item.img],
        },
        unit_amount: item.price * 100,
      },
      quantity: productOccurrences[item.type] || 0,
    }];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ["IN"],
      },
      mode: "payment",
      success_url: `${origin}/client/success`,
    });

    if (session.url) {
      window.location.href = session.url;
    } else {
      toast.error("Payment failed.☹️", {
        style: {
          border: "2px solid rgba(255, 255, 255, 0.1)",
          padding: "10px",
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          fontFamily: "Space-Grostek",
          fontSize: '1.1em',
          width: "50em",
        },
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
      });
    }

    setIsButtonLaoding(false);
  };

  const saveProducts = async (items) =>{
    const token = localStorage.getItem('token')
    try {

      const res = await axios.post('https://recycle-it.onrender.com/org/products/'+items._id,null,{
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }


   const handleIncreaseQuantity = (type) => {
    setProductOccurrences(prevOccurrences => ({
      ...prevOccurrences,
      [type]: (prevOccurrences[type] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (type) => {
    setProductOccurrences(prevOccurrences => ({
      ...prevOccurrences,
      [type]: Math.max((prevOccurrences[type] || 0) - 1, 0),
    }));
  };


  return (
   <div className="panel min-h-screen">
    <div className="phone:px-3 lg:px-10 flex justify-between border-b-2 border-white/10 phone:py-20 lg:py-4">
      <Link href="/admin/home">
        <Image src={left} alt="" className="phone:w-9 phone:h-9 lg:w-12 lg:h-12 my-auto"/>
      </Link>
      <h1 className="phone:text-3xl lg:text-5xl font-roxale text-white">
        Recycle It
      </h1>
      <Link href="/admin/notifications">
        <Image src={bell} alt="" className="phone:w-8 phone:h-8 lg:w-12 lg:h-12 my-auto"/>
      </Link>
    </div>
    <div className="lg:grid lg:grid-cols-3 w-[100%] phone:px-5 lg:px-10 mx-auto phone:py-3 lg:py-7 gap-5">
      {Data ? (
        Data.map((items, index) => (
          <div className="bg-white/10 border-2 flex flex-col justify-between lg:gap-7 border-white/10 lg:h-72 rounded-2xl lg:grid lg:grid-cols-2 lg:my-0 phone:my-5 px-3 shadow-lg" key={index}>
            <img
              src={items.img}
              alt=""
              className="m-auto overflow-hidden phone:h-52 lg:h-64 w-full object-cover rounded-2xl phone:mt-4"
            />
            <div className="my-5 flex flex-col justify-between phone:gap-7 lg:gap-0">
              <div className="">
                <div className="flex my-auto justify-between w-full">
                  <div className="font-roxale text-3xl text-white break-words">
                    {items.type}
                  </div>
                  <div className="font-roxale text-white text-xl bg-black/40 border-2 rounded-full border-white/10 w-10 h-10 items-center flex justify-center">
                      {productOccurrences[items.type] || 0}
                  </div>
                  <Toaster
                    position="top-center"
                    reverseOrder={false}
                  />
                </div>
                <p className="font-roxale text-gray-300">
                  {items.desc}
                </p>
              </div>
              <div className="flex lg:flex-col phone:gap-5 lg:gap-2 w-full">
                <div className="phone:grid lg:flex phone:gap-1 lg:gap-2">
                    <button
                      onClick={() => handleIncreaseQuantity(items.type)}
                      className="bg-black text-white rounded-lg px-3 py-1"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleDecreaseQuantity(items.type)}
                      className="bg-black text-white rounded-lg px-3 py-1"
                      disabled={productOccurrences[items.type] <= 0}
                    >
                      -
                    </button>
                  </div>
                <p className="phone:text-2xl lg:text-3xl font-roxale text-white my-auto">
                  Price: ₹{items.price * (productOccurrences[items.type] || 0)}
                </p>
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                />
                <button onClick={()=>{saveProducts(items)}} className="">
                  <button onClick={() =>handleCheckout(items.type)} className={`font-roxale rounded-lg shadow-lg my-auto w-full py-2 px-8 ${
                    isButtonLaoding ? 'bg-gray-300/10 cursor-not-allowed border border-black/10' : 'bg-black text-white'
                  }`} disabled={isButtonLaoding}>
                    Buy Now
                  </button>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-[85vh] w-screen">
          <Image src={loading} alt="" className="w-20 h-20"/>
        </div>
      )}
    </div>
    </div>
  );
};

export default Page;
