import React from "react";
import contact2 from "../../public/images/contact/contact2.webp";
import Image from "next/image";
import flower from "../../public/images/contact/flower.svg"

const Contact = () => {
  return (
    <section id="connect" className="bg-[#fefae0]/70 overflow-x-hidden">
      <div className=" justify-between mx-auto items-center">
        <div className="flex mx-auto justify-center py-10">
          <h1 className="font-artik phone:text-3xl lg:text-5xl my-auto phone:px-5 lg:px-0">
            Contact Us
          </h1>
          <Image src={flower} alt="" className="phone:w-8 phone:h-8 lg:w-12 lg:h-12 phone:my-auto"/>
        </div>
        <div className="grid lg:grid-cols-[3fr_2fr]">
          <Image src={contact2} alt="" className="" />
          <div className="relative card shadow-lg py-10 lg:w-full phone:w-11/12 phone:mx-auto phone:px-5 lg:px-8 phone:my-8 lg:my-0">
            <h1 className="phone:text-2xl lg:text-3xl font-artik text-fuchsia-900 mb-6">
              Let&apos;s talk business
            </h1>
            <form className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="font-medium font-roxale lg:text-lg"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/50 px-5 py-2 outline-none rounded-lg text-gray-950 font-roxale lg:text-lg"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block font-medium font-roxale"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/50 px-5 py-2 outline-none rounded-lg text-gray-950 font-roxale lg:text-lg"
                  placeholder="Your Email"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block font-medium font-roxale"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-white/50 px-5 py-2 outline-none rounded-lg text-gray-950 font-roxale"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="bg-fuchsia-900 text-white rounded-md py-2 px-4 font-roxale mx-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-pink-100/90 py-5 rounded-md">
        <div className="phone:w-11/12 lg:w-5/6 mx-auto flex justify-between phone:px-2 lg:px-0">
          <h1 className="font-artik lg:text-2xl text-fuchsia-700 opacity-70">©Recycle It</h1>
          <div className="flex font-roxale phone:text-xs lg:text-lg phone:gap-2 lg:gap-5 opacity-80 text-fuchsia-950">
            <p className="my-auto">Privacy Policy</p>
            <p className="my-auto">About</p>
            <p className="my-auto">Terms & Condition</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
