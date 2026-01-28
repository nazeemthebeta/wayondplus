"use client";

import React from 'react';
import Link from 'next/link';
import PrimaryButton from '../ui/PrimaryButton';

const WhatIsWayond = () => {
    return (
        <section className="relative pt-12 md:pt-20 pb-12 md:pb-16 px-4 md:px-6 text-center">

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
