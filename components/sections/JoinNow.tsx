"use client";

import React from 'react';
import Link from 'next/link';
import PrimaryButton from '../ui/PrimaryButton';

const JoinNow = () => {
    return (
        <section className="relative bg-black pt-12 md:pt-20 pb-16 md:pb-24 px-4 md:px-6 text-center overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FFCD01] rounded-full blur-[225px] pointer-events-none opacity-40 animate-pulse" />

            <div className="relative z-10 container mx-auto max-w-[900px] flex flex-col items-center gap-6 md:gap-8 animate-slide-up">
                <h2 className="text-white text-[24px] md:text-[36px] font-heading font-bold leading-tight tracking-[-0.03em]">
                    Join now to unlock a wealth of resources and insights that can elevate your trading success!
                </h2>
                <Link href="/checkout">
                    <PrimaryButton className="h-[52px] md:h-[60px] min-w-[200px] md:min-w-[240px] hover:scale-105 transition-transform !rounded-[53px] !p-[5px]">
                        <span className="text-[18px] md:text-[22px] leading-none">Join Wayond Plus</span>
                    </PrimaryButton>
                </Link>
            </div>
        </section>
    );
};

export default JoinNow;
