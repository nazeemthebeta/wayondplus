"use client";

import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

interface BonusFeature {
    icon: string;
    text: string;
}

interface Bonus {
    title: string;
    description: string;
    features: BonusFeature[];
}

/**
 * 6 cards (add/edit content as needed)
 * icons are per-feature for cards that have a list
 */
const bonuses: Bonus[] = [
    {
        title: "Proven Trade \n Setups Vault",
        description:
            "Get instant access to real, repeatable trading setups used by profitable traders, complete with entry, exit, and risk logic.",
        features: [
            { icon: "mdi:book-open-variant", text: "No theory." },
            { icon: "mdi:thinking", text: "No guessing." },
            { icon: "mdi:chart-arc", text: "Only execution-ready strategies." },
        ],
    },
    {
        title: "Smart Trade Journal & Analytics",
        description:
            "Track every trade like a professional. Analyze win rate, drawdown, R:R, and mistakes so you stop repeating losing behavior and start compounding gains.",
        features: [],
    },
    {
        title: "Psychology & Discipline Playbook",
        description:
            "Most traders fail because of emotions not strategy. This bonus shows you how to control fear, overtrading, and revenge trading with simple systems used by disciplined traders.",
        features: [],
    },
    {
        title: "Live Market Walkthroughs",
        description:
            "Watch real-time market breakdowns and decision making. See why trades are taken, when to avoid markets, and how professionals think under pressure.",
        features: [],
    },
    {
        title: "Private Trader Community Access",
        description: "Join a focused community no noise, no fake gurus.",
        features: [
            { icon: "carbon:chart-3d", text: "Strategy discussions" },
            { icon: "dashicons:chart-line", text: "Market insights" },
            { icon: "bxs:user", text: "Accountability with serious traders only" },
        ],
    },
    {
        title: "Weekly Trade Plans",
        description:
            "Get a clear weekly plan with key levels, scenarios, and what to avoid—so you execute with structure instead of impulse.",
        features: [],
    },
];

