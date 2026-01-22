"use client";

import React, { useState } from 'react';

const faqs = [
    {
        question: "What exactly is Wayond Plus?",
        answer: "Wayond Plus is a premium, results-driven trading membership built for traders who are serious about winning. You get access to institutional-grade strategies, real execution logic, and professional frameworks used by traders who operate at the highest level—not retail guesswork."
    },
    {
        question: "Who should join Wayond Plus?",
        answer: "Wayond Plus is for traders who are done wasting time on random strategies and hype. If you want clear execution rules, professional structure, consistency instead of luck, and trading as a serious income skill—then Wayond Plus is built for you."
    },
    {
        question: "Is Wayond Plus beginner-friendly?",
        answer: "This is not a \"get rich quick\" or basic beginner course. Wayond Plus is designed for traders who already understand the basics and now want to trade like professionals, with discipline, precision, and repeatable systems."
    },
    {
        question: "Which markets does Wayond Plus focus on?",
        answer: "Wayond Plus focuses primarily on Forex, using institutional concepts that also apply to indices and other high-liquidity markets—so you're learning skills that scale across markets."
    },
    {
        question: "What do I actually get inside Wayond Plus?",
        answer: "You get real tools, real logic, and real execution: proven, repeatable trading strategies, live & recorded professional sessions, high-quality market breakdowns, risk management systems used by serious traders, and continuous updates as market conditions evolve. No fluff. No recycled content. Only what works."
    },
    {
        question: "Will these strategies guarantee profits?",
        answer: "There are no guarantees in trading—and anyone promising that is lying. What Wayond Plus gives you is something far more valuable: a professional edge, risk control, and decision-making frameworks that allow skilled traders to perform consistently over time."
    },
    {
        question: "Why pay for Wayond Plus when free content exists on YouTube?",
        answer: "Free content is designed for views, not results. Wayond Plus is structured, focused, and execution-based—built to help you apply, not just watch. If free content worked, most traders would already be profitable."
    },
    {
        question: "Can I access Wayond Plus anywhere?",
        answer: "Yes. You get full access on desktop, tablet, and mobile—so you can study, review, and execute wherever you trade."
    },
    {
        question: "Is this a subscription or a one-time payment?",
        answer: "Wayond Plus is a membership subscription, giving you continuous access to new strategies, updates, and premium resources. Current pricing is limited-time and may increase without notice."
    },
    {
        question: "What if this isn't right for me?",
        answer: "All terms, conditions, and refund policies are clearly outlined before purchase. We value transparency—review them before joining."
    },
    {
        question: "How do I get support after joining?",
        answer: "Members receive direct access to Wayond support through the platform and official channels. If you're inside Wayond Plus, you're not trading alone."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black py-12 md:py-20 px-4">
            <div className="container mx-auto max-w-[1240px]">
                <h2 className="text-center text-white mb-10 md:mb-16 animate-fade-in">
                    Frequently Asked Question
                </h2>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-[1000px] mx-auto items-start">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col gap-6 w-full">
                        {faqs.filter((_, index) => index % 2 === 0).map((faq, idx) => {
                            const index = idx * 2;
                            return (
                                <div key={index} className="bg-[#1B1B1B] rounded-[4.91px] overflow-hidden">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-start gap-6 p-6 text-left hover:bg-[#222222] transition-colors"
                                    >
                                        {/* Icon on the left */}
                                        <div className="flex-shrink-0 mt-1">
                                            {openIndex === index ? (
                                                <div className="w-[16px] h-[2px] bg-[#FFCD01] opacity-80 rounded-[20px]"></div>
                                            ) : (
                                                <div className="relative w-[16px] h-[16px] flex items-center justify-center">
                                                    <div className="absolute w-[16px] h-[2px] bg-white opacity-80 rounded-[20px]"></div>
                                                    <div className="absolute w-[2px] h-[16px] bg-white opacity-80 rounded-[20px]"></div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Question text */}
                                        <div className="flex-1">
                                            <h3 className="text-white text-[20px] leading-[130%] opacity-88 font-normal">
                                                {faq.question}
                                            </h3>
                                        </div>
                                    </button>

                                    <div
                                        className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} grid`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="pl-[70px] pr-6 pb-6 text-white text-[15px] leading-[140%] opacity-70 font-normal">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col gap-6 w-full">
                        {faqs.filter((_, index) => index % 2 === 1).map((faq, idx) => {
                            const index = idx * 2 + 1;
                            return (
                                <div key={index} className="bg-[#1B1B1B] rounded-[4.91px] overflow-hidden">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-start gap-6 p-6 text-left hover:bg-[#222222] transition-colors"
                                    >
                                        {/* Icon on the left */}
                                        <div className="flex-shrink-0 mt-1">
                                            {openIndex === index ? (
                                                <div className="w-[22px] h-[3px] bg-[#FFCD01] opacity-80 rounded-[20px]"></div>
                                            ) : (
                                                <div className="relative w-[22px] h-[22px] flex items-center justify-center">
                                                    <div className="absolute w-[22px] h-[3px] bg-white opacity-80 rounded-[20px]"></div>
                                                    <div className="absolute w-[3px] h-[22px] bg-white opacity-80 rounded-[20px]"></div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Question text */}
                                        <div className="flex-1">
                                            <h3 className="text-white text-[20px] leading-[130%] opacity-88 font-normal">
                                                {faq.question}
                                            </h3>
                                        </div>
                                    </button>

                                    <div
                                        className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} grid`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="pl-[70px] pr-6 pb-6 text-white text-[15px] leading-[140%] opacity-70 font-normal">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
