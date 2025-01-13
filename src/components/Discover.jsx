'use client'
import React, { useEffect, useState } from 'react'
import TabProps from './tabs/TabProps'
import Stacks from './tabs/discoverTab/Stacks'
import Executive from './tabs/discoverTab/Executive'
import Stacai from './tabs/discoverTab/Stacai'
import Beaupreneur from './tabs/discoverTab/Beaupreneur'

const Discover = () => {
    const [active, setActive] = useState("stacks")
    const tabs = [
        {
            img: "/Images/starkk.png",
            act: "stacks"
        },
        {
            img: "/Images/ExecutivePros Logo.svg",
            act: "executive"
        },
        {
            img: "/Images/stacai.svg",
            act: "stacai"
        },
        {
            img: "/Images/iwaria.svg",
            act: "iwaria"
        },
        {
            img: "/Images/Beaupreneur.svg",
            act: "beaupreneur"
        },
    ]

    const handleClick = (active) => {
        setActive(active)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => {
                const currentIndex = tabs.findIndex((tab) => tab.act === prev);
                const nextIndex = (currentIndex + 1) % tabs.length;
                return tabs[nextIndex].act;
            });
        }, 18000);

        return () => clearInterval(interval);
    }, [tabs]);
    const data = {
        stacks: <Stacks />,
        executive: <Executive />,
        stacai: <Stacai />,
        iwaria: <TabProps
            ml={"lg:ml-[30%]"}
            company={"Iwaria"}
            description={"The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before."}
            position={"Iwaria, Founder"}
            img={"/Images/iwariafounder.svg"}
        />,
        beaupreneur: <Beaupreneur />,


    }
    return (
        <div className='mt-20 lg:px-[7%] px-[4%] flex flex-col gap-2'>
            <div className='flex w-full items-center justify-center'>
                <p className='lg:text-[42px] text-[32px] text-white text-center leading-normal'>Discover the <span className='text-[#60a6e7]'>transformative stories</span> <br className='lg:block hidden' /> of startups  that scaled new heights with us</p>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='border-[0.5px] border-[#60a6e7] w-full overflow-hidden rounded-full h-[65px] flex'>
                    <div className='flex flex-row items-center justify-between w-full h-full'>
                        {
                            tabs.map((tab, index) => (
                                <div key={index} onClick={() => handleClick(tab.act)} className={`w-full flex cursor-pointer items-center justify-center ${active === tab.act ? "bg-[#0C2645] w-full h-[100%] items-center justify-center" : ""}`}>
                                    <img src={tab.img} alt="" width={110} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='mt-3 text-white'>
                    {data[active]}
                </div>

            </div>
        </div>
    )
}

export default Discover