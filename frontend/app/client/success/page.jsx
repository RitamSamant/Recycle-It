import React from "react";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center panel">
      <div className="bg-white/10 border-2 border-white/10 p-8 rounded-lg shadow-md">
        <h1 className="font-odesans-semibold text-white text-3xl font-semibold mb-4">
          Congratulations!🎉
        </h1>
        <p className="text-lg mb-4 text-white/70 font-odesans-medium">
          Your payment was successful
        </p>
        <p className="text-md text-white/90 font-odesans-medium">
          You determine a big part of the future of this world.
        </p>
      </div>
      <Link href="/client/home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-purple-500 mt-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>
    </div>
  );
};

export default SuccessPage;
