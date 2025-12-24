import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Dribbble, MessageCircle, Settings, Sun, Moon, User, Briefcase, Wrench, GraduationCap, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { theme, setTheme } = useTheme();

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
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border shadow-lg lg:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Enhanced */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="group bg-teal text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-sm sm:text-base hover:bg-teal-dark hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></div>
              <span>Numan</span>
            </button>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Works', 'Services', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-teal hover:text-teal-light font-medium text-sm transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
          
          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Burger Menu */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-teal hover:text-teal-light hover:bg-teal/10 p-2 rounded-lg transition-all duration-700 ease-out hover:scale-110 hover:rotate-3 active:scale-90"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>


          {/* Social Icons - Enhanced */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/NumanAkram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-light hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-teal/10 group"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-numan-senior-full-stack-developer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-light hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-teal/10 group"
            >
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="https://wa.me/923225106048" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-light hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-teal/10 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
           
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile Navigation Sidebar - Slides from right */}
    <div className={`md:hidden fixed inset-0 z-[70] ${isOpen ? 'block' : 'hidden'}`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-card shadow-2xl border-l border-border transform transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <div className="flex justify-end p-4 border-b border-border">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-foreground hover:text-teal hover:bg-muted/30 rounded-lg transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="p-5 space-y-3 max-h-[calc(100vh-120px)] overflow-y-auto">
          <h2 className="text-base font-semibold text-foreground">Navigation</h2>

          <div className="space-y-2">
            {/* Home Button */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2 text-foreground hover:text-teal hover:bg-muted/30 px-2.5 py-2.5 rounded-lg transition-all duration-500 ease-out text-left group hover:translate-x-1"
              style={{ animationDelay: '0.1s', animation: isOpen ? 'slideInLeft 0.5s ease-out 0.1s both' : 'none' }}
            >
              <div className="w-2 h-2 bg-teal rounded-full group-hover:scale-125 transition-transform duration-500"></div>
              <span className="text-sm font-medium">Home</span>
            </button>

            {/* Navigation Items */}
            {[
              { name: 'About', icon: User },
              { name: 'Works', icon: Briefcase },
              { name: 'Services', icon: Wrench },
              { name: 'Experience', icon: GraduationCap },
              { name: 'Contact', icon: FileText }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.name.toLowerCase());
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-2 text-foreground hover:text-teal hover:bg-muted/30 px-2.5 py-2.5 rounded-lg transition-all duration-500 ease-out text-left group hover:translate-x-1"
                  style={{
                    animationDelay: `${(index + 2) * 0.1}s`,
                    animation: isOpen ? `slideInLeft 0.6s ease-out ${(index + 2) * 0.1}s both` : 'none'
                  }}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>

          {/* Get in Touch Section */}
          <div
            className="pt-4 border-t border-border/50"
            style={{
              animationDelay: '0.8s',
              animation: isOpen ? 'slideInLeft 0.6s ease-out 0.8s both' : 'none'
            }}
          >
            <h3 className="text-sm font-medium text-foreground mb-3">Get in Touch</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/NumanAkram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-teal transition-colors duration-300 p-2 hover:bg-muted/30 rounded-lg"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-numan-senior-full-stack-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-teal transition-colors duration-300 p-2 hover:bg-muted/30 rounded-lg"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/923225106048"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-teal transition-colors duration-300 p-2 hover:bg-muted/30 rounded-lg"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Fixed Mobile Settings Button - Far Right Side */}
    <div className="md:hidden fixed top-1/2 right-1 transform -translate-y-1/2 z-[60]">
      <div className="relative theme-menu-container flex items-center">
        {/* Theme Menu - Slides from right to left behind the icon */}
        <div className={`absolute right-full mr-2 transition-all duration-300 ease-in-out transform ${
          showThemeMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}>
          <div className="bg-card/98 backdrop-blur-xl border border-border rounded-xl shadow-2xl p-4 theme-menu-container">
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
        </div>

        {/* Settings Button - Box shaped, stays fixed */}
        <button
          onClick={() => setShowThemeMenu(!showThemeMenu)}
          className="bg-card/90 backdrop-blur-lg border border-border rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 relative z-10"
          title="Settings"
        >
          <Settings className="w-5 h-5 text-teal animate-spin-slow" />
        </button>
      </div>
    </div>
    </>
  );
};

export default Navigation;