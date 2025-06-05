'use client'

import { jost } from '@/styles/fonts';
import React, { useEffect, useState } from 'react';
import TopMenu from './TopMenu';
import TopRightMenu from './TopRightMenu';

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
      className={`w-full px-6 py-2 fixed top-0 z-50 transition-all duration-300 ${jost.className}
        ${isScrolled ? `${scrolledBgColor}` : `${defaultBgColor}`}
      `}
    >
        <div className="max-w-5xl mx-auto flex justify-between items-center">
            <TopMenu />
            <TopRightMenu />
        </div>
    </nav>
  )
}
