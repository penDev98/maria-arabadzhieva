import { Youtube, Instagram, Facebook, Music } from 'lucide-react';

const PLATFORMS = [
  {
    icon: Youtube,
    name: 'YouTube',
    desc: 'Broker Blitz — реални разговори с брокери',
    accent: '#FF3300',
  },
  {
    icon: Instagram,
    name: 'Instagram',
    desc: 'Кратко. Директно. Без филтри.',
    accent: '#EBFF00',
  },
  {
    icon: Facebook,
    name: 'Facebook',
    desc: 'Анализи и позиции за пазара',
    accent: '#FF3300',
  },
  {
    icon: Music,
    name: 'TikTok',
    desc: 'Кратки истини за недвижимите имоти',
    accent: '#EBFF00',
  },
];

export default function Ecosystem() {
  return (
    <section id="съдържание" className="bg-[#0F0F0F] py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-16 sm:mb-20 text-[#FAFAFA] text-center">
          НАВСЯКЪДЕ.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {PLATFORMS.map((p, idx) => (
            <a
              key={idx}
              href="#"
              className="group relative bg-[#0F0F0F] border-2 border-[#FAFAFA]/20 p-8 sm:p-10 flex flex-col items-start gap-6 hover:border-[#FF3300] transition-all duration-200 ease-out lg:hover:translate-y-[-4px] active:scale-[0.98]"
            >
              <p.icon
                size={48}
                strokeWidth={2.5}
                style={{ color: p.accent }}
                className="transition-transform duration-200 lg:group-hover:scale-110"
              />
              <div>
                <span className="block text-xl font-black text-[#FAFAFA] uppercase mb-2">
                  {p.name}
                </span>
                <span className="block text-sm font-medium text-[#FAFAFA] opacity-70 leading-snug">
                  {p.desc}
                </span>
              </div>
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-200 ease-out"
                style={{ backgroundColor: p.accent }}
              />
            </a>
          ))}
        </div>

        <div className="border-2 border-[#EBFF00] p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#EBFF00] mb-2">
              BROKER BLITZ
            </h3>
            <p className="text-base sm:text-lg text-[#FAFAFA] font-medium opacity-80">
              Седмични прозрения. Без филтри. Чиста стойност.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 px-8 py-4 bg-[#EBFF00] text-[#0F0F0F] font-bold text-sm uppercase tracking-tight border-2 border-[#EBFF00] hover:bg-transparent hover:text-[#EBFF00] transition-all duration-150 ease-out active:scale-[0.98]"
          >
            Гледай сега
          </a>
        </div>
      </div>
    </section>
  );
}
