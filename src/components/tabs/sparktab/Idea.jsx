import React from 'react'

const Idea = () => {
    return (
        <div className='flex flex-col gap-6'>
            <p className='text-[32px] font-bold text-white'>Your vision is unique.</p>
            <div className='flex flex-col gap-6'>
                <p className='text-[18px] text-[#aea9b1] font-semibold'>Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.</p>
                <div className='w-[120px] h-[45px] mt-2 border-dashed border-[1px] border-white rounded-full relative cursor-pointer hover:duration-200 hover:border-blue-600'>
                    <button className='w-[120px] h-[45px] rounded-full absolute top-[-7px] right-[-7px] bg-white hover:bg-blue-600 hover:duration-200 flex items-center justify-center font-bold'>Book a Call </button>
                </div>
            </div>
        </div>
    )
}

export default Idea
