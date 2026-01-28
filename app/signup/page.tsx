"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Icon } from "@iconify/react";

const SignupPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        username: "",
        country: "United Arab Emirates",
        countryCode: "+971",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
        receiveEmails: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const features = [
        "Full Wayond Plus library",
        "Live & recorded trading sessions",
        "Passionz & Strategyz full episodes",
        "Exclusive bonuses",
        "20-Video Premium Forex Course",
    ];

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.fullName) {
            newErrors.fullName = "Full name is required";
        }

        if (!formData.username) {
            newErrors.username = "Username is required";
        }

        if (!formData.mobileNumber) {
            newErrors.mobileNumber = "Mobile number is required";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        // Clear error when user starts typing
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
            // TODO: Implement Supabase signup
            console.log("Form submitted:", formData);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
            {/* Background Glow Effects (Based on Ellipse CSS) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {/* Ellipse 5 */}
                <div className="absolute top-[-47px] left-[957px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] mix-blend-screen" />
                {/* Ellipse 1 */}
                <div className="absolute top-[593px] left-[-69px] w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] mix-blend-screen" />
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
                            Welcome to <span className="text-[#FFCD01]">Wayond Plus</span>
                        </h1>
                        <p className="mt-4 text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em] text-white">
                            Already have an account?{" "}
                            <Link href="/login" className="underline hover:text-[#FFCD01] transition-colors">
                                Log In
                            </Link>
                        </p>
                    </div>

                    {/* Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center items-stretch">
                        {/* Left Panel - Promotional Card */}
                        <div className="w-full lg:w-[530px] rounded-[20px] overflow-hidden flex flex-col"
                            style={{
                                background: "linear-gradient(349.63deg, #C92B04 -1.03%, #FFC700 100%)",
                            }}
                        >
                            {/* Image Section */}
                            <div className="relative w-full h-[600px] md:h-[900px] rounded-[20px] overflow-hidden mx-auto mt-4 md:mt-5 px-4 md:px-5 flex-grow">
                                <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                                    <Image
                                        src="/images/burj-khalifa.jpg"
                                        alt="Burj Khalifa"
                                        fill
                                        className="object-cover mix-blend-luminosity"
                                    />
                                    <div className="absolute inset-0 bg-black/30" />

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
                                        <div>
                                            <p className="text-white text-[32px] md:text-[50px] leading-[100%] tracking-[-0.05em] font-bold">
                                                Wayond Plus
                                            </p>
                                            <p className="text-white text-[32px] md:text-[50px] leading-[100%] tracking-[-0.05em] mt-2 font-bold">
                                                Membership
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <div className="mt-auto">
                                            <p className="text-white text-[24px] md:text-[30px] leading-[100%] tracking-[-0.05em] mb-6 font-normal">
                                                Limited-Time Launch Offer<br />
                                                Wayond <span className="text-[#FFCD01]">Plus</span> Membership.<br />
                                                All access, No compromises.<br />
                                                <span className="font-bold">Includes:</span>
                                            </p>

                                            <ul className="flex flex-col gap-2">
                                                {features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-white">
                                                        <Icon
                                                            icon="mingcute:arrows-left-fill"
                                                            className="w-5 h-5 text-white transform rotate-180 flex-shrink-0"
                                                        />
                                                        <span className="text-[14px] md:text-[15px] leading-[21px] font-normal">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Promo Section */}
                            <div className="p-6 md:p-8 bg-white/10 rounded-[20px] mx-4 md:mx-5 my-4 md:my-5">
                                <p className="text-white text-[40px] md:text-[50px] font-bold leading-[100%] tracking-[-0.05em]">
                                    60% Off
                                </p>

                                <div className="mt-4 bg-white rounded-[10px] px-4 py-3 flex items-center justify-between">
                                    <span
                                        className="text-[16px] md:text-[20px] font-medium tracking-[-0.05em]"
                                        style={{
                                            background: "linear-gradient(270deg, #C92B04 0%, #FFC700 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        Use Code: <span className="font-bold">WAYONDPLUS30</span>
                                    </span>
                                    <button className="text-red-500 hover:scale-110 transition-transform">
                                        <Icon icon="mynaui:copy-solid" className="w-6 h-6" />
                                    </button>
                                </div>

                                <p className="mt-4 text-white text-[16px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                    Unlock the complete Wayond <span className="text-[#FFCD01] font-bold">Plus</span> experience
                                    at a special launch price.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-[500px] min-h-[1234px] relative rounded-[30px] overflow-hidden">
                            {/* Base Glass Layer */}
                            <div className="absolute inset-0 bg-white/[0.035] backdrop-blur-2xl border-[0.5px] border-[#838280] rounded-[30px]" />

                            {/* Inner rim highlight */}
                            <div className="absolute inset-0 rounded-[30px] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.55)] pointer-events-none" />

                            {/* Specular sheen (diagonal highlight) */}
                            <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02),transparent_55%)] pointer-events-none" />

                            <div className="relative z-10 p-6 md:p-[50px]">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                    {/* Email */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-white text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                                Email<span className="text-[#FFCD01]">*</span>
                                            </label>
                                            {errors.email && (
                                                <span className="text-red-500 text-[14px] md:text-[16px] tracking-[-0.05em]">
                                                    {errors.email}
                                                </span>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="jhondoesamplemail@gmail.com"
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

                                    {/* Full Name */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-white text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                                Your Full Name<span className="text-[#FFCD01]">*</span>
                                            </label>
                                            {errors.fullName && (
                                                <span className="text-red-500 text-[14px] md:text-[16px] tracking-[-0.05em]">
                                                    {errors.fullName}
                                                </span>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="Jhon Doe"
                                                className={`w-full h-[57px] bg-transparent border-[0.5px] rounded-[10px] px-5 text-white text-[16px] tracking-[-0.05em] placeholder:text-white/50 focus:border-[#FFCD01] focus:outline-none transition-colors ${errors.fullName ? "border-red-500" : "border-[#838280]"
                                                    }`}
                                            />
                                            {errors.fullName && (
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 bg-red-600 rounded-full">
                                                    <span className="text-white text-[14px] font-bold">!</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Username */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-white text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                                Username<span className="text-[#FFCD01]">*</span>
                                            </label>
                                            {errors.username && (
                                                <span className="text-red-500 text-[14px] md:text-[16px] tracking-[-0.05em]">
                                                    {errors.username}
                                                </span>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleInputChange}
                                                placeholder="Jhon_Doe"
                                                className={`w-full h-[57px] bg-transparent border-[0.5px] rounded-[10px] px-5 text-white text-[16px] tracking-[-0.05em] placeholder:text-white/50 focus:border-[#FFCD01] focus:outline-none transition-colors ${errors.username ? "border-red-500" : "border-[#838280]"
                                                    }`}
                                            />
                                            {errors.username && (
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 bg-red-600 rounded-full">
                                                    <span className="text-white text-[14px] font-bold">!</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Country/Region */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                            Country/Region<span className="text-[#FFCD01]">*</span>
                                        </label>
                                        <div className="relative w-full h-[57px] bg-transparent border-[0.5px] border-[#838280] rounded-[10px] px-5 flex items-center gap-3">
                                            {/* UAE Flag */}
                                            <div className="w-[16px] h-[12px] relative overflow-hidden flex-shrink-0">
                                                <div className="absolute inset-0 top-0 bottom-[66.67%] bg-[#2B9F5A]" />
                                                <div className="absolute inset-0 top-[33.33%] bottom-[33.33%] bg-[#F5F8FB]" />
                                                <div className="absolute inset-0 top-[66.67%] bg-[#272727]" />
                                                <div className="absolute inset-0 right-[68.75%] bg-[#DC251C]" />
                                            </div>
                                            {/* Separator Line */}
                                            <div className="w-[1px] h-[10px] bg-white opacity-50 flex-shrink-0" />
                                            <span className="text-white/50 text-[16px] tracking-[-0.05em] truncate">
                                                Eg: United Arab Emirates
                                            </span>
                                            <span className="ml-auto text-white/50 text-[16px] tracking-[-0.05em]">▼</span>
                                        </div>
                                    </div>

                                    {/* Mobile Number */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-white text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                                Mobile Number<span className="text-[#FFCD01]">*</span>
                                            </label>
                                            {errors.mobileNumber && (
                                                <span className="text-red-500 text-[14px] md:text-[16px] tracking-[-0.05em]">
                                                    {errors.mobileNumber}
                                                </span>
                                            )}
                                        </div>
                                        <div className={`relative w-full h-[57px] bg-transparent border-[0.5px] rounded-[10px] px-5 flex items-center gap-3 transition-colors ${errors.mobileNumber ? "border-red-500" : "border-[#838280]"
                                            }`}>
                                            {/* UAE Flag */}
                                            <div className="w-[16px] h-[12px] relative overflow-hidden flex-shrink-0">
                                                <div className="absolute inset-0 top-0 bottom-[66.67%] bg-[#2B9F5A]" />
                                                <div className="absolute inset-0 top-[33.33%] bottom-[33.33%] bg-[#F5F8FB]" />
                                                <div className="absolute inset-0 top-[66.67%] bg-[#272727]" />
                                                <div className="absolute inset-0 right-[68.75%] bg-[#DC251C]" />
                                            </div>
                                            {/* Separator Line */}
                                            <div className="w-[1px] h-[10px] bg-white opacity-50 flex-shrink-0" />
                                            <span className="text-white/50 text-[16px] tracking-[-0.05em]">▼</span>
                                            <span className="text-white text-[16px] tracking-[-0.05em]">+971</span>
                                            <input
                                                type="tel"
                                                name="mobileNumber"
                                                value={formData.mobileNumber}
                                                onChange={handleInputChange}
                                                placeholder="Type your number here..."
                                                className="flex-1 bg-transparent text-white text-[16px] tracking-[-0.05em] placeholder:text-white/50 focus:outline-none"
                                            />
                                            {errors.mobileNumber && (
                                                <div className="flex items-center justify-center w-6 h-6 bg-red-600 rounded-full flex-shrink-0">
                                                    <span className="text-white text-[14px] font-bold">!</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-white text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                                Password<span className="text-[#FFCD01]">*</span>
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

                                    {/* Confirm Password */}
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-white text-[18px] md:text-[20px] leading-[22px] tracking-[-0.05em]">
                                                Confirm Password<span className="text-[#FFCD01]">*</span>
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
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleInputChange}
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
                                                    <Icon
                                                        icon={showConfirmPassword ? "mdi:eye-off" : "mdi:eye"}
                                                        className="w-5 h-5"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email Preferences Checkbox */}
                                    <div className="flex items-start gap-3">
                                        <div
                                            className={`w-5 h-5 rounded border-[0.5px] flex items-center justify-center flex-shrink-0 mt-0.5 cursor-pointer transition-colors ${formData.receiveEmails
                                                ? "bg-[#FFCD01] border-[#FFCD01]"
                                                : "border-[#838280]"
                                                }`}
                                            onClick={() =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    receiveEmails: !prev.receiveEmails,
                                                }))
                                            }
                                        >
                                            {formData.receiveEmails && (
                                                <Icon icon="mdi:check" className="w-4 h-4 text-black" />
                                            )}
                                        </div>
                                        <label className="text-white text-[14px] md:text-[16px] leading-[22px] tracking-[-0.05em] cursor-pointer"
                                            onClick={() =>
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    receiveEmails: !prev.receiveEmails,
                                                }))
                                            }
                                        >
                                            I want to receive emails about the product, feature updates,
                                            events, and marketing promotions.
                                        </label>
                                    </div>

                                    {/* Terms Agreement */}
                                    <div className="w-full py-5 border-[0.5px] border-dashed border-[#838280] rounded-[20px] text-center">
                                        <p className="text-white text-[14px] md:text-[16px] leading-[20px] tracking-[-0.05em] px-4">
                                            By creating an account, you agree to the{" "}
                                            <Link href="/terms" className="underline hover:text-[#FFCD01] transition-colors">
                                                Terms of use
                                            </Link>{" "}
                                            and{" "}
                                            <Link href="/privacy" className="underline hover:text-[#FFCD01] transition-colors">
                                                Privacy Policy
                                            </Link>
                                            .
                                        </p>
                                    </div>

                                    {/* Already have account */}
                                    <p className="text-white text-[14px] md:text-[16px] leading-[17px] tracking-[-0.05em]">
                                        Already have an account?{" "}
                                        <Link href="/login" className="underline hover:text-[#FFCD01] transition-colors">
                                            Log in
                                        </Link>
                                    </p>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full max-w-[259px] h-[50px] mx-auto bg-white text-black text-[17px] tracking-[-0.05em] rounded-[10px] border-[0.5px] border-white hover:bg-[#FFCD01] transition-colors flex items-center justify-center"
                                    >
                                        Create an Account
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

export default SignupPage;
