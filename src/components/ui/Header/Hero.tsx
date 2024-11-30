"use client"
import Navbar from "./Navbar"
import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { AnimatePresence, motion } from "motion/react"
import { useGSAP } from '@gsap/react';
import { ringEffect } from "./animation";
const Hero = () => {
  const timeline = useMemo(() => gsap.timeline({ paused: true }), [])
  useGSAP(() => {
    // Define animations
    timeline
      .from(".nav-elements", { y: "-100%", opacity: 0, stagger: 0.5 })
      .from(".hero-text", { y: "100%", opacity: 0, stagger: 0.5 })
      .play(); // Start the timeline
  }, [timeline]); // Add timeline to the dependency array
  const rings = [0,0.5,1,1.5,2];
  return (
    <div className="header w-full grid grid-cols-[0.6fr_0.4fr] max-xl:grid-cols-1 overflow-hidden">
      <Navbar className="xl:col-start-1 xl:col-end-3 h-max max-xl:px-4 py-6 " />

      <div className="relative -z-10 flex justify-center" >
        {/* line  */}
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-[1px] bg-[rgba(0,0,0,.075)] w-full -z-20 max-xl:hidden" />
        {/* paragraph */}
        <section className="xl:mt-[15.19%] my-8 px-4">
          <h1 style={{ fontSize: "clamp(1.5rem, 5.5vw, 2.5rem)" }} className="font-medium hero-text">Hi, I&#34;m Rajnish Kumar</h1>
          <p style={{ fontSize: "clamp(2.3rem, 9vw, 4rem)" }} className="font-medium hero-text">I turn imagination into reality</p>
          <p style={{ fontSize: "clamp(1.25rem, 4vw, 1.10rem)" }} className=" max-w-3xl hero-text">I am a Full Stack Developer and specializing in creating web apps with clean user interface and optimized user experience.</p>
        </section>
      </div>

      <div className="relative -z-10">
        {/* line  */}
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-[1px] bg-[rgba(0,0,0,.075)] w-full -z-20" />
        {/* watch */}
        <motion.section
          variants={ringEffect}
          className=" w-full flex items-center justify-center py-6" >
          <div className="w-[540px] h-[540px] flex justify-center items-center ">
            <AnimatePresence mode="sync">
              {rings.map((ring, index) => (
                <motion.div
                  key={index}
                  variants={ringEffect}
                  initial="initial"
                  animate="animate"
                  custom={ring}
                  // transition={{ delay: ring.delay }}
                  className={`ringEffect absolute w-full h-full rounded-full border-[rgba(0,0,0,.075)] border-2`}
                />
              ))}
            </AnimatePresence>
            <div className="w-[380px] h-[380px] bg-[#f4eee9]  rounded-full border-[rgba(0,0,0,.075)] border flex justify-center items-center ">
              <div style={{ boxShadow: "inset 0 2px 2px 0 rgba(0,0,0,.2)" }} className="w-[220px] h-[220px] bg-[#f3f3f3] rounded-full bg-[linear-gradient(180deg,#666,#333)] relative flex justify-center items-center">
                <div style={{ boxShadow: "0 8px 8px 0 #000,0 24px 24px 0 rgba(0,0,0,.5)" }} className="w-[100px] h-[100px] bg-[linear-gradient(180deg,#fff,#999)] rounded-full  relative">
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </div>

    </div>
  )
}

export default Hero
