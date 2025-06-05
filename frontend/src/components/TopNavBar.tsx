'use client'

import { roboto } from '@/styles/fonts';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface TopNavbarProps {
    defaultBgColor?: string,
    scrolledBgColor?: string,
}

export default function TopNavbar({defaultBgColor = 'bg-transparent',scrolledBgColor = 'bg-white'}: TopNavbarProps) {
    
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[]);

    return (
    <nav
      className={`w-full px-6 py-4 fixed top-0 z-50 transition-all duration-300 ${roboto.className}
        ${isScrolled ? `${scrolledBgColor}` : `${defaultBgColor}`}
      `}
    >
        <div className="max-w-5xl mx-auto flex justify-between items-center">
            <div className="flex justify-end items-center bg-color-grey-100 space-x-12">
                <Image src="/ClosifyLogoBlack.png" alt="logo" width={120} height={0} />
                <a href="#about" className="hover:underline">About us</a>
                <a href="#features" className="hover:underline">How it works</a>
                <a href="#contact" className="hover:underline">FAQ</a>
                <a href="#support" className="hover:underline">Support</a>
            </div>
            <div className="space-x-4">
                <a href="#about" className="hover:underline">About</a>
                <a href="#features" className="hover:underline">Features</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </div>
        </div>
    </nav>
  )
}
