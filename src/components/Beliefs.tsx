import { useScrollReveal } from '../hooks/useScrollReveal';



function BeliefItem({ headline, sub, color, delay }: { headline: string, sub: string, color: string; delay: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'visible' : ''} py-12 sm:py-16 lg:py-20 border-t-2 border-paper-white/10 first:border-t-0`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h2
        className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black leading-[0.95] mb-4 ${color}`}
      >
        {headline}
      </h2>
      <p className="text-base sm:text-lg lg:text-xl font-medium text-paper-white opacity-70 font-body">
        {sub}
      </p>
    </div>
  );
}

export default function Beliefs() {
  return (
    <section className="bg-void-black py-24 sm:py-32 lg:py-40 border-b-4 border-void-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-0 font-head">
          <BeliefItem
            headline="ИСТИНСКИ РАЗГОВОРИ."
            sub="Без брокерски глупости."
            color="text-hype-red"
            delay={0}
          />
          <BeliefItem
            headline="МЕДИЯ, НЕ МАРКЕТИНГ."
            sub="Авторитетът се изгражда чрез съдържание."
            color="text-acid-yellow"
            delay={60}
          />
          <BeliefItem
            headline="АВТОРИТЕТ > ПОСЛЕДОВАТЕЛИ."
            sub="Качество пред суета."
            color="text-hype-red"
            delay={120}
          />
        </div>
      </div>
    </section>
  );
}
