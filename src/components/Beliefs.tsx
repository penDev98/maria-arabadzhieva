import { useScrollReveal } from '../hooks/useScrollReveal';

const BELIEFS = [
  {
    headline: 'ИСТИНСКИ РАЗГОВОРИ.',
    sub: 'Без брокерски глупости.',
    color: '#FF3300',
  },
  {
    headline: 'МЕДИЯ, НЕ МАРКЕТИНГ.',
    sub: 'Авторитетът се изгражда чрез съдържание.',
    color: '#EBFF00',
  },
  {
    headline: 'АВТОРИТЕТ > ПОСЛЕДОВАТЕЛИ.',
    sub: 'Качество пред суета.',
    color: '#FF3300',
  },
];

function BeliefItem({ belief, delay }: { belief: typeof BELIEFS[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'visible' : ''} py-12 sm:py-16 lg:py-20 border-t-2 border-[#FAFAFA]/10 first:border-t-0`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h2
        className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black leading-[0.95] mb-4"
        style={{ color: belief.color }}
      >
        {belief.headline}
      </h2>
      <p className="text-base sm:text-lg lg:text-xl font-medium text-[#FAFAFA] opacity-70">
        {belief.sub}
      </p>
    </div>
  );
}

export default function Beliefs() {
  return (
    <section className="bg-[#0F0F0F] py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-0">
          {BELIEFS.map((belief, idx) => (
            <BeliefItem key={idx} belief={belief} delay={idx * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
