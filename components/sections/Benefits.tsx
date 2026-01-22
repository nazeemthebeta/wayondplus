"use client";

import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '../ui/AnimateOnScroll';
const benefits = [
    {
        tag: "Exclusive Webinars",
        line1: "Exclusive Webinars",
        line2: "with Top Traders",
        description: "Wayond Plus presents exclusive weekly and monthly webinars crafted just for our members. Join experienced traders from Dubai as they share invaluable insights, delivering practical analyses and live commentary on current market trends.",
        image: "/images/benefit_exclusive-webinars.jpg"
    },
    {
        tag: "Winning Tools",
        line1: "Exclusive Access to",
        line2: "Trading Tools",
        description: "Access exclusive automated trading tools recommended by Wayond, along with community support and practical resources at special deals. Our proven strategy can help you achieve growth of up to 10x, even with a modest investment.",
        image: "/images/winning-tools.jpg"
    },
    {
        tag: "Market Insights",
        line1: "Exclusive",
        line2: "Pro Traders",
        description: "Discover the powerful strategies, mindset, and execution framework of elite traders in Dubai through engaging live sessions and exclusive video content. Don't miss this opportunity to elevate your trading skills!",
        image: "/images/market-insights.jpg"
    },
    {
        tag: "Exclusive Content",
        line1: "Members Only",
        line2: "Special Episodes",
        description: "Unlock the complete, unedited versions of Wayond’s most popular series: • Passionz: Documentary • Strategyz: Trading Skills & Mindset",
        image: "/images/exclusive-content.jpg"
    },
    {
        tag: "Exclusive Bonuses",
        line1: "Members Only",
        line2: "Rewards",
        description: "Access exclusive bonuses, exciting giveaways, and limited-time offers available exclusively for members. Don't miss out on these incredible perks!",
        image: "/images/exclusive-bonus.jpg"
    }
];

const Benefits = () => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = React.useState(2); // Start middle-ish

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const cardWidth = 381;
            const gap = 76; // gap-[76px] is 76px
            // Calculate position to center the card: 
            // scrollLeft = (cardWidth + gap) * index - (containerWidth / 2) + (cardWidth / 2)
            // But simple snap scrolling is often enough. Let's try basic scrollLeft.
            // Actually, let's just use nice smooth scrolling to a calculated position.

            const itemWidth = cardWidth + gap;
            const containerWidth = scrollRef.current.offsetWidth;
            const scrollPos = (itemWidth * index) - (containerWidth / 2) + (cardWidth / 2);

            scrollRef.current.scrollTo({
                left: scrollPos,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    return (
        <section className="bg-black py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto flex flex-col items-center px-4">
                <AnimateOnScroll animation="fade-in">
                    <h2 className="text-center text-white mb-10 md:mb-16 max-w-[600px] mx-auto">
                        5 Benefits you receive with <span className="text-primary">Wayond Plus:</span>
                    </h2>
                </AnimateOnScroll>

                {/* Horizontal Scroll / Grid Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 md:gap-[76px] overflow-x-auto py-8 md:py-12 px-4 no-scrollbar snap-x snap-mandatory scroll-smooth w-full"
                    onScroll={() => {
                        // Optional: Update active index on scroll
                    }}
                >
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex-none snap-center w-[300px] md:w-[381px] h-[500px] md:h-[596px] relative group">

                            {/* Background Rectangles (Decorations) - Positioned relative to this wrapper */}
                            {/* Top Left - Offset */}
                            <div className="absolute top-[-12px] md:top-[-16px] left-[-12px] md:left-[-16px] w-[120px] md:w-[171px] h-[150px] md:h-[203px] bg-[#FFCD01] rounded-[20px] md:rounded-[30px] z-0 transition-transform group-hover:scale-105 duration-300" />
                            {/* Bottom Right - Offset */}
                            <div className="absolute bottom-[-12px] md:bottom-[-16px] right-[-12px] md:right-[-16px] w-[120px] md:w-[171px] h-[150px] md:h-[203px] bg-[#FFCD01] rounded-[20px] md:rounded-[30px] z-0 transition-transform group-hover:scale-105 duration-300" />

                            {/* Main Card Container */}
                            <div className="w-full h-full bg-[#FFCD01] rounded-[32px] md:rounded-[48px] border-[3px] md:border-[5px] border-white p-4 md:p-5 flex flex-col relative shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-10 transition-all hover:-translate-y-2 hover:shadow-xl duration-300">

                                {/* Image Container */}
                                <div className="relative w-full h-[320px] bg-white rounded-[32px] overflow-hidden shadow-sm flex-shrink-0">
                                    <Image
                                        src={benefit.image}
                                        alt={benefit.tag}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* White Gradient Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_38.89%,#FFFFFF_79.73%)] z-10" />

                                    {/* Tag Overlay - Flat Top, Rounded Bottom ("Pill" half) */}
                                    <div className="absolute top-0 left-[calc(50%-182.5px/2-0.25px)] w-[182.5px] h-[30px] bg-white flex items-center justify-center rounded-b-[24px] z-20">
                                        <span className="text-[15px] font-sans font-semibold text-black tracking-[-0.05em]">{benefit.tag}</span>
                                    </div>

                                    {/* Title Overlay at Bottom of Image */}
                                    <div className="absolute bottom-6 left-0 w-full px-4 z-20 text-center">
                                        <h3 className="text-[30px] text-left font-heading font-normal leading-[1.1] text-black">
                                            {benefit.line1} <br />
                                            {/* @ts-ignore - dynamic data check */}
                                            <span className="font-bold">{benefit.line2}</span>
                                        </h3>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="pt-6 px-2 flex flex-col gap-3 flex-grow text-center">
                                    <p className="text-[18px] font-sans font-normal text-left leading-[1.4] text-black/90 tracking-tight">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation (Functional Segmented Pill) */}
                <div className="flex justify-center items-center mt-6">
                    <div className="flex items-center gap-2">
                        {benefits.map((_, index) => {
                            // Logic to determine style based on active index
                            // If it's the active one: Wide Yellow
                            // If it's neighbor: White
                            // Others: Gray
                            // Wait, the user image just showed 5 segments: Gray-White-Yellow-White-Gray.
                            // If we want it functional, we should probably stick to that pattern around the active index.

                            let className = "w-[30px] h-[8px] bg-[#333] rounded-full cursor-pointer transition-all";
                            if (index === activeIndex) {
                                className = "w-[60px] h-[8px] bg-[#FFCD01] rounded-full shadow-[0_0_8px_rgba(255,205,1,0.5)] cursor-pointer transition-all";
                            } else if (index === activeIndex - 1 || index === activeIndex + 1) {
                                className = "w-[30px] h-[8px] bg-white rounded-full cursor-pointer transition-all";
                            }

                            return (
                                <div
                                    key={index}
                                    className={className}
                                    onClick={() => scrollToIndex(index)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
