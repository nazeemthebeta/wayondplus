"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PrimaryButton from '@/components/ui/PrimaryButton';

const CheckoutPage = () => {
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto'>('card');

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black flex flex-col">
            <Header />

            <div className="flex-grow pt-24 md:pt-32 px-3 md:px-6 pb-12 md:pb-20">
                <div className="container mx-auto max-w-[1240px] overflow-hidden">

                    {/* Background Eclipse Light */}
                    <div className="absolute -top-24 -left-48 w-[400px] h-[400px] bg-primary/10 blur-[160px] rounded-full pointer-events-none" />

                    {/* Page Title */}
                    <div className="text-center mb-8 md:mb-16 relative z-10">
                        <h1 className="text-2xl md:text-[50px] font-heading font-medium leading-tight">
                            Build Your Trading Edge <br />
                            Through <span className="text-primary font-bold">Strategies, Education, Lifestyle</span>
                        </h1>
                    </div>

                    {/* Glassy Container */}
                    <div className="relative rounded-[20px] md:rounded-[30px] bg-[rgba(17,17,17,0.1)] border border-white/5 backdrop-blur-sm overflow-hidden p-4 md:p-16">
                        {/* Top-right yellow glow */}
                        <div className="absolute w-[190px] h-[190px] -right-[55px] -top-[55px] rounded-full bg-[#FFCD01] blur-[225px] pointer-events-none" />
                        {/* Bottom-left yellow glow */}
                        <div className="absolute w-[190px] h-[190px] -left-[69px] bottom-[100px] rounded-full bg-[#FFCD01] blur-[225px] pointer-events-none" />

                        <div className="relative z-10 flex flex-col lg:flex-row justify-center gap-10 lg:gap-20">
                            {/* Left Column: Membership Details */}
                            <div className="w-full max-w-[450px]">
                                {/* Limited Time Badge */}
                                <div className="flex justify-center">
                                    <div className="bg-white text-black text-[12px] font-bold px-4 py-1.5 rounded-t-lg">
                                        Limited-Time Launch Offer
                                    </div>
                                </div>

                                <div className="bg-[#121212] border border-gray-800 rounded-[16px] md:rounded-[20px] p-4 md:p-8 relative overflow-hidden">
                                    {/* Glow Effect */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-[60px] rounded-full pointer-events-none" />

                                    {/* Title glass container */}
                                    <div className="relative w-full rounded-[16px] md:rounded-[20px] bg-white/[0.04] border border-white/10 backdrop-blur-2xl px-4 md:px-8 py-2 mb-4">
                                        <h2 className="text-[18px] md:text-[24px] font-normal leading-tight">
                                            Wayond <span className="text-primary">Plus</span> <br />
                                            <span className="font-normal">Membership</span>
                                        </h2>
                                    </div>

                                    <div className="flex items-center gap-2 md:gap-4 my-4 md:my-8 relative flex-wrap">
                                        <span className="text-primary text-xl md:text-3xl font-bold relative">
                                            $49.99
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-full h-[2px] bg-red-600 rotate-[-12deg]"></div>
                                            </div>
                                        </span>
                                        <span className="text-primary text-[24px] md:text-[32px] font-bold">→ $19.99</span>
                                    </div>

                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                                        Limited-Time Launch Offer Wayond <span className="text-primary font-bold">Plus</span> Membership. All access, No compromises. <span className="font-bold text-white">Includes:</span>
                                    </p>

                                    <ul className="flex flex-col gap-3">
                                        {[
                                            "Full Wayond Plus library",
                                            "Live & recorded trading sessions",
                                            "Passionz & Strategyz full episodes",
                                            "Exclusive bonuses",
                                            "20-Video Premium Forex Course"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                                <div className="text-white font-bold text-xs">≫</div>
                                                <span>{item.replace('Plus', '')} <span className={item.includes('Plus') ? "text-primary font-bold" : ""}>{item.includes('Plus') ? 'Plus' : ''}</span></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column: Payment & Summary */}
                            <div className="w-full max-w-[500px] flex flex-col gap-6">

                                {/* Payment Options */}
                                <div
                                    className={`cursor-pointer border rounded-[12px] p-5 flex items-center gap-4 transition-all ${paymentMethod === 'card' ? 'border-[#666] bg-[#1a1a1a]' : 'border-[#333] bg-black hover:border-gray-600'}`}
                                    onClick={() => setPaymentMethod('card')}
                                >
                                    <div className={`w-6 h-6 rounded-full border-[2px] flex items-center justify-center ${paymentMethod === 'card' ? 'border-white' : 'border-gray-500'}`}>
                                        {paymentMethod === 'card' && <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(255,205,1,0.5)]" />}
                                    </div>
                                    <span className="text-white text-[16px]">Credit Card/Debit Card.</span>
                                </div>

                                <div
                                    className={`cursor-pointer border rounded-[12px] p-5 flex items-center gap-4 transition-all ${paymentMethod === 'crypto' ? 'border-[#666] bg-[#1a1a1a]' : 'border-[#333] bg-black hover:border-gray-600'}`}
                                    onClick={() => setPaymentMethod('crypto')}
                                >
                                    <div className={`w-6 h-6 rounded-full border-[2px] flex items-center justify-center ${paymentMethod === 'crypto' ? 'border-white' : 'border-gray-500'}`}>
                                        {paymentMethod === 'crypto' && <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(255,205,1,0.5)]" />}
                                    </div>
                                    <span className="text-white text-[16px]">Crypto Payment</span>
                                </div>

                                {/* Order Summary */}
                                <div className="mt-4 flex flex-col gap-3">
                                    <div className="flex justify-between items-center text-white">
                                        <span className="text-[16px]">Item subtotal</span>
                                        <span className="text-[16px]">$49.99/-</span>
                                    </div>
                                    <div className="flex justify-between items-center text-white">
                                        <span className="text-[16px]">Offers (Limited-Time)</span>
                                        <span className="text-[16px]">-$30</span>
                                    </div>

                                    <div className="bg-[#111] border border-[#333] rounded-[8px] p-4 flex justify-between items-center mt-2">
                                        <span className="text-gray-400">Coupon Discounts</span>
                                        <span className="text-white font-bold tracking-wide">"WAYONDPLUS30"</span>
                                    </div>

                                    <div className="flex justify-between items-center text-white mt-4 pt-4 border-t border-gray-800">
                                        <span className="text-[18px]">Total</span>
                                        <span className="text-[24px] font-bold">$19.99/-</span>
                                    </div>
                                </div>

                                {/* Proceed Button */}
                                <div className="mt-4">
                                    <PrimaryButton className="w-full h-[56px] text-[18px]">
                                        Proceed Payment
                                    </PrimaryButton>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                {/* Bottom-right yellow glow near footer */}
                <div className="absolute w-[190px] h-[190px] -right-[69px] -bottom-[100px] rounded-full bg-[#FFCD01] blur-[225px] pointer-events-none" />

            </div>

            <Footer />
        </main>
    );
};

export default CheckoutPage;
