import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import Button from './ui/Button';

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
      className="relative min-h-[85vh] bg-paper-white flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 pt-10 pb-10 lg:pt-0 lg:pb-16 gap-0 lg:gap-20 overflow-hidden border-b-4 border-void-black"
    >
      {/* STICKER ELEMENT */}
      <div className="absolute top-10 right-10 lg:top-[50px] lg:right-[50px] bg-void-black text-paper-white w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full flex items-center justify-center text-center font-head font-bold text-sm lg:text-base rotate-[15deg] animate-[float_3s_ease-in-out_infinite] shadow-[10px_10px_0px_#FF3300] z-20">
        BRAND<br />V 1.0
      </div>

      <div className="w-full lg:w-auto flex justify-center order-1 lg:order-1 lg:mt-16 relative z-10 mb-8 lg:mb-0">
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[9/16] bg-void-black border-4 border-void-black overflow-hidden group shadow-[10px_10px_0px_#EBFF00]">
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
            className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-4 py-2 bg-void-black border-2 border-paper-white text-paper-white text-sm font-bold uppercase tracking-tight hover:bg-hype-red hover:border-hype-red transition-all duration-150 ease-out active:scale-[0.98]"
          >
            {muted ? (
              <>
                <VolumeX size={18} strokeWidth={2.5} />
                <span className="hidden sm:inline">Без звук</span>
                <span className="sm:hidden">Звук</span>
              </>
            ) : (
              <>
                <Volume2 size={18} strokeWidth={2.5} />
                <span className="hidden sm:inline">Пусни</span>
                <span className="sm:hidden">Тихо</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div
        className="max-w-4xl order-2 lg:order-2 text-center lg:text-left z-10"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <h1 className="font-head text-[14vw] lg:text-[8vw] leading-[0.9] uppercase font-black tracking-tighter mb-8 text-void-black">
          REAL<br />
          <span className="bg-acid-yellow px-2 inline-block -skew-x-[10deg]">SOCIAL</span><br />
          BROKER
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-10 font-medium text-void-black leading-relaxed max-w-xl mx-auto lg:mx-0 font-body">
          Изграждам авторитет чрез лично брандиране, съдържание и честни разговори.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
          <Button variant="primary">Давай!</Button>
          <Button variant="outline">Свържи се</Button>
        </div>
      </div>
    </section>
  );
}
