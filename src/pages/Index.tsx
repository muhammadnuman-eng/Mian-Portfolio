import { useEffect, useState } from 'react';
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
      <Sidebars />
      {/* Scrollable Center Content */}
      <div className="lg:ml-[352px] lg:mr-[120px]">
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
