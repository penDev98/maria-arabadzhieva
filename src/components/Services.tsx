import { useScrollReveal } from '../hooks/useScrollReveal';

const SERVICES = [
  {
    number: '01',
    title: 'ЛИЧНО ПОЗИЦИОНИРАНЕ',
    desc: 'От „поредния брокер" към разпознаваем експерт.',
  },
  {
    number: '02',
    title: 'СТРАТЕГИЯ ЗА СЪДЪРЖАНИЕ',
    desc: 'Ясно послание, което привлича клиенти и възможности.',
  },
  {
    number: '03',
    title: 'МЕДИЙНА ВИДИМОСТ',
    desc: 'Да бъдеш забелязан, цитиран и търсен.',
  },
];

function ServiceItem({ service, delay }: { service: typeof SERVICES[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'visible' : ''} group border-t-4 border-[#0F0F0F] py-10 sm:py-14 lg:py-16 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-16 last:border-b-4 transition-all duration-200 lg:hover:pl-4`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span
        className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#FF3300] leading-none shrink-0 lg:w-32 transition-transform duration-200 lg:group-hover:scale-105"
        style={{ fontFamily: 'Unbounded, sans-serif' }}
      >
        {service.number}
      </span>
      <div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F0F0F] mb-3 leading-tight">
          {service.title}
        </h3>
        <p className="text-base sm:text-lg lg:text-xl font-medium text-[#0F0F0F] opacity-70 max-w-xl">
          {service.desc}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="услуги" className="bg-[#FAFAFA] py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-16 sm:mb-20 text-[#0F0F0F] text-center">
          С КАКВО ПОМАГАМ
        </h2>

        <div className="flex flex-col gap-0">
          {SERVICES.map((s, idx) => (
            <ServiceItem key={idx} service={s} delay={idx * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
