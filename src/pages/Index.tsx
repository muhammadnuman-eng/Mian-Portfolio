import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Sidebars from '@/components/Sidebars';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorksSection from '@/components/WorksSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = ["Full Stack Developer", "Team Lead", "Web Designer", "AI Developer"];

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    
    // Smooth cursor tracking with requestAnimationFrame
    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    
    const animateCursor = () => {
      // Smooth and fast cursor movement
      currentX += (targetX - currentX) * 0.75;
      currentY += (targetY - currentY) * 0.75;
      
      setCursorPosition({ x: currentX, y: currentY });
      
      animationFrameId = requestAnimationFrame(animateCursor);
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Hide custom cursor on input fields
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.closest('input') || target.closest('textarea') || target.closest('select')) {
        setIsHovering(false);
        return;
      }
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    animateCursor();
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Auto-typing animation for title - continuously repeat
  useEffect(() => {
    const currentText = titles[titleIndex];
    if (!currentText) return;

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing - fast and smooth
      if (currentTitle.length < currentText.length) {
        timeout = setTimeout(() => {
          setCurrentTitle(currentText.slice(0, currentTitle.length + 1));
        }, 50);
      } else {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting - fast and smooth
      if (currentTitle.length > 0) {
        timeout = setTimeout(() => {
          setCurrentTitle(currentTitle.slice(0, -1));
        }, 30);
      } else {
        // Finished deleting, move to next title (will loop back to 0 after last title)
        const nextIndex = (titleIndex + 1) % titles.length;
        setIsDeleting(false);
        setTitleIndex(nextIndex);
        // Start typing the next title immediately - ensure it starts
        timeout = setTimeout(() => {
          const nextTitle = titles[nextIndex];
          if (nextTitle && nextTitle.length > 0) {
            setCurrentTitle(nextTitle[0]);
          }
        }, 50);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentTitle, isDeleting, titleIndex]);

  useEffect(() => {
    // Start typing animation immediately
    setTimeout(() => {
      setCurrentTitle(titles[0][0]);
    }, 800);
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
    <div className="min-h-screen bg-background">
      {/* Custom Cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transition: 'none',
        }}
      />
      {/* Mobile Navigation */}
      <Navigation />
      <Sidebars />
      {/* Scrollable Center Content */}
      <div className="lg:ml-[352px] lg:mr-[120px]">
        {/* Mobile Profile Section - Same as Desktop */}
        <div className="lg:hidden">
          <div className="bg-card rounded-xl m-4 p-6 space-y-6 fade-in-up visible shadow-xl border-2 border-border overflow-hidden">
            {/* Profile Picture */}
            <div className="flex justify-center pt-2">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-teal shadow-lg">
                <img
                  src="/images/main_image.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center space-y-1 pb-3 mb-3 border-b border-border">
              <h2 className="text-xl font-bold text-foreground leading-tight">Numan Akram</h2>
              <p className="text-teal text-sm font-medium min-h-[20px] flex items-center justify-center gap-1">
                <span className="inline-block">{currentTitle || ""}</span>
                <span className="typing-cursor text-teal inline-block">|</span>
              </p>
            </div>

            {/* Personal Details */}
            <div className="space-y-3 text-sm pb-2 mb-2 border-b border-border">
              <div className="flex justify-between text-foreground">
                <span className="opacity-70">Residence:</span>
                <span>Pakistan</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span className="opacity-70">City:</span>
                <span>Lahore</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span className="opacity-70">Age:</span>
                <span>24</span>
              </div>
            </div>

            {/* Skills Section - Only Box */}
            <div className="space-y-3">
              <h3 className="text-foreground font-semibold text-sm">Skills</h3>
              <div className="bg-muted rounded-lg p-10 border border-border space-y-4">
                <div className="flex flex-row gap-3 justify-center items-center">
                  <div className="flex flex-col items-center space-y-1">
                    <div className="relative" style={{ width: 50, height: 50 }}>
                      <svg className="circular-progress" width={50} height={50} style={{ transform: "rotate(-90deg)" }}>
                        <circle cx={25} cy={25} r={22} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-muted opacity-30"/>
                        <circle cx={25} cy={25} r={22} stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray={138.23} strokeDashoffset={13.82} className="text-teal" strokeLinecap="round"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-foreground font-bold text-sm">90%</span>
                      </div>
                    </div>
                    <span className="text-white text-xs">Python</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <div className="relative" style={{ width: 50, height: 50 }}>
                      <svg className="circular-progress" width={50} height={50} style={{ transform: "rotate(-90deg)" }}>
                        <circle cx={25} cy={25} r={22} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-muted opacity-30"/>
                        <circle cx={25} cy={25} r={22} stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray={138.23} strokeDashoffset={27.65} className="text-teal" strokeLinecap="round"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-foreground font-bold text-sm">80%</span>
                      </div>
                    </div>
                    <span className="text-white text-xs">AI</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <div className="relative" style={{ width: 50, height: 50 }}>
                      <svg className="circular-progress" width={50} height={50} style={{ transform: "rotate(-90deg)" }}>
                        <circle cx={25} cy={25} r={22} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-muted opacity-30"/>
                        <circle cx={25} cy={25} r={22} stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray={138.23} strokeDashoffset={27.65} className="text-teal" strokeLinecap="round"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-foreground font-bold text-sm">80%</span>
                      </div>
                    </div>
                    <span className="text-white text-xs">JS</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <div className="relative" style={{ width: 50, height: 50 }}>
                      <svg className="circular-progress" width={50} height={50} style={{ transform: "rotate(-90deg)" }}>
                        <circle cx={25} cy={25} r={22} stroke="currentColor" strokeWidth="1.5" fill="none" className="text-muted opacity-30"/>
                        <circle cx={25} cy={25} r={22} stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray={138.23} strokeDashoffset={13.82} className="text-teal" strokeLinecap="round"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-foreground font-bold text-sm">90%</span>
                      </div>
                    </div>
                    <span className="text-white text-xs">PHP</span>
                  </div>
                </div>
                {/* Download CV Button */}
                <button
                  onClick={handleDownloadResume}
                  className="w-full bg-teal hover:bg-teal-dark text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  DOWNLOAD CV
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
