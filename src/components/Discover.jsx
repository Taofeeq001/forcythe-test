'use client'
import React, { useEffect, useState } from 'react'
import TabProps from './tabs/TabProps'

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
        stacks: <TabProps
            ml={"0"}
            company={"Starks Associate"}
            description={"Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally."}
            position={"Starks Associate"}
            img={"/Images/associate.svg"}
        />,
        executive: <TabProps
            ml={"lg:ml-[20%]"}
            company={"IwariaExecutivePros"}
            description={"The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!"}
            position={"Testimony, Co-founder"}
            img={"/Images/executive-pro-ceo.svg"}
        />,
        stacai: <TabProps
            ml={"lg:ml-[40%]"}
            company={"Stac AI"}
            description={"Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way."}
            position={"Edwin, Former CTO"}
            img={"/Images/edwin.svg"}
        />,
        iwaria: <TabProps
            ml={"lg:ml-[30%]"}
            company={"Stac AI"}
            description={"Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way."}
            position={"Edwin, Former CTO"}
            img={"/Images/edwin.svg"}
        />,
        beaupreneur: <TabProps
            ml={"lg:ml-[47%]"}
            company={"Stac AI"}
            description={"Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way."}
            position={"Edwin, Former CTO"}
            img={"/Images/edwin.svg"}
        />,


    }
    return (
        <div className='mt-20 px-[7%] flex flex-col gap-2'>
            <div className='flex w-full items-center justify-center'>
                <p className='lg:text-[42px] text-white text-center leading-normal'>Discover the <span className='text-[#60a6e7]'>transformative stories</span> <br className='lg:block hidden' /> of startups  that scaled new heights with us</p>
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