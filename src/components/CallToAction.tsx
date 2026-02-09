import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CallToAction() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="контакт" className="bg-[#FF3300] py-32 sm:py-40 lg:py-48 px-6 lg:px-12">
      <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''} max-w-5xl mx-auto text-center`}>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-[#0F0F0F] leading-[0.9] mb-12">
          ГОТОВ ЛИ СИ
          <span className="block">ДА БЪДЕШ</span>
          <span className="block">ВЪЗПРИЕМАН</span>
          <span className="block text-[#FAFAFA]">КАТО ЕКСПЕРТ?</span>
        </h2>
        <a
          href="#"
          className="inline-block px-14 py-7 sm:px-16 sm:py-8 bg-[#0F0F0F] text-[#EBFF00] font-black text-lg sm:text-xl uppercase tracking-tight border-4 border-[#0F0F0F] hover:bg-[#EBFF00] hover:text-[#0F0F0F] transition-all duration-150 ease-out active:scale-[0.98]"
        >
          Запази консултация
        </a>
        <p className="text-[#0F0F0F] text-sm font-bold mt-8 uppercase tracking-wide opacity-80">
          Ограничени часове. Работя лично.
        </p>
      </div>
    </section>
  );
}
