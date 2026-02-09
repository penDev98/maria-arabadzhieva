import { useScrollReveal } from '../hooks/useScrollReveal';

const TESTIMONIALS = [
  {
    quote: 'Мария промени начина, по който клиентите ни ни възприемат. Вече не сме просто брокери — ние сме експертите, които търсят.',
    name: 'Д. Петров',
    role: 'Брокер, Варна',
  },
  {
    quote: 'Най-накрая имаме ясно позициониране и разпознаваемост. Съдържанието, което създаваме, привлича точните хора.',
    name: 'С. Иванова',
    role: 'Агенция за недвижими имоти',
  },
  {
    quote: 'Работата с Мария не е маркетинг — това е трансформация на начина, по който мислиш за себе си и бизнеса си.',
    name: 'Н. Георгиев',
    role: 'Инвеститор',
  },
];

function TestimonialCard({ testimonial, delay }: { testimonial: typeof TESTIMONIALS[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'visible' : ''} bg-void-black border-l-4 border-hype-red p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 lg:hover:translate-y-[-4px] lg:hover:border-acid-yellow shadow-[10px_10px_0px_#EBFF00]`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-lg sm:text-xl font-medium text-paper-white leading-relaxed mb-8 font-body">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div>
        <p className="text-acid-yellow font-bold text-base uppercase tracking-tight font-head">
          {testimonial.name}
        </p>
        <p className="text-paper-white opacity-60 text-sm font-medium font-body">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-paper-white py-24 sm:py-32 lg:py-40 border-b-4 border-void-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-void-black mb-16 sm:mb-20 text-center font-head uppercase">
          Отзиви
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <TestimonialCard key={idx} testimonial={t} delay={idx * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
