import Image from "next/image";
import React from "react";
import flower from "../../public/images/benefits/flower.png";
import tick from "../../public/images/benefits/tick.svg";
import { SiteBlob2 } from "../../components/site-blob-2"

const Benefits = () => {
  const benefitsList = [
    "Reduce environmental impact",
    "Promote sustainability",
    "Contribute to recycling efforts",
    "Save natural resources",
    "Reduce waste generation",
    "Support circular economy",
    "Lower carbon footprint",
    "Create green jobs",
    "Improve community health",
    "Enhance corporate social responsibility",
  ];

  return (
    <div className="w-full">
      <div className="w-5/6 mx-auto py-16">
        <div className="relative">
          <div className="absolute -top-8 left-[20rem] w-72 h-72 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
          <div className="absolute -top-10 left-[30rem] w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -top-10 left-[42rem] w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
          <h1 className="text-5xl font-odesans-semibold mb-8 text-center">
            <div className="flex justify-center mb-3 gap-3">
              <h1>Benefits of</h1>
              <Image src={flower} alt="" className="w-12 h-12" />
            </div>
            Working With Us
          </h1>
          <p className="font-garamond-regular text-xl text-center w-2/5 mx-auto">
            Efficient waste management for environmental responsibility, cost
            savings, regulatory compliance, and a healthier, sustainable future.
            Partner with us today.
          </p>
        </div>
        <div className="relative mt-20">
          <SiteBlob2 />
        </div>
        <div className="space-y-4 card rounded-xl p-5 w-[30%] mx-auto font-garamond-regular text-lg mt-20">
          {benefitsList.map((benefit) => (
            <div className="flex justify-between">
              <div className="text-left my-auto">{benefit}</div>
              <Image src={tick} alt="" className="w-8 h-8"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
