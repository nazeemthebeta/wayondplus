"use client";

import React from "react";
import Image from "next/image";
import AnimateOnScroll from "../ui/AnimateOnScroll";

const benefits = [
    {
        tag: "Exclusive Webinars",
        line1: "Exclusive Webinars",
        line2: "with <b> Top Traders </b>",
        description:
            "Wayond Plus presents exclusive weekly and monthly webinars crafted just for our members. Join experienced traders from Dubai as they share invaluable insights, delivering practical analyses and live commentary on current market trends.",
        image: "/images/exclusive-webinars.jpg",
    },
    {
        tag: "Winning Tools",
        line1: "Exclusive Access",
        line2: "to <b>Trading Tools</b>",
        description:
            "Access exclusive automated trading tools recommended by Wayond, along with community support and practical resources at special deals. <br/> <br/> Our proven strategy can help you achieve growth of up to 10x, even with a modest investment.",
        image: "/images/winning-tools.jpg",
    },
    {
        tag: "Market Insights",
        line1: "Exclusive",
        line2: "<b>Pro Traders</b>",
        description:
            "Discover the powerful strategies, mindset, and execution framework of elite traders in Dubai through engaging live sessions and exclusive video content. <br /> <br />Don't miss this opportunity to elevate your trading skills!",
        image: "/images/market-insights.jpg",
    },
    {
        tag: "Exclusive Bonuses",
        line1: "Members Only",
        line2: "<b>Rewards</b>",
        description:
            "Access exclusive bonuses, exciting giveaways, and limited-time offers available exclusively for members. <br /> <br /> Don't miss out on these incredible perks!",
        image: "/images/exclusive-bonus.jpg",
    },
    {
        tag: "Exclusive Content",
        line1: "Members Only",
        line2: "<b>Special Episodes</b>",
        description:
            "Unlock the complete, unedited versions of Wayond’s most popular series:<br />•	Passionz: Documentary<br/>• Strategyz: Trading Skills &<br />&emsp;&emsp;&emsp;&emsp;&emsp;Mindset",
        image: "/images/exclusive-content.jpg",
    },
];

