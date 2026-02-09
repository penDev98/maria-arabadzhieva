import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Начало', href: '#начало' },
  { label: 'С какво помагам', href: '#услуги' },
  { label: 'Съдържание', href: '#съдържание' },
  { label: 'Контакт', href: '#контакт' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-[#0F0F0F]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <a href="#начало" className="text-[#FAFAFA] font-black text-lg lg:text-xl tracking-tight" style={{ fontFamily: 'Unbounded, sans-serif' }}>
          RSB
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[#FAFAFA] text-sm font-semibold uppercase tracking-wide transition-colors duration-150 ease-out hover:text-[#EBFF00] group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#EBFF00] transition-all duration-150 ease-out group-hover:w-full" />
            </a>
          ))}
          <a
            href="#контакт"
            className="px-6 py-3 bg-[#EBFF00] text-[#0F0F0F] font-bold text-sm uppercase tracking-tight border-2 border-[#EBFF00] hover:bg-transparent hover:text-[#EBFF00] transition-all duration-150 ease-out active:scale-[0.98]"
          >
            Запази консултация
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 active:scale-95 transition-transform duration-150"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-[#FAFAFA] transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#FAFAFA] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#FAFAFA] transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#0F0F0F] border-t-2 border-[#FF3300] px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#FAFAFA] text-lg font-bold uppercase tracking-wide active:text-[#EBFF00] transition-colors duration-150"
              style={{
                animation: 'slideIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                animationDelay: `${idx * 40}ms`,
                opacity: 0,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#контакт"
            onClick={() => setMenuOpen(false)}
            className="inline-block px-8 py-4 bg-[#EBFF00] text-[#0F0F0F] font-bold text-lg uppercase tracking-tight border-2 border-[#EBFF00] text-center active:scale-[0.98] transition-transform duration-150"
            style={{
              animation: 'slideIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              animationDelay: `${NAV_LINKS.length * 40}ms`,
              opacity: 0,
            }}
          >
            Запази консултация
          </a>
        </div>
      )}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes slideIn {
            from, to {
              opacity: 1;
              transform: none;
            }
          }
        }
      `}</style>
    </nav>
  );
}
