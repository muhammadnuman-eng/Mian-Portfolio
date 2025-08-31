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
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-32">
        {/* Background Text - CREATIVE DEVELOPER - Single Line - Moved Down */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 text-[4rem] lg:text-[6rem] font-black text-navy/10 leading-none tracking-tight z-0 text-center whitespace-nowrap">
          CREATIVE DEVELOPER
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center mt-8">
          {/* Left Content - Moved Further Up */}
          <div
            className={`space-y-6 fade-in-up ${
              isVisible ? "visible" : ""
            } relative mt-4`}
          >
            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 bg-golden-dark rounded-full mr-2"></div>
                <span className="text-navy font-medium text-xs">
                  AVAILABLE FOR WORK
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-black text-navy leading-tight">
                Creative Developer
                <br />
                <span className="text-navy/80 text-2xl lg:text-3xl">
                  based in Lahore
                </span>
              </h1>
            </div>
          </div>

          {/* Center Content - Image Moved Down with Increased Height */}
          <div
            className={`relative flex justify-center fade-in-up ${
              isVisible ? "visible" : ""
            } mt-8`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Single Image with Hexagonal Mask - Increased Height */}
              <div className="relative z-10">
                {/* Background Image Container - Increased Height */}
                                  <div
                    className="relative w-64 h-80"
                    style={{
                      backgroundImage: `url(/images/profile.png)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  ></div>

                {/* Hexagonal Grid Overlay for Visual Effect - Adjusted for increased height */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Row 1 - 1 hexagon (top center) */}
                  <div className="flex justify-center mb-1">
                    <div className="w-12 h-12 hexagon border-2 border-navy/30"></div>
                  </div>

                  {/* Row 2 - 2 hexagons (center) */}
                  <div className="flex justify-center mb-1">
                    <div className="w-12 h-12 hexagon border-2 border-navy/30 mr-1"></div>
                    <div className="w-12 h-12 hexagon border-2 border-navy/30"></div>
                  </div>

                  {/* Row 3 - 3 hexagons (staggered outward) */}
                  <div className="flex justify-center mb-1">
                    <div className="w-12 h-12 hexagon border-2 border-navy/30 mr-1"></div>
                    <div className="w-12 h-12 hexagon border-2 border-navy/30 mr-1"></div>
                    <div className="w-12 h-12 hexagon border-2 border-navy/30"></div>
                  </div>

                  {/* Row 4 - 2 hexagons (staggered outward) */}
                  <div className="flex justify-center mb-1">
                    <div className="w-12 h-12 hexagon border-2 border-navy/30 mr-1"></div>
                    <div className="w-12 h-12 hexagon border-2 border-navy/30"></div>
                  </div>

                  {/* Row 5 - 1 hexagon (bottom center) */}
                  <div className="flex justify-center">
                    <div className="w-12 h-12 hexagon border-2 border-navy/30"></div>
                  </div>
                </div>
              </div>

              {/* Download Resume Button below image */}
              <div className="mt-6 text-center">
                <Button
                  onClick={handleDownloadResume}
                  className="bg-navy text-golden hover:bg-navy-light hover:scale-105 transition-all duration-300 px-6 py-2 text-sm font-semibold rounded-full animate-fade-in flex items-center gap-2 mx-auto"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Moved Further Up */}
          <div
            className={`space-y-4 fade-in-up ${
              isVisible ? "visible" : ""
            } relative mt-4`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="space-y-4 relative z-10">
              <p className="text-sm text-navy/80 leading-relaxed">
                Hi, I'm Numan Akram - a Full Stack developer passionate about
                creating seamless digital experiences that connect and convert.
              </p>

              <p className="text-sm font-bold text-navy leading-relaxed">
                Turning ideas into reality, one line of code at a time.
              </p>

              <Button
                onClick={() => scrollToSection("works")}
                className="bg-navy text-golden hover:bg-navy-light hover:scale-105 transition-all duration-300 px-6 py-2 text-sm font-semibold rounded-full animate-fade-in flex items-center gap-2"
                style={{ animationDelay: "0.5s" }}
              >
                See my works
                <svg
                  className="w-4 h-4"
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
              </Button>
            </div>
          </div>
        </div>

        {/* Names moved up and closer to image */}
        <div className="grid lg:grid-cols-3 gap-8 -mt-14">
          <div className="text-center lg:text-left lg:pl-12">
            <div className="text-[3rem] lg:text-[4rem] font-black text-navy leading-none tracking-tight">
              NUMAN
            </div>
          </div>
          <div></div>
          <div className="text-center lg:text-right lg:pr-28">
            <div className="text-[3rem] lg:text-[4rem] font-black text-navy leading-none tracking-tight">
              AKRAM
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-navy rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-navy rounded-full mt-1.5 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
