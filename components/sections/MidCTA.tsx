"use client";

import React from 'react';
import Link from 'next/link';
import PrimaryButton from '../ui/PrimaryButton';

const MidCTA = () => {
    return (
        <section className="relative bg-black py-20 px-6 text-center overflow-hidden">
            {/* Glow effects moved to page.tsx for cross-section positioning */}

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
