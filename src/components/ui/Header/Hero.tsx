"use client"
import Navbar from "./Navbar"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Hero = () => {
  gsap.registerPlugin(useGSAP);

  const header = useRef(null);

  useGSAP(
    () => {
      // gsap code here...
      gsap.to('.box', { x: 360 }); // <-- automatically reverted
    },
    { scope: header }
  );
  return (
    <div ref={header} className="header relative w-full h-screen">
      <Navbar />
      {/* paragraph */}
      <section className="absolute top-1/2 right-0 -translate-x-[80%] -translate-y-[72%] ">
        <h1 style={{ fontSize: "clamp(2rem, 5.5vw, 3rem)" }} className="font-medium">Hi, I&#34;m Rajnish Kumar</h1>
        <p style={{ fontSize: "clamp(2.3rem, 9vw, 4.5rem)" }} className="font-medium ">I turn imagination into reality</p>
        <p style={{ fontSize: "clamp(1.25rem, 4vw, 1.5rem)" }} className=" max-w-5xl ">I am a Full Stack Developer and specializing in creating web apps with clean user interface and optimized user experience.</p>
      </section>
      {/* line  */}
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-[1px] bg-[rgba(0,0,0,.075)] w-full" />
      {/* watch */}
      <section className=" w-full flex items-center " >
        <div className="w-[620px] h-[620px]  rounded-full border-[rgba(0,0,0,.075)] border flex justify-center items-center absolute top-1/2 left-1/2 translate-x-[20%] -translate-y-[50%]">
          <div className="w-[460px] h-[460px] bg-[#f4eee9]  rounded-full border-[rgba(0,0,0,.075)] border flex justify-center items-center">
            <div style={{ boxShadow: "inset 0 2px 2px 0 rgba(0,0,0,.2)" }} className="w-[300px] h-[300px] bg-[#f3f3f3] rounded-full bg-[linear-gradient(180deg,#666,#333)] relative flex justify-center items-center">
              <div style={{ boxShadow: "0 8px 8px 0 #000,0 24px 24px 0 rgba(0,0,0,.5)" }} className="w-[180px] h-[180px] bg-[linear-gradient(180deg,#fff,#999)] rounded-full  relative">

              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero
