"use client"

import React from "react";
import Image from "next/image";
import bg from "../../public/images/whyus/philip-strong-iOBTE2xsYko-unsplash.png"
import useMediaQuery from "../../hooks/useMediaQuery";

const WhyUs = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <section id="process">
      <div className="phone:py-12 lg:py-20">
        <div className="phone:w-11/12 lg:w-5/6 mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 justify-between">
            {isAboveSmallScreens ? (<Image
                src={bg}
                alt="Recycle"
                width={1000}
                height={1000}
                className="rounded-lg shadow-md phone:h-[20rem] lg:w-[25rem] lg:h-[30rem] object-cover"
              />) : (<></>)}
            <div className="lg:flex gap-5 my-auto">
              <p className="phone:text-4xl lg:text-3xl font-artik text-purple-500 my-auto text-center">
                What Sets Us Apart
              </p>
              <div>
              {isAboveSmallScreens ? (<></>) : (<Image src={bg}
                alt="Recycle"
                width={1000}
                height={1000}
                className="rounded-lg shadow-md phone:h-[20rem] lg:w-[25rem] lg:h-[30rem] object-cover mt-10"
              />)}
              </div>

              <div className="lg:p-5 phone:mt-10 lg:mt-0 font-roxale lg:text-xl flex flex-col phone:gap-2 lg:gap-3 phone:text-center lg:text-right lg:border-l-4 lg:border-purple-200 lg:pl-5">
              {isAboveSmallScreens ?
                (<h2 className="phone:text-2xl lg:text-5xl font-artik phone:mb-0 lg:mb-8 phone:text-center lg:text-right">
                    Why Choose Us
                </h2>) : (<></>)}
                <p>Experienced team dedicated to recycling excellence.</p>
                <p>
                  State-of-the-art recycling facilities for optimal efficiency.
                </p>
                <p>Environmentally-friendly processes that minimize waste.</p>
                <p>Transparent tracking of your recycled materials.</p>
                <p>Contribute to a greener and cleaner planet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
