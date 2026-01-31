"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import PrimaryButton from '@/components/ui/PrimaryButton';

const PricingPage = () => {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black flex flex-col relative overflow-hidden font-sans">
            {/* Background Glows (New specific positioning) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {/* Top left near heading text */}
                <div className="absolute top-[10%] left-[-100px] w-[300px] h-[300px] bg-[#FFCD01] rounded-full blur-[200px] opacity-60" />

                {/* Top right near checkout container */}
                <div className="absolute top-[15%] right-[10%] w-[300] h-[300px] bg-[#FFCD01] rounded-full blur-[200px] opacity-60" />

                {/* Bottom right left near checkout container */}
                <div className="absolute top-[50%] left-[15%px] w-[300px] h-[300px] bg-[#FFCD01] rounded-full blur-[250px] opacity-60" />

                {/* Bottom right near footer */}
                <div className="absolute bottom-0 right-[-100px] w-[300px] h-[300px] bg-[#FFCD01] rounded-full blur-[250px] opacity-60" />
            </div>

            <Header />

            <div className="flex-grow pt-16 md:pt-32 px-4 pb-12 md:pb-20 relative z-10">
                {/* Page Title */}
                <div className="text-center mb-12 md:mb-16 relative z-10">
                    <h1 className="text-2xl md:text-[50px] font-medium leading-[1.1] tracking-tight">
                        Build Your Trading Edge <br />
                        Through <span className="text-primary font-bold">Strategies, Education, Lifestyle</span>
                    </h1>
                </div>

                {/* Main Container (Frame 2147223183) */}
                <div className="relative mx-auto w-full max-w-[1080px] min-h-[735px] rounded-[30px] bg-[rgba(17,17,17,0.1)] border border-white/5 backdrop-blur-sm overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 p-8 lg:p-0">

                    {/* Left Column: Membership Card Group (Group 2087330593) */}
                    <div className="relative w-full max-w-[387px] h-auto lg:h-[635px] flex flex-col items-center">

                        {/* Limited-Time Tab (Rectangle 21) */}
                        <div className="w-[192px] h-[35px] bg-white rounded-t-[10px] flex items-center justify-center relative translate-y-[1px] z-30">
                            <span className="font-normal text-[12px] leading-[13px] text-black">
                                Limited-Time Launch Offer
                            </span>
                        </div>

                        {/* Membership Card Body (Frame 57) */}
                        <div
                            className="w-[387px] h-[600px] rounded-[20px] relative overflow-hidden flex flex-col items-center"
                            style={{
                                background: "linear-gradient(345.82deg, #C92B04 12.7%, #FFC700 102.24%)"
                            }}
                        >
                            {/* Frame 58 - Title Container (327x112) */}
                            <div className="w-[327px] h-[112px] mx-auto mt-[26px] relative z-20 rounded-[20px] overflow-hidden">
                                {/* tinted glass like screenshot */}
                                <div className="absolute inset-0 bg-white/[0.08] backdrop-blur-xl" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.18),transparent_55%)]" />
                                <div className="absolute inset-0 rounded-[20px] ring-1 ring-white/20" />

                                <div className="relative h-full flex items-center px-[26px]">
                                    <div className="tracking-[-0.05em]">
                                        <div className="text-[34px] leading-[36px] font-normal text-white">
                                            Wayond <span className="text-[#FFCD01]">Plus</span>
                                        </div>
                                        <div className="text-[44px] leading-[44px] font-bold text-white -mt-[2px]">
                                            Membership
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Rectangle 22 - Price Container (275x108) */}
                            <div className="w-[275px] h-[108px] mx-auto bg-black rounded-t-none rounded-b-[20px] -mt-[18px] relative z-10 flex items-center justify-center shadow-[0_18px_40px_rgba(0,0,0,0.55)]">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="relative">
                                        <span className="font-bold text-[35px] leading-[38px] tracking-[-0.05em] text-[#FFCD01]">
                                            $49.99
                                        </span>
                                        {/* Strikeout line (diagonal like screenshot) */}
                                        <div className="absolute -left-[4px] -right-[4px] top-1/2 -translate-y-1/2">
                                            <div className="h-[3px] bg-[#FF0000] rounded-full rotate-[-15deg]" />
                                        </div>
                                    </div>

                                    <span className="font-bold text-[35px] leading-[38px] tracking-[-0.05em] text-[#FFCD01]">
                                        →
                                    </span>

                                    <span className="font-bold text-[35px] leading-[38px] tracking-[-0.05em] text-[#FFCD01]">
                                        $19.99
                                    </span>
                                </div>
                            </div>

                            {/* Monthly Plan Pill (Rectangle 23) */}
                            <div className="w-[165px] h-[40px] bg-white rounded-t-none rounded-b-[15px] flex items-center justify-center -mt-[6px] mb-6 relative z-10 shadow-md">
                                <span
                                    className="font-bold text-[20px] leading-[25px] tracking-[-0.05em]"
                                    style={{
                                        background: "linear-gradient(270deg, #C92B04 0%, #FFC700 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Monthly Plan
                                </span>
                            </div>

                            {/* Description (left aligned like screenshot) */}
                            <div className="w-[327px] mx-auto text-left mb-8 relative z-10">
                                <p className="font-normal text-[20px] leading-[25px] text-white">
                                    Limited-Time Launch Offer Wayond{" "}
                                    <span className="text-[#FFCD01] font-bold">Plus</span>{" "}
                                    <span className="text-[#FFCD01] font-bold">Membership</span>. All access, No compromises. <span className="font-bold">Includes:</span>
                                </p>
                            </div>

                            {/* Features List (use » like screenshot) */}
                            <ul className="w-[327px] mx-auto flex flex-col gap-[14px] relative z-10 pb-10">
                                {[
                                    "Full Wayond Plus library",
                                    "Live & recorded trading sessions",
                                    "Passionz & Strategyz full episodes",
                                    "Exclusive bonuses",
                                    "20-Video Premium Forex Course"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-white">
                                        <span className="text-white font-bold text-[20px] leading-[21px] mt-[1px]">»</span>
                                        <span className="text-[15px] leading-[21px] font-normal">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="w-full max-w-[543px] flex flex-col pt-4">
                        <div className="space-y-8">
                            <div className="flex justify-between items-center text-white">
                                <span className="font-normal text-[20px] leading-[22px] tracking-[-0.05em]">Item subtotal</span>
                                <span className="font-normal text-[20px] leading-[22px] text-right">$49.99/-</span>
                            </div>

                            <div className="flex justify-between items-center text-white">
                                <span className="font-normal text-[20px] leading-[22px] tracking-[-0.05em]">Offers (Limited-Time)</span>
                                <span className="font-normal text-[20px] leading-[22px] text-right">-$30</span>
                            </div>

                            {/* Coupon Discount (Frame 58) */}
                            <div className="w-full h-[64px] bg-[rgba(0,0,0,0.004)] border border-white/10 rounded-[20px] flex items-center justify-between px-8 backdrop-blur-sm">
                                <span className="font-normal text-[20px] leading-[22px] tracking-[-0.05em] text-white">Coupon Discounts</span>
                                <span className="font-bold text-[20px] leading-[22px] tracking-[-0.05em] text-white uppercase">“WAYONDPLUS30”</span>
                            </div>

                            <div className="flex justify-between items-center pt-8">
                                <span className="font-normal text-[20px] leading-[22px] tracking-[-0.05em] text-white">Total</span>
                                <span className="font-bold text-[20px] leading-[22px] text-right text-white">$19.99/-</span>
                            </div>

                            {/* Proceed Button (standard PrimaryButton theming, left aligned) */}
                            <div className="flex justify-start pt-10">
                                <Link href="/checkout">
                                    <PrimaryButton className="h-[52px] md:h-[60px] min-w-[200px] md:min-w-[260px] hover:scale-[1.02] transition-transform !rounded-[53px] !p-[5px]">
                                        <span className="text-[18px] md:text-[20px] leading-none text-black">Proceed Payment</span>
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default PricingPage;
