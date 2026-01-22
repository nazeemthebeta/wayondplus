"use client";

import React, { ReactNode } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface AnimateOnScrollProps {
    children: ReactNode;
    animation?: 'fade-in' | 'slide-up' | 'scale-in';
    delay?: number;
    className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
    children,
    animation = 'slide-up',
    delay = 0,
    className = '',
}) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    const animationClasses: Record<string, string> = {
        'fade-in': 'animate-fade-in',
        'slide-up': 'animate-slide-up',
        'scale-in': 'animate-scale-in',
    };

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? animationClasses[animation] : 'opacity-0'}`}
            style={{ animationDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default AnimateOnScroll;
