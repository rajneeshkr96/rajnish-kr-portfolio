"use client"

import { motion } from "motion/react"
import { useState } from "react"
const Navbar = () => {
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
      <motion.div animate={{ translateY: "0%" }} initial={{ translateY: "-100%" }} transition={{ duration: 0.5 }} className='w-full h-screen bg-primary z-50 absolute top-0 left-0 grid grid-cols-2 grid-rows-1 '>
        <div className="pages">
          <div className="flex flex-col justify-center items-center">
            {manu.map((item, index) => (
              <div key={index} className="text-4xl font-bold  cursor-pointer py-4">
                <a href={item.link}>{item.name}</a>
              </div>
            ))}
          </div>
        </div>
        {/* sociallink */}
        <div className="socialLinks">

          <div className="flex flex-col justify-center items-center">
            {SocialLink.map((item, index) => (
              <div key={index} className="text-4xl font-bold cursor-pointer py-4">
                <a href={item.link}>{item.name}</a>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    )
  }

  return (
    <div className='flex py-12 px-32 justify-between items-center'>
      <div className="logo cursor-pointer ">RKR PORTFOLIO</div>
      <button onClick={() => setOpen(!open)} className="manu ">menu</button>
      {open && manuUi()}
    </div>
  )
}

export default Navbar
