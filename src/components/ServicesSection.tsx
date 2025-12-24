import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    'DEVELOPMENT',
    'WEBFLOW',
    'DESIGN',
    'DEVOPS',
    'MAINTENANCE & DEPLOYMENT'
  ];

  const stats = [
    { number: '9+', label: 'YEARS OF EXPERIENCE' },
    { number: '300+', label: 'DELIVERED PROJECTS' },
    { number: '200+', label: 'SATISFIED CLIENTS' }
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
      <div className={`fade-in-up ${isVisible ? 'visible' : ''} relative max-w-7xl w-full mx-auto bg-card rounded-lg m-4 p-6 lg:p-8 xl:p-10 shadow-xl border-2 border-border overflow-hidden`} style={{ animationDelay: "0.2s" }}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-6 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-6 h-6 hexagon bg-teal animate-scale-in"></div>
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
                    <span className="text-foreground text-sm font-medium">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats in Triangle Formation */}
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.3s'}}>
            <div className="flex flex-col items-center space-y-6">
              {/* Top Row - 1 Hexagon (Experience) */}
              <div
                className={`text-center fade-in-up hover-scale ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: '0.4s' }}
              >
                <div className="relative inline-block mb-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 hexagon bg-teal flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse">
                    <span className="text-lg sm:text-xl font-black text-foreground mb-1">
                      {stats[0].number}
                    </span>
                    <span className="text-xs font-bold text-foreground text-center leading-tight">
                    EXPERIENCE
                      <br/>
                      OF  YEARS 
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Bottom Row - 2 Hexagons */}
              <div className="flex space-x-4 sm:space-x-6 lg:space-x-8">
                <div
                  className={`text-center fade-in-up hover-scale ${isVisible ? 'visible' : ''}`}
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="relative inline-block mb-3">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 hexagon bg-teal flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse">
                      <span className="text-lg sm:text-xl font-black text-foreground mb-1">
                        {stats[1].number}
                      </span>
                      <span className="text-xs font-bold text-foreground text-center leading-tight">
                        DELIVERED<br/>PROJECTS
                      </span>
                    </div>
                  </div>
                </div>
                
                <div
                  className={`text-center fade-in-up hover-scale ${isVisible ? 'visible' : ''}`}
                  style={{ animationDelay: '0.6s' }}
                >
                  <div className="relative inline-block mb-3">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 hexagon bg-teal flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse">
                      <span className="text-lg sm:text-xl font-black text-foreground mb-1">
                        {stats[2].number}
                      </span>
                      <span className="text-xs font-bold text-foreground text-center leading-tight">
                        SATISFIED<br/>CLIENTS
                      </span>
                    </div>
                  </div>
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