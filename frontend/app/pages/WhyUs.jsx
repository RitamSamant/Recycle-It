"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const HowWeDo = () => {

   const triggerRef = useRef(null);
   const sectionRef = useRef(null);

   gsap.registerPlugin(ScrollTrigger);

   useEffect (() => {
      const pin = gsap.fromTo(sectionRef.current, {
         translateX: 0
      }, {
         translateX: "-300vw",
         ease: "none",
         duration: 1,
         scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000px top",
            scrub: 0.6,
            pin: true
         }
      })

      return () => {
         pin.kill()
      }
   }, [])

  return (
    <section className='overflow-hidden mt-20'>
      <h1 className='font-artik phone:text-2xl lg:text-5xl text-center mb-3'>
         How We Do
      </h1>
      <p className='text-gray-700 text-center phone:text-sm lg:text-xl phone:px-10 lg:px-0'>
         We carefully sort through the projects and analyze them in the order of real-world use, practicality, and usability.
      </p>
      <div ref={triggerRef}>
         <div ref={sectionRef} className='h-[100vh] w-[400vw] flex flex-row relative'>
            <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
               <div className='lg:flex w-[90%] p-7'>
                  <h1 className='phone:text-5xl lg:text-7xl font-artik text-center'>1</h1>
                  <h1 className='phone:text-3xl lg:text-7xl text-5xl my-auto font-roxale text-center p-2'>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, cum!
                  </h1>
               </div>
            </div>
            <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
               <div className='lg:flex w-[90%] p-7'>
                  <h1 className='phone:text-5xl lg:text-7xl font-artik text-center'>2</h1>
                  <h1 className='phone:text-3xl lg:text-7xl text-5xl my-auto font-roxale text-center p-2'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, assumenda!
                  </h1>
               </div>
            </div>
            <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
               <div className='lg:flex w-[90%] p-7'>
                  <h1 className='phone:text-5xl lg:text-7xl font-artik text-center'>3</h1>
                  <h1 className='phone:text-3xl lg:text-7xl text-5xl my-auto font-roxale text-center p-2'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, assumenda!
                  </h1>
               </div>
            </div>
            <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
               <div className='lg:flex w-[90%] p-7'>
                  <h1 className='phone:text-5xl lg:text-7xl font-artik text-center'>4</h1>
                  <h1 className='phone:text-3xl lg:text-7xl text-5xl my-auto font-roxale text-center p-2'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, assumenda!
                  </h1>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default HowWeDo
