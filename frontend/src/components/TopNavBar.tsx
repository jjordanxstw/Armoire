'use client'

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
      className={`w-full px-6 py-4 fixed top-0 z-50 transition-all duration-300
        ${isScrolled ? `${scrolledBgColor}` : `${defaultBgColor}`}
      `}
    >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Image src="/OutzyLogo.png" alt="logo" width={170} height={0} />
            <div className="space-x-4">
                <a href="#about" className="hover:underline">About</a>
                <a href="#features" className="hover:underline">Features</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </div>
        </div>
    </nav>
  )
}
