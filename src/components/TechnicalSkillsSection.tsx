import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { technicalSkillCategories } from '@/data/technicalSkills';

const categoryStyles: Record<string, { title: string; line: string; chip: string }> = {
  frontend: {
    title: 'text-orange-400',
    line: 'bg-orange-400',
    chip: 'hover:border-orange-400/40 hover:text-orange-300',
  },
  javascript: {
    title: 'text-sky-400',
    line: 'bg-sky-400',
    chip: 'hover:border-sky-400/40 hover:text-sky-300',
  },
  frameworks: {
    title: 'text-blue-400',
    line: 'bg-blue-400',
    chip: 'hover:border-blue-400/40 hover:text-blue-300',
  },
  php: {
    title: 'text-purple-400',
    line: 'bg-purple-400',
    chip: 'hover:border-purple-400/40 hover:text-purple-300',
  },
  backend: {
    title: 'text-emerald-400',
    line: 'bg-emerald-400',
    chip: 'hover:border-emerald-400/40 hover:text-emerald-300',
  },
  ai: {
    title: 'text-violet-400',
    line: 'bg-violet-400',
    chip: 'hover:border-violet-400/40 hover:text-violet-300',
  },
  'python-llm': {
    title: 'text-fuchsia-400',
    line: 'bg-fuchsia-400',
    chip: 'hover:border-fuchsia-400/40 hover:text-fuchsia-300',
  },
  databases: {
    title: 'text-amber-400',
    line: 'bg-amber-400',
    chip: 'hover:border-amber-400/40 hover:text-amber-300',
  },
  mobile: {
    title: 'text-cyan-400',
    line: 'bg-cyan-400',
    chip: 'hover:border-cyan-400/40 hover:text-cyan-300',
  },
  cloud: {
    title: 'text-indigo-400',
    line: 'bg-indigo-400',
    chip: 'hover:border-indigo-400/40 hover:text-indigo-300',
  },
  ecommerce: {
    title: 'text-rose-400',
    line: 'bg-rose-400',
    chip: 'hover:border-rose-400/40 hover:text-rose-300',
  },
  professional: {
    title: 'text-teal',
    line: 'bg-teal',
    chip: 'hover:border-teal/40 hover:text-teal-light',
  },
};

const TechnicalSkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const total = technicalSkillCategories.length;
  const activeCategory = technicalSkillCategories[activeIndex];
  const style = categoryStyles[activeCategory.id] ?? categoryStyles.professional;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    if (isAnimating || index === activeIndex) return;

    setIsAnimating(true);
    setActiveIndex((index + total) % total);
    setTimeout(() => setIsAnimating(false), 280);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-0 bg-background relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-16 right-10 w-24 h-24 hexagon border border-teal/20" />
        <div className="absolute bottom-20 left-8 w-16 h-16 hexagon border border-teal/20" />
      </div>

      <div
        className={`fade-in-up ${isVisible ? 'visible' : ''} relative max-w-7xl w-full mx-auto bg-card rounded-lg m-4 p-6 lg:p-8 xl:p-10 shadow-xl border-2 border-border overflow-hidden`}
        style={{ animationDelay: '0.2s' }}
      >
        <div className={`text-center mb-10 sm:mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center justify-center space-x-4 mb-5">
            <div className="w-8 h-8 hexagon bg-gradient-to-br from-teal to-teal-dark animate-scale-in shadow-lg" />
            <h2 className="text-2xl font-bold text-foreground tracking-wide">Technical Skills</h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-teal to-teal-dark mx-auto rounded-full" />
        </div>

        <div className="rounded-xl border border-border bg-muted/20 overflow-hidden flex flex-col">
          <div className="h-20 flex-shrink-0 flex items-center justify-between gap-4 px-4 sm:px-6 border-b border-border/60 bg-card/50">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="flex-shrink-0 w-10 h-10 rounded-lg border border-border bg-background text-foreground/70 hover:border-teal/40 hover:text-teal transition-all flex items-center justify-center"
              aria-label="Previous category"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 text-center min-w-0">
              <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-1">
                {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </p>
              <h3
                className={`text-base sm:text-lg font-bold leading-tight truncate transition-opacity duration-300 ${style.title} ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {activeCategory.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="flex-shrink-0 w-10 h-10 rounded-lg border border-border bg-background text-foreground/70 hover:border-teal/40 hover:text-teal transition-all flex items-center justify-center"
              aria-label="Next category"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className={`h-0.5 flex-shrink-0 ${style.line}`} />

          <div className="p-5 sm:p-6">
            <div
              className={`transition-all duration-300 ${
                isAnimating ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {activeCategory.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center px-3 py-2 text-sm font-medium text-foreground/85 bg-card border border-border rounded-lg whitespace-nowrap transition-colors ${style.chip}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;
