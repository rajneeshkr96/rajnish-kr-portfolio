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
      link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      icon: <Github size={"40px"} />
    },
    {
      name: "LinkedIn",
      link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      icon: <Linkedin size={"40px"} />
    },
    {
      name: "Email",
      link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      icon: <Mail size={"40px"} />
    },
    {
      name: "Instagram",
      link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      icon: <Instagram size={"40px"} />
    },
  ]
  const manuUi = () => {
    return (
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={`w-full h-screen bg-primary z-50 absolute top-0 left-0 grid grid-cols-3 grid-rows-1 `}>
        {/* close */}
        <motion.div
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          className="close cursor-pointer absolute top-8 right-24 max-xl:right-12 max-sm:right-6" onClick={() => setOpen(!open)}>
          Close
        </motion.div>
        <div className="flex justify-center items-center gap-y-12 flex-col">
          {manu.map((item, index) => (
            <motion.a href={item.link} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={index} className="text-4xl font-bold cursor-pointer hover-underline-animation w-max h-max px-2 py-1 ">
              {item.name}
            </motion.a>
          ))}
        </div>
        {/* sociallink */}
        <div className="socialLinks flex justify-center items-center col-span-2">
          <div className="grid grid-cols-2 place-items-center content-center border w-4/5 gap-x-[0.5px] gap-y-[0.2px]">
            {SocialLink.map((item, index) => (
              <div key={index} className="text-4xl font-bold cursor-pointer border w-full h-[40vh] max-h-[400px]  relative menuLink">
                <a  href={item.link} className="w-full h-full">
                  <div className="absolute bottom-6 left-4 text-white">
                    <p className="px-2 " >{item.icon}</p>
                    <p>{item.name}</p>
                  </div>
                  <div className="w-full h-full absolute -z-10"/>
      
                  
                </a>

              </div>
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
