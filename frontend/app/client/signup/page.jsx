"use client"

import Link from 'next/link';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';

const SignupPage = () => {
  const [user,Setuser] = useState({
    username : '',
    password : '',
    email : '',
    address : '',
    bankAccount : ''
  })
  const router = useRouter();
  const handleClick = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/client/register',user)
    console.log(res.data)
    router.push('/client/login')
  }
  return (
    <div className="flex items-center justify-center h-full py-5 bg-[#C4D7B2]">
      <div className="signup p-8 shadow-md rounded-lg w-1/4">
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
            <label htmlFor="email" className="block font-space-grostek mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-space-grostek"
              required
              onChange={(e)=>{Setuser({...user,email:e.target.value})}}
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
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-space-grostek"
              required
              onChange={(e)=>{Setuser({...user,address:e.target.value})}}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bankAccount" className="block font-space-grostek mb-1">
              Bank Account:
            </label>
            <input
              type="text"
              id="bankAccount"
              name="bankAccount"
              className="w-full px-3 py-2 border rounded-md bg-white/40 outline-none font-space-grostek"
              required
              onChange={(e)=>{Setuser({...user,bankAccount:e.target.value})}}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-emerald-700 font-space-grostek text-white py-2 rounded-md mt-5"
              onClick={handleClick}
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className='font-garamond-regular text-lg text-center mt-5'>Not Signed in? <Link href="/admin/login" className='underline text-emerald-950'>Signup</Link></p>
      </div>
    </div>
  );
};

export default SignupPage;
