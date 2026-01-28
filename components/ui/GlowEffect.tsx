"use client";

import React from 'react';

interface GlowEffectProps {
    color?: 'yellow' | 'green';
    size?: 'sm' | 'md' | 'lg';
    position: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    };
    opacity?: number;
    animate?: 'pulse' | 'float' | 'none';
    delay?: string;
    className?: string;
}

const GlowEffect: React.FC<GlowEffectProps> = ({
    color = 'yellow',
    size = 'md',
    position,
    opacity = 70,
    animate = 'none',
    delay,
    className = '',
}) => {
    const colorMap = {
        yellow: '#FFCD01',
        green: '#00FF66',
    };

    const sizeMap = {
        sm: { width: '150px', height: '150px', blur: '180px' },
        md: { width: '190px', height: '190px', blur: '225px' },
        lg: { width: '220px', height: '220px', blur: '225px' },
    };

    const animationMap = {
        pulse: 'animate-pulse',
        float: 'animate-float',
        none: '',
    };

    const { width, height, blur } = sizeMap[size];
    const bgColor = colorMap[color];
    const animation = animationMap[animate];
    const opacityValue = opacity / 100;

    return (
        <div
            className={`absolute rounded-full pointer-events-none mix-blend-screen ${animation} ${delay || ''} ${className}`}
            style={{
                width,
                height,
                backgroundColor: bgColor,
                filter: `blur(${blur})`,
                opacity: opacityValue,
                top: position.top,
                bottom: position.bottom,
                left: position.left,
                right: position.right,
            }}
        />
    );
};

export default GlowEffect;
