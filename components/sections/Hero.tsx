"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import PrimaryButton from "../ui/PrimaryButton";

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");
    const videoRef = useRef<HTMLVideoElement>(null);
    const seekbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            const percent = (video.currentTime / video.duration) * 100;
            setProgress(isNaN(percent) ? 0 : percent);

            const mins = Math.floor(video.currentTime / 60);
            const secs = Math.floor(video.currentTime % 60);
            setCurrentTime(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }, [isPlaying]);

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const video = videoRef.current;
        const seekbar = seekbarRef.current;
        if (!video || !seekbar) return;

        const rect = seekbar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(1, clickX / rect.width));
        video.currentTime = percent * video.duration;
    };

    const togglePlayPause = (e: React.MouseEvent) => {
        e.stopPropagation();
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPaused(false);
        } else {
            video.pause();
            setIsPaused(true);
        }
    };

    return (
        <section className="relative w-full md:min-h-screen flex flex-col items-center justify-start bg-black text-white px-2 md:px-4 overflow-hidden pt-32 md:pt-48 pb-4 md:pb-0">

            {/* Background Graph & Indicator */}
            <div className="absolute top-18 left-0 w-full h-full pointer-events-none select-none overflow-hidden flex justify-center">
                <div className="relative w-full max-w-[1920px] h-[400px] md:h-[656px] scale-100 md:scale-100 origin-top">
                    <img src="/graph.svg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                    {/* Indicator at approx 66% left, top ~43% */}
                    <img src="/indicator.png" alt="" className="absolute left-[66%] top-[42%] h-[200px] md:h-[367px] opacity-90" />
                </div>
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] md:backdrop-blur-[2px]" />
            </div>

            {/* Background Glow Effects (Figma) */}
            <div className="absolute top-[453px] -left-[100px] md:left-0 w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] pointer-events-none" />
            <div className="absolute top-[55px] -right-[100px] md:left-[1104px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-20 text-center max-w-[1400px] mx-auto flex flex-col items-center gap-6 md:gap-10 px-1 md:px-2 w-full">

                {/* Heading */}
                <h1 className="text-[28px] sm:text-[36px] md:text-[50px] leading-[1.2] md:leading-[69px] font-heading font-bold tracking-[-0.03em] animate-slide-up">
                    Welcome to Wayond <span className="text-primary">Plus</span>
                </h1>

                {/* Subheading */}
                <p className="text-[18px] sm:text-[24px] md:text-[40px] leading-[1.4] text-white max-w-[900px] tracking-[-0.05em] font-light animate-slide-up delay-100">
                    You will gain access to strategies and tools used by institutions and Forex traders who earn <span className="text-primary font-semibold">Over $1 Million</span> annually, enhancing your competitive edge.
                </p>

                {/* CTA Buttons */}
                <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:justify-center md:gap-6 mt-4 animate-slide-up delay-200 w-full max-w-[520px]">
                    <Link href="/checkout" className="w-full">
                        <PrimaryButton className="h-[48px] md:h-[58px] w-full !rounded-[53px] !p-[5px] hover:scale-105 transition-transform">
                            <span className="text-[14px] md:text-[20px] leading-[22px]">Join Wayond Plus</span>
                        </PrimaryButton>
                    </Link>

                    <Link
                        href="#included"
                        className="w-full group h-[48px] md:h-[58px] rounded-full border border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all flex items-center justify-center px-4 md:px-8"
                    >
                        <span className="font-heading text-[14px] md:text-[20px] leading-[22px] whitespace-nowrap">
                            See what's included
                        </span>
                    </Link>
                </div>
                {/* Video Section */}
                <div
                    className="relative mt-8 md:mt-16 w-full max-w-[1080px] mx-auto aspect-video rounded-[20px] md:rounded-[41.23px] overflow-hidden shadow-2xl group bg-black animate-scale-in delay-300 hover:shadow-primary/20 transition-shadow duration-500"
                    style={{
                        border: "0.5px solid transparent",
                        backgroundImage: "linear-gradient(black, black), linear-gradient(180deg, #FFCD01 0%, #997B01 100%)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                    }}
                    onClick={() => !isPlaying && setIsPlaying(true)}
                >
                    {!isPlaying ? (
                        <>
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/video-placeholder.jpg')" }}>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors cursor-pointer" />
                            </div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="transform group-hover:scale-110 transition-transform">
                                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="34" cy="34" r="33.5" fill="#FFCD01" />
                                        <path d="M47.2 34L27.4 45.4V22.6L47.2 34Z" fill="black" />
                                        <circle cx="34" cy="34" r="33.5" stroke="#FFCD01" />
                                    </svg>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <video
                                ref={videoRef}
                                src="https://wayond.ae//static/wayond/video/lp-video.mp4"
                                className="w-full h-full object-cover cursor-pointer"
                                controls={false}
                                autoPlay
                                onClick={togglePlayPause}
                                loop
                                muted
                            />

                            {/* Play/Pause Button Overlay */}
                            {isPaused ? (
                                <div
                                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                                    onClick={togglePlayPause}
                                >
                                    <div className="transform transition-transform">
                                        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="34" cy="34" r="33.5" fill="#FFCD01" />
                                            <path d="M47.2 34L27.4 45.4V22.6L47.2 34Z" fill="black" />
                                            <circle cx="34" cy="34" r="33.5" stroke="#FFCD01" />
                                        </svg>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity cursor-pointer"
                                    onClick={togglePlayPause}
                                >
                                    <div className="transform transition-transform">
                                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.3333 34H23.3333V14H19.3333V34ZM25.3333 14V34H29.3333V14H25.3333Z" fill="white" />
                                            <circle cx="24.5" cy="24.5" r="24" stroke="white" strokeOpacity="0.3" />
                                        </svg>
                                    </div>
                                </div>
                            )}

                            {/* Custom Seekbar Container */}
                            <div
                                ref={seekbarRef}
                                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 w-[90%] max-w-[739px] cursor-pointer"
                                onClick={handleSeek}
                            >
                                {/* Progress Bar */}
                                <div className="h-[6px] flex-1 bg-white/30 rounded-full relative overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-[#FFCD01] rounded-full transition-all duration-100"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                {/* Time Display */}
                                <span className="text-white text-[14px] font-sans font-medium min-w-[45px]">{currentTime}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>

        </section>
    );
};

export default Hero;
