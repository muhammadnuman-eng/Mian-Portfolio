import { useState } from 'react';
import { Menu, X, Github, Linkedin, Dribbble } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-golden/20">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-14">
          {/* Logo and Hamburger */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="bg-navy text-golden px-4 py-2 rounded-full font-bold text-base hover:bg-golden hover:text-navy transition-colors"
            >
              Numan
            </button>
            
            {/* Hamburger Menu */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-golden hover:text-golden-light p-1"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              
              {/* Dropdown */}
              {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-navy/95 backdrop-blur-md border border-golden/20 rounded-lg shadow-lg animate-fade-in z-50">
                  <div className="py-2">
                    {['About', 'Works', 'Services', 'Experience', 'Contact'].map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-golden hover:text-golden-light hover:bg-golden/10 block px-4 py-2 text-sm font-medium w-full text-left transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://github.com/muhammadnuman-eng" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-golden hover:text-golden-light transition-colors"
            >
              <Github className="w-4 h-4 cursor-pointer" />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-numan-senior-full-stack-developer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-golden hover:text-golden-light transition-colors"
            >
              <Linkedin className="w-4 h-4 cursor-pointer" />
            </a>
            <a 
              href="https://numanakram.site" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-golden hover:text-golden-light transition-colors"
            >
              <Dribbble className="w-4 h-4 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;