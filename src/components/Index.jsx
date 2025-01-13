import React from 'react'
import Marquee from "react-fast-marquee";
import { FaPlay } from "react-icons/fa6";

const Index = () => {
    return (
        <div className='flex flex-col gap-20'>
            <div className='lg:px-[7%] px-[4%]'>
                <div className='w-full bg-[#1D1E2E] rounded-3xl px-10 py-16 flex flex-col gap-5'>
                    <p className='lg:text-[80px] text-[56px] font-normal text-white leading-none'>We build <span className='text-[#60a6e7]'>products</span> that <br className='lg:block hidden' /> shape a better future</p>
                    <p className='lg:text-[18px] text-[#aea9b1] font-normal'>We’re the architects of digital excellence across industries. We redefine business with <br className='lg:block hidden' /> cutting-edge digital strategies that invokes sector-wide transformation.</p>
                    <div className='w-[130px] h-[45px] border-dashed border-[1px] border-white rounded-full relative cursor-pointer hover:duration-200 hover:border-blue-600'>
                        <button className='w-[130px] h-[45px] rounded-full absolute top-[-7px] right-[-7px] bg-white hover:bg-blue-600 hover:text-white hover:duration-200 flex items-center justify-center font-bold gap-2'>Book a Call <FaPlay className='hover:text-white text-black' /></button>

                    </div>
                </div>
            </div>
            <div>
                <div className='flex w-full items-center justify-center'>
                    <p className='lg:text-[42px] text-white'>Success in <span className='text-[#60a6e7]'>Motion</span> – Our clients’ journey</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <Marquee direction='left'>
                        <img className='ml-5' src="/Images/africaFund.svg" alt="" />
                        <img className='ml-5' src="/Images/global.svg" alt="" />
                        <img className='ml-5' src="/Images/phoneMap.svg" alt="" />
                        <img className='ml-5' src="/Images/phone.svg" alt="" />
                        <img className='ml-5' src="/Images/global.svg" alt="" />
                    </Marquee>
                    <Marquee direction='right'>
                        <img className='ml-5' src="/Images/africaFund.svg" alt="" />
                        <img className='ml-5' src="/Images/global.svg" alt="" />
                        <img className='ml-5' src="/Images/phoneMap.svg" alt="" />
                        <img className='ml-5' src="/Images/phone.svg" alt="" />
                        <img className='ml-5' src="/Images/global.svg" alt="" />
                    </Marquee>

                </div>
            </div>
        </div>
    )
}

export default Index