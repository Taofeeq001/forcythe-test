import React from 'react'

const Develop = () => {
    return (
        <div className='flex flex-col gap-6'>
            <p className='text-[32px] font-bold text-white'>Turning blueprints into reality.</p>
            <div className='flex flex-col gap-3'>
                <p className='text-[18px] text-[#aea9b1]'>We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.</p>
                <div className='w-[120px] h-[45px] mt-2 border-dashed border-[1px] border-white rounded-full relative cursor-pointer hover:duration-200 hover:border-blue-600'>
                    <button className='w-[120px] h-[45px] rounded-full absolute top-[-7px] right-[-7px] bg-white hover:bg-blue-600 hover:duration-200 flex items-center justify-center font-bold'>Book a Call </button>
                </div>
            </div>
        </div>
    )
}

export default Develop
