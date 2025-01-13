'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';


const Stacks = () => {
    return (
        <div className={`bg-[#0C2645] lg:w-[690px] w-full lg:h-[300px] rounded-[3rem] p-6 flex lg:flex-row flex-col justify-between gap-3  ml-[0]`}>
            <div className='flex flex-col  gap-2'>
                <p className='font-bold text-[16px]'>
                    <Typewriter
                        words={["Starks Associate"]}
                        loop={1}
                        typeSpeed={100}
                        delaySpeed={1000} f
                    />
                </p>
                <p className='font-semibold lg:text-[16px] leading-loose items-start'>
                    <Typewriter
                        words={["Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally."]}
                        loop={1}
                        typeSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
                <p className='font-bold text-[16px]'>
                    <Typewriter
                        words={["Starks Associate"]}
                        loop={1}
                        typeSpeed={100}
                        delaySpeed={1000}
                    />
                </p>
            </div>
            <img src={"/Images/associate.svg"} alt="" />
        </div>
    )
}

export default Stacks