"use client";

import React, { useState } from 'react';
import PrimaryButton from '../ui/PrimaryButton';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Contact = () => {
    const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const [whatsappNumber, setWhatsappNumber] = useState<string>();

    return (
        <section className="bg-black py-12 md:py-20 px-4 md:px-6" id="contact">
            <div className="container mx-auto max-w-[1280px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

                    {/* Left Column: Info */}
                    <div className="flex flex-col gap-6 md:gap-8 animate-slide-up">
                        <h2 className="text-white">
                            Contact Us
                        </h2>

                        <p className="text-white font-normal text-[16px] md:text-[20px] leading-[1.4] max-w-[410px]">
                            Unlock the complete Wayond <span className="text-primary">Plus</span> experience at a special launch price. Limited-time access to <span className="text-primary">premium trading knowledge.</span>
                        </p>

                        {/* Subscribe Newsletter Checkbox */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div
                                className="relative w-[20px] md:w-[22px] h-[20px] md:h-[22px] border-2 border-white rounded-[5px] cursor-pointer flex items-center justify-center transition-all group-hover:border-primary"
                                onClick={() => setSubscribeNewsletter(!subscribeNewsletter)}
                            >
                                {subscribeNewsletter && (
                                    <div className="w-[10px] md:w-[12px] h-[10px] md:h-[12px] bg-primary rounded-[2px] animate-scale-in"></div>
                                )}
                            </div>
                            <label className="text-white font-normal text-[16px] md:text-[20px] leading-[22px] cursor-pointer group-hover:text-primary transition-colors" onClick={() => setSubscribeNewsletter(!subscribeNewsletter)}>
                                Subscribe Newsletter
                            </label>
                        </div>

                        {/* Enquire Today Button */}
                        <div className="mt-4">
                            <PrimaryButton className="h-[52px] md:h-[58px] min-w-[200px] md:min-w-[222px] hover:scale-105 transition-transform">
                                <span className="text-[18px] md:text-[20px] tracking-[-0.05em]">Enquire Today</span>
                            </PrimaryButton>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="flex flex-col gap-5 md:gap-7 w-full max-w-[500px] animate-slide-up delay-200">
                        {/* Full Name */}
                        <div className="relative w-full h-[72px] md:h-[82px] bg-black border border-primary rounded-[10px] px-4 md:px-6 py-3 md:py-4 flex flex-col justify-center transition-all focus-within:shadow-lg focus-within:shadow-primary/20">
                            <label className="text-white font-normal text-[13px] md:text-[15px] leading-[21px] mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Eg: Jhon Doe"
                                className="bg-transparent text-[#565656] font-normal text-[15px] leading-[21px] outline-none placeholder:text-[#565656]"
                            />
                        </div>

                        {/* Email Address */}
                        <div className="relative w-full h-[82px] bg-black border border-primary rounded-[10px] px-6 py-4 flex flex-col justify-center">
                            <label className="text-white font-normal text-[15px] leading-[21px] mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Eg: jhondoe@gmail.com"
                                className="bg-transparent text-[#565656] font-normal text-[15px] leading-[21px] outline-none placeholder:text-[#565656]"
                            />
                        </div>

                        {/* Subject / Inquiry Type */}
                        <div className="relative w-full h-[82px] bg-black border border-primary rounded-[10px] px-6 py-4 flex flex-col justify-center">
                            <label className="text-white font-normal text-[15px] leading-[21px] mb-1">
                                Subject / Inquiry Type
                            </label>
                            <input
                                type="text"
                                placeholder="Eg: General Inquiry"
                                className="bg-transparent text-[#565656] font-normal text-[15px] leading-[21px] outline-none placeholder:text-[#565656]"
                            />
                        </div>

                        {/* Mobile / WhatsApp Number */}
                        <div className="relative w-full min-h-[82px] bg-black border border-primary rounded-[10px] px-4 md:px-6 py-4 flex flex-col justify-center overflow-hidden">
                            <label className="text-white font-normal text-[15px] leading-[21px] mb-2">
                                Mobile / WhatsApp Number
                            </label>
                            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
                                {/* Mobile Number with PhoneInput */}
                                <div className="flex-1 flex items-center gap-2 min-w-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="white" />
                                    </svg>
                                    <PhoneInput
                                        international
                                        defaultCountry="AE"
                                        value={phoneNumber}
                                        onChange={setPhoneNumber}
                                        placeholder="Mobile Number"
                                        className="phone-input-custom flex-1 min-w-0"
                                    />
                                </div>

                                {/* WhatsApp Number with PhoneInput */}
                                <div className="flex-1 flex items-center gap-2 min-w-0">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366" />
                                    </svg>
                                    <PhoneInput
                                        international
                                        defaultCountry="AE"
                                        value={whatsappNumber}
                                        onChange={setWhatsappNumber}
                                        placeholder="WhatsApp Number"
                                        className="phone-input-custom flex-1 min-w-0"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Message Textarea */}
                        <div className="relative w-full h-[150px] bg-black border border-primary rounded-[10px] px-6 py-4">
                            <label className="text-white font-normal text-[15px] leading-[21px] mb-1 block">
                                How we can assist you!
                            </label>
                            <textarea
                                placeholder="Say about your concern or question..."
                                className="w-full h-[90px] bg-transparent text-[#565656] font-normal text-[15px] leading-[21px] outline-none resize-none placeholder:text-[#565656]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
