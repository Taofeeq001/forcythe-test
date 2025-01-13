'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';


const Stacai = () => {
    return (
        <div className={`bg-[#0C2645] lg:w-[690px] w-full lg:h-[300px] rounded-[3rem] p-6 flex lg:flex-row flex-col justify-between gap-3  lg:ml-[20%]`}>
            <div className='flex flex-col  gap-2'>
                <p className='font-bold text-[16px]'>
                    <Typewriter
                        words={["Stac AI"]}
                        loop={1}
                        typeSpeed={100}
                        delaySpeed={1000} f
                    />
                </p>
                <p className='font-semibold lg:text-[16px] leading-loose items-start'>
                    <Typewriter
                        words={["Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way."]}
                        loop={1}
                        typeSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
                <p className='font-bold text-[16px]'>
                    <Typewriter
                        words={["Edwin, Former CTO"]}
                        loop={1}
                        typeSpeed={100}
                        delaySpeed={1000}
                    />
                </p>
            </div>
            <img src={"/Images/edwin.svg"} alt="" />
        </div>
    )
}

export default Stacai