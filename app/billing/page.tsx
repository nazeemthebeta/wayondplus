"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const BillingPage = () => {
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [couponCode, setCouponCode] = useState("WAYONDPLUS30");
    const [isAgreed, setIsAgreed] = useState(true);

    const paymentOptions = [
        {
            id: "crypto",
            title: "Cryptocurrencies",
            icons: ["logos:bitcoin", "logos:ethereum-color"],
            description: "Bitcoin, Ethereum and 10+ more",
        },
        {
            id: "card",
            title: "Credit & Debit Cards",
            icons: ["logos:visa", "logos:mastercard"],
            description: "Visa, Mastercard, Maestro, American Express Etc.",
        },
        {
            id: "paypal",
            title: "PayPal",
            icons: ["logos:paypal"],
            description: "Pay with my PayPal Account.",
        },
        {
            id: "applepay",
            title: "Apple Pay",
            icons: ["logos:apple-pay"],
            description: "Pay with my Apple Pay.",
        },
        {
            id: "googlepay",
            title: "Google Pay",
            icons: ["logos:google-pay"],
            description: "Pay with my Google Pay.",
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-[-47px] left-[957px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] mix-blend-screen opacity-50" />
                <div className="absolute top-[335px] left-[-69px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] mix-blend-screen opacity-50" />
                <div className="absolute top-[800px] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-[#FFCD01] rounded-full blur-[300px] mix-blend-screen opacity-20" />
            </div>

            <Header userEmail="test@wayondplus.com" />

            {/* Main Content */}
            <section className="relative pt-24 md:pt-32 pb-16 px-4 md:px-6">
                <div className="container mx-auto max-w-[1100px]">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-[40px] md:text-[50px] leading-[100%] tracking-[-0.05em] font-normal">
                            Billing <span className="text-[#FFCD01] font-bold">Information</span>
                        </h1>
                        <p className="mt-4 text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em] text-white opacity-80">
                            Please review the details below before entering payment information.
                        </p>

                        {/* Steps Indicator */}
                        <div className="flex items-center justify-center mt-8 gap-0">
                            <div className="w-[35px] h-[35px] rounded-full bg-[#FFCD01] text-black flex items-center justify-center font-bold text-[18px] z-10">
                                1
                            </div>
                            <div className="w-[60px] h-[2px] bg-[#FFCD01]/30 -mx-1" />
                            <div className="w-[35px] h-[35px] rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-[18px] z-10">
                                2
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Left Column: Payment Methods */}
                        <div className="relative rounded-[30px] p-[2px] overflow-hidden min-h-[600px]">
                            {/* Base Glass Layer */}
                            <div className="absolute inset-0 bg-white/[0.035] backdrop-blur-2xl border-[0.5px] border-[#838280] rounded-[30px]" />
                            {/* Inner rim highlight */}
                            <div className="absolute inset-0 rounded-[30px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.55)] pointer-events-none" />
                            {/* Specular sheen */}
                            <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02),transparent_55%)] pointer-events-none" />

                            <div className="relative z-10 p-6 md:p-10">
                                <h2 className="text-[24px] md:text-[28px] font-bold tracking-[-0.05em] mb-8">
                                    Choose Your Payment Method
                                </h2>

                                <div className="flex flex-col gap-4">
                                    {paymentOptions.map((option) => (
                                        <div
                                            key={option.id}
                                            onClick={() => setPaymentMethod(option.id)}
                                            className={`relative cursor-pointer transition-all duration-300 rounded-[15px] p-5 border-[0.5px] ${paymentMethod === option.id
                                                ? "border-[#FFCD01] bg-white/[0.05]"
                                                : "border-[#838280]/50 bg-transparent hover:border-white/30"
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[18px] md:text-[20px] font-bold tracking-[-0.05em]">
                                                            {option.title}
                                                        </span>
                                                        <div className="flex items-center gap-1">
                                                            {option.icons.map((icon, idx) => (
                                                                <Icon key={idx} icon={icon} className="w-5 h-5" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <span className="text-[14px] md:text-[15px] opacity-60 tracking-[-0.02em]">
                                                        {option.description}
                                                    </span>
                                                </div>
                                                <div className={`w-5 h-5 rounded-full border-[2px] flex items-center justify-center ${paymentMethod === option.id ? "border-[#FFCD01]" : "border-[#838280]"
                                                    }`}>
                                                    {paymentMethod === option.id && (
                                                        <div className="w-2.5 h-2.5 bg-[#FFCD01] rounded-full" />
                                                    )}
                                                </div>
                                            </div>


                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Payment Details & Summary */}
                        <div className="relative rounded-[30px] p-[2px] overflow-hidden min-h-[600px]">
                            {/* Base Glass Layer */}
                            <div className="absolute inset-0 bg-white/[0.035] backdrop-blur-2xl border-[0.5px] border-[#838280] rounded-[30px]" />
                            {/* Inner rim highlight */}
                            <div className="absolute inset-0 rounded-[30px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.55)] pointer-events-none" />
                            {/* Specular sheen */}
                            <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02),transparent_55%)] pointer-events-none" />

                            <div className="relative z-10 p-6 md:p-10 flex flex-col h-full">
                                {paymentMethod === 'card' ? (
                                    /* Card Form */
                                    <div className="space-y-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[16px] md:text-[18px] opacity-80 tracking-[-0.05em]">Card Name</label>
                                            <input
                                                type="text"
                                                placeholder="jhondoesamplemail@gmail.com"
                                                className="w-full h-[55px] bg-transparent border-[0.5px] border-[#838280] rounded-[10px] px-5 text-white/50 text-[16px] focus:border-[#FFCD01] focus:outline-none transition-colors"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between items-center">
                                                <label className="text-[16px] md:text-[18px] opacity-80 tracking-[-0.05em]">Card Number</label>
                                                <div className="flex gap-2">
                                                    <Icon icon="logos:visa" className="w-8 h-4 object-contain" />
                                                    <Icon icon="logos:mastercard" className="w-8 h-4 object-contain" />
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Jhon Doe"
                                                className="w-full h-[55px] bg-transparent border-[0.5px] border-[#838280] rounded-[10px] px-5 text-white/50 text-[16px] focus:border-[#FFCD01] focus:outline-none transition-colors"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[16px] md:text-[18px] opacity-80 tracking-[-0.05em]">Expiry Date</label>
                                                <input
                                                    type="text"
                                                    placeholder="MM / YY"
                                                    className="w-full h-[55px] bg-transparent border-[0.5px] border-[#838280] rounded-[10px] px-5 text-white/50 text-[16px] focus:border-[#FFCD01] focus:outline-none transition-colors text-center"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label className="text-[16px] md:text-[18px] opacity-80 tracking-[-0.05em]">Security code</label>
                                                <input
                                                    type="text"
                                                    placeholder="CVV"
                                                    className="w-full h-[55px] bg-transparent border-[0.5px] border-[#838280] rounded-[10px] px-5 text-white/50 text-[16px] focus:border-[#FFCD01] focus:outline-none transition-colors text-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    /* Other Payment Methods Header */
                                    <div className="flex flex-col items-center justify-center py-10 gap-6">
                                        <div className="flex items-center gap-4">
                                            {paymentOptions.find(o => o.id === paymentMethod)?.icons.map((icon, idx) => (
                                                <Icon key={idx} icon={icon} className="w-16 h-16" />
                                            ))}
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-[24px] font-bold tracking-tight">
                                                Pay with {paymentOptions.find(o => o.id === paymentMethod)?.title}
                                            </h3>
                                            <p className="text-white/60 mt-2">
                                                You will be redirected to complete your purchase securely.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="w-full h-[0.5px] bg-white/10 my-8" />

                                {/* Summary */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-[16px] md:text-[18px]">
                                        <span className="opacity-80">Item subtotal</span>
                                        <span className="font-bold">$49.99/-</span>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-[16px] md:text-[18px] opacity-80">Coupon</label>
                                        <div className="flex gap-3">
                                            <input
                                                type="text"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                placeholder="Enter coupon"
                                                className="flex-1 h-[45px] bg-transparent border-[0.5px] border-[#838280] rounded-[10px] px-4 text-white/50 text-[14px] focus:border-[#FFCD01] focus:outline-none transition-colors"
                                            />
                                            <button className="h-[45px] px-6 bg-[#FFCD01] text-black rounded-[10px] font-bold text-[14px] hover:opacity-90 transition-opacity">
                                                Applied
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center text-[16px] md:text-[18px]">
                                        <span className="opacity-80">Offers (Limited-Time)</span>
                                        <span className="text-white">-$30</span>
                                    </div>

                                    <div className="flex justify-between items-center text-[20px] md:text-[24px] pt-2">
                                        <span className="font-bold">Total</span>
                                        <span className="font-bold text-[#FFCD01]">$19.99</span>
                                    </div>
                                </div>

                                {/* Agreement Checkbox */}
                                <div className="mt-8 flex gap-3">
                                    <div
                                        onClick={() => setIsAgreed(!isAgreed)}
                                        className="mt-1 w-5 h-5 rounded-[4px] border-[0.5px] border-[#838280] flex items-center justify-center cursor-pointer bg-transparent"
                                    >
                                        {isAgreed && <Icon icon="mdi:check" className="text-[#FFCD01] w-4 h-4" />}
                                    </div>
                                    <p className="text-[12px] md:text-[13px] opacity-70 leading-relaxed">
                                        By purchasing this subscription and clicking "continue", you agree to the terms of service, auto-renewal terms, electronic document delivery, and acknowledge the privacy policy.
                                    </p>
                                </div>

                                <button
                                    onClick={() => router.push("/payment-success")}
                                    className="mt-8 w-full max-w-[300px] h-[55px] mx-auto bg-white text-black text-[17px] font-bold rounded-[12px] hover:bg-[#FFCD01] transition-colors flex items-center justify-center capitalize"
                                >
                                    {paymentMethod === 'card' ? 'Make Payment' : `Pay by ${paymentMethod}`}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BillingPage;
