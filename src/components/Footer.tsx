import { Youtube, Instagram, Facebook, Music } from 'lucide-react';

const SOCIALS = [
  { icon: Youtube, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Music, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-void-black text-paper-white py-16 px-6 lg:px-12 text-center border-t-4 border-void-black font-head">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="inline-block hover:animate-[shake_0.5s] cursor-help">
          <h2 className="text-4xl lg:text-6xl font-black text-acid-yellow mb-4">RSB</h2>
        </div>

        <p className="text-xl font-bold uppercase tracking-tight text-paper-white">
          REAL SOCIAL BROKER © 2026
        </p>

        <div className="flex gap-6">
          {SOCIALS.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              className="w-12 h-12 bg-void-black border-2 border-paper-white flex items-center justify-center hover:bg-hype-red hover:border-hype-red hover:-rotate-6 transition-all duration-200"
            >
              <s.icon size={24} className="text-paper-white" strokeWidth={2.5} />
            </a>
          ))}
        </div>

        <p className="text-sm font-medium text-paper-white opacity-50 uppercase tracking-widest mt-8">
          MADE FOR THE BOLD.
        </p>
      </div>

      <style>{`
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
      `}</style>
    </footer>
  );
}
