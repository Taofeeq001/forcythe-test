'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';


const Executive = () => {
    return (
        <div className={`bg-[#0C2645] lg:w-[690px] w-full lg:h-[300px] rounded-[3rem] p-6 flex lg:flex-row flex-col justify-between gap-3  lg:ml-[20%]`}>
            <div className='flex flex-col  gap-2'>
                <p className='font-bold text-[16px]'>
                    <Typewriter
                        words={["ExecutivePros"]}
                        loop={1}
                        typeSpeed={100}
                        delaySpeed={1000} f
                    />
                </p>
                <p className='font-semibold lg:text-[16px] leading-loose items-start'>
                    <Typewriter
                        words={["The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!"]}
                        loop={1}
                        typeSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
                <p className='font-bold text-[16px]'>
                    <Typewriter
                        words={["Testimony, Co-founder"]}
                        loop={1}
                        typeSpeed={100}
                        delaySpeed={1000}
                    />
                </p>
            </div>
            <img src={"/Images/executive-pro-ceo.svg"} alt="" />
        </div>
    )
}

export default Executive