
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const link = [
        { title: "About", link: "/about" },
        { title: "Service", link: "/service" },
        { title: "Portfolio", link: "/portfolio" },
        { title: "Studio", link: "/studio" },
        { title: "Foundation", link: "/foundation" },
    ];

    const link2 = [
        ...link,
        { title: "Careers", link: "/foundation" },
        { title: "Blog", link: "/" },
    ];
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleOpenModal = () => setOpen(!open);

    return (
        <div
            className={`lg:px-[7%] px-[4%] w-full flex flex-row items-center justify-between lg:py-[2%] py-[5%] ${isScrolled ? "sticky-nav" : ""
                }`}
        >
            <div className="flex flex-row items-center gap-[5rem]">
                <Image src={"/Images/logo.svg"} width={170} height={120} alt="Forcythe logo" />
                <div className="lg:flex hidden flex-row gap-x-8">
                    {link.map((item, index) => (
                        <Link key={index} className="text-white font-semibold" href={item.link}>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-[120px] h-[45px] lg:flex hidden border-dashed border-[1px] border-white rounded-full relative cursor-pointer hover:duration-200 hover:border-blue-600">
                <button className="w-[120px] h-[45px] rounded-full absolute top-[-7px] right-[-7px] bg-white hover:bg-blue-600 hover:duration-200 flex items-center justify-center font-bold">
                    Book a Call
                </button>
            </div>
            <div
                onClick={handleOpenModal}
                className="w-[40px] cursor-pointer h-[40px] rounded-md bg-[#1D1E2E] lg:hidden flex items-center justify-center"
            >
                <Image src={"/Images/menu.svg"} width={30} height={30} alt="menu bar" />
            </div>
            {open && (
                <div className="fixed top-24 right-3 lg:hidden z-[5000] w-[300px] h-[400px] rounded-lg bg-gradient-to-b from-[#030516] to-[#0C2645] items-center justify-center p-6">
                    <div className="flex flex-col gap-7">
                        {link2.map((item, index) => (
                            <Link key={index} className="text-white font-semibold" href={item.link}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navigation;
