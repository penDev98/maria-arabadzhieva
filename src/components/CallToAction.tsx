import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CallToAction() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="контакт" className="bg-hype-red py-32 sm:py-40 lg:py-48 px-6 lg:px-12 border-t-4 border-void-black">
      <div ref={ref} className={`scroll-reveal ${isVisible ? 'visible' : ''} max-w-5xl mx-auto text-center`}>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-void-black leading-[0.9] mb-12 font-head">
          ГОТОВ ЛИ СИ
          <span className="block">ДА БЪДЕШ</span>
          <span className="block">ВЪЗПРИЕМАН</span>
          <span className="block text-paper-white bg-void-black inline-block px-4 rotate-2 mt-2">КАТО ЕКСПЕРТ?</span>
        </h2>
        <a
          href="#"
          className="inline-block px-14 py-7 sm:px-16 sm:py-8 bg-void-black text-acid-yellow font-black text-lg sm:text-xl uppercase tracking-tight border-4 border-void-black hover:bg-acid-yellow hover:text-void-black transition-all duration-150 ease-out active:scale-[0.98] font-head shadow-[10px_10px_0px_#FAFAFA] hover:shadow-[15px_15px_0px_#0F0F0F] hover:-translate-y-1 hover:-translate-x-1"
        >
          Запази консултация
        </a>
        <p className="text-void-black text-sm font-bold mt-8 uppercase tracking-wide opacity-80 font-body">
          Ограничени часове. Работя лично.
        </p>
      </div>
    </section>
  );
}
