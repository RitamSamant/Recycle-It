import React from "react";
import contact from "../../public/images/contact/contact.svg";
import Image from "next/image";
import flower from "../../public/images/contact/flower.svg"

const Contact = () => {
  return (
    <div className="bg-[#FDCEDF]">
      <div className="flex justify-between w-[87%] mx-auto items-center h-screen/80">
        <div className="flex flex-col">
          <div className="flex">
            <h1 className="font-odesans-semibold text-5xl ml-[6.5rem] my-auto">
              Contact Us
            </h1>
            <Image src={flower} alt="" className="w-16 h-16"/>
          </div>
          <div className="relative">
            <div className="absolute top-16 -left-[3rem] w-96 h-96 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
            <div className="absolute top-16 left-[16rem] w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute top-10 left-[7.5rem] w-[28rem] h-[28rem] bg-violet-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
            <Image src={contact} alt="" className="w-[40rem] mt-9 relative" />
          </div>
        </div>
        <div className="card my-20 rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-odesans-semibold text-fuchsia-900 mb-6">
            Let's talk business
          </h1>
          <form className="space-y-4">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="font-medium font-space-grostek text-lg"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/50 px-5 py-2 outline-none rounded-lg text-black font-space-grostek"
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
                className="w-full bg-white/50 px-5 py-2 outline-none rounded-lg text-black font-space-grostek"
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
        <div className="w-5/6 mx-auto flex justify-between">
          <h1 className="font-odesans-semibold text-2xl text-fuchsia-700 opacity-70">©Recyclit</h1>
          <div className="flex font-garamond-regular text-lg gap-5 opacity-80 text-fuchsia-950">
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
