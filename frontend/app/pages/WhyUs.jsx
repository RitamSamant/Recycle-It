import React from "react";
import Image from "next/image";
import bgImg from "../../public/images/whyus/original-809307633422f0dcc7294c9ab065663b.png";

const WhyUs = () => {
  return (
    <div>
      <div className="py-20">
        <div className="w-5/6 mx-auto text-center">
          <h2 className="text-5xl font-odesans-semibold mb-8 text-right">
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
            <div className="flex gap-5">
              <p className="text-3xl font-odesans-semibold text-purple-500 my-auto">What Sets Up Apart</p>
              <ul className="font-garamond-regular text-xl flex flex-col gap-3 text-right border-l-4 border-purple-200 pl-5">
                <li>Experienced team dedicated to recycling excellence.</li>
                <li>
                  State-of-the-art recycling facilities for optimal efficiency.
                </li>
                <li>Environmentally-friendly processes that minimize waste.</li>
                <li>Transparent tracking of your recycled materials.</li>
                <li>Contribute to a greener and cleaner planet.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
