"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";

const Header = () => {
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
                    <Link href="#content" className="hover:text-primary transition-colors">Content</Link>
                    <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
                    <Link href="#terms" className="hover:text-primary transition-colors">Terms & Privacy</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                </nav>

                {/* CTA Button & Mobile Menu Toggle */}
                <div className="flex items-center gap-4">
                    <Link href="/checkout">
                        <PrimaryButton className="h-[40px] min-w-[150px] md:h-[58px] md:min-w-[222px] !rounded-[53px] !p-[3px] md:!p-[5px]">
                            <span className="text-[14px] md:text-[20px] leading-tight">Join Wayond Plus</span>
                        </PrimaryButton>
                    </Link>

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
                    <Link href="#content" onClick={() => setIsMenuOpen(false)}>Content</Link>
                    <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                    <Link href="#terms" onClick={() => setIsMenuOpen(false)}>Terms & Privacy</Link>
                    <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
