import { useEffect, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import { useTheme } from "@/contexts/ThemeContext";
import { scrollToSection } from "@/lib/scroll";
import {
  ArrowRight,
  Briefcase,
  FileText,
  GraduationCap,
  Home,
  Settings,
  Moon,
  Sun,
  User,
  Wrench,
} from "lucide-react";

const SECTION_IDS = ["hero", "about", "skills", "works", "services", "experience", "contact"] as const;

const NAV_ITEMS = [
  { icon: Home, id: "hero" },
  { icon: User, id: "about", badge: true },
  { icon: Briefcase, id: "works" },
  { icon: GraduationCap, id: "experience", badge: true },
  { icon: FileText, id: "contact" },
] as const;

const Sidebars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showThemeMenu && !target.closest(".theme-menu-container")) {
        setShowThemeMenu(false);
      }
    };

    if (showThemeMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showThemeMenu]);

  useEffect(() => {
    const observers = SECTION_IDS.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  const navButtonClass = (isActive: boolean) =>
    `relative transition-all duration-300 p-2 group rounded-lg ${
      isActive
        ? "text-teal bg-teal/10 shadow-lg"
        : "text-foreground/70 hover:text-teal hover:bg-muted/30"
    }`;

  return (
    <>
      <div
        className={`fixed left-0 top-0 h-[calc(100vh-1rem)] lg:h-[calc(100vh-2rem)] w-[280px] lg:w-[320px] xl:w-[352px] m-2 lg:m-4 fade-in-up ${
          isVisible ? "visible" : ""
        } overflow-hidden z-50 hidden lg:block`}
      >
        <ProfileCard variant="desktop" className="h-full" />
      </div>

      <div
        className={`fixed right-2 lg:right-4 top-[20%] w-[70px] lg:w-[80px] bg-card rounded-xl flex flex-col items-center gap-2 lg:gap-3 py-4 lg:py-6 fade-in-up ${
          isVisible ? "visible" : ""
        } z-40 hidden lg:flex shadow-xl border-2 border-border`}
        style={{ animationDelay: "0.4s" }}
      >
        <button
          type="button"
          className="text-teal hover:text-teal-light transition-all duration-300 p-2 hover:scale-110 border border-border rounded-full"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
        <div className="w-8 h-px bg-border my-1" />

        {NAV_ITEMS.slice(0, 3).map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={navButtonClass(isActive)}
              title={item.id}
            >
              <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
              {"badge" in item && item.badge && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal rounded-full animate-pulse" />
              )}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => scrollToSection("services")}
          className={navButtonClass(activeSection === "services")}
          title="Services"
        >
          <Wrench className={`w-5 h-5 transition-transform duration-300 ${activeSection === "services" ? "scale-110" : "group-hover:scale-110"}`} />
        </button>

        {NAV_ITEMS.slice(3).map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={navButtonClass(isActive)}
              title={item.id}
            >
              <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
              {"badge" in item && item.badge && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-teal rounded-full animate-pulse" />
              )}
            </button>
          );
        })}

        <div className="relative theme-menu-container">
          <button
            type="button"
            onClick={() => setShowThemeMenu(!showThemeMenu)}
            className="relative text-foreground/70 hover:text-teal transition-all duration-300 p-2 group hover:bg-muted/30 rounded-lg border border-border"
            title="Settings"
          >
            <Settings className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </button>

          {showThemeMenu && (
            <div className="absolute bottom-full right-0 mb-2 w-48 bg-card rounded-lg p-4 border-2 border-border shadow-xl theme-menu-container">
              <h3 className="text-foreground text-sm font-semibold mb-3">Theme Mode</h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setTheme("dark");
                    setShowThemeMenu(false);
                  }}
                  className={`flex-1 p-3 rounded-lg border-2 transition-all duration-300 ${
                    theme === "dark" ? "bg-background border-border" : "bg-muted border-border hover:border-border"
                  }`}
                >
                  <Moon className="w-5 h-5 mx-auto text-foreground" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTheme("light");
                    setShowThemeMenu(false);
                  }}
                  className={`flex-1 p-3 rounded-lg border-2 transition-all duration-300 ${
                    theme === "light" ? "bg-background border-border" : "bg-muted border-border hover:border-border"
                  }`}
                >
                  <Sun className="w-5 h-5 mx-auto text-foreground" />
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
