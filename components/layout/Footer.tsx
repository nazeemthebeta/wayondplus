"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="relative bg-black border-t-[5px] border-primary pt-10 md:pt-16 pb-6 md:pb-8 px-4 md:px-6 overflow-hidden">
            {/* Yellow Glare Effect - Top Left */}
            <div className="absolute -left-[50px] top-0 w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] pointer-events-none animate-float" />

            <div className="relative z-10 container mx-auto max-w-[1280px]">
                {/* Logo at top */}
                <div className="mb-10 md:mb-16 animate-fade-in">
                    <Link href="/">
                        <Image
                            src="/wayondplus-logo.svg"
                            alt="Wayond Plus"
                            width={123}
                            height={58}
                            className="h-[40px] md:h-[58px] w-auto hover:opacity-80 transition-opacity"
                        />
                    </Link>
                </div>

                {/* Links Section and CTA Text on same line */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12 mb-8 md:mb-12">
                    {/* Links Section */}
                    <div className="flex flex-col gap-4 md:gap-6 animate-slide-up">
                        <p className="text-white text-[16px] md:text-[20px] font-normal leading-[24px]">Links:</p>
                        <div className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-3 md:gap-y-4">
                            <Link href="#about" className="text-white text-[16px] md:text-[20px] font-normal leading-[24px] hover:text-primary transition-colors">
                                About
                            </Link>
                            <Link href="#content" className="text-white text-[16px] md:text-[20px] font-normal leading-[24px] hover:text-primary transition-colors">
                                Content
                            </Link>
                            <Link href="#pricing" className="text-white text-[16px] md:text-[20px] font-normal leading-[24px] hover:text-primary transition-colors">
                                Pricing
                            </Link>
                            <Link href="#terms" className="text-white text-[16px] md:text-[20px] font-normal leading-[24px] hover:text-primary transition-colors">
                                Terms
                            </Link>
                            <Link href="#privacy" className="text-white text-[16px] md:text-[20px] font-normal leading-[24px] hover:text-primary transition-colors">
                                Privacy
                            </Link>
                            <Link href="#contact" className="text-white text-[16px] md:text-[20px] font-normal leading-[24px] hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* CTA Text - Bottom Right Corner */}
                    <div className="text-right max-w-[459px]">
                        <p className="text-white font-normal text-[30px] leading-[130%]">
                            Join today and take the first step. Transform your life starting now. Unleash your true potential!
                        </p>
                    </div>
                </div>

                {/* Dashed Border */}
                <div
                    className="w-full h-px mb-6 rounded-[32px]"
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.5) 4px, transparent 4px)',
                        backgroundSize: '8px 1px',
                        backgroundRepeat: 'repeat-x'
                    }}
                />

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-[#626262] font-normal text-[13px] leading-[13px]">
                        © 2025 Wayond. All rights reserved. | Wayond Plus
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
