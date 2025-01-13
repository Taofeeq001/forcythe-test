'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';


const Beaupreneur = () => {
    return (
        <div className={`bg-[#0C2645] lg:w-[690px] w-full lg:h-[300px] rounded-[3rem] p-6 flex lg:flex-row flex-col justify-between gap-3  lg:ml-[47%]`}>
            <div className='flex flex-col  gap-2'>
                <p className='font-bold text-[16px]'>
                    <Typewriter
                        words={["Beaupreneur"]}
                        loop={1}
                        typeSpeed={100}
                        delaySpeed={1000} f
                    />
                </p>
                <p className='font-semibold lg:text-[16px] leading-loose items-start'>
                    <Typewriter
                        words={["I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts."]}
                        loop={1}
                        typeSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
                <p className='font-bold text-[16px]'>
                    <Typewriter
                        words={["Christiana, Founder"]}
                        loop={1}
                        typeSpeed={100}
                        delaySpeed={1000}
                    />
                </p>
            </div>
            <img src={"/Images/founder.svg"} alt="" />
        </div>
    )
}

export default Beaupreneur