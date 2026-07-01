import { useEffect, useState } from "react";
import HeroContent from "@/components/HeroContent";
import TrustedCompanies from "@/components/TrustedCompanies";
import { PROFILE } from "@/data/profile";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="lg:hidden">
        <section className="bg-background relative overflow-hidden">
          <div className="bg-card rounded-xl m-4 p-6 space-y-6 shadow-xl border-2 border-border overflow-hidden">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex flex-col justify-center space-y-6 flex-1 text-center">
                <HeroContent
                  centered
                  headingClass="text-3xl sm:text-4xl"
                  descriptionClass="text-base"
                  buttonClass="px-6 py-2.5 text-sm"
                />
              </div>
              <TrustedCompanies centered />
            </div>
          </div>
        </section>
      </div>

      <section
        id="hero"
        className="hidden lg:block py-0 bg-background relative overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`flex flex-row items-center justify-between gap-8 xl:gap-12 fade-in-up ${
            isVisible ? "visible" : ""
          } relative max-w-7xl w-full mx-auto bg-card rounded-lg m-4 p-6 lg:p-8 xl:p-10 shadow-xl border-2 border-border overflow-hidden`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex flex-col justify-center space-y-8 flex-1 relative z-10">
            <HeroContent />
            <TrustedCompanies className="mt-8 space-y-6 relative z-10" />
          </div>

          <div className="relative w-full lg:w-[400px] xl:w-[500px] h-[400px] lg:h-[500px] flex-shrink-0 z-10">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={PROFILE.image}
                alt={PROFILE.imageAlt}
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute bottom-0 right-0 bg-dark-gray-light pointer-events-none"
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                  width: "100%",
                  height: "100%",
                  zIndex: 10,
                }}
              />
              <div
                className="absolute bottom-0 right-0 pointer-events-none"
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                  width: "100%",
                  height: "100%",
                  border: "1px solid hsl(var(--border) / 0.6)",
                  zIndex: 11,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
