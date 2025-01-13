import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Scale = () => {
    const media = ["/Images/facebook.svg", "/Images/instagram.svg", "/Images/x.svg", "/Images/linkedin.svg", "/Images/youtube.svg", "/Images/Icon.svg"]
    const footlink = [
        {
            name: "About",
            link: "/#"
        },
        {
            name: "Services",
            link: "/#"
        },
        {
            name: "Portfolio",
            link: "/#"
        },
        {
            name: "Studio",
            link: "/#"
        },
        {
            name: "Foundation",
            link: "/#"
        },
        {
            name: "Careers",
            link: "/#"
        },
        {
            name: "Blog",
            link: "/#"
        },
    ]
    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-col items-center gap-3'>
                <p className='lg:text-[42px] text-[30px] text-[#60a6e7]'>Ready to Scale?</p>
                <p className='lg:text-[42px] text-[30px] text-center leading-none text-white'>Join successful brands that chose us <br /> as their <span className='text-[#60a6e7]'>growth accelerator</span> </p>
                <div className='w-[120px] h-[45px] mt-3 border-dashed border-[1px] border-white rounded-full relative cursor-pointer hover:duration-200 hover:border-blue-600'>
                    <button className='w-[120px] h-[45px] rounded-full absolute top-[-7px] right-[-7px] bg-white hover:bg-[#60a6e7] hover:duration-200 flex items-center justify-center font-bold'>Book a Call </button>
                </div>
            </div>
            <div className='w-full flex flex-col lg:px-[7%] px-[4%]'>

                <div className='flex lg:flex-row flex-col w-full justify-between  gap-10 mt-[10%] pb-[4%]'>
                    <div className='w-full flex flex-col gap-6' >
                        <div className='border-[1px] w-full rounded-full h-[50px] overflow-hidden flex flex-row'>
                            <input className='w-[70%] outline-none border-none h-full bg-transparent p-2' type="text" name="" id="" />
                            <button className="bg-white p-2 h-full w-[30%] flex items-center justify-center">Subscribe</button>
                        </div>
                        <div className='flex flex-row items-center gap-3'>
                            <input type="radio" className='border-white accent-white w-[20px] h-[20px]' name="" id="" />
                            <p className='text-white text-[14px]'>I agree to receive other notifications from Forcythe</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-6'>
                        <Image src={"/Images/logo.svg"} width={130} height={130} alt='forcythe logo' />
                        <p className='text-[#AEA9B1]'>We are the growth company for businesses looking to scale. We are dedicated to transforming businesses with bespoke digital solutions that drive growth.</p>
                        <div className='lg:flex flex-row hidden gap-3'>
                            {
                                media.map((med, index) => (
                                    <div key={index} className='w-[40px] border h-[40px] border-[#60A6E7] rounded-full flex items-center justify-center'>
                                        <Image src={med} width={20} height={20} alt='' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-6'>
                        <div className=' flex flex-col gap-6 lg:ml-[20%]'>
                            <p className='text-[24px] font-bold text-white'>Company</p>
                            <div className='flex flex-col gap-3'>
                                {
                                    footlink.map((link, index) => (
                                        <Link key={index} href={link.link} className='text-[#B3D0E5]'>{link.name}</Link>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-6'>
                    <div className='w-full bg-[#60a6e7] h-[2px]'></div>
                    <p className='text-[#B3C1BD] mt-2 text-[14px]'>Copyright © 2024 Forcythe. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Scale
