"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Icon } from "@iconify/react";
import Link from "next/link";

const PaymentSuccessPage = () => {
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
                            Congratulations
                        </h1>
                        <p className="mt-4 text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em] text-white opacity-80">
                            Please review the details below before entering payment information.
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

                    {/* Success Card */}
                    <div className="relative rounded-[30px] p-[2px] overflow-hidden max-w-[750px] mx-auto">
                        {/* Base Glass Layer */}
                        <div className="absolute inset-0 bg-white/[0.035] backdrop-blur-2xl border-[0.5px] border-[#838280] rounded-[30px]" />
                        {/* Inner rim highlight */}
                        <div className="absolute inset-0 rounded-[30px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.55)] pointer-events-none" />
                        {/* Specular sheen */}
                        <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02),transparent_55%)] pointer-events-none" />

                        <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center">
                            {/* Checkmark Icon */}
                            <div className="w-[100px] h-[100px] border-[5px] border-white rounded-full flex items-center justify-center mb-8">
                                <Icon icon="mdi:check" className="text-white w-16 h-16" />
                            </div>

                            <h2 className="text-[32px] md:text-[40px] font-bold tracking-[-0.05em] mb-4">
                                Payment Successful
                            </h2>

                            <p className="text-[16px] md:text-[18px] opacity-70 max-w-[450px] leading-relaxed mb-10">
                                Your transaction has successfully been completed. For more details, check your transaction history.
                            </p>

                            <Link
                                href="/"
                                className="w-full max-w-[250px] h-[55px] bg-white text-black text-[17px] font-bold rounded-[12px] hover:bg-[#FFCD01] transition-colors flex items-center justify-center"
                            >
                                Explore Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PaymentSuccessPage;
