"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Icon } from "@iconify/react";

type ForgotPasswordStep = "request" | "otp" | "reset";

const ForgotPasswordPage = () => {
    const [step, setStep] = useState<ForgotPasswordStep>("request");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};
        if (!email) {
            newErrors.email = "Email or Username is required";
        } else if (email.includes("@") && !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setStep("otp");
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) value = value.slice(-1);
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (errors.otp) {
            setErrors(prev => {
                const n = { ...prev };
                delete n.otp;
                return n;
            });
        }

        if (value && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.some(digit => !digit)) {
            setErrors({ otp: "Please enter the full 6-digit code" });
            return;
        }
        setErrors({});
        setStep("reset");
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};

        if (!passwords.password) {
            newErrors.password = "Password is required";
        } else if (passwords.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        if (passwords.password !== passwords.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        console.log("Password reset successful");
    };

    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-[-47px] left-[957px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] mix-blend-screen" />
                <div className="absolute top-[335px] left-[-69px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] mix-blend-screen" />
                <div className="absolute top-[2289px] left-[16px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] mix-blend-screen" />
            </div>

            <Header />

            <section className="relative pt-24 md:pt-48 pb-16 px-4 md:px-6">
                <div className="container mx-auto max-w-[1280px]">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-[32px] md:text-[40px] leading-[44px] tracking-[-0.05em] font-bold text-white">
                            Reset Your <span className="text-[#FFCD01]">Password</span>
                        </h1>
                        <p className="mt-4 text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em] text-white">
                            {step === "request" && "Enter your mail address to continue."}
                            {step === "otp" && `Enter the code sent to ${email || "jhondoesamplemail@gmail.com"} to reset your password.`}
                            {step === "reset" && "Enter your new password."}
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className={`w-full lg:w-[500px] relative rounded-[30px] overflow-hidden transition-all duration-300 ${step === "reset" ? "min-h-[435px]" : "h-[269px]"}`}>
                            {/* Base Glass Layer */}
                            <div className="absolute inset-0 bg-white/[0.035] backdrop-blur-2xl border-[0.5px] border-[#838280] rounded-[30px]" />

                            {/* Inner rim highlight */}
                            <div className="absolute inset-0 rounded-[30px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.55)] pointer-events-none" />

                            {/* Specular sheen (diagonal highlight) */}
                            <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02),transparent_55%)] pointer-events-none" />

                            <div className="relative z-10 w-full h-full p-6 md:px-[50px] md:py-[40px] flex flex-col justify-center">

                                {/* Step 1: Request OTP */}
                                {step === "request" && (
                                    <form onSubmit={handleEmailSubmit} className="flex flex-col gap-8">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between items-center">
                                                <label className="text-white text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                                    Username / Email Address<span className="text-red-500">*</span>
                                                </label>
                                                {errors.email && (
                                                    <span className="text-red-500 text-[14px] md:text-[16px] tracking-[-0.05em]">
                                                        {errors.email}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                        if (errors.email) {
                                                            setErrors(prev => {
                                                                const n = { ...prev };
                                                                delete n.email;
                                                                return n;
                                                            });
                                                        }
                                                    }}
                                                    placeholder="Jhon Doe"
                                                    className={`w-full h-[57px] bg-transparent border-[0.5px] rounded-[10px] px-5 text-white text-[16px] tracking-[-0.05em] placeholder:text-white/50 focus:border-[#FFCD01] focus:outline-none transition-colors ${errors.email ? "border-red-500" : "border-[#838280]"
                                                        }`}
                                                />
                                                {errors.email && (
                                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 bg-red-600 rounded-full">
                                                        <span className="text-white text-[14px] font-bold">!</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full max-w-[259px] h-[50px] mx-auto bg-white text-black text-[17px] tracking-[-0.05em] rounded-[10px] hover:bg-[#FFCD01] transition-colors flex items-center justify-center font-normal"
                                        >
                                            Send OTP*
                                        </button>
                                    </form>
                                )}

                                {/* Step 2: OTP Verification */}
                                {step === "otp" && (
                                    <form onSubmit={handleOtpSubmit} className="flex flex-col gap-8">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex justify-between items-center px-4">
                                                <label className="text-white text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                                    Enter your OTP
                                                </label>
                                                {errors.otp && (
                                                    <span className="text-red-500 text-[14px] md:text-[16px] tracking-[-0.05em]">
                                                        {errors.otp}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex justify-center gap-2 md:gap-4">
                                                {otp.map((digit, index) => (
                                                    <input
                                                        key={index}
                                                        ref={(el) => { otpRefs.current[index] = el; }}
                                                        type="text"
                                                        value={digit}
                                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                                        className={`w-10 h-12 md:w-14 md:h-14 bg-transparent border-[0.5px] rounded-[10px] text-center text-white text-[20px] focus:border-[#FFCD01] focus:outline-none transition-colors ${errors.otp ? "border-red-500" : "border-[#838280]"
                                                            }`}
                                                        maxLength={1}
                                                    />
                                                ))}
                                            </div>
                                            <button
                                                type="button"
                                                className="text-white text-[14px] hover:text-[#FFCD01] transition-colors text-center mt-2"
                                                onClick={() => {/* Trigger Resend */ }}
                                            >
                                                Haven't got the OTP yet? <span className="font-bold">Resend OTP</span>
                                            </button>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full max-w-[259px] h-[50px] mx-auto bg-white text-black text-[17px] tracking-[-0.05em] rounded-[10px] hover:bg-[#FFCD01] transition-colors flex items-center justify-center font-normal"
                                        >
                                            Verify Code
                                        </button>
                                    </form>
                                )}

                                {/* Step 3: New Password */}
                                {step === "reset" && (
                                    <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-8">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between items-center">
                                                <label className="text-white text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                                    Password<span className="text-red-500">*</span>
                                                </label>
                                                {errors.password && (
                                                    <span className="text-red-500 text-[14px] md:text-[16px] tracking-[-0.05em]">
                                                        {errors.password}
                                                    </span>
                                                )}
                                            </div>
                                            <div className={`relative w-full h-[57px] bg-transparent border-[0.5px] rounded-[10px] px-5 flex items-center transition-colors ${errors.password ? "border-red-500" : "border-[#838280]"
                                                }`}>
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    value={passwords.password}
                                                    onChange={(e) => {
                                                        setPasswords({ ...passwords, password: e.target.value });
                                                        if (errors.password) {
                                                            setErrors(prev => {
                                                                const n = { ...prev };
                                                                delete n.password;
                                                                return n;
                                                            });
                                                        }
                                                    }}
                                                    placeholder="Enter your password"
                                                    className="flex-1 bg-transparent text-white text-[16px] tracking-[-0.05em] placeholder:text-white/50 focus:outline-none"
                                                />
                                                <div className="flex items-center gap-3">
                                                    {errors.password && (
                                                        <div className="flex items-center justify-center w-6 h-6 bg-red-600 rounded-full">
                                                            <span className="text-white text-[14px] font-bold">!</span>
                                                        </div>
                                                    )}
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="flex items-center gap-2 text-white hover:text-[#FFCD01] transition-colors"
                                                    >
                                                        <Icon icon={showPassword ? "mdi:eye-off" : "mdi:eye"} className="w-5 h-5" />
                                                        <span className="text-[16px] tracking-[-0.05em]">{showPassword ? "Hide" : "Show"}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between items-center">
                                                <label className="text-white text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                                    Confirm Password<span className="text-red-500">*</span>
                                                </label>
                                                {errors.confirmPassword && (
                                                    <span className="text-red-500 text-[14px] md:text-[16px] tracking-[-0.05em]">
                                                        {errors.confirmPassword}
                                                    </span>
                                                )}
                                            </div>
                                            <div className={`relative w-full h-[57px] bg-transparent border-[0.5px] rounded-[10px] px-5 flex items-center transition-colors ${errors.confirmPassword ? "border-red-500" : "border-[#838280]"
                                                }`}>
                                                <input
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    value={passwords.confirmPassword}
                                                    onChange={(e) => {
                                                        setPasswords({ ...passwords, confirmPassword: e.target.value });
                                                        if (errors.confirmPassword) {
                                                            setErrors(prev => {
                                                                const n = { ...prev };
                                                                delete n.confirmPassword;
                                                                return n;
                                                            });
                                                        }
                                                    }}
                                                    placeholder="Confirm your password"
                                                    className="flex-1 bg-transparent text-white text-[16px] tracking-[-0.05em] placeholder:text-white/50 focus:outline-none"
                                                />
                                                <div className="flex items-center gap-3">
                                                    {errors.confirmPassword && (
                                                        <div className="flex items-center justify-center w-6 h-6 bg-red-600 rounded-full">
                                                            <span className="text-white text-[14px] font-bold">!</span>
                                                        </div>
                                                    )}
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                        className="flex items-center gap-2 text-white hover:text-[#FFCD01] transition-colors"
                                                    >
                                                        <Icon icon={showConfirmPassword ? "mdi:eye-off" : "mdi:eye"} className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full max-w-[259px] h-[50px] mx-auto bg-white text-black text-[17px] tracking-[-0.05em] rounded-[10px] hover:bg-[#FFCD01] transition-colors flex items-center justify-center font-normal"
                                        >
                                            Save
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ForgotPasswordPage;
