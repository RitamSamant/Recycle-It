import React from "react";
import Image from "next/image";
import star from "../../public/images/newsletter/star.svg";
import education from "../../public/images/newsletter/education.svg";
import events from "../../public/images/newsletter/events.svg";
import offer from "../../public/images/newsletter/offer.svg";
import update from "../../public/images/newsletter/update-time.svg";
import person from "../../public/images/newsletter/person.svg";

const Newsletter = () => {

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
    <div className="mx-auto lg:flex justify-between py-16 lg:w-11/12 phone:overflow-x-hidden lg:overflow-x-visible">
      <div className="lg:w-1/2 lg:border-r-[2px] lg:border-lime-200 lg:h-[24rem]">
        <h1 className="font-artik phone:text-3xl lg:text-5xl lg:px-10 phone:px-5">
          Our Free Newsletter is <br /> Launching Soon!
        </h1>
        <p className="phone:text-sm lg:text-base mt-5 lg:px-10 phone:px-5">
          Get the earliest access about our new products.
        </p>
        <hr className="border border-lime-200 rounded-full phone:mt-7 lg:mt-10 " />
        <div className="flex px-10 mt-10">
        <div className="flex gap-16">
          <div className="flex flex-col gap-5">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex gap-3">
                <Image src={feature.image} alt="" className="phone:w-5 phone:h-5 lg:w-7 lg:h-7 my-auto" />
                <p className="my-auto lg:text-lg text-emerald-950">{feature.name}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {features.slice(3).map((feature, index) => (
              <div key={index} className="flex gap-3">
                <Image src={feature.image} alt="" className="phone:w-5 phone:h-5 lg:w-7 lg:h-7 my-auto" />
                <p className="my-auto lg:text-lg text-emerald-950">{feature.name}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      <div className="mx-auto my-auto relative mt-16">
        <div className="absolute -top-20 left-[5rem] -z-10 phone:w-72 phone:h-72 lg:w-96 lg:h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
        <div className="absolute -top-16 right-[5rem] -z-10 phone:w-72 phone:h-72 lg:w-96 lg:h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
        <h2 className="phone:text-3xl lg:text-5xl font-artik mb-4 text-teal-950 phone:px-5 lg:px-0">
          Subscribe
        </h2>
        <p className="mb-4 phone:text-sm lg:text-base phone:px-5 lg:px-0">
          Stay updated with our latest news and offers.
        </p>
        <form className="grid phone:px-5 lg:px-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 phone:text-sm lg:text-lg my-auto rounded-lg bg-white/40 focus:outline-none text-emerald-950"
          />
          <button
            type="submit"
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg mt-5 hover:bg-emerald-700 phone:text-sm lg:text-base focus:outline-none w-1/2 mx-auto transition duration-500"
          >
            <p className="my-auto">
              Subscribe
            </p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
