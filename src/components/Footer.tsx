import { Youtube, Instagram, Facebook, Music } from 'lucide-react';

const SOCIALS = [
  { icon: Youtube, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Music, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t-2 border-[#FAFAFA]/10 py-10 sm:py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="text-center sm:text-left">
          <p
            className="text-lg font-black text-[#FAFAFA] uppercase tracking-tight"
            style={{ fontFamily: 'Unbounded, sans-serif' }}
          >
            Real Social Broker
          </p>
          <p className="text-sm font-medium text-[#FAFAFA] opacity-50 mt-1">
            Мария Арабаджиева
          </p>
        </div>

        <div className="flex gap-4">
          {SOCIALS.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              className="w-10 h-10 bg-transparent border-2 border-[#FAFAFA]/20 flex items-center justify-center hover:border-[#FF3300] hover:bg-[#FF3300] transition-all duration-200"
            >
              <s.icon size={18} className="text-[#FAFAFA]" strokeWidth={2.5} />
            </a>
          ))}
        </div>

        <p className="text-xs font-medium text-[#FAFAFA] opacity-40">
          &copy; 2026 Real Social Broker
        </p>
      </div>
    </footer>
  );
}
