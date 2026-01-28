"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import PrimaryButton from "../ui/PrimaryButton";

interface HeaderProps {
    userEmail?: string;
}

const Header = ({ userEmail }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50 py-5 bg-black">
            <div className="container mx-auto px-10 md:px-16 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image src="/wayondplus-logo.svg" alt="Wayond Plus" width={80} height={40} className="h-10 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-12 text-white text-sm">
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
                    <Link href="#terms" className="hover:text-primary transition-colors">Terms & Privacy</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                </nav>

                {/* CTA Buttons & Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:gap-6">
                    <div className="hidden md:flex items-center gap-4">
                        {userEmail ? (
                            <div className="flex items-center gap-3 px-5 h-[40px] border border-white/20 bg-white/5 rounded-[10px] text-white text-[15px] tracking-[-0.05em]">
                                <Icon icon="mdi:account-circle" className="w-5 h-5 text-[#FFCD01]" />
                                <span>{userEmail}</span>
                            </div>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="w-[144px] h-[40px] flex items-center justify-center border border-white rounded-[10px] text-white text-[17px] tracking-[-0.05em] hover:bg-white/10 transition-colors"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/signup"
                                    className="w-[144px] h-[40px] flex items-center justify-center bg-[linear-gradient(270deg,#C92B04_0%,#FFC700_100%)] border border-white rounded-[10px] text-white text-[17px] tracking-[-0.05em] hover:opacity-90 transition-opacity"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content (Simple view) */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 text-white py-4 px-6 flex flex-col gap-4 border-t border-white/10">
                    <Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                    <Link href="#terms" onClick={() => setIsMenuOpen(false)}>Terms & Privacy</Link>
                    <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                        {userEmail ? (
                            <div className="flex items-center gap-3 px-5 h-[45px] border border-white/20 bg-white/5 rounded-[10px] text-white text-[15px] tracking-[-0.05em]">
                                <Icon icon="mdi:account-circle" className="w-5 h-5 text-[#FFCD01]" />
                                <span>{userEmail}</span>
                            </div>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="w-full h-[40px] flex items-center justify-center border border-white rounded-[10px] text-white text-[17px] tracking-[-0.05em]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/signup"
                                    className="w-full h-[40px] flex items-center justify-center bg-[linear-gradient(270deg,#C92B04_0%,#FFC700_100%)] border border-white rounded-[10px] text-white text-[17px] tracking-[-0.05em]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
