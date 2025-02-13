"use client"

import { NavbarProps } from "@/_types/interface"
import { AnimatePresence, motion } from "motion/react"
import { FC, useState } from "react"
import { menuSlide } from "./animation"
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [open, setOpen] = useState(false)

  const manu = [
    {
      name: "Home",
      link: "/",
    },

    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "About",
      link: "/about",
    },
  ]
  const SocialLink = [
    {
      name: "Github",
      link: "https://github.com/rajneeshkr96",
      icon: <Github size={"40px"} />,
      bgImage:"/assets/Box1.jpeg"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/rajnish-kumar-9725ba144/",
      icon: <Linkedin size={"40px"} />,
      bgImage:"/assets/Box2.jpeg"
    },
    {
      name: "Email",
      link: "mailto:rajneeshkumar9674737@gmail.com",
      icon: <Mail size={"40px"} />,
      bgImage:"/assets/Box3.jpeg"
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/_rajneeshkr96/",
      icon: <Instagram size={"40px"} />,
      bgImage:"/assets/Box4.jpeg"
    },
  ]
  const manuUi = () => {
    return (
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={`w-full h-screen bg-primary z-50 absolute top-0 left-0 grid grid-cols-3 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-4 `}>
        {/* close */}
        <motion.div
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          className="close cursor-pointer absolute top-8 right-24 max-xl:right-12 max-sm:right-6" onClick={() => setOpen(!open)}>
          Close
        </motion.div>
        <div className="flex justify-center items-center gap-y-12 flex-col max-md:row-start-2 max-md:row-end-3 ">
          {manu.map((item, index) => (
            <motion.a href={item.link} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={index} className="text-4xl font-bold cursor-pointer relative hover-underline-animation w-max h-max px-2 py-1 ">
              {item.name}
            </motion.a>
          ))}
        </div>
        {/* sociallink */}
        <div className="socialLinks flex justify-center items-center col-span-2 max-md:row-start-3 max-md:row-end-5">
          <div className="grid grid-cols-2 max-md:grid-cols-4 place-items-center content-center w-4/5 gap-x-[0.5px] gap-y-[0.2px]">
            {SocialLink.map((item, index) => (
              <motion.div whileInView="visible" initial={{scaleX:0,scaleY:0}} animate={{scaleX:1,scaleY:1}} transition={{delay:0.5,duration:1.5,ease:"circOut"}} key={index} className="text-4xl font-bold border w-full h-[40vh] max-h-[400px] max-md:max-h-[100px] max-md:w-[100px] max-sm:max-h-[60px] max-sm:w-[60px] max-md:rounded-full relative overflow-hidden">
                <a target="_blank" href={item.link} className="inline-block  !w-full !h-full val ">
                  <div className="absolute bottom-6 left-4 max-md:inset-0 max-md:m-auto  text-white z-30 w-max h-max">
                    <p className="px-2 " >{item.icon}</p>
                    <p className="max-md:hidden  ">{item.name}</p>
                  </div>
                  <div style={{background:`url(${item.bgImage}) center center / cover no-repeat`}}  className="w-full h-full absolute z-10 img-effect max-md:hidden"/>
                </a>

              </motion.div >
            ))}
          </div>
        </div>

      </motion.div>
    )
  }

  return (
    <div className={`flex py-6 px-32 justify-between items-center bg-primary backdrop-blur-sm nav-elements ${className}`}>
      <div className="logo cursor-pointer btn">RKR PORTFOLIO</div>
      <button onClick={() => setOpen(!open)} className="manu ">menu</button>
      <AnimatePresence mode="wait">
        {open && manuUi()}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
