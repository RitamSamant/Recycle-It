import React from "react";
import Image from "next/image";
import bgImg from "../../public/images/whyus/original-809307633422f0dcc7294c9ab065663b.png";

const WhyUs = () => {
  return (
    <div>
      <div className="phone:py-12 lg:py-20">
        <div className="phone:w-11/12 lg:w-5/6 mx-auto text-center">
          <h2 className="phone:text-3xl lg:text-5xl font-odesans-semibold mb-8 text-right">
            Why Choose Us
          </h2>
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 justify-between">
            <div className="">
              <Image
                src={bgImg}
                alt="Recycle"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="lg:flex gap-5">
              <p className="text-3xl font-odesans-semibold text-purple-500 my-auto">
                What Sets Up Apart
              </p>
              <div className="lg:p-5 phone:mt-5 lg:mt-0 font-garamond-regular lg:text-xl flex flex-col phone:gap-2 lg:gap-3 phone:text-center lg:text-right lg:border-l-4 lg:border-purple-200 lg:pl-5">

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
    </div>
  );
};

export default WhyUs;
