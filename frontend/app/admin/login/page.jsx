"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { Toaster, toast } from "react-hot-toast"

const LoginPage = () => {
  const router = useRouter();
  const [user,Setuser] = useState({
    buisnessEmail : "",
    password : ""
  })
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setIsLoggingIn(true);
      const response = await axios.post('https://recycle-it.onrender.com/org/login',user)
      const newToken = response.data.token;
      localStorage.setItem('token', newToken);
      router.push('/admin/home')
      toast.success("You are logged in!🎉", {
        style: {
          border: "2px solid rgba(255, 255, 255, 0.1)",
          padding: "10px",
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          fontFamily: "Space-Grostek",
          fontSize: '1.1em',
          minWidth: "10em",
        },
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
      });
    } catch (err) {
      toast.error("Please check your credentials.😒", {
        style: {
          border: "2px solid rgba(255, 255, 255, 0.1)",
          padding: "10px",
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          fontFamily: "Space-Grostek",
          fontSize: '1.1em',
          width: "50em",
        },
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
      });
    } finally {
      setIsLoggingIn(false);
     }
  }

  return (
    <div className="bg-[#DBC4F0] flex items-center justify-center h-screen">
      <div className="card lg:p-8 p-5 shadow-md rounded-lg lg:w-1/4 w-[75%]">
        <h2 className="text-fuchsia-800 font-odesans-semibold text-4xl mb-4 text-center">Log In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="buisnessEmail" className="block font-space-grostek mb-1">
             Buisness Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md bg-white/40 text-black outline-none font-space-grostek"
              required
              onChange={(e)=>{Setuser({...user,buisnessEmail:e.target.value})}}
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
              className="w-full px-3 py-2 border rounded-md bg-white/40 text-black outline-none font-space-grostek"
              required
              onChange={(e)=>{Setuser({...user,password:e.target.value})}}
            />
          </div>
          <div>
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
            <button
              type="submit"
              className={`w-full py-2 rounded-md font-space-grostek text-lg mt-4 ${
                isLoggingIn
                  ? 'bg-gray-300/10 cursor-not-allowed border border-black/10'
                  : 'bg-fuchsia-800 text-white'
              }`}
              onClick={handleClick}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? 'Logging In...' : 'Login'}
            </button>
          </div>
          <p className='font-space-grostek text-center mt-5'>Not logged in? <Link href="/admin/signup" className='underline text-purple-950'>Signup</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
