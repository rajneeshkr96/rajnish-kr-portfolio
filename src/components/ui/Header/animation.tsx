// animate={{ translateY: "0%" }} initial={{ translateY: "-100%" }} transition={{ duration: 0.5 }}

export const menuSlide = {
    initial: { y: "-100%" },
    enter: { y: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

export const slide = {
    initial: { x: 80 },
    enter: (i: any) => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
    exit: (i: any) => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
}

export const ringEffect = {
    initial: { opacity: 0, },
    animate: { scale: 3, opacity: 1,transition: { duration: 4, ease: "easeInOut", repeat: Infinity, }},

}