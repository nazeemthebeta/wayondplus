"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const LoginBanner = () => {
    const features = [
        "Full Wayond Plus library",
        "Live & recorded trading sessions",
        "Passionz & Strategyz full episodes",
        "Exclusive bonuses",
        "20-Video Premium Forex Course",
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText("WAYONDPLUS30");
    };

    return (
        <div className="w-full max-w-[1080px] mx-auto px-4 md:px-0 mb-20 relative z-10">
            {/* Outer Gradient Background */}
            <div
                className="w-full h-auto md:h-[450px] relative rounded-[20px] p-5"
                style={{
                    background: "linear-gradient(349.63deg, #C92B04 -1.03%, #FFC700 100%)",
                }}
            >
                {/* Inner Frame */}
                <div className="w-full h-full rounded-[20px] relative overflow-hidden flex flex-col md:flex-row">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/burj-khalifa.jpg"
                            alt="Burj Khalifa"
                            fill
                            className="object-cover mix-blend-luminosity"
                            style={{ objectPosition: "center 15%" }}
                            priority
                        />

                        {/* dark overlay (same as signup) */}
                        <div className="absolute inset-0 bg-black/50" />

                        {/* ✅ Missing effect: gradient color grading ON TOP of image */}
                        <div
                            className="absolute inset-0 opacity-80"
                            style={{
                                background:
                                    "linear-gradient(349.63deg, rgba(201,43,4,0.95) -1.03%, rgba(255,199,0,0.55) 100%)",
                                mixBlendMode: "overlay",
                            }}
                        />

                        {/* ✅ Extra punch: make reds glow slightly like signup */}
                        <div
                            className="absolute inset-0 opacity-45"
                            style={{
                                background:
                                    "radial-gradient(60% 60% at 20% 35%, rgba(201,43,4,0.85) 0%, rgba(201,43,4,0.0) 70%)",
                                mixBlendMode: "screen",
                            }}
                        />
                    </div>

                    {/* Left Content */}
                    <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-2">
                            <h2 className="text-white tracking-[-0.05em] leading-tight">
                                <span className="text-[18px] md:text-[20px] font-normal block mb-1">
                                    Wayond Plus
                                </span>
                                <span className="text-[40px] md:text-[60px] font-bold block">
                                    Membership
                                </span>
                            </h2>
                        </div>

                        <div className="text-white text-[45px] md:text-[50px] font-bold leading-tight tracking-[-0.05em] mb-6">
                            60% Off
                        </div>

                        {/* Promo Code Box */}
                        <div
                            className="bg-white rounded-[10px] h-[61px] flex items-center justify-between px-6 w-full max-w-[390px] mb-6 group cursor-pointer"
                            onClick={copyToClipboard}
                        >
                            <span
                                className="text-[18px] md:text-[20px] font-medium tracking-[-0.05em]"
                                style={{
                                    background: "linear-gradient(270deg, #C92B04 0%, #FFC700 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Use Code: <span className="font-bold">WAYONDPLUS30</span>
                            </span>

                            <Icon
                                icon="mynaui:copy-solid"
                                className="w-6 h-6 text-[#838280] group-hover:text-[#C92B04] transition-colors"
                            />
                        </div>

                        <p className="text-white text-[16px] md:text-[18px] leading-tight tracking-[-0.05em] max-w-[380px]">
                            Unlock the complete Wayond <span className="text-[#FFCD01] font-bold">Plus</span>{" "}
                            experience at a special launch price.
                        </p>
                    </div>

                    {/* Right Content */}
                    <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-start md:justify-center">
                        <h3 className="text-white text-[24px] md:text-[30px] leading-[100%] tracking-[-0.05em] mb-8 max-w-[354px] font-normal">
                            Limited-Time Launch Offer <br />
                            Wayond <span className="text-[#FFCD01]">Plus</span> Membership. <br />
                            All access, No compromises. <br />
                            Includes:
                        </h3>

                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-white">
                                    <Icon
                                        icon="mingcute:arrows-left-fill"
                                        className="w-5 h-5 text-white rotate-180 flex-shrink-0"
                                    />
                                    <span className="text-[15px] leading-[21px] tracking-tight font-normal">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginBanner;
