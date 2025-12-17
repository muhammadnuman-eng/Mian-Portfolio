import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad Numan-Full Stack Developer-1.pdf";
    link.download = "Muhammad Numan - Full Stack Developer Resume.pdf";
    link.click();
  };

  return (
    <section
      id="hero"
      className="min-h-screen golden-gradient hex-pattern flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-24 md:py-32">
        {/* Background Text - CREATIVE DEVELOPER - Figma Design */}
        <div className="absolute text-[#24222D08] top-20 md:top-30 left-1/2 transform -translate-x-1/2 text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-black text-navy/6 leading-none tracking-tight z-0 text-center whitespace-nowrap select-none overflow-hidden w-full max-w-full">
          CREATIVE DEVELOPER
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 items-center mt-12 md:mt-16">
          {/* Left Content - Figma Design */}
          <div
            className={`space-y-4 sm:space-y-6 fade-in-up ${isVisible ? "visible" : ""
              } relative`}
          >
            <div className="space-y-3 sm:space-y-4 relative z-10 text-left">
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-navy leading-tight">
                  Creative<span className="md:hidden"> </span>
                  <br className="hidden md:block" />
                  <span className="text-navy/90">Developer</span>
                </h1>
                <p className="text-base md:text-lg text-navy/70 font-medium">
                  based in Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Center Content - Figma Design Hexagonal Overlay */}
          <div
            className={`relative flex justify-center md:justify-center fade-in-up ${isVisible ? "visible" : ""
              }`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative group w-full md:w-auto">
              {/* Main Profile Image with Hexagonal Overlay Pattern */}
              <div className="relative z-10 flex justify-center">
                <div
                  className="relative w-64 h-80 sm:w-72 sm:h-[22rem] md:w-80 md:h-96"
                  style={{
                    backgroundImage: `url(/images/profiles.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
                  }}
                >
                  {/* Hexagonal Grid Overlay - Exact Figma Design */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Row 1 - 1 hexagon (top center) */}
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-16 hexagon border-2 border-golden/40"></div>
                    </div>

                    {/* Row 2 - 2 hexagons (center) */}
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-16 hexagon border-2 border-golden/40 mr-2"></div>
                      <div className="w-16 h-16 hexagon border-2 border-golden/40"></div>
                    </div>

                    {/* Row 3 - 3 hexagons (staggered outward) */}
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-16 hexagon border-2 border-golden/40 mr-2"></div>
                      <div className="w-16 h-16 hexagon border-2 border-golden/40 mr-2"></div>
                      <div className="w-16 h-16 hexagon border-2 border-golden/40"></div>
                    </div>

                    {/* Row 4 - 2 hexagons (staggered outward) */}
                    <div className="flex justify-center mb-2">
                      <div className="w-16 h-16 hexagon border-2 border-golden/40 mr-2"></div>
                      <div className="w-16 h-16 hexagon border-2 border-golden/40"></div>
                    </div>

                    {/* Row 5 - 1 hexagon (bottom center) */}
                    <div className="flex justify-center">
                      <div className="w-16 h-16 hexagon border-2 border-golden/40"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile: See my works Button (swapped to top) */}
              <div className="mt-6 md:hidden flex justify-center">
                <Button
                  onClick={() => scrollToSection("works")}
                  className="bg-navy text-golden hover:bg-navy-light hover:scale-105 transition-all duration-300 px-6 py-2.5 text-xs font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center gap-3 group w-fit"
                >
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <span>See my works</span>
                </Button>
              </div>

              {/* Tablet/Desktop: Download Resume Button (original position) */}
              <div className="hidden md:block md:mt-8 text-center">
                <Button
                  onClick={handleDownloadResume}
                  className="bg-navy text-golden hover:bg-navy-light hover:scale-105 transition-all duration-300 px-8 py-3 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>

              {/* Mobile: Numan Akram text right after See my works button */}
              <div className="md:hidden mt-4 mb-4 text-left">
                <div className="text-[2.5rem] sm:text-[3rem] font-black text-navy leading-none tracking-tight">
                  Numan Akram
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Figma Design */}
          <div
            className={`space-y-4 sm:space-y-6 fade-in-up ${isVisible ? "visible" : ""
              } relative`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="space-y-3 sm:space-y-4 relative z-10 text-left">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-navy/80 leading-relaxed">
                  Hi, I'm <span className="font-semibold text-navy">Numan Akram</span> - a Senior Full Stack Developer & Team Lead , passionate about creating seamless digital experiences that connect and convert.
                </p>
              </div>
              {/* Mobile: Download Resume Button (swapped to bottom) */}
              <div className="space-y-3 md:hidden flex justify-center mt-[20px]">
                <Button
                  onClick={handleDownloadResume}
                  className="bg-navy text-golden hover:bg-navy-light hover:scale-105 transition-all duration-300 px-6 py-2.5 text-xs font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center gap-2 w-fit"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>

              {/* Tablet/Desktop: See my works Button (original position) */}
              <div className="hidden md:block md:space-y-4">
                <Button
                  onClick={() => scrollToSection("works")}
                  className="bg-navy text-golden hover:bg-navy-light hover:scale-105 transition-all duration-300 px-8 py-3 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center gap-3 group w-fit"
                >
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <span>See my works</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Names Section - Figma Design (Desktop only) */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-8 mt-[-80px] sm:mt-[-100px] md:mt-[-120px] lg:mt-[-140px] -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16" >
          {/* Desktop: Show Numan in first column */}
          <div className="md:text-left md:pl-4 lg:pl-12">
            <div className="text-[3.5rem] lg:text-[4rem] font-black text-navy leading-none tracking-tight">
              Numan
            </div>
          </div>
          <div></div>
          
          {/* Desktop: Show Akram in third column */}
          <div className="md:pr-4 lg:pr-12">
            <div className="text-[3.5rem] lg:text-[4rem] font-black text-navy leading-none tracking-tight">
              Akram
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce ">
        <div className="w-5 h-8 border-2 border-navy rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-navy rounded-full mt-1.5 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
