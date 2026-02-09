import { ReactNode } from 'react';

interface MarqueeProps {
    children: ReactNode;
    className?: string;
    repeat?: number;
}

export default function Marquee({ children, className = '', repeat = 10 }: MarqueeProps) {
    return (
        <div className={`bg-hype-red text-paper-white py-4 overflow-hidden whitespace-nowrap border-b-4 border-void-black font-head font-bold uppercase text-xl ${className}`}>
            <div className="inline-block animate-[scroll-left_10s_linear_infinite]">
                {Array.from({ length: repeat }).map((_, i) => (
                    <span key={i} className="mx-4">
                        {children}
                    </span>
                ))}
            </div>
        </div>
    );
}
