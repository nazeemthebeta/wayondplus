"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Icon } from "@iconify/react";
import Link from "next/link";

const PaymentFailPage = () => {
    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-[-47px] left-[957px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] mix-blend-screen opacity-50" />
                <div className="absolute top-[335px] left-[-69px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] mix-blend-screen opacity-50" />
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FFCD01] rounded-full blur-[300px] mix-blend-screen opacity-20" />
            </div>

            <Header userEmail="test@wayondplus.com" />

            {/* Main Content */}
            <section className="relative pt-24 md:pt-32 pb-16 px-4 md:px-6 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
                <div className="container mx-auto max-w-[800px]">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-[40px] md:text-[50px] leading-[100%] tracking-[-0.05em] font-normal">
                            Uh Oh!
                        </h1>
                        <p className="mt-4 text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em] text-white opacity-80">
                            Oops! It looks like your payment didn't go through. Please try again.
                        </p>

                        {/* Steps Indicator */}
                        <div className="flex items-center justify-center mt-8 gap-0">
                            <div className="w-[35px] h-[35px] rounded-full bg-[#FFCD01] text-black flex items-center justify-center font-bold text-[18px] z-10">
                                1
                            </div>
                            <div className="w-[60px] h-[2px] bg-[#FFCD01] -mx-1" />
                            <div className="w-[35px] h-[35px] rounded-full bg-[#FFCD01] text-black flex items-center justify-center font-bold text-[18px] z-10">
                                2
                            </div>
                        </div>
                    </div>

                    {/* Unsuccessful Card */}
                    <div className="relative rounded-[30px] p-[2px] overflow-hidden max-w-[750px] mx-auto">
                        {/* Base Glass Layer */}
                        <div className="absolute inset-0 bg-white/[0.035] backdrop-blur-2xl border-[0.5px] border-[#838280] rounded-[30px]" />
                        {/* Inner rim highlight */}
                        <div className="absolute inset-0 rounded-[30px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.55)] pointer-events-none" />
                        {/* Specular sheen */}
                        <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02),transparent_55%)] pointer-events-none" />

                        <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center">
                            {/* Error Icon */}
                            <div className="relative w-[110px] h-[110px] flex items-center justify-center mb-8">
                                {/* SVG Circular Border like screenshot */}
                                <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                                    <circle cx="55" cy="55" r="50" stroke="white" strokeWidth="5" strokeDasharray="250 100" strokeLinecap="round" transform="rotate(-90 55 55)" />
                                </svg>
                                <Icon icon="ph:credit-card-x" className="text-white w-14 h-14" />
                            </div>

                            <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.05em] mb-4">
                                Payment Unsuccessful
                            </h2>

                            <p className="text-[16px] md:text-[18px] opacity-70 max-w-[450px] leading-relaxed mb-10">
                                Your transaction was not completed. For more details, please check your transaction history or try again.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
                                <Link
                                    href="/billing"
                                    className="w-full sm:max-w-[220px] h-[55px] bg-[#FFCD01] text-black text-[17px] font-bold rounded-[12px] hover:bg-white transition-colors flex items-center justify-center"
                                >
                                    Retry
                                </Link>
                                <Link
                                    href="/"
                                    className="w-full sm:max-w-[220px] h-[55px] bg-white text-black text-[17px] font-bold rounded-[12px] hover:bg-[#FFCD01] transition-colors flex items-center justify-center"
                                >
                                    Explore Dashboard
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PaymentFailPage;
