"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SuccessContent = () => {
    const searchParams = useSearchParams();
    const name = searchParams.get("name") || "there";

    return (
        <div className="text-center">
            <h1 className="text-[32px] md:text-[50px] leading-[100%] tracking-[-0.05em] text-white font-bold mb-4">
                Congratulations
            </h1>
            <p className="text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em] text-white/80 mb-12">
                Hey {name} Welcome to Wayond Plus
            </p>

            {/* Success Card */}
            <div className="relative w-full max-w-[800px] mx-auto min-h-[500px] rounded-[30px] overflow-hidden flex flex-col items-center justify-center p-8 md:p-12">
                {/* Glass Background */}
                <div className="absolute inset-0 bg-white/[0.035] backdrop-blur-2xl border-[0.5px] border-[#838280] rounded-[30px]" />
                <div className="absolute inset-0 rounded-[30px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.55)] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Custom Tick SVG */}
                    <div className="mb-8">
                        <svg width="133" height="123" viewBox="0 0 133 123" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[100px] h-auto md:w-[133px]">
                            <path d="M97.9522 18.2161C99.6995 16.1413 99.4444 13.0249 97.2368 11.4487C87.3239 4.37052 75.497 0.373072 63.2477 0.0248373C49.3566 -0.370071 35.7413 3.95128 24.6205 12.2847C13.4997 20.618 5.52901 32.4722 2.00744 45.9152C-1.51413 59.3583 -0.379004 73.5978 5.22784 86.3132C10.8347 99.0286 20.5827 109.47 32.8833 115.937C45.1839 122.403 59.3119 124.513 72.9649 121.922C86.618 119.331 98.9912 112.193 108.068 101.67C116.072 92.3913 121.097 80.9631 122.557 68.8702C122.882 66.1773 120.753 63.8871 118.043 63.7779C115.332 63.6687 113.071 65.7834 112.705 68.4712C111.361 78.3442 107.184 87.6566 100.63 95.2542C93.003 104.096 82.6061 110.094 71.1337 112.271C59.6614 114.448 47.7899 112.675 37.454 107.242C27.1181 101.808 18.9271 93.0344 14.2158 82.3499C9.50448 71.6655 8.55066 59.7004 11.5098 48.4045C14.4689 37.1086 21.1664 27.1478 30.511 20.1455C39.8555 13.1431 51.2962 9.51199 62.9685 9.84382C72.9982 10.129 82.6909 13.3257 90.8869 18.992C93.1182 20.5345 96.2049 20.2909 97.9522 18.2161Z" fill="white" />
                            <path d="M123 19.1973L62.8775 79.6308L35.5491 52.161" stroke="white" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <h2 className="text-[32px] md:text-[48px] leading-[100%] tracking-[-0.05em] text-white font-bold mb-6">
                        Account Created
                    </h2>

                    <p className="text-[16px] md:text-[18px] leading-[26px] tracking-[-0.02em] text-white/70 max-w-[450px] mb-12">
                        Your account has successfully been created.<br />
                        For more details, check your email.<br />
                        Thank you
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
                        <Link
                            href="/"
                            className="w-full md:w-[259px] h-[50px] bg-white text-black text-[17px] font-normal tracking-[-0.05em] rounded-[10px] border-[0.5px] border-white flex items-center justify-center hover:bg-white/90 transition-colors"
                        >
                            Go back to website
                        </Link>
                        <Link
                            href="/dashboard"
                            className="w-full md:w-[259px] h-[50px] bg-[#FFCD01] text-black text-[17px] font-normal tracking-[-0.05em] rounded-[10px] border-[0.5px] border-[#FFCD01] flex items-center justify-center hover:bg-[#FFCD01]/90 transition-colors"
                        >
                            Explore Dashboard
                        </Link>
                    </div>

                    <p className="mt-8 text-white text-[16px] tracking-[-0.05em]">
                        Or check the <Link href="/checkout" className="text-white font-bold underline hover:text-[#FFCD01] transition-colors">subscription plan</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

const SignupSuccessPage = () => {
    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-[20%] left-[-100px] w-[500px] h-[500px] bg-[#FFCD01] rounded-full blur-[250px] opacity-20 mix-blend-screen animate-float" />
                <div className="absolute top-[60%] right-[-150px] w-[500px] h-[500px] bg-[#FFCD01] rounded-full blur-[250px] opacity-20 mix-blend-screen" />
            </div>

            <Header />

            <section className="relative pt-32 pb-24 px-4 md:px-6">
                <div className="container mx-auto max-w-[1280px]">
                    <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
                        <SuccessContent />
                    </Suspense>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default SignupSuccessPage;
