import React from 'react'
import BestProps from './Reusable/BestProps'

const BestCall = () => {
    return (
        <div className='w-full bg-[#040A1E] flex flex-col items-center lg:gap-48 gap-28 my-16'>

            <div className='flex flex-col px-[7%] w-full items-center  gap-8'>
                <p className='lg:text-[42px] text-[#b3d0f2] text-[30px]'>Your best call for B2B/B2C product innovation</p>
                <div className='flex lg:flex-row flex-col gap-10 justify-between w-full'>
                    <BestProps
                        img={"/Images/layers.svg"}

                        title={"Experience"}
                        para={"Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth."}
                    />
                    <BestProps
                        img={"/Images/layers.svg"}
                        title={"Quick Support"}
                        para={"We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth."}
                    />
                    <BestProps
                        img={"/Images/layers.svg"}
                        title={"Cost Savings"}
                        para={"Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality."}
                    />
                </div>
            </div>
            <div className='lg:w-[60%] w-full h-[70vh] border-[2px] border-[#B2CFF1] rounded-t-full border-b-0 flex flex-col items-center justify-end lg:gap-20 gap-10'>
                <div>
                    <p className='lg:text-[30px] text-[20px] text-white font-bold'>We build solutions that help <br /> <span className='text-[#60a6e7]'>businesses</span> of all sizes to <span className='text-[#60a6e7]'>scale</span></p>
                </div>
                <div className='flex flex-row gap-10'>
                    <div>
                        <p className='text-[#60a6e7] lg:text-[48px] font-bold text-[20px] leading-none'>50+</p>
                        <p className='text-[18px] text-white'>Clients</p>
                    </div>
                    <div>
                        <p className='text-[#60a6e7] lg:text-[48px] font-bold text-[20px] leading-none'>120+</p>
                        <p className='text-[18px] text-white'>Projects</p>
                    </div>
                    <div>
                        <p className='text-[#60a6e7] lg:text-[48px] font-bold text-[20px] leading-none'>10+</p>
                        <p className='text-[18px] text-white'>Team Leads</p>
                    </div>
                    <div>
                        <p className='text-[#60a6e7] lg:text-[48px] font-bold text-[20px] leading-none'>10+</p>
                        <p className='text-[18px] text-white'>Glorious Years</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestCall
 