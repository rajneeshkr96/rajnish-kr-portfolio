import React from 'react'

const Hero = () => {
  return (
    <div>
      <section>
        <h1 style={{ fontSize: 'clamp(2rem, 5.5vw, 3rem)' }} className="font-medium">Hi, I'm Rajnish Kumar</h1>
        <p style={{ fontSize: 'clamp(2.3rem, 9vw, 4.5rem)' }} className="font-medium ">I turn imagination into reality</p>
        <p style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }} className=" max-w-5xl ">I am a Full Stack Developer and specializing in creating web apps with clean user interface and optimized user experience.</p>
      </section>
      <section className='before:flex-1 before:h-1 before:bg-[rgba(0,0,0,.075)] after:flex-1  after:h-1  after:bg-[rgba(0,0,0,.075)] w-full flex justify-center rounded-full' >
        <div className='w-[620px] h-[620px]  rounded-full border-[rgba(0,0,0,.075)] border flex justify-center items-center '>

          <div className='w-[460px] h-[460px] bg-[#f4eee9]  rounded-full border-[rgba(0,0,0,.075)] border flex justify-center items-center'>
            <div style={{ boxShadow: "inset 0 2px 2px 0 rgba(0,0,0,.2)" }} className='w-[300px] h-[300px] bg-[#f3f3f3] rounded-full bg-[linear-gradient(180deg,#666,#333)] relative flex justify-center items-center'>
              <div style={{ boxShadow: "0 8px 8px 0 #000,0 24px 24px 0 rgba(0,0,0,.5)" }} className='w-[180px] h-[180px] bg-[linear-gradient(180deg,#fff,#999)] rounded-full  relative'>

              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Hero
