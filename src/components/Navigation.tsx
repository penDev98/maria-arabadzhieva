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
      className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-200 border-b-4 ${scrolled ? 'bg-void-black border-void-black shadow-[0_4px_0_#EBFF00]' : 'bg-paper-white border-void-black'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <a href="#начало" className={`font-head font-black text-lg lg:text-xl tracking-tight transition-colors duration-200 ${scrolled ? 'text-paper-white' : 'text-void-black'}`}>
          RSB
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-head text-sm font-bold uppercase tracking-wide transition-colors duration-200 ease-out hover:text-hype-red group ${scrolled ? 'text-paper-white' : 'text-void-black'}`}
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-hype-red transition-all duration-150 ease-out group-hover:w-full" />
            </a>
          ))}
          {/* Custom small button for nav */}
          <a
            href="#контакт"
            className={`px-6 py-2 bg-acid-yellow text-void-black font-head font-bold text-sm uppercase tracking-tight border-2 border-void-black hover:bg-void-black hover:text-acid-yellow hover:border-acid-yellow transition-all duration-150 ease-out active:scale-[0.98] ${scrolled ? 'shadow-none' : 'shadow-[4px_4px_0px_#0F0F0F]'}`}
          >
            Запази консултация
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 active:scale-95 transition-transform duration-150"
          aria-label="Menu"
        >
          <span className={`block w-6 h-1 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2.5 bg-paper-white' : ''} ${scrolled && !menuOpen ? 'bg-paper-white' : 'bg-void-black'}`} />
          <span className={`block w-6 h-1 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''} ${scrolled ? 'bg-paper-white' : 'bg-void-black'}`} />
          <span className={`block w-6 h-1 transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2.5 bg-paper-white' : ''} ${scrolled && !menuOpen ? 'bg-paper-white' : 'bg-void-black'}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-void-black z-40 flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex flex-col items-center justify-center"
          >
            <span className="block w-8 h-1 bg-paper-white rotate-45 translate-y-0.5" />
            <span className="block w-8 h-1 bg-paper-white -rotate-45 -translate-y-0.5" />
          </button>

          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-paper-white font-head text-2xl font-bold uppercase tracking-wide hover:text-acid-yellow transition-colors duration-150"
              style={{
                animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                animationDelay: `${idx * 50}ms`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#контакт"
            onClick={() => setMenuOpen(false)}
            className="px-8 py-4 bg-acid-yellow text-void-black font-head font-black text-xl uppercase tracking-tight border-4 border-paper-white hover:bg-paper-white hover:text-void-black transition-all duration-150"
            style={{
              animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              animationDelay: `${NAV_LINKS.length * 50}ms`,
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            Запази консултация
          </a>
        </div>
      )}
      <style>{`
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
