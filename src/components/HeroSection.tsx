import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Send, Check } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Smooth fade-in animation on load
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Mobile Hero Section */}
      <div className="lg:hidden">
        <section className="bg-background relative overflow-hidden">
          <div className="bg-card rounded-xl m-4 p-6 space-y-6 shadow-xl border-2 border-border overflow-hidden">
            {/* Mobile Layout - Stack vertically */}
            <div className="flex flex-col items-center space-y-6">
              {/* Left Content - Centered */}
              <div className="flex flex-col justify-center space-y-6 flex-1 text-center">
              {/* Introduce Label */}
              <button className="flex items-center gap-2 rounded-lg px-4 py-2 bg-muted/30 hover:bg-muted/50 transition-all duration-300 w-fit mx-auto">
                <div className="w-0.5 h-4 bg-teal"></div>
                <Home className="w-4 h-4 text-teal" />
                <span className="text-teal text-xs font-semibold uppercase tracking-wider">INTRODUCE</span>
              </button>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight">
                  I Craft The
                </h1>
                <h1 className="text-3xl sm:text-4xl font-black text-teal leading-tight">
                  Digital Landscape
                </h1>
              </div>

              {/* Description */}
              <p className="text-foreground/70 text-base leading-relaxed max-w-md px-2">
                I am a <span className="font-bold text-foreground">Senior Full Stack Developer</span> at heart and, i create features that are best suited for the job at hand.
              </p>

              {/* Availability Status */}
              <div className="flex flex-col gap-2 px-2">
                <div className="flex items-center gap-2 text-foreground/70 justify-center">
                  <Check className="w-5 h-5 text-teal" />
                  <span>Available for work</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70 justify-center">
                  <Check className="w-5 h-5 text-teal" />
                  <span>Full Time Job</span>
                </div>
              </div>

              {/* Hire Me Button */}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-teal hover:bg-teal-dark text-white font-semibold px-6 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 text-sm"
              >
                <Send className="w-4 h-4" />
                HIRE ME
              </Button>
              </div>

              {/* Trusted Companies */}
              <div className="space-y-4 w-full">
                <p className="text-foreground/70 text-sm text-center">Trusted companies</p>
                <div className="relative w-full overflow-hidden">
                  <div className="flex items-center gap-6 animate-scroll-left">
                {/* First set */}
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">LEGAL MOMO</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Mr Singh's</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">ZYAPPY</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Exactflow</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Shawarma Store</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Signin QEF</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Janjapan</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Jantrading</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Samsungnac</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Global Esales</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Janslawfirm</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Nowfluence</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Getcontractorplus</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Zoho</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Onlinelegaladvise</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Servrhotels</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Jan Japan Invoice</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Barney's</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Grand Royale Group</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Ormith</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Saksfifthavenue</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">The New Yorker</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">A-DAM</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">V&A Museum</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Target Corporate</span>
                {/* Duplicate set for seamless loop */}
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">LEGAL MOMO</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Mr Singh's</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">ZYAPPY</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Exactflow</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Shawarma Store</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Signin QEF</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Janjapan</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Jantrading</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Samsungnac</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Global Esales</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Janslawfirm</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Nowfluence</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Getcontractorplus</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Zoho</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Onlinelegaladvise</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Servrhotels</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Jan Japan Invoice</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Barney's</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Grand Royale Group</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Ormith</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Saksfifthavenue</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">The New Yorker</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">A-DAM</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">V&A Museum</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Target Corporate</span>
              </div>

              {/* Image Section */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>

      {/* Desktop Hero Section */}
      <section
        id="hero"
        className="hidden lg:block py-0 bg-background relative overflow-hidden px-4 sm:px-6 lg:px-8"
      >
      <div className={`flex flex-row items-center justify-between gap-8 xl:gap-12 fade-in-up ${isVisible ? "visible" : ""} relative max-w-7xl w-full mx-auto bg-card rounded-lg m-4 p-6 lg:p-8 xl:p-10 shadow-xl border-2 border-border overflow-hidden`} style={{ animationDelay: "0.2s" }}>
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8 flex-1 relative z-10">
          {/* Introduce Label */}
          <div className="flex justify-center">
            <button className="flex items-center gap-2 rounded-lg px-4 py-2 bg-muted/30 hover:bg-muted/50 transition-all duration-300 w-fit">
              <div className="w-0.5 h-4 bg-teal"></div>
              <Home className="w-4 h-4 text-teal" />
              <span className="text-teal text-xs font-semibold uppercase tracking-wider">INTRODUCE</span>
            </button>
          </div>

          {/* Main Heading */}
          <div className="space-y-2 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-tight">
              I Craft The
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-teal leading-tight">
              Digital Landscape
            </h1>
          </div>

          {/* Description */}
          <p className="text-foreground/70 text-base sm:text-lg max-w-2xl leading-relaxed relative z-10 pl-2">
            I am a <span className="font-bold text-foreground">Senior Full Stack Developer</span> at heart and, i create features that are best suited for the job at hand.
          </p>

          {/* Availability Status */}
          <div className="flex flex-col gap-2 relative z-10 pl-2">
            <div className="flex items-center gap-2 text-foreground/70">
              <Check className="w-5 h-5 text-teal" />
              <span>Available for work</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Check className="w-5 h-5 text-teal" />
              <span>Full Time Job</span>
            </div>
          </div>

          {/* Hire Me Button */}
          <div className="relative z-10">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              HIRE ME
            </Button>
          </div>

          {/* Trusted Companies */}
          <div className="mt-8 space-y-6 relative z-10 w-full" >
            <p className="text-foreground/70 text-sm">Trusted companies</p>
            <div className="relative w-full overflow-hidden pr-16 ml-4 mr-4">
              <div className="flex items-center gap-8 animate-scroll-left pl-16" >
                {/* First set */}
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">LEGAL MOMO</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Mr Singh's</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">ZYAPPY</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Exactflow</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Shawarma Store</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Signin QEF</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Janjapan</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Jantrading</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Samsungnac</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Global Esales</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Janslawfirm</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Nowfluence</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Getcontractorplus</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Zoho</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Onlinelegaladvise</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Servrhotels</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Jan Japan Invoice</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Barney's</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Grand Royale Group</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Ormith</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Saksfifthavenue</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">The New Yorker</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">A-DAM</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">V&A Museum</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Target Corporate</span>
                {/* Duplicate set for seamless loop */}
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">LEGAL MOMO</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Mr Singh's</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">ZYAPPY</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Exactflow</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Shawarma Store</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Signin QEF</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Janjapan</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Jantrading</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Samsungnac</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Global Esales</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Janslawfirm</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Nowfluence</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Getcontractorplus</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Zoho</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Onlinelegaladvise</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Servrhotels</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Jan Japan Invoice</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Barney's</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Grand Royale Group</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Ormith</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Saksfifthavenue</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">The New Yorker</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">A-DAM</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">V&A Museum</span>
                <span className="text-foreground/70 text-base font-medium whitespace-nowrap">Target Corporate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative w-full lg:w-[400px] xl:w-[500px] h-[400px] lg:h-[500px] flex-shrink-0 z-10">
          <div className="relative w-full h-full">
            {/* Main Image Container */}
            <div className="relative w-full h-full">
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/images/profiles.png"
                  alt="Portrait"
                  className="w-full h-full object-cover grayscale"
                  style={{
                    mixBlendMode: 'normal',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </div>

              {/* Dark Gray Triangular Overlay - Bottom Right Corner */}
              <div
                className="absolute bottom-0 right-0 bg-dark-gray-light pointer-events-none"
                style={{
                  clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                  width: '100%',
                  height: '100%',
                  zIndex: 10
                }}
              ></div>

              {/* Border for Triangle */}
              <div
                className="absolute bottom-0 right-0 pointer-events-none"
                style={{
                  clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                  width: '100%',
                  height: '100%',
                  border: '1px solid hsl(var(--border) / 0.6)',
                  zIndex: 11
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
