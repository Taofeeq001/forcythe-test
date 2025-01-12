import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

const TabProps = ({ company, description, position, img, ml }) => {
    return (
        <div className={`bg-[#0C2645] lg:w-[690px] w-full lg:h-[300px] rounded-[3rem] p-6 flex lg:flex-row flex-col justify-between gap-3  ${ml}`}>
            <div className='flex flex-col  gap-2'>
                <p className='font-bold text-[16px]'>
                    <Typewriter
                        words={[company]}
                        loop={1}
                        typeSpeed={100}
                        delaySpeed={1000}
                    />
                </p>
                <p className='font-semibold lg:text-[16px] leading-loose items-start'>
                    <Typewriter
                        words={[description]}
                        loop={1}
                        typeSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
                <p className='font-bold text-[16px]'>
                    <Typewriter
                        words={[position]}
                        loop={1}
                        typeSpeed={100}
                        delaySpeed={1000}
                    />
                </p>
            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default TabProps