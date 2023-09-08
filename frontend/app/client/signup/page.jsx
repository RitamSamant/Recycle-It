"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { Toaster, toast } from "react-hot-toast"

const SignupPage = () => {
  const [user,Setuser] = useState({
    username : '',
    password : '',
    email : '',
    address : '',
    bankAccount : ''
  })
  const [isSigningUp, setIsSigningUp] = useState(false);
  const router = useRouter();
  const handleClick = async (e) => {
    e.preventDefault();
   try {
    setIsSigningUp(true);
    const res = await axios.post('https://recycle-it.onrender.com/client/register',user)
    console.log(res.data)
    router.push('/client/login')
    toast.success("You are signed up!🎉", {
      style: {
        border: "2px solid rgba(255, 255, 255, 0.1)",
        padding: "10px",
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        fontFamily: "Space-Grostek",
        fontSize: '1.1em'
      },
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
    });
   } catch (err) {
    toast.error("Please provide correct credentials.😞", {
      style: {
        border: "2px solid rgba(255, 255, 255, 0.1)",
        padding: "10px",
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        fontFamily: "Space-Grostek",
        fontSize: '1.1em'
      },
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
    });
   } finally {
    setIsSigningUp(false);
   }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-[#C4D7B2]">
      <div className="signup lg:p-8 p-5 shadow-md rounded-lg lg:w-1/4 w-[87%]">
        <h2 className="text-teal-800 font-roxale text-4xl mb-4 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block font-roxale mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-roxale"
              required
              onChange={(e)=>{Setuser({...user,username:e.target.value})}}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-roxale mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-roxale"
              required
              onChange={(e)=>{Setuser({...user,email:e.target.value})}}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-roxale mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-roxale"
              required
              onChange={(e)=>{Setuser({...user,password:e.target.value})}}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block font-roxale mb-1">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-roxale"
              required
              onChange={(e)=>{Setuser({...user,address:e.target.value})}}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bankAccount" className="block font-roxale mb-1">
              Bank Account:
            </label>
            <input
              type="text"
              id="bankAccount"
              name="bankAccount"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-roxale"
              required
              onChange={(e)=>{Setuser({...user,bankAccount:e.target.value})}}
            />
          </div>
          <div>
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
            <button
              type="submit"
              className={`w-full text-lg font-roxale py-2 rounded-md mt-5 ${
                isSigningUp
                  ? 'bg-gray-300/10 cursor-not-allowed border border-black/10'
                  : 'bg-emerald-700 text-white'
              }`}
              onClick={handleClick}
              disabled={isSigningUp}
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className='font-roxale text-center mt-5'>Already Signed in? <Link href="/client/login" className='underline text-emerald-950 font-medium'>Login</Link></p>
      </div>
    </div>
  );
};

export default SignupPage;
