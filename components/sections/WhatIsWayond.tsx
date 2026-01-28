"use client";

import React from 'react';
import Link from 'next/link';
import PrimaryButton from '../ui/PrimaryButton';

const WhatIsWayond = () => {
    return (
        <section className="relative bg-black pt-12 md:pt-20 pb-12 md:pb-16 px-4 md:px-6 text-center overflow-hidden">
            {/* Glare 1 - Top left near "Who can benefit" heading */}
            <div className="absolute top-[10%] left-[5%] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] pointer-events-none opacity-70 animate-float" />

            {/* Glare 2 - Bottom right after the 4 rectangles (WhoCanBenefit section) */}
            <div className="absolute top-[60%] right-[5%] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] pointer-events-none opacity-70 animate-float delay-200" />

            <div className="relative z-10 container mx-auto max-w-[900px] flex flex-col items-center">
                {/* What is Wayond Plus Section */}
                <div className="flex flex-col items-center gap-4 md:gap-6 animate-fade-in">
                    <h2 className="text-white mb-4 md:mb-6">
                        What is Wayond <span className="text-primary">Plus?</span>
                    </h2>
                    <p className="text-[16px] md:text-[26px] font-heading leading-relaxed text-gray-200 tracking-[-0.05em]">
                        Wayond Plus is an exclusive premium membership service for Wayond, a premier educational brand tailored for Forex traders.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhatIsWayond;
