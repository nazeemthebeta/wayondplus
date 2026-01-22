"use client";

import React from 'react';
import Link from 'next/link';
import PrimaryButton from '../ui/PrimaryButton';

const MidCTA = () => {
    return (
        <section className="relative bg-black py-20 px-6 text-center overflow-hidden">
            {/* Background Glow Effects (similar to Hero) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] pointer-events-none opacity-80" />
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] pointer-events-none opacity-80" />

            <div className="relative z-10 container mx-auto max-w-[800px] flex flex-col items-center gap-8">
                <h2 className="text-white">
                    Join now to unlock a wealth of resources and insights that can elevate your trading success!
                </h2>
                <Link href="/checkout">
                    <PrimaryButton className="h-[52px] min-w-[180px]">
                        <span className="text-[18px]">Join WayondPlus</span>
                    </PrimaryButton>
                </Link>
            </div>
        </section>
    );
};

export default MidCTA;
