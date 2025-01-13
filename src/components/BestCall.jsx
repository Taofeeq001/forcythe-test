'use client'
import React, { useEffect, useState } from 'react';
import BestProps from './Reusable/BestProps';

const BestCall = () => {
    const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);
    const [teamLeads, setTeamLeads] = useState(0);
    const [years, setYears] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (clients < 50) setClients(prev => prev + 1);
            if (projects < 120) setProjects(prev => prev + 1);
            if (teamLeads < 10) setTeamLeads(prev => prev + 1);
            if (years < 10) setYears(prev => prev + 1);
        }, 30);

        if (clients >= 50 && projects >= 120 && teamLeads >= 10 && years >= 10) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [clients, projects, teamLeads, years]);

    return (
        <div className='w-full bg-[#040A1E] flex flex-col items-center lg:gap-48 gap-28 my-16'>
            <div className='flex flex-col lg:px-[7%] px-[4%] w-full items-center gap-8'>
                <p className='lg:text-[42px] text-[#b3d0f2] text-[30px]'>
                    Your best call for B2B/B2C product innovation
                </p>
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
            <div className='lg:w-[60%] w-full h-[70vh] border-[2px] border-[#B2CFF1] rounded-t-full border-b-0 flex flex-col items-center justify-center lg:justify-end lg:gap-20 gap-10'>
                <div>
                    <p className='lg:text-[30px] text-[20px] text-white text-center'>
                        We build solutions that help <br />
                        <span className='text-[#60a6e7]'>businesses</span> of all sizes to <span className='text-[#60a6e7]'>scale</span>
                    </p>
                </div>
                <div className='flex flex-row lg:gap-10 gap-7'>
                    <div>
                        <p className='text-[#60a6e7] lg:text-[48px] font-bold text-[20px] leading-none'>
                            {clients}+
                        </p>
                        <p className='text-[18px] text-white'>Clients</p>
                    </div>
                    <div>
                        <p className='text-[#60a6e7] lg:text-[48px] font-bold text-[20px] leading-none'>
                            {projects}+
                        </p>
                        <p className='text-[18px] text-white'>Projects</p>
                    </div>
                    <div>
                        <p className='text-[#60a6e7] lg:text-[48px] font-bold text-[20px] leading-none'>
                            {teamLeads}+
                        </p>
                        <p className='text-[18px] text-white'>Team Leads</p>
                    </div>
                    <div>
                        <p className='text-[#60a6e7] lg:text-[48px] font-bold text-[20px] leading-none'>
                            {years}+
                        </p>
                        <p className='text-[18px] text-white'>Glorious Years</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestCall;
