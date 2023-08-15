"use client";

import React, { useState } from "react";
import line from "../../public/images/process/line.svg";
import Image from "next/image";
import star from "../../public/images/newsletter/star.svg";
import education from "../../public/images/newsletter/education.svg";
import events from "../../public/images/newsletter/events.svg";
import offer from "../../public/images/newsletter/offer.svg";
import update from "../../public/images/newsletter/update-time.svg";
import person from "../../public/images/newsletter/person.svg";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you can implement your logic to handle the subscription
      console.log(`Subscribed with email: ${email}`);
      setEmail("");
    }
  };


  const features = [
    {
      id: 1,
      name: 'Exclusive Content',
      image: star,
    },
    {
      id: 2,
      name: 'Latest Updates',
      image: update,
    },
    {
      id: 3,
      name: 'Special Offers',
      image: offer,
    },
    {
      id: 4,
      name: 'Educational Insights',
      image: education,
    },
    {
      id: 5,
      name: 'Event Notifications',
      image: events,
    },
    {
      id: 6,
      name: 'Personalized Recommendations',
      image: person,
    }
  ]

  return (
    <div className="mx-auto flex justify-between py-16 w-11/12">
      <div className="w-1/2 border-r-[2px] border-lime-200 h-[24rem]">
        <h1 className="font-odesans-semibold text-5xl px-10">
          Our Free Newsletter is <br /> Launching Soon!
        </h1>
        <p className="text-xl font-space-grostek mt-5 px-10">
          Get the earliest access about our new products.
        </p>
        <hr className="border border-lime-200 rounded-full mt-10" />
        <div className="flex justify-center px-10 font-space-grostek mt-10">
        <div className="flex gap-16">
          <div className="flex flex-col gap-5">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex gap-3">
                <Image src={feature.image} alt="" className="w-7 h-7" />
                <p className="my-auto text-lg text-emerald-950">{feature.name}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {features.slice(3).map((feature, index) => (
              <div key={index} className="flex gap-3">
                <Image src={feature.image} alt="" className="w-7 h-7" />
                <p className="my-auto text-lg text-emerald-950">{feature.name}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      <div className="mx-auto my-auto relative">
        <div className="absolute -top-20 left-[5rem] -z-10 w-96 h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
        <div className="absolute -top-16 right-[5rem] -z-10 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
        <h2 className="text-5xl font-odesans-semibold mb-4 text-teal-950">
          Subscribe
        </h2>
        <p className="mb-4 font-garamond-regular text-xl">
          Stay updated with our latest news and offers.
        </p>
        <form onSubmit={handleSubscribe} className="grid">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-5 py-3 font-space-grostek text-lg my-auto rounded-lg bg-white/40 focus:outline-none text-emerald-950"
          />
          <button
            type="submit"
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg mt-5 hover:bg-emerald-700 font-space-grostek text-lg focus:outline-none w-1/2 mx-auto transition duration-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;