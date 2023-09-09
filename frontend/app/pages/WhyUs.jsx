"use client"

import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const WhyUs = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0.1, 1], ["0%", "-80%"]);

  return (
    <section id="process">
      <div className="phone:py-12 lg:py-20">
        <div className="mx-auto text-center">
            <div className="lg:flex gap-5 my-auto">
                <section ref={targetRef} className="relative w-[95%] mx-auto lg:h-[150vh]">
                <h2 className="phone:text-3xl lg:text-5xl font-artik phone:mb-0 lg:mb-8 text-center">
                  Why Choose Us
                </h2>
                  <div className="sticky lg:h-screen phone:py-10 lg:py-0 top-0 flex items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-4 font-roxale text-xl">
                      <div className="card phone:w-[20rem] phone:h-[20rem] lg:w-[30rem] lg:h-[30rem] rounded-xl flex justify-center items-center">
                        Experienced team dedicated to recycling excellence.
                      </div>
                      <div className="card phone:w-[20rem] phone:h-[20rem] lg:w-[30rem] lg:h-[30rem] rounded-xl flex justify-center items-center">
                        State-of-the-art recycling facilities for optimal efficiency.
                      </div>
                      <div className="card phone:w-[20rem] phone:h-[20rem] lg:w-[30rem] lg:h-[30rem] rounded-xl flex justify-center items-center">
                        Environmentally-friendly processes that minimize waste.
                      </div>
                      <div className="card phone:w-[20rem] phone:h-[20rem] lg:w-[30rem] lg:h-[30rem] rounded-xl flex justify-center items-center">
                        Transparent tracking of your recycled materials.
                      </div>
                      <div className="card phone:w-[20rem] phone:h-[20rem] lg:w-[30rem] lg:h-[30rem] rounded-xl flex justify-center items-center">
                        Contribute to a greener and cleaner planet.
                      </div>
                    </motion.div>
                  </div>
                </section>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
