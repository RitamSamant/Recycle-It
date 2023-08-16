"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import collection from "../../public/images/process/collections.png";
import distribution from "../../public/images/process/distribution.png";
import factory from "../../public/images/process/factory.png";
import transport from "../../public/images/process/transport.png";

const Process = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    { text: "We collect the waste.", image: collection },
    { text: "We gather those in the factories.", image: transport },
    { text: "We process the wastes to be manufacture ready.", image: factory,},
    { text: "We ship it to the buyers.", image: distribution },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedStep((prevStep) => (prevStep + 1) % steps.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#DBC4F0] mt-10 phone:h-[38rem] lg:h-[25rem]">
      <div className="lg:flex w-5/6 mx-auto justify-between">
        <div className="my-16">
          <h1 className="font-odesans-semibold phone:text-3xl lg:text-5xl phone:pt-10 lg:pt-0 text-left">Our Process Tree.</h1>
          <div className="lg:flex mt-10 gap-10">
            <p className="text-3xl font-odesans-semibold my-auto text-purple-500 phone:text-center">What We Do</p>
            <div className="phone:text-lg lg:text-xl phone:text-center lg:text-right my-auto flex flex-col phone:gap-3 lg:gap-2 phone:mt-5 lg:mt-0 font-garamond-regular lg:border-l-4 lg:pl-7 lg:border-fuchsia-100">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStep(index)}
                  className={selectedStep === index ? "text-violet-50 lg:text-left transition ease-in-out duration-500 phone:text-center" : "text-black lg:text-left phone:text-center transition ease-in-out duration-500"}
                >
                  {step.text}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-96 lg:h-96 flex relative my-auto">
          {steps.map((step, index) => (
            <Image
              key={index}
              src={step.image}
              alt=""
              className={`absolute transition-opacity duration-500 ease-in-out phone:-mt-10 lg:mt-20 rounded-xl ${
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
