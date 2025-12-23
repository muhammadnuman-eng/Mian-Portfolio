import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Download, Home, User, Briefcase, GraduationCap, FileText, ArrowRight, Settings, Moon, Sun, Wrench } from "lucide-react";

const Sidebars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [currentTitle, setCurrentTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);

  const titles = ["Full Stack Developer", "Team Lead", "Web Designer", "Photographer"];

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setAnimateSkills(true), 500);
    // Start typing animation immediately
    setTimeout(() => {
      setCurrentTitle(titles[0][0]);
    }, 800);
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

  // Close theme menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showThemeMenu && !target.closest('.theme-menu-container')) {
        setShowThemeMenu(false);
      }
    };

    if (showThemeMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showThemeMenu]);


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

  const skills = [
    { name: "Python", level: 90 },
    { name: "AI", level: 80 },
    { name: "JS", level: 80 },
    { name: "PHP", level: 90 },
  ];

  const navItems = [
    { icon: Home, id: "hero" },
    { icon: User, id: "about", badge: true },
    { icon: Briefcase, id: "works" },
    { icon: GraduationCap, id: "experience", badge: true },
    { icon: FileText, id: "contact" },
  ];

  const CircularProgress = ({ percentage, size = 80 }: { percentage: number; size?: number }) => {
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="circular-progress"
          width={size}
          height={size}
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className="text-muted opacity-30"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={animateSkills ? offset : circumference}
            className="text-teal"
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-foreground font-bold text-sm">{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Fixed Left Sidebar - Profile Card */}
      <div className={`fixed left-0 top-0 h-[calc(100vh-2rem)] w-[320px] bg-card rounded-xl m-4 p-6 space-y-6 fade-in-up ${isVisible ? "visible" : ""} overflow-hidden z-50 hidden lg:flex flex-col shadow-xl border-2 border-border`}>
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
              {skills.map((skill, index) => (
                <div key={skill.name} className="flex flex-col items-center space-y-1">
                  <CircularProgress percentage={skill.level} size={50} />
                  <span className="text-white text-xs">{skill.name}</span>
                </div>
              ))}
            </div>
            {/* Download CV Button */}
            <Button
              onClick={handleDownloadResume}
              className="w-full bg-teal hover:bg-teal-dark text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Download className="w-3 h-3" />
              DOWNLOAD CV
            </Button>
          </div>
        </div>
      </div>

      {/* Fixed Right Sidebar - Navigation */}
      <div className={`fixed right-4 top-[20%] w-[80px] bg-card rounded-xl flex flex-col items-center gap-3 py-6 fade-in-up ${isVisible ? "visible" : ""} z-40 hidden lg:flex shadow-xl border-2 border-border`} style={{ animationDelay: "0.4s" }}>
        {/* Top Arrow Button with Border */}
        <button className="text-teal hover:text-teal-light transition-all duration-300 p-2 hover:scale-110 border border-border rounded-full">
          <ArrowRight className="w-5 h-5" />
        </button>
        <div className="w-8 h-px bg-border my-1"></div>
        
        {/* Navigation Items - Home, About, Works */}
        {navItems.slice(0, 3).map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className="relative text-foreground/70 hover:text-teal transition-all duration-300 p-2 group hover:bg-muted/30 rounded-lg"
              title={item.id}
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {item.badge && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal rounded-full animate-pulse"></span>
              )}
            </button>
          );
        })}
        
        {/* My Services Button - After Works */}
        <button
          onClick={() => scrollToSection("services")}
          className="relative text-foreground/70 hover:text-teal transition-all duration-300 p-2 group hover:bg-muted/30 rounded-lg"
          title="Services"
        >
          <Wrench className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        </button>
        
        {/* Navigation Items - Experience, Contact */}
        {navItems.slice(3).map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index + 3}
              onClick={() => scrollToSection(item.id)}
              className="relative text-foreground/70 hover:text-teal transition-all duration-300 p-2 group hover:bg-muted/30 rounded-lg"
              title={item.id}
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              {item.badge && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal rounded-full animate-pulse"></span>
              )}
            </button>
          );
        })}
        
        {/* Settings Button - Last */}
        <div className="relative theme-menu-container">
          <button
            onClick={() => setShowThemeMenu(!showThemeMenu)}
                  className="relative text-foreground/70 hover:text-teal transition-all duration-300 p-2 group hover:bg-muted/30 rounded-lg border border-border"
            title="Settings"
          >
            <Settings className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          {/* Theme Menu */}
          {showThemeMenu && (
            <div className="absolute bottom-full right-0 mb-2 w-48 bg-card rounded-lg p-4 border-2 border-border shadow-xl theme-menu-container">
              <h3 className="text-foreground text-sm font-semibold mb-3">Theme Mode</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setTheme("dark");
                    setShowThemeMenu(false);
                  }}
                  className={`flex-1 p-3 rounded-lg border-2 transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-background border-border"
                      : "bg-muted border-border hover:border-border"
                  }`}
                >
                  <Moon className={`w-5 h-5 mx-auto ${theme === "dark" ? "text-foreground" : "text-foreground"}`} />
                </button>
                <button
                  onClick={() => {
                    setTheme("light");
                    setShowThemeMenu(false);
                  }}
                  className={`flex-1 p-3 rounded-lg border-2 transition-all duration-300 ${
                    theme === "light"
                      ? "bg-background border-border"
                      : "bg-muted border-border hover:border-border"
                  }`}
                >
                  <Sun className={`w-5 h-5 mx-auto ${theme === "light" ? "text-foreground" : "text-foreground"}`} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebars;

