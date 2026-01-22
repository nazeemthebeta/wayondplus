import React from "react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const PrimaryButton = ({ children, className, ...props }: PrimaryButtonProps) => {
    // We use rounded-[inherit] on inner elements so if we override rounded on the button, it propagates.
    return (
        <button
            className={`group relative flex items-center justify-center bg-[#D9D9D9] border-[0.7px] border-white rounded-[36.5px] p-[3px] shadow-sm transition-transform active:scale-95 ${className}`}
            {...props}
        >
            <span className="w-full h-full flex items-center justify-center bg-[#FFCD01] border-[0.7px] border-white rounded-[inherit] shadow-[0px_2.75px_2.75px_rgba(0,0,0,0.25)] px-4 py-1 group-hover:shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] transition-shadow">
                <span className="font-heading font-normal text-[inherit] leading-[inherit] text-black tracking-[-0.05em] whitespace-nowrap">
                    {children}
                </span>
            </span>
        </button>
    );
};

export default PrimaryButton;
