"use client"

import { NavbarProps } from "@/_types/interface"
import { AnimatePresence, motion } from "motion/react"
import { FC, useState } from "react"
import { menuSlide } from "./animation"

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [open, setOpen] = useState(false)

  const manu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ]
  const SocialLink = [
    {
      name: "Github",
      link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    {
      name: "LinkedIn",
      link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    {
      name: "Twitter",
      link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    },
    {
      name: "Instagram",
      link: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
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
        <div className="close cursor-pointer absolute top-8 right-24" onClick={() => setOpen(!open)}>
          Close
        </div>
        <div className="pages flex justify-center items-center">
          <div className="grid grid-cols-1 ">
            {manu.map((item, index) => (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={index} className="text-4xl font-bold cursor-pointer py-3 ">
                <a href={item.link}>{item.name}</a>
              </motion.div>
            ))}
          </div>
        </div>
        {/* sociallink */}
        <div className="socialLinks flex justify-center items-center col-span-2">

          <div className="grid-cols-2 bg-black">
            {SocialLink.map((item, index) => (
              <div key={index} className="text-4xl font-bold cursor-pointer py-4 ">
                <a href={item.link}>{item.name}</a>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    )
  }

  return (
    <div className={`flex py-6 px-32 justify-between items-center bg-primary backdrop-blur-sm nav-elements ${className}`}>
      <div className="logo cursor-pointer ">RKR PORTFOLIO</div>
      <button onClick={() => setOpen(!open)} className="manu ">menu</button>
      <AnimatePresence mode="wait">
        {open && manuUi()}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
