import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    children: ReactNode;
}

export default function Button({
    variant = 'primary',
    children,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = "px-10 py-5 font-head font-black text-xl uppercase transition-all duration-200 cursor-pointer disabled:opacity-50";

    const variants = {
        primary: "bg-void-black text-paper-white border-none shadow-[10px_10px_0px_#EBFF00] hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[15px_15px_0px_#FF3300] hover:bg-paper-white hover:text-void-black active:translate-x-[5px] active:translate-y-[5px] active:shadow-none",
        outline: "bg-transparent text-void-black border-4 border-void-black hover:bg-hype-red hover:text-paper-white hover:border-hype-red hover:-rotate-3"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
