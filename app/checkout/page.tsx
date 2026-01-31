"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en';

// Map all countries from the library
const allCountries = getCountries().map(countryCode => ({
    name: en[countryCode],
    code: countryCode.toLowerCase(),
    dialCode: `+${getCountryCallingCode(countryCode)}`
})).sort((a, b) => a.name.localeCompare(b.name));

const CheckoutBillingPage = () => {
    const [useLoginInfo, setUseLoginInfo] = useState(false);
    const [isBusiness, setIsBusiness] = useState(true);
    const [formData, setFormData] = useState({
        email: 'jhondoesamplemail@gmail.com',
        fullName: 'Jhon Doe',
        username: 'Jhon_Doe',
        mobileNumber: '+971',
        country: 'United Arab Emirates',
        address: '',
        password: '',
        confirmPassword: '',
        businessName: '',
        vatNumber: '',
        marketingEmails: true,
        agreeTerms: true
    });

    const [isOriginDropdownOpen, setIsOriginDropdownOpen] = useState(false);
    const [originCountry, setOriginCountry] = useState(allCountries.find(c => c.code === "ae") || allCountries[0]);
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black flex flex-col relative overflow-hidden font-sans">
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-[10%] left-[-100px] w-[300px] h-[300px] bg-[#FFCD01] rounded-full blur-[200px] opacity-60" />
                <div className="absolute top-[15%] right-[10%] w-[300px] h-[300px] bg-[#FFCD01] rounded-full blur-[200px] opacity-60" />
                <div className="absolute top-[50%] left-[15%] w-[300px] h-[300px] bg-[#FFCD01] rounded-full blur-[250px] opacity-60" />
                <div className="absolute bottom-0 right-[-100px] w-[300px] h-[300px] bg-[#FFCD01] rounded-full blur-[250px] opacity-60" />
            </div>

            <Header />

            <div className="flex-grow pt-24 md:pt-32 px-4 pb-12 md:pb-20 relative z-10">
                {/* Stepper & Titles */}
                <div className="max-w-[1240px] mx-auto text-center mb-12 relative z-10">
                    <h1 className="text-[32px] md:text-[40px] font-bold text-[#FFCD01] mb-4">
                        Billing & Create Account
                    </h1>
                    <p className="text-white text-[16px] md:text-[18px] mb-8 font-normal opacity-90">
                        Please review the details below before entering payment information.
                    </p>

                    {/* Stepper Visual */}
                    <div className="flex items-center justify-center gap-0">
                        <div className="w-[40px] h-[40px] rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-[18px]">
                            1
                        </div>
                        <div className="w-[80px] h-[2px] bg-red-600/50" />
                        <div className="w-[40px] h-[40px] rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-[18px]">
                            2
                        </div>
                    </div>
                </div>

                {/* Main Glassy Form Container */}
                <div className="relative mx-auto w-full max-w-[850px] rounded-[30px] bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 md:p-12 lg:p-16">
                    <div className="space-y-8">
                        {/* Use Information Toggle */}
                        <div className="flex items-center gap-4 mb-10">
                            <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors ${useLoginInfo ? 'border-[#FFCD01]' : 'border-white/30'}`}
                                onClick={() => setUseLoginInfo(!useLoginInfo)}
                            >
                                {useLoginInfo && <div className="w-3 h-3 bg-[#FFCD01] rounded-full" />}
                            </div>
                            <span className="text-white text-[18px] font-normal">Use information from the login - Jhon Doe</span>
                        </div>

                        {/* Form Fields Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-[18px] flex items-center gap-1">
                                    Email<span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full h-[57px] bg-white/[0.03] border border-white/10 rounded-[10px] px-5 focus:outline-none focus:border-[#FFCD01] text-white/70"
                                />
                            </div>

                            {/* Full Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-[18px] flex items-center gap-1">
                                    Your Full Name<span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full h-[57px] bg-white/[0.03] border border-white/10 rounded-[10px] px-5 focus:outline-none focus:border-[#FFCD01] text-white/70"
                                />
                            </div>

                            {/* Username */}
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-[18px] flex items-center gap-1">
                                    Username<span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="w-full h-[57px] bg-white/[0.03] border border-white/10 rounded-[10px] px-5 focus:outline-none focus:border-[#FFCD01] text-white/70"
                                />
                            </div>

                            {/* Mobile Number */}
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-[18px] flex items-center gap-1">
                                    Mobile Number<span className="text-red-600">*</span>
                                </label>
                                <div className="relative w-full h-[57px] bg-white/[0.03] border border-white/10 rounded-[10px] px-5 flex items-center gap-3">
                                    <PhoneInput
                                        international
                                        defaultCountry="AE"
                                        value={formData.mobileNumber}
                                        onChange={(v) => setFormData(p => ({ ...p, mobileNumber: v || "" }))}
                                        className="phone-input-custom checkout-phone-input flex-1"
                                    />
                                </div>
                            </div>

                            {/* Country/Region */}
                            <div className="flex flex-col gap-2 relative">
                                <label className="text-white text-[18px] flex items-center gap-1">
                                    Country/Region<span className="text-red-600">*</span>
                                </label>
                                <div
                                    onClick={() => setIsOriginDropdownOpen(!isOriginDropdownOpen)}
                                    className="relative w-full h-[57px] bg-white/[0.03] border border-white/10 rounded-[10px] px-5 flex items-center gap-3 cursor-pointer"
                                >
                                    <Icon icon={`circle-flags:${originCountry.code}`} className="w-5 h-5" />
                                    <div className="w-[1px] h-[15px] bg-white/20" />
                                    <span className="text-white/70 text-[16px]">{formData.country}</span>
                                    <Icon icon="mdi:chevron-down" className="ml-auto text-white/50" />
                                </div>

                                {isOriginDropdownOpen && (
                                    <div className="absolute top-[100%] left-0 right-0 mt-2 bg-[#1A1A1A] border border-white/10 rounded-[10px] py-2 z-50 max-h-[250px] overflow-y-auto">
                                        {allCountries.map((c) => (
                                            <div
                                                key={c.code}
                                                className="px-5 py-3 flex items-center gap-3 hover:bg-white/5 cursor-pointer"
                                                onClick={() => {
                                                    setOriginCountry(c);
                                                    setFormData(p => ({ ...p, country: c.name }));
                                                    setIsOriginDropdownOpen(false);
                                                }}
                                            >
                                                <Icon icon={`circle-flags:${c.code}`} className="w-5 h-5" />
                                                <span>{c.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Address */}
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-[18px] flex items-center gap-1">
                                    Address<span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Enter your address."
                                    className="w-full h-[57px] bg-white/[0.03] border border-white/10 rounded-[10px] px-5 focus:outline-none focus:border-[#FFCD01] text-white/70 placeholder:text-white/20"
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-[18px] flex items-center gap-1">
                                    Password<span className="text-red-600">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Enter your password"
                                        className="w-full h-[57px] bg-white/[0.03] border border-white/10 rounded-[10px] px-5 focus:outline-none focus:border-[#FFCD01] text-white/70 placeholder:text-white/20"
                                    />
                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 flex items-center gap-2"
                                    >
                                        <Icon icon={showPassword ? "mdi:eye-off" : "mdi:eye"} className="w-5 h-5" />
                                        <span className="text-[14px]">Hide</span>
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div className="flex flex-col gap-2">
                                <label className="text-white text-[18px] flex items-center gap-1">
                                    Confirm Password<span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    className="w-full h-[57px] bg-white/[0.03] border border-white/10 rounded-[10px] px-5 focus:outline-none focus:border-[#FFCD01] text-white/70 placeholder:text-white/20"
                                />
                            </div>
                        </div>

                        {/* Business Purchase Checkbox */}
                        <div className="flex items-center gap-3 mt-4">
                            <div
                                className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer ${isBusiness ? 'bg-[#FFCD01] border-[#FFCD01]' : 'border-white/30'}`}
                                onClick={() => setIsBusiness(!isBusiness)}
                            >
                                {isBusiness && <Icon icon="mdi:check" className="text-black text-[16px]" />}
                            </div>
                            <span className="text-white text-[16px]">I'm purchasing as business</span>
                        </div>

                        {/* VAT Information (Visible if Business) */}
                        {isBusiness && (
                            <div className="space-y-6 pt-2">
                                <h3 className="text-white text-[20px] font-medium">VAT information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white text-[18px]">Business name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your business name."
                                            className="w-full h-[57px] bg-white/[0.03] border border-white/10 rounded-[10px] px-5 focus:outline-none focus:border-[#FFCD01] text-white placeholder:text-white/20"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white text-[18px]">VAT number</label>
                                        <div className="relative w-full h-[57px] bg-white/[0.03] border border-white/10 rounded-[10px] px-5 flex items-center gap-3">
                                            <Icon icon={`circle-flags:ae`} className="w-5 h-5" />
                                            <div className="w-[1px] h-[15px] bg-white/20" />
                                            <input
                                                type="text"
                                                placeholder="Enter your VAT number"
                                                className="flex-1 bg-transparent focus:outline-none text-white placeholder:text-white/20"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Final Consent Checkboxes */}
                        <div className="space-y-6 pt-6">
                            <div className="flex items-start gap-4">
                                <div
                                    className={`w-5 h-5 rounded border flex-shrink-0 mt-1 cursor-pointer flex items-center justify-center ${formData.marketingEmails ? 'bg-[#FFCD01] border-[#FFCD01]' : 'border-white/30'}`}
                                    onClick={() => setFormData(p => ({ ...p, marketingEmails: !p.marketingEmails }))}
                                >
                                    {formData.marketingEmails && <Icon icon="mdi:check" className="text-black" />}
                                </div>
                                <p className="text-white text-[14px] md:text-[16px] opacity-80 leading-[1.4]">
                                    I want to receive emails about the product, feature updates, events, and marketing promotions.
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div
                                    className={`w-5 h-5 rounded border flex-shrink-0 mt-1 cursor-pointer flex items-center justify-center ${formData.agreeTerms ? 'bg-[#FFCD01] border-[#FFCD01]' : 'border-white/30'}`}
                                    onClick={() => setFormData(p => ({ ...p, agreeTerms: !p.agreeTerms }))}
                                >
                                    {formData.agreeTerms && <Icon icon="mdi:check" className="text-black" />}
                                </div>
                                <p className="text-white text-[14px] md:text-[16px] opacity-80 leading-[1.4]">
                                    By purchasing this subscription and clicking "continue", you agree to the terms of service, auto-renewal terms, electronic document delivery, and acknowledge the privacy policy.
                                </p>
                            </div>
                        </div>

                        {/* Legal Footnote */}
                        <div className="text-center md:text-left pt-2">
                            <p className="text-white text-[14px] opacity-80">
                                By creating an account, you agree to the <Link href="/terms" className="underline font-bold">Terms of use</Link> and <Link href="/privacy" className="underline font-bold">Privacy Policy</Link>.
                            </p>
                        </div>

                        {/* Checkout Button */}
                        <div className="flex justify-center pt-6">
                            <Link href="/billing" className="w-full md:w-[200px]">
                                <button className="w-full h-[55px] bg-white text-black font-bold text-[18px] rounded-[10px] hover:bg-gray-200 transition-colors shadow-lg">
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default CheckoutBillingPage;
