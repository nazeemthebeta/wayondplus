"use client";

import Link from "next/link";
import { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative w-full md:min-h-screen flex flex-col items-center justify-start bg-black text-white px-4 overflow-hidden pt-32 md:pt-48 pb-4 md:pb-0">

            {/* Background Graph & Indicator */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden">
                <div className="relative w-[1280px] h-[656px] filter blur-[2px]">
                    <img src="/graph.svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                    {/* Indicator at approx 66% left, top ~43% */}
                    <img src="/indicator.svg" alt="" className="absolute left-[66%] top-[43%] h-[367px]" />
                </div>
            </div>

            {/* Background Glow Effects (Figma) */}
            <div className="absolute top-[453px] -left-[100px] md:left-0 w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] pointer-events-none" />
            <div className="absolute top-[55px] -right-[100px] md:left-[1104px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-20 text-center max-w-[900px] mx-auto flex flex-col items-center gap-6 md:gap-10 px-4">

                {/* Heading */}
                <h1 className="text-[28px] sm:text-[36px] md:text-[50px] leading-[1.2] md:leading-[69px] font-heading font-bold tracking-[-0.03em] animate-slide-up">
                    Welcome to Wayond <span className="text-primary">Plus</span>
                </h1>

                {/* Subheading */}
                <p className="text-[18px] sm:text-[24px] md:text-[40px] leading-[1.4] text-white max-w-[853px] tracking-[-0.05em] font-light animate-slide-up delay-100">
                    You will gain access to strategies and tools used by institutions and Forex traders who earn <span className="text-primary font-semibold">Over $1 Million</span> annually, enhancing your competitive edge.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-4 animate-slide-up delay-200">
                    <Link href="/checkout">
                        <PrimaryButton className="h-[52px] md:h-[58px] min-w-[200px] md:min-w-[222px] !rounded-[53px] !p-[5px] hover:scale-105 transition-transform">
                            <span className="text-[18px] md:text-[20px] leading-[22px]">Join Wayond Plus</span>
                        </PrimaryButton>
                    </Link>

                    <Link href="#included" className="group px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all">
                        <span className="font-heading text-[18px] md:text-[20px] leading-[22px]">See what's included</span>
                    </Link>
                </div>

                {/* Video Section */}
                <div
                    className="relative mt-8 md:mt-16 w-full max-w-[1080px] mx-auto aspect-video rounded-[20px] md:rounded-[41.23px] border-[2px] md:border-[4.12px] border-white overflow-hidden shadow-2xl group bg-black animate-scale-in delay-300 hover:shadow-primary/20 transition-shadow duration-500"
                    onClick={() => setIsPlaying(true)}
                >
                    {!isPlaying ? (
                        <>
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/video-placeholder.jpg')" }}>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors cursor-pointer" />
                            </div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-[62px] h-[62px] bg-[#FFCD00] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 5V19L19 12L8 5Z" />
                                    </svg>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <video
                                src="https://wayond.ae//static/wayond/video/lp-video.mp4"
                                className="w-full h-full object-cover"
                                controls={false} // Hide default controls to show custom one
                                autoPlay
                                onTimeUpdate={(e) => {
                                    // Simple logic to mimic progress if needed, 
                                    // but user just asked for the UI look for now.
                                    // We'll keep the static look for the mockup.
                                }}
                            />

                            {/* Custom Seekbar Container */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-[11px] w-[739.45px] h-[16.49px]">
                                {/* Thick Line Controller */}
                                <div className="h-[4px] flex-1 bg-white/50 rounded-full relative overflow-hidden">
                                    <div className="absolute top-0 left-0 h-full w-[30%] bg-[#FFCD01] rounded-full" />
                                </div>
                                {/* Time Code at End */}
                                <span className="text-white text-[16px] font-sans font-medium">2:35</span>
                            </div>
                        </>
                    )}
                </div>
            </div>

        </section>
    );
};

export default Hero;
