"use client";

import React, { useState, useEffect } from "react";
import line from "../../public/images/process/line.svg";
import Image from "next/image";
import collection from "../../public/images/process/collections.png";
import distribution from "../../public/images/process/distribution.png";
import factory from "../../public/images/process/factory.png";
import transport from "../../public/images/process/transport.png";

const Process = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    { text: "1: We collect the waste.", image: collection },
    { text: "2: We gather those in the factories.", image: transport },
    { text: "3: We process the wastes to be manufacture ready.", image: factory,},
    { text: "4: We ship it to the buyers.", image: distribution },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedStep((prevStep) => (prevStep + 1) % steps.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#DBC4F0] mt-10">
      <div className="flex w-5/6 mx-auto justify-between">
        <div className="my-16">
          <h1 className="font-odesans-semibold text-5xl">Our Process Tree.</h1>
          <div className="flex mt-10 gap-10">
            <p className="text-3xl font-odesans-semibold my-auto text-purple-500">What We Do</p>
            {/* <Image className="" src={line} alt="" /> */}

            <div className="text-xl text-right my-auto flex flex-col gap-2 font-garamond-regular border-l-4 pl-7 border-fuchsia-100">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStep(index)}
                  className={selectedStep === index ? "text-violet-50 text-left transition ease-in-out duration-500" : "text-black text-left transition ease-in-out duration-500"}
                >
                  {step.text}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-96 h-96 flex relative my-auto">
          {steps.map((step, index) => (
            <Image
              key={index}
              src={step.image}
              alt=""
              className={`absolute transition-opacity duration-500 ease-in-out mt-20 rounded-xl ${
                selectedStep === index ? "opacity-100 " : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
