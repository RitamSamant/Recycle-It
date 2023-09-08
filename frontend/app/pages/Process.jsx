"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import distribution from "../../public/images/process/pexels-alexander-bobrov-3277769-64fb1b6f66e78.webp";
import factory from "../../public/images/process/pexels-anna-shvets-3645507-64fb1b6f3f7a3.webp";
import collection from "../../public/images/process/pexels-juan-pablo-serrano-arenas-1549528-64fb1b759d834.webp";
import transport from "../../public/images/process/pexels-shvets-production-7512806-64fb1b736745f.webp";

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
    <section id="process" className="bg-[#DBC4F0] phone:pb-40 lg:pb-0">
      <div className="lg:flex w-2/3 mx-auto justify-between items-center py-32">
        <div className="my-auto">
          <h1 className="font-artik phone:text-3xl lg:text-5xl text-left text-purple-500">Our Process Tree.</h1>
          <div className="lg:flex mt-10 gap-10">
            <div className="phone:text-lg lg:text-xl phone:text-center lg:text-right my-auto flex flex-col phone:gap-1 lg:gap-2 phone:mt-5 lg:mt-0 font-roxale lg:border-l-4 lg:pl-7 lg:border-fuchsia-100">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStep(index)}
                  className={selectedStep === index ? "text-violet-50 lg:text-left transition ease-in-out duration-500 phone:text-center" : "text-black lg:text-left phone:text-center transition ease-in-out duration-500 font-roxale"}
                >
                  {step.text}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center phone:mt-36 lg:mt-0">
          {steps.map((step, index) => (
            <Image
              key={index}
              src={step.image}
              alt=""
              className={`absolute transition-opacity duration-500 ease-in-out w-[30rem] ${
                selectedStep === index ? "opacity-100 " : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
