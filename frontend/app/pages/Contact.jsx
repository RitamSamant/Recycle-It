import React from "react";
import contact from "../../public/images/contact/contact.svg";
import Image from "next/image";
import flower from "../../public/images/contact/flower.svg"

const Contact = () => {
  return (
    <div className="bg-[#FDCEDF] overflow-x-hidden">
      <div className="lg:flex justify-between lg:w-[87%] mx-auto items-center phone:pb-10 lg:pb-0">
        <div className="flex flex-col">
          <div className="flex phone:mt-10 lg:mt-0">
            <h1 className="font-odesans-semibold phone:text-3xl lg:text-5xl lg:ml-[6.5rem] my-auto phone:px-5 lg:px-0">
              Contact Us
            </h1>
            <Image src={flower} alt="" className="phone:w-8 phone:h-8 lg:w-16 lg:h-16 phone:my-auto"/>
          </div>
          <div className="relative phone:px-5 lg:px-0">
            <div className="absolute lg:top-16 lg:-left-[3rem] phone:w-60 phone:h-60 lg:w-96 lg:h-96 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
            <div className="absolute phone:top-7 lg:top-16 phone:left-[7rem] lg:left-[16rem] phone:w-60 phone:h-60 lg:w-96 lg:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
            <Image src={contact} alt="" className="lg:w-[40rem] phone:mt-5 lg:mt-9 relative" />
          </div>
        </div>
        <div className="card rounded-lg shadow-lg py-10 lg:max-w-[30rem] phone:w-11/12 phone:mx-auto phone:px-5 lg:px-8 phone:mt-8 lg:mt-0">
          <h1 className="phone:text-2xl lg:text-3xl font-odesans-semibold text-fuchsia-900 mb-6">
            Let&apos;s talk business
          </h1>
          <form className="space-y-4">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="font-medium font-space-grostek lg:text-lg"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/50 px-5 py-2 outline-none rounded-lg text-black font-space-grostek lg:text-lg"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block font-medium font-space-grostek"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/50 px-5 py-2 outline-none rounded-lg text-black font-space-grostek lg:text-lg"
                placeholder="Your Email"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="message"
                className="block font-medium font-space-grostek"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full bg-white/50 px-5 py-2 outline-none rounded-lg text-black font-space-grostek"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="bg-fuchsia-900 text-white rounded-md py-2 px-4 font-space-grostek mx-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="bg-white/30 py-5 rounded-md">
        <div className="lg:w-5/6 mx-auto flex justify-between phone:px-2 lg:px-0">
          <h1 className="font-odesans-semibold lg:text-2xl text-fuchsia-700 opacity-70">©Recycle It</h1>
          <div className="flex font-garamond-regular lg:text-lg phone:gap-2 lg:gap-5 opacity-80 text-fuchsia-950">
            <p>Privacy Policy</p>
            <p>About</p>
            <p>Terms & Condition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
