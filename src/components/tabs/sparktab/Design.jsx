'use client'
import React from 'react'
import { FaPlay } from 'react-icons/fa6'

const Design = () => {
    return (
        <div className='flex flex-col gap-6'>
            <p className='text-[32px] font-bold text-white'>Crafting the blueprint for success</p>
            <div className='flex flex-col gap-3'>
                <p className='text-[18px] text-[#aea9b1]'>Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.</p>
                <div className='w-[130px] h-[45px] border-dashed border-[1px] border-white rounded-full relative cursor-pointer hover:duration-200 hover:border-blue-600'>
                    <button className='w-[130px] h-[45px] rounded-full absolute top-[-7px] right-[-7px] bg-white hover:bg-blue-600 hover:text-white hover:duration-200 flex items-center justify-center font-bold gap-2'>Book a Call <FaPlay className='hover:text-white text-black' /></button>
                </div>
            </div>
        </div>
    )
}

export default Design
