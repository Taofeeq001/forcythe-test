import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    const link = [
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Service",
            link: "/service"
        },
        {
            title: "Portfolio",
            link: "/portfolio"
        },
        {
            title: "Studio",
            link: "/studio"
        },
        {
            title: "Foundation",
            link: "/foundation"
        },
    ]
    return (
        <div className='px-[7%] w-full flex flex-row items-center justify-between py-[2%]'>
            <div className='flex flex-row items-center gap-[5rem]'>
                <Image src={"/Images/logo.svg"} width={170} height={120} alt='Forcythe logo' />
                <div className='flex flex-row gap-x-8'>
                    {
                        link.map((item, index) => {
                            return (
                                <Link key={index} className='text-white font-semibold' href={item.link}>{item.title}</Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-[120px] h-[45px] border-dashed border-[1px] border-white rounded-full relative cursor-pointer hover:duration-200 hover:border-blue-600'>
                <button className='w-[120px] h-[45px] rounded-full absolute top-[-7px] right-[-7px] bg-white hover:bg-blue-600 hover:duration-200 flex items-center justify-center font-bold'>Book a Call</button>
            </div>
        </div>
    )
}

export default Navigation