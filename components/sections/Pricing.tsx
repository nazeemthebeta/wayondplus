"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import { Icon } from "@iconify/react";

const Pricing = () => {
    const features = [
        "Full Wayond Plus library",
        "Live & recorded trading sessions",
        "Passionz & Strategyz full episodes",
        "Exclusive bonuses",
        "20-Video Premium Forex Course",
    ];

    return (
        <section className="bg-black py-12 md:py-20 px-4 md:px-6" id="join">
            <div className="container mx-auto max-w-[1080px]">
                {/* wrapper needs overflow-visible for the top label */}
                <div className="relative rounded-[20px] overflow-visible">
                    {/* Limited-Time Launch Offer Label */}
                    <div className="absolute -top-[40px] right-[50px] md:right-[100px] z-30">
                        <div className="px-6 py-2 bg-white rounded-t-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.45)] border border-black/10">
                            <span className="text-black text-[12px] font-normal">
                                Limited-Time Launch Offer
                            </span>
                        </div>
                    </div>

                    {/* ACTUAL GLASS BODY (overflow-hidden here) */}
                    <div className="relative rounded-[20px] overflow-hidden">
                        {/* Base glass + border */}
                        <div className="absolute inset-0 rounded-[20px] bg-white/[0.035] border border-white/10 backdrop-blur-2xl shadow-[0_60px_140px_rgba(0,0,0,0.75)]" />

                        {/* Inner rim highlight (this is what makes it “premium”) */}
                        <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.55)]" />

                        {/* Corner lighting (green + yellow) - screen blend so it actually shows */}
                        <div className="absolute w-[240px] h-[240px] -left-[90px] -top-[90px] rounded-full bg-[#00FF66] opacity-28 blur-[220px] mix-blend-screen pointer-events-none" />
                        <div className="absolute w-[240px] h-[240px] -right-[90px] -bottom-[90px] rounded-full bg-[#00FF66] opacity-22 blur-[220px] mix-blend-screen pointer-events-none" />

                        <div className="absolute w-[240px] h-[240px] -left-[70px] top-[40%] -translate-y-1/2 rounded-full bg-[#FFCD01] opacity-18 blur-[230px] mix-blend-screen pointer-events-none" />
                        <div className="absolute w-[240px] h-[240px] right-[-90px] bottom-[-90px] rounded-full bg-[#FFCD01] opacity-14 blur-[230px] mix-blend-screen pointer-events-none" />

                        {/* Specular sheen (subtle diagonal highlight) */}
                        <div className="absolute inset-0 rounded-[20px] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02),transparent_55%)] pointer-events-none" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col lg:flex-row">
                            {/* LEFT */}
                            <div className="flex-1 p-8 md:p-[50px] flex flex-col">
                                <h2 className="text-white text-[50px] leading-[55px] tracking-[-0.05em] font-bold mb-4">
                                    Pricing
                                </h2>

                                <p className="text-white text-[16px] md:text-[20px] leading-[22px] tracking-[-0.05em] max-w-[407px] italic">
                                    Unlock the complete Wayond{" "}
                                    <span className="text-[#FFCD01] not-italic">Plus</span> <br />
                                    experience at a special launch price. Limited-time access to{" "}
                                    <span className="text-[#FFCD01] font-bold not-italic">
                                        premium trading knowledge.
                                    </span>
                                </p>

                                {/* Chart/Graph box (add depth + inner rim) */}
                                <div className="relative mt-6 w-full max-w-[491px] h-[286px] rounded-[20px] overflow-hidden border border-black bg-white/[0.06] backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.65)]">
                                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(0,0,0,0.55)]" />
                                    <div className="absolute inset-0 bg-black/55" />
                                    <Image
                                        src="/images/trading-chart.jpg"
                                        alt="Trading Chart"
                                        fill
                                        className="object-cover opacity-50"
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />

                                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                                        <p className="text-white text-[20px] md:text-[25px] font-bold leading-[35px] tracking-[-0.05em]">
                                            Limited Time offer
                                        </p>
                                        <p className="text-[#FFCD01] text-[50px] md:text-[72px] font-bold leading-[101px] tracking-[-0.05em]">
                                            60% Off
                                        </p>
                                    </div>
                                </div>

                                {/* Secure Limited Time Offer with thin arrow */}
                                <div className="flex items-center gap-4 mt-6">
                                    <p className="text-white italic text-[24px] leading-[33px] tracking-[-0.05em]">
                                        Secure Limited Time Offer !
                                    </p>
                                    <svg
                                        width="140"
                                        height="20"
                                        viewBox="0 0 154 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 10H154M154 10L146 6M154 10L146 14"
                                            stroke="white"
                                            strokeWidth="1"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="hidden lg:block w-px bg-white/10 self-stretch" />

                            <div className="flex-1 p-4 md:p-[25px]">
                                {/* right-panel subtle internal sheen */}
                                {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),transparent_45%,rgba(0,0,0,0.25))]" /> */}
                                <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />

                                <div className="relative p-4 md:p-4 flex flex-col items-center">
                                    {/* Title glass */}
                                    <div className="relative w-full max-w-[400px] rounded-[20px] border border-white/10 bg-white/[0.035] backdrop-blur-2xl shadow-[0_35px_90px_rgba(0,0,0,0.70),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.55)] overflow-hidden">
                                        {/* Top-right corner shine */}
                                        <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[radial-gradient(circle_at_100%_0%,rgba(7, 7, 7, 0.15),transparent_70%)] pointer-events-none" />
                                        {/* Bottom-left corner shine */}
                                        <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-[radial-gradient(circle_at_0%_100%,rgba(10, 10, 10, 0.15),transparent_70%)] pointer-events-none" />
                                        <div className="px-12 py-2">
                                            <p className="text-white text-[30px] leading-[100%] tracking-[-0.05em]">
                                                Wayond <span className="text-[#FFCD01]">Plus</span>
                                            </p>
                                            <p className="text-white text-[42px] leading-[100%] tracking-[-0.05em] font-bold mt-2">
                                                Membership
                                            </p>
                                        </div>
                                    </div>

                                    {/* Price strip */}
                                    <div className="relative w-fit mx-auto px-6 py-2 bg-black/85 border border-white/10 rounded-b-[16px] flex justify-center items-center mb-6 shadow-[0_15px_40px_rgba(0,0,0,0.60)]">
                                        <span className="text-[#FFCD01] text-[22px] md:text-[28px] font-bold tracking-[-0.05em]">
                                            <span className="relative inline-block mr-2 font-normal opacity-80">
                                                $49.99
                                                <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-[#FF0000] -rotate-12" />
                                            </span>
                                            <span className="mx-2">→</span>
                                            <span>$19.99</span>
                                        </span>
                                    </div>

                                    <p className="text-white text-[16px] md:text-[20px] leading-[20px] max-w-[327px] mb-6">
                                        Limited-Time Launch Offer Wayond{" "}
                                        <span className="text-[#FFCD01]">Plus</span> Membership.
                                        All access, No compromises.{" "}
                                        <span className="font-bold">Includes:</span>
                                    </p>

                                    <ul className="flex flex-col gap-[12px] mb-8">
                                        {features.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white">
                                                <Icon
                                                    icon="mingcute:arrows-left-fill"
                                                    className="w-6 h-6 text-white/90 transform rotate-180"
                                                />
                                                <span className="italic text-[16px] md:text-[20px] leading-[22px]">
                                                    {item.includes("Plus") ? (
                                                        <>
                                                            {item.split("Plus")[0]}
                                                            <span className="text-[#FFCD01] font-bold not-italic">
                                                                Plus
                                                            </span>
                                                            {item.split("Plus")[1]}
                                                        </>
                                                    ) : (
                                                        item
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Button: add the “outer shell” look like figma */}
                                    <Link href="/checkout">
                                        <PrimaryButton className="h-[52px] md:h-[58px] min-w-[200px] md:min-w-[222px] !rounded-[53px] !p-[5px] hover:scale-105 transition-transform">
                                            <span className="text-[18px] md:text-[20px] leading-[22px]">Join Wayond Plus</span>
                                        </PrimaryButton>
                                    </Link>
                                </div>
                                {/* </div> */}
                            </div>
                            {/* /RIGHT */}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Pricing;
