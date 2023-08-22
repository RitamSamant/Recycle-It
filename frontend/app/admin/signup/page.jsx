"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { Toaster, toast } from "react-hot-toast"

const SignupPage = () => {

  const [user,Setuser] = useState({
    name : "",
    buisnessEmail : "",
    password: "",
    address: "",
    buisnessBankAccount:""
  })
  const [isSigningUp, setIsSigningUp] = useState(false);
  const router = useRouter();
  const handleClick = async (e) => {
    e.preventDefault();
   try {
    setIsSigningUp(true);
    const response = await axios.post('https://recycle-it.onrender.com/org/register',user)
    console.log(response.data)
    router.push('/admin/login')
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
     <div className="flex items-center justify-center h-screen py-36 lg:py-5 bg-[#C4D7B2]">
      <div className="signup lg:p-8 p-5 shadow-md rounded-lg lg:w-1/4 w-[75%]">
        <h2 className="text-teal-800 font-odesans-semibold text-4xl mb-4 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block font-space-grostek mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-space-grostek"
              required
              onChange={(e)=>{Setuser({...user,username:e.target.value})}}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="buisnessEmail" className="block font-space-grostek mb-1">
              Buisness Email
            </label>
            <input
              type="email"
              id="buisnessEmail"
              name="buisnessEmail"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-space-grostek"
              required
              onChange={(e)=>{Setuser({...user,buisnessEmail:e.target.value})}
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-space-grostek mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-space-grostek"
              required
              onChange={(e)=>{Setuser({...user,password:e.target.value})}}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block font-space-grostek mb-1">
              Address
            </label>
            <input
              type="test"
              id="address"
              name="address"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-space-grostek"
              required
              onChange={(e)=>{Setuser({...user,address:e.target.value})}
              }
            />
          </div>
          <div className="mb-4">
            <label htmlFor="buisnessBankAccount" className="block font-space-grostek mb-1">
              Bank Account
            </label>
            <input
              type="text"
              id="buisnessBankAccount"
              name="buisnessBankAccount"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-space-grostek"
              required
              onChange={(e)=>{Setuser({...user,buisnessBankAccount:e.target.value})}
              }
            />
          </div>
          <div>
            <button
              type="submit"
              className={`w-full text-lg font-space-grostek py-2 rounded-md mt-5 ${
                isSigningUp
                  ? 'bg-gray-300 cursor-not-allowed border border-black/10'
                  : 'bg-emerald-700 text-white'
              }`}
              onClick={handleClick}
              disabled={isSigningUp}
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className='font-space-grostek text-center mt-5'>Already Signed in? <Link href="/admin/login" className='underline text-emerald-950'>Login</Link></p>
      </div>
    </div>
  );
};

export default SignupPage;