function BonusCard({ bonus }: { bonus: Bonus }) {
    return (
        <div className="relative w-[320px] md:w-[446px] h-[400px] md:h-[514px] shrink-0">
            {/* OUTER GLASS CARD */}
            <div className="absolute inset-0 rounded-[30px] overflow-hidden border border-white/[0.10] bg-white/[0.04] backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.55)] transform-gpu">

                {/* Glow blobs (use screen blend so green shows on dark bg) */}
                <div className="absolute w-[190px] h-[190px] -left-[55px] -top-[55px] rounded-full bg-[#00FF66] opacity-40 blur-[225px] mix-blend-screen" />
                <div className="absolute w-[190px] h-[190px] left-[278px] top-[363px] rounded-full bg-[#00FF66] opacity-35 blur-[225px] mix-blend-screen" />

                {/* Yellow blobs (optional, keep subtle) */}
                <div className="absolute w-[190px] h-[190px] -left-[55px] -top-[55px] rounded-full bg-[#FFCD01] opacity-18 blur-[225px] mix-blend-screen" />
                <div className="absolute w-[190px] h-[190px] left-[278px] top-[363px] rounded-full bg-[#FFCD01] opacity-16 blur-[225px] mix-blend-screen" />

                {/* Extra tint to push the whole card toward greenish light */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(0,255,102,0.18),transparent_55%),radial-gradient(circle_at_85%_85%,rgba(0,255,102,0.14),transparent_60%)]" />

                {/* Keep depth but don’t darken too much */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/20" />
            </div>

            {/* INNER GLASS PANEL (Figma: 346x414 @ 50,50) */}
            <div className="absolute left-[30px] md:left-[50px] top-[30px] md:top-[50px] w-[260px] md:w-[346px] h-[340px] md:h-[414px] rounded-[20px] md:rounded-[30px] bg-white/[0.10] border border-white/[0.12] backdrop-blur-2xl">
                {/* Title (Figma: x=30,y=30; font 30/33) */}
                <h3
                    className="absolute left-[20px] md:left-[30px] top-[20px] md:top-[30px] w-[220px] md:w-[272px] font-heading font-bold text-[22px] md:text-[30px] leading-[26px] md:leading-[33px] tracking-[-0.05em] text-white whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: bonus.title }}
                />

                {/* Description (Figma: x=30,y=116; width 272; 20/25) */}
                <p
                    className="absolute left-[20px] md:left-[30px] top-[90px] md:top-[116px] w-[220px] md:w-[272px] font-sans font-normal text-[14px] md:text-[20px] leading-[18px] md:leading-[25px] tracking-[-0.05em] text-white"
                    dangerouslySetInnerHTML={{ __html: bonus.description }}
                />

                {/* Features block (Figma: x=80,y=186 OR y=236 depending on card) */}
                {bonus.features?.length > 0 && (
                    <div className="absolute left-[30px] md:left-[46px] top-[180px] md:top-[240px] w-[200px] md:w-[270px] space-y-[14px] md:space-y-[22px]">
                        {bonus.features.slice(0, 3).map((item, i) => (
                            <div key={i} className="flex items-start gap-[10px] md:gap-[14px]">
                                <Icon icon={item.icon} className="w-5 h-5 md:w-6 md:h-6 text-white shrink-0 mt-[2px]" />
                                <p
                                    className="font-sans font-normal text-[14px] md:text-[20px] leading-[18px] md:leading-[25px] tracking-[-0.05em] text-white"
                                    dangerouslySetInnerHTML={{ __html: item.text }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

const Bonuses = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [visibleIndices, setVisibleIndices] = useState<number[]>([]);

    useEffect(() => {
        const observerOptions = {
            root: scrollRef.current,
            threshold: 0.5, // Consider visible if at least 50% is shown
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            setVisibleIndices((prev) => {
                const newVisible = [...prev];
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute("data-index"));
                    if (entry.isIntersecting) {
                        if (!newVisible.includes(index)) newVisible.push(index);
                    } else {
                        const idx = newVisible.indexOf(index);
                        if (idx > -1) newVisible.splice(idx, 1);
                    }
                });
                return [...newVisible].sort((a, b) => a - b);
            });
        };

        const observer = new IntersectionObserver(callback, observerOptions);
        const currentRef = scrollRef.current;
        if (currentRef) {
            const children = currentRef.children;
            for (let i = 0; i < children.length; i++) {
                observer.observe(children[i]);
            }
        }

        return () => observer.disconnect();
    }, []);

    const isHoverable = (idx: number) => {
        // Only the first two visible cards from the left are hoverable
        const activeVisible = visibleIndices.slice(0, 2);
        return activeVisible.includes(idx);
    };

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 446 + 32; // Card width + gap
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <section className="bg-black py-20 px-6">
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            <div className="container mx-auto max-w-[1240px] px-4">
                {/* Centered Bonus Texts */}
                <div className="flex flex-col items-center justify-center mb-8 md:mb-10 text-center animate-fade-in">
                    <h2 className="text-white mb-4">
                        Bonuses (Limited-Time Access)
                    </h2>
                    <p className="font-sans font-normal text-[18px] md:text-[24px] leading-tight tracking-[-0.05em] text-gray-400 max-w-[600px] text-center">
                        Enroll now and unlock exclusive bonuses worth more than the program itself.
                    </p>
                </div>

                {/* Horizontal scroll */}
                <div className="relative isolate">
                    <div
                        ref={scrollRef}
                        className="flex gap-6 md:gap-12 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth [-webkit-overflow-scrolling:touch] hide-scrollbar"
                    >
                        {bonuses.map((bonus, idx) => (
                            <div
                                key={idx}
                                data-index={idx}
                                className={`snap-start transition-transform duration-300 transform-gpu will-change-transform ${isHoverable(idx) ? "hover:scale-[1.02]" : ""
                                    }`}
                            >
                                <BonusCard bonus={bonus} />
                            </div>
                        ))}
                    </div>

                    {/* Optional: subtle fade edges (nice UX) */}
                    {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent" /> */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent hidden md:block" />

                    {/* Navigation Buttons - Bottom Right */}
                    <div className="absolute bottom-6 right-0 flex gap-4 z-10 transform-gpu isolate">
                        <button
                            onClick={() => scroll("left")}
                            className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center text-black"
                        >
                            <Icon icon="mdi:chevron-left" className="w-8 h-8" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center text-black"
                        >
                            <Icon icon="mdi:chevron-right" className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bonuses;
