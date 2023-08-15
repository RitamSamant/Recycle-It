import Image from 'next/image';
import React from 'react'
import logo from "../../public/images/logos/watering-can.png"
const Navbar = () => {
  return (
    <section id="navbar" className='flex justify-center z-40 relative'>
      <div className='w-5/6 flex bg-yellow-50/90 fixed mx-auto justify-between font-odesans-medium text-xl text-black px-10 py-3 rounded-full mt-7'>
         <h1 className='my-auto'>About Us</h1>
         <h1 className='my-auto'>Services</h1>
         <div className='flex gap-2'>
            <Image src={logo} alt='' className='w-10 h-10'/>
            <h1 className='my-auto text-xl text-fuchsia-600 font-bold'>Recyclit</h1>
         </div>
         <h1 className='my-auto'>Work Flow</h1>
         <h1 className='my-auto'>Connect</h1>
      </div>
    </section>
  )
}

export default Navbar;
