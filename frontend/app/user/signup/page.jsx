import Link from 'next/link';
import React from 'react';

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#C4D7B2]">
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
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-emerald-700 font-space-grostek text-white py-2 rounded-md mt-5"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className='font-garamond-regular text-lg text-center mt-5'>Not Signed in? <Link href="/user/signup" className='underline text-emerald-950'>Signup</Link></p>
      </div>
    </div>
  );
};

export default SignupPage;