const Benefits = () => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);

    const [activeIndex, setActiveIndex] = React.useState(2); // start center-ish
    const activeIndexRef = React.useRef(activeIndex);

    const isDraggingRef = React.useRef(false);
    const dragStartX = React.useRef(0);
    const dragStartScrollLeft = React.useRef(0);

    const [autoPaused, setAutoPaused] = React.useState(false);
    const rafRef = React.useRef<number | null>(null);

    React.useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    const centerToIndex = React.useCallback((index: number, smooth = true) => {
        const container = scrollRef.current;
        const card = cardRefs.current[index];
        if (!container || !card) return;

        const containerWidth = container.offsetWidth;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const targetLeft = cardCenter - containerWidth / 2;

        container.scrollTo({
            left: targetLeft,
            behavior: smooth ? "smooth" : "auto",
        });

        setActiveIndex(index);
    }, []);

    // Center the initial card on first paint
    React.useEffect(() => {
        requestAnimationFrame(() => centerToIndex(activeIndexRef.current, false));
    }, [centerToIndex]);

    // Update active index based on what's closest to center while scrolling
    const handleScroll = React.useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        rafRef.current = requestAnimationFrame(() => {
            const container = scrollRef.current;
            if (!container) return;

            const center = container.scrollLeft + container.offsetWidth / 2;

            let bestIdx = 0;
            let bestDist = Infinity;

            cardRefs.current.forEach((card, idx) => {
                if (!card) return;
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const dist = Math.abs(center - cardCenter);
                if (dist < bestDist) {
                    bestDist = dist;
                    bestIdx = idx;
                }
            });

            if (bestIdx !== activeIndexRef.current) {
                activeIndexRef.current = bestIdx;
                setActiveIndex(bestIdx);
            }
        });
    }, []);

    // Auto-scroll every few seconds (pauses on hover/drag)
    React.useEffect(() => {
        const id = setInterval(() => {
            if (autoPaused || isDraggingRef.current) return;
            const next = (activeIndexRef.current + 1) % benefits.length;
            centerToIndex(next, true);
        }, 4500);

        return () => clearInterval(id);
    }, [autoPaused, centerToIndex]);

    return (
        <section className="bg-black py-6 md:py-24 overflow-hidden">
            <div className="container mx-auto flex flex-col items-center px-4">
                <AnimateOnScroll animation="fade-in">
                    <h2 className="text-center text-white mb-6 md:mb-16 max-w-[600px] mx-auto text-[24px] md:text-[40px]">
                        5 Benefits you receive with{" "}
                        <span className="text-primary">Wayond Plus:</span>
                    </h2>
                </AnimateOnScroll>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    className="
            flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth
            gap-6 md:gap-12 lg:gap-[76px]
            py-4 md:py-12
            w-full
            cursor-grab active:cursor-grabbing
            touch-pan-y
          "
                    style={{ WebkitOverflowScrolling: "touch" }}
                    onScroll={handleScroll}
                    onPointerDown={(e) => {
                        const el = scrollRef.current;
                        if (!el) return;

                        isDraggingRef.current = true;
                        setAutoPaused(true);

                        dragStartX.current = e.clientX;
                        dragStartScrollLeft.current = el.scrollLeft;

                        el.setPointerCapture(e.pointerId);
                    }}
                    onPointerMove={(e) => {
                        const el = scrollRef.current;
                        if (!el || !isDraggingRef.current) return;

                        const dx = e.clientX - dragStartX.current;
                        el.scrollLeft = dragStartScrollLeft.current - dx;
                    }}
                    onPointerUp={() => {
                        isDraggingRef.current = false;
                        setTimeout(() => setAutoPaused(false), 1200);
                    }}
                    onPointerCancel={() => {
                        isDraggingRef.current = false;
                        setTimeout(() => setAutoPaused(false), 1200);
                    }}
                    onMouseEnter={() => setAutoPaused(true)}
                    onMouseLeave={() => setAutoPaused(false)}
                >
                    {/* Left spacer so first card can snap-center */}
                    <div className="flex-none w-[calc((100vw-78vw)/2)] md:w-[calc((100vw-381px)/2)]" />

                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}
                            className="
                flex-none snap-center
                w-[78vw] max-w-[340px]
                md:w-[381px]
                h-[420px] md:h-[596px]
                relative group
              "
                        >
                            {/* Decorations */}
                            <div className="absolute top-[-12px] md:top-[-16px] left-[-12px] md:left-[-16px] w-[120px] md:w-[171px] h-[150px] md:h-[203px] bg-[#FFCD01] rounded-[20px] md:rounded-[30px] z-0 transition-transform group-hover:scale-105 duration-300" />
                            <div className="absolute bottom-[-12px] md:bottom-[-16px] right-[-12px] md:right-[-16px] w-[120px] md:w-[171px] h-[150px] md:h-[203px] bg-[#FFCD01] rounded-[20px] md:rounded-[30px] z-0 transition-transform group-hover:scale-105 duration-300" />

                            {/* Main Card */}
                            <div className="w-full h-full bg-[#FFCD01] rounded-[24px] md:rounded-[48px] border-[2px] md:border-[5px] border-white p-3 md:p-5 flex flex-col relative shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-10 transition-all hover:-translate-y-2 hover:shadow-xl duration-300">
                                {/* Image */}
                                <div className="relative w-full h-[220px] md:h-[320px] bg-white rounded-[20px] md:rounded-[32px] overflow-hidden shadow-sm flex-shrink-0">
                                    <Image
                                        src={benefit.image}
                                        alt={benefit.tag}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 78vw, 381px"
                                    />
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_38.89%,#FFFFFF_79.73%)] z-10" />

                                    {/* Tag */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] md:w-[200px] h-[36px] md:h-[42px] z-20">
                                        <div
                                            className="absolute inset-0 bg-white"
                                            style={{
                                                /* ADJUST THE TAG CORNER RADIUS HERE */
                                                borderRadius: "0 0 12px 12px",
                                                transform: "perspective(100px) rotateX(-35deg)",
                                                transformOrigin: "top",
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center pb-1 md:pb-1.5">
                                            <span
                                                className="text-[12px] md:text-[15px] font-sans font-semibold text-black tracking-[-0.05em]"
                                                dangerouslySetInnerHTML={{ __html: benefit.tag }}
                                            />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="absolute bottom-4 md:bottom-6 left-0 w-full px-3 md:px-4 z-20 text-center">
                                        <h3 className="text-[20px] md:text-[30px] text-left font-heading font-normal leading-[1.1] text-black">
                                            <span dangerouslySetInnerHTML={{ __html: benefit.line1 }} /> <br />
                                            <span
                                                dangerouslySetInnerHTML={{ __html: benefit.line2 }}
                                            />
                                        </h3>
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="pt-3 md:pt-6 px-1 md:px-2 flex flex-col gap-2 md:gap-3 flex-grow text-center overflow-hidden">
                                    <p
                                        className="text-[13px] md:text-[18px] font-sans font-normal text-left leading-[1.3] md:leading-[1.4] text-black/90 tracking-tight line-clamp-4 md:line-clamp-none"
                                        dangerouslySetInnerHTML={{ __html: benefit.description }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Right spacer so last card can snap-center */}
                    <div className="flex-none w-[calc((100vw-78vw)/2)] md:w-[calc((100vw-381px)/2)]" />
                </div>

                {/* Navigation Pills */}
                <div className="flex justify-center items-center mt-6">
                    <div className="flex items-center gap-2">
                        {benefits.map((_, index) => {
                            let className =
                                "w-[30px] h-[8px] bg-[#333] rounded-full cursor-pointer transition-all";
                            if (index === activeIndex) {
                                className =
                                    "w-[60px] h-[8px] bg-[#FFCD01] rounded-full shadow-[0_0_8px_rgba(255,205,1,0.5)] cursor-pointer transition-all";
                            } else if (index === activeIndex - 1 || index === activeIndex + 1) {
                                className =
                                    "w-[30px] h-[8px] bg-white rounded-full cursor-pointer transition-all";
                            }

                            return (
                                <div
                                    key={index}
                                    className={className}
                                    onClick={() => centerToIndex(index, true)}
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
