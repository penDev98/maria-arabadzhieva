import { Youtube, Instagram, Facebook, Music } from 'lucide-react';

const PLATFORMS = [
  {
    icon: Youtube,
    name: 'YouTube',
    desc: 'Broker Blitz — реални разговори с брокери',
    accent: 'text-hype-red',
    accentBg: 'bg-hype-red',
  },
  {
    icon: Instagram,
    name: 'Instagram',
    desc: 'Кратко. Директно. Без филтри.',
    accent: 'text-acid-yellow',
    accentBg: 'bg-acid-yellow',
  },
  {
    icon: Facebook,
    name: 'Facebook',
    desc: 'Анализи и позиции за пазара',
    accent: 'text-hype-red',
    accentBg: 'bg-hype-red',
  },
  {
    icon: Music,
    name: 'TikTok',
    desc: 'Кратки истини за недвижимите имоти',
    accent: 'text-acid-yellow',
    accentBg: 'bg-acid-yellow',
  },
];

export default function Ecosystem() {
  return (
    <section id="съдържание" className="bg-void-black py-24 sm:py-32 lg:py-40 border-b-4 border-void-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-16 sm:mb-20 text-paper-white text-center font-head">
          НАВСЯКЪДЕ.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {PLATFORMS.map((p, idx) => (
            <a
              key={idx}
              href="#"
              className="group relative bg-void-black border-2 border-paper-white/20 p-8 sm:p-10 flex flex-col items-start gap-6 hover:border-hype-red transition-all duration-200 ease-out lg:hover:translate-y-[-4px] active:scale-[0.98] hover:bg-paper-white/5"
            >
              <p.icon
                size={48}
                strokeWidth={2.5}
                className={`transition-transform duration-200 lg:group-hover:scale-110 ${p.accent}`}
              />
              <div>
                <span className="block text-xl font-black text-paper-white uppercase mb-2 font-head">
                  {p.name}
                </span>
                <span className="block text-sm font-medium text-paper-white opacity-70 leading-snug font-body">
                  {p.desc}
                </span>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-200 ease-out ${p.accentBg}`}
              />
            </a>
          ))}
        </div>

        <div className="border-4 border-acid-yellow p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-6 hover:bg-void-black/50 transition-colors">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-acid-yellow mb-2 font-head">
              BROKER BLITZ
            </h3>
            <p className="text-base sm:text-lg text-paper-white font-medium opacity-80 font-body">
              Седмични прозрения. Без филтри. Чиста стойност.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 px-8 py-4 bg-acid-yellow text-void-black font-bold text-sm uppercase tracking-tight border-4 border-acid-yellow hover:bg-transparent hover:text-acid-yellow transition-all duration-150 ease-out active:scale-[0.98] font-head"
          >
            Гледай сега
          </a>
        </div>
      </div>
    </section>
  );
}
