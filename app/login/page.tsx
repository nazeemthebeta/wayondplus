"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Icon } from "@iconify/react";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        emailOrUsername: "",
        password: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.emailOrUsername) {
            newErrors.emailOrUsername = "Email or Username is required";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log("Login submitted:", formData);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
            {/* Background Glow Effects (Based on Ellipse CSS) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {/* Ellipse 5 */}
                <div className="absolute top-[-47px] left-[957px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] mix-blend-screen" />
                {/* Ellipse 1 */}
                <div className="absolute top-[335px] left-[-69px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] mix-blend-screen" />
                {/* Ellipse 4 */}
                <div className="absolute top-[2289px] left-[16px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] mix-blend-screen" />
            </div>

            <Header />

            {/* Main Content */}
            <section className="relative pt-24 md:pt-48 pb-16 px-4 md:px-6">
                <div className="container mx-auto max-w-[1280px]">
                    {/* Welcome Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-[32px] md:text-[40px] leading-[44px] tracking-[-0.05em] text-white font-bold">
                            Hey, Welcome back to <span className="text-[#FFCD01]">Wayond Plus</span>
                        </h1>
                        <p className="mt-4 text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em] text-white">
                            Don't have an account?{" "}
                            <Link href="/signup" className="underline hover:text-[#FFCD01] transition-colors">
                                Sign Up
                            </Link>
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-full lg:w-[500px] h-[435px] relative rounded-[30px] overflow-hidden">
                            {/* Base Glass Layer */}
                            <div className="absolute inset-0 bg-white/[0.035] backdrop-blur-2xl border-[0.5px] border-[#838280] rounded-[30px]" />

                            {/* Inner rim highlight */}
                            <div className="absolute inset-0 rounded-[30px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.55)] pointer-events-none" />

                            {/* Specular sheen (diagonal highlight) */}
                            <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02),transparent_55%)] pointer-events-none" />

                            {/* Content */}
                            <div className="relative z-10 w-full h-full p-6 md:px-[50px] md:py-[40px] flex flex-col justify-center gap-8">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-white text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                                Username / Email Address
                                            </label>
                                            {errors.emailOrUsername && (
                                                <span className="text-red-500 text-[14px] md:text-[16px] tracking-[-0.05em]">
                                                    {errors.emailOrUsername}
                                                </span>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="emailOrUsername"
                                                value={formData.emailOrUsername}
                                                onChange={handleInputChange}
                                                placeholder="Jhon_Doe"
                                                className={`w-full h-[57px] bg-transparent border-[0.5px] rounded-[10px] px-5 text-white text-[16px] tracking-[-0.05em] placeholder:text-white/50 focus:border-[#FFCD01] focus:outline-none transition-colors ${errors.emailOrUsername ? "border-red-500" : "border-[#838280]"
                                                    }`}
                                            />
                                            {errors.emailOrUsername && (
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 bg-red-600 rounded-full">
                                                    <span className="text-white text-[14px] font-bold">!</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

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
                                                name="password"
                                                value={formData.password}
                                                onChange={handleInputChange}
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
                                                    <Icon
                                                        icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                                                        className="w-5 h-5"
                                                    />
                                                    <span className="text-[16px] tracking-[-0.05em]">
                                                        {showPassword ? "Hide" : "Show"}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Links Row */}
                                    <div className="flex flex-col md:flex-row justify-between gap-4 text-[14px] md:text-[16px] tracking-[-0.05em]">
                                        <Link href="/forgot-password" title="Forgot Password" className="text-white hover:text-[#FFCD01] transition-colors">
                                            Forgot Password
                                        </Link>
                                        <p className="text-white">
                                            Don't have an account?{" "}
                                            <Link href="/signup" title="Sign Up" className="underline text-[#FFCD01] hover:text-white transition-colors font-bold">
                                                Sign Up
                                            </Link>
                                        </p>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full max-w-[259px] h-[50px] mx-auto bg-white text-black text-[17px] tracking-[-0.05em] rounded-[10px] border-[0.5px] border-white hover:bg-[#FFCD01] transition-colors flex items-center justify-center font-normal"
                                    >
                                        Sign In
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default LoginPage;
