import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="bg-[#DBC4F0] flex items-center justify-center h-screen">
      <div className="card p-8 shadow-md rounded-lg w-1/4">
        <h2 className="text-fuchsia-800 font-odesans-semibold text-4xl mb-4 text-center">Log In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block font-space-grostek mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-md bg-white/40 text-black outline-none font-space-grostek"
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
              className="w-full px-3 py-2 border rounded-md bg-white/40 text-black outline-none font-space-grostek"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-fuchsia-800 text-white py-2 rounded-md font-space-grostek text-lg mt-4"
            >
              Login
            </button>
          </div>
          <p className='font-garamond-regular text-lg text-center mt-5'>Not logged in? <Link href="/user/signup" className='underline text-purple-950'>Signup</Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
