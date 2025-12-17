import { useState } from 'react';
import { Menu, X, Github, Linkedin, Dribbble, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-lg border-b border-golden/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Enhanced */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="group bg-gradient-to-r from-golden to-golden-dark text-navy px-6 py-2.5 rounded-full font-bold text-base hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-navy rounded-full group-hover:animate-pulse"></div>
              <span>Numan</span>
            </button>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Works', 'Services', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-golden hover:text-golden-light font-medium text-sm transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-golden group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
          
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-golden hover:text-golden-light hover:bg-golden/10 p-2 rounded-lg transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            
            {/* Mobile Dropdown - Enhanced */}
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-navy/98 backdrop-blur-xl border border-golden/30 rounded-xl shadow-2xl animate-fade-in z-50 overflow-hidden">
                <div className="py-3">
                  {['About', 'Works', 'Services', 'Experience', 'Contact'].map((item, index) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-golden hover:text-golden-light hover:bg-golden/10 px-6 py-3 text-sm font-medium w-full text-left transition-all duration-300 flex items-center gap-3 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-1.5 h-1.5 bg-golden rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Social Icons - Enhanced */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/NumanAkram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-golden hover:text-golden-light hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-golden/10 group"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-numan-senior-full-stack-developer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-golden hover:text-golden-light hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-golden/10 group"
            >
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="https://wa.me/923225106048" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-golden hover:text-golden-light hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-golden/10 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;