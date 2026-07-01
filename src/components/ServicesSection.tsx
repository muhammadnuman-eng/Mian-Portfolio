import { useEffect, useRef, useState } from 'react';

const StatHexagon = ({
  number,
  lines,
  large = false,
  delay = 0,
}: {
  number: string;
  lines: [string, string];
  large?: boolean;
  delay?: number;
}) => (
  <div
    className={`hexagon stat-hexagon-pro flex flex-col items-center justify-center text-center px-2 ${
      large
        ? 'w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40'
        : 'w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36'
    }`}
    style={{ animationDelay: `${delay}s` }}
  >
    <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-none mb-1.5 drop-shadow-sm">
      {number}
    </span>
    <span className="text-[9px] sm:text-[10px] lg:text-xs font-semibold text-white/90 leading-tight uppercase tracking-wider">
      {lines[0]}
      <br />
      {lines[1]}
    </span>
  </div>
);

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    'DEVELOPMENT',
    'WEBFLOW',
    'DESIGN',
    'DEVOPS',
    'MAINTENANCE & DEPLOYMENT',
  ];

  const stats = [
    { number: '10+', lines: ['Years of', 'Experience'] as [string, string] },
    { number: '300+', lines: ['Delivered', 'Projects'] as [string, string] },
    { number: '200+', lines: ['Satisfied', 'Clients'] as [string, string] },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-0 bg-background relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div
        className={`fade-in-up ${isVisible ? 'visible' : ''} relative max-w-7xl w-full mx-auto bg-card rounded-lg m-4 p-6 lg:p-8 xl:p-10 shadow-xl border-2 border-border overflow-hidden`}
        style={{ animationDelay: '0.2s' }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className={`space-y-6 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-6 h-6 hexagon bg-teal animate-scale-in" />
              <h2 className="text-lg font-bold text-foreground">My Services</h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground leading-tight">
                I LIKE <span className="text-teal">MAKING THINGS</span> THAT ARE ENJOYABLE
                <br />
                AND SPECIAL
              </h3>

              <div className="space-y-3">
                {services.map((service, index) => (
                  <div
                    key={service}
                    className={`flex items-center space-x-3 hover-scale fade-in-up ${isVisible ? 'visible' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-foreground text-sm font-medium">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-foreground text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center w-full min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] rounded-xl border border-border/60 bg-muted/10 p-6 sm:p-8">
              <div className="flex flex-col items-center gap-5 sm:gap-6">
                <StatHexagon number={stats[0].number} lines={stats[0].lines} large delay={0} />

                <div className="flex items-center justify-center gap-5 sm:gap-8 lg:gap-10">
                  <StatHexagon number={stats[1].number} lines={stats[1].lines} delay={2.2} />
                  <StatHexagon number={stats[2].number} lines={stats[2].lines} delay={4.4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
