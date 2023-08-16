"use client"

import React, { useState } from 'react';
import twitter from "../../public/images/reviews/twitter.svg"
import Image from 'next/image';
import quote from "../../public/images/reviews/quote.svg";

const Testimonials = [
  {
    id: 1,
    name: 'John Doe',
    occupation: 'CEO, Company ABC',
    comment: "Amazing service! Our partnership with them has greatly improved our waste management practices.",
  },
  {
    id: 2,
    name: 'Jane Smith',
    occupation: 'Environmental Activist',
    comment: "Their commitment to sustainability and environmental responsibility is truly commendable.",
  },
  {
    id: 3,
    name: 'Michael Johnson',
    occupation: 'Small Business Owner',
    comment: "Efficient waste solutions and cost savings have made a significant impact on our operations.",
  },
  {
    id: 4,
    name: 'Sarah Williams',
    occupation: 'Community Member',
    comment: "I've witnessed positive changes in our neighborhood since partnering with them for waste management.",
  },
];

const Reviews = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(1);
  const handleButtonClick = (testimonialId) => {
    setSelectedTestimonial(testimonialId);
  };

  return (
    <div className="bg-[#A0C49D] py-10">
      <div className="mx-auto -mt-10">
        <Image src={quote} alt="" className='w-20 h-20 rotate-180 mx-auto my-10'/>
        {selectedTestimonial !== null && (
          <div className="flex text-xl font-garamond-regular transition duration-500 ease-in-out">
            <div className='text-center mx-auto'>
               <p className="text-black mb-2 w-2/3 mx-auto phone:text-xl lg:text-2xl">{Testimonials[selectedTestimonial - 1].comment}</p>
               <p className="font-odesans-semibold phone:text-2xl lg:text-3xl mt-7 text-emerald-600">{Testimonials[selectedTestimonial - 1].name}</p>
               <p className="text-black phone:text-sm lg:text-base">{Testimonials[selectedTestimonial - 1].occupation}</p>
            </div>
          </div>
        )}
        <div className="flex justify-center space-x-6 my-10">
         {Testimonials.map((testimonial, index) => (
            <button key={index} onClick={() => handleButtonClick(testimonial.id)} className={selectedTestimonial === (index+1) ? "bg-yellow-50 rounded-full min-w-[20px] min-h-[20px] transition duration-500 ease-in-out border-2 border-red-500" : "bg-yellow-50 rounded-full min-w-[20px] min-h-[20px] transition duration-500 ease-in-out" }></button>
         ))}
        </div>
        <Image src={twitter} alt='' className='phone:w-9 phone:h-9 lg:w-16 lg:h-16 mx-auto'/>
      </div>
    </div>
  );
};

export default Reviews;
