import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Articles = () => {
    const blog = [
        {
            img: "/Images/blog_ai.png",
            title: "Blog",
            content: "The Reformist",
            date: "May 29th, 2024",
            description: "Will AI take over Art?",
        },
        {
            img: "/Images/blog3.png",
            title: "Blog",
            content: "The Reformist",
            date: "May 29th, 2024",
            description: "Crytocurrency vs Token",
        },
        {
            img: "/Images/blog3.png",
            title: "Blog",
            content: "The Reformist",
            date: "May 29th, 2024",
            description: "Crytocurrency and Crypto Asset",
        },
    ]
    return (
        <div className='px-[7%] flex flex-col py-[6%]'>
            <div className='w-full justify-between flex flex-row items-center'>
                <p className='text-[42px] font-bold text-white'>Read our articles, news and product blog</p>
                <div className='w-[120px] h-[45px] mt-2 border-dashed border-[1px] border-white rounded-full relative cursor-pointer hover:duration-200 hover:border-blue-600'>
                    <button className='w-[120px] h-[45px] rounded-full absolute top-[-7px] right-[-7px] bg-white hover:bg-blue-600 hover:duration-200 flex items-center justify-center font-bold'>Visit Blog </button>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col mt-5 items-center justify-between w-full gap-9">
                {blog.map((d, index) => (
                    <Link href={"#"}
                        key={index}
                        className="flex flex-col gap-4 hover:border-blue-600 hover:rounded-xl duration-500 hover:border-[1px] cursor-pointer overflow-hidden group"
                    >
                        <Image
                            src={d.img}
                            width={500}
                            height={500}
                            alt=""
                            className="rounded-2xl transform duration-300 group-hover:scale-x-110 group-hover:scale-y-110"
                        />
                        <div className="flex flex-row duration-500 py-10">
                            <div className='w-[2px] bg-white group-hover:ml-8 duration-500'></div>
                            <div className="ml-5 flex flex-col duration-500">
                                <p className="font-bold text-white">{d.title}</p>
                                <div className="flex flex-row items-center gap-3 text-[#AEA9B1]">
                                    <p>{d.content}</p>
                                    <div className="flex flex-row items-center gap-1">
                                        <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
                                        <p>{d.date}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-white font-bold">{d.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Articles
