'use client'
import React, { useState } from 'react'

const Spark = () => {
    const [active, setActive] = useState("idea")
    const tabs = [
        {
            name: "Idea",
            act: "idea",
            img: "/Images/idea.svg"
        },
        {
            name: "Design",
            act: "design",
            img: ""
        },
        {
            name: "Develop",
            act: "dev",
            img: ""
        },
        {
            name: "Launch",
            act: "launch",
            img: ""
        },
    ]
    const handleClick = (e) => {
        setActive(e)
    }
    const data = {
        idea: "",
        design: "",
        dev: "",
        launch: "",

    }
    return (
        <div className='flex flex-col gap-5 px-[7%] mt-16'>
            <p className='lg:text-[40px] text-[20px] text-white'>From <span className='text-[#60a6e7]'>Spark</span> to <span className='text-[#60a6e7]'>Spotlight:</span> we take  you <br className='lg:block hidden' /> every step of the way to success.</p>
            <div className='flex lg:flex-row flex-col items-center justify-between w-full '>
                <div className='w-full'>
                    <div className='border-[2px] border-[#B3D0F2] p-2 w-full overflow-hidden rounded-full h-[65px] flex'>
                        <div className='flex flex-row w-full justify-between items-center'>
                            {
                                tabs.map((t, index) => (
                                    <div key={index} onClick={() => handleClick(t.act)} className={`w-full text-white flex items-center justify-center rounded-full py-3 font-bold ${active === t.act ? "bg-[#B3D0F2] text-[#0D0F11]" : ""}`}>{t.name}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='w-full flex lg:justify-end justify-center'>
                    {
                        active == "idea" ?
                            <img src='/Images/idea.svg' className='w-[70%]' /> : ""
                    }
                </div>

            </div>
        </div>
    )
}

export default Spark