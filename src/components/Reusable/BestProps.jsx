import Image from 'next/image'
import React from 'react'

const BestProps = ({ img, title, para }) => {
  return (
    <div className='lg:w-[30%] h-[300px] rounded-lg p-6 bg-[#030516] hover:border-[blue] hover:border-[1px] flex flex-col gap-6'>
      <div className='w-[60px] h-[60px] bg-[#3B6694] rounded-sm flex items-center justify-center'>
        <Image width={40} height={40} src={img} alt='img' />
      </div>
      <p className='text-[24px] font-bold text-white'>{title}</p>
      <p className='text-[18px] text-[#aea9b1]'>{para}</p>
    </div>
  )
}

export default BestProps
