import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [parallaxY, setParallaxY] = useState(0);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
      if (!videoRef.current.muted) {
        videoRef.current.play();
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && window.innerWidth >= 1024) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrolled = window.scrollY;
          setParallaxY(scrolled * 0.03);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="начало"
      ref={containerRef}
      className="relative min-h-screen bg-[#0F0F0F] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 pt-32 pb-16 lg:pt-0 lg:pb-0 gap-10 lg:gap-20 overflow-hidden"
    >
      <div className="w-full lg:w-auto flex justify-center order-1 lg:order-1 lg:mt-16">
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[9/16] bg-[#0F0F0F] border-4 border-[#FF3300] overflow-hidden group">
          <video
            ref={videoRef}
            className="w-full h-full object-cover transition-transform duration-300 ease-out lg:group-hover:scale-[1.01]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'%3E%3Crect width='9' height='16' fill='%230F0F0F'/%3E%3C/svg%3E"
          >
            <source src="/video-converted.mp4" type="video/mp4" />
          </video>

          <button
            onClick={toggleSound}
            className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-4 py-2 bg-[#0F0F0F] border-2 border-[#FAFAFA] text-[#FAFAFA] text-sm font-bold uppercase tracking-tight hover:bg-[#FF3300] hover:border-[#FF3300] transition-all duration-150 ease-out active:scale-[0.98]"
          >
            {muted ? (
              <>
                <VolumeX size={18} strokeWidth={2.5} />
                <span className="hidden sm:inline">Пусни със звук</span>
                <span className="sm:hidden">Звук</span>
              </>
            ) : (
              <>
                <Volume2 size={18} strokeWidth={2.5} />
                <span className="hidden sm:inline">Без звук</span>
                <span className="sm:hidden">Тихо</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div
        className="max-w-2xl order-2 lg:order-2 text-center lg:text-left"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-8 text-[#FAFAFA]">
          <span className="inline-block animate-reveal-line animate-reveal-line-1">
            <span className="text-[#FF3300]">ГЛАСЪТ</span> НА{' '}
          </span>
          <span className="block animate-reveal-line animate-reveal-line-2">МОДЕРНИТЕ</span>
          <span className="block animate-reveal-line animate-reveal-line-3">НЕДВИЖИМИ ИМОТИ</span>
          <span className="block animate-reveal-line animate-reveal-line-4">ВЪВ ВАРНА.</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-10 font-medium text-[#FAFAFA] opacity-90 leading-relaxed max-w-xl mx-auto lg:mx-0">
          Изграждам авторитет чрез лично брандиране, съдържание и честни разговори.
        </p>
        <a
          href="#контакт"
          className="inline-block px-10 py-5 sm:px-12 sm:py-6 bg-[#EBFF00] text-[#0F0F0F] font-black text-base sm:text-lg uppercase tracking-tight border-4 border-[#EBFF00] hover:bg-transparent hover:text-[#EBFF00] transition-all duration-150 ease-out active:scale-[0.98]"
        >
          Запази консултация с мен
        </a>
      </div>
    </section>
  );
}
