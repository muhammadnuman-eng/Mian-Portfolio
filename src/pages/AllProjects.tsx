import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ecommerceProjects, nonEcommerceProjects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { useNavigate } from 'react-router-dom';

const EcommerceSectionHeader = () => (
  <div className="text-center space-y-4 mb-8">
    <div className="flex items-center justify-center space-x-4 mb-6">
      <div className="w-8 h-8 hexagon bg-gradient-to-br from-teal to-teal-dark animate-scale-in shadow-lg" />
      <h2 className="text-2xl font-bold text-foreground tracking-wide">E-commerce Stores</h2>
    </div>
    <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
      Shopify and WooCommerce storefronts built for performance, conversion, and seamless shopping experiences
    </p>
    <div className="w-20 h-1 bg-gradient-to-r from-teal to-teal-dark mx-auto rounded-full mt-4" />
  </div>
);

const AllProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);

    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animateCursor = () => {
      currentX += (targetX - currentX) * 0.3;
      currentY += (targetY - currentY) * 0.3;

      setCursorPosition({ x: currentX, y: currentY });

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
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

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transition: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        <div className={`mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center justify-between mb-8">
            <Button
              onClick={handleBack}
              variant="ghost"
              className="text-foreground/70 hover:text-teal hover:bg-teal/10 transition-all duration-300 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 hexagon bg-teal animate-scale-in" />
              <h1 className="text-3xl lg:text-4xl font-black text-foreground">All Projects</h1>
            </div>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Explore my complete portfolio of web applications, websites, and digital solutions built with modern technologies.
            </p>
          </div>
        </div>

        <div className="space-y-14">
          <section className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nonEcommerceProjects.map((project, index) => (
                <ProjectCard
                  key={`project-${project.id}-${project.title}`}
                  project={project}
                  index={index}
                  isVisible={isVisible}
                  variant="all"
                />
              ))}
            </div>
          </section>

          <section className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <EcommerceSectionHeader />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ecommerceProjects.map((project, index) => (
                <ProjectCard
                  key={`ecommerce-${project.id}`}
                  project={project}
                  index={index}
                  isVisible={isVisible}
                  variant="all"
                />
              ))}
            </div>
          </section>
        </div>

        <div className={`text-center mt-16 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.8s' }}>
          <Button
            onClick={handleBack}
            className="bg-teal text-white hover:bg-teal-dark hover:scale-105 transition-all duration-300 px-8 py-3 text-base font-semibold rounded-full animate-fade-in flex items-center gap-3 mx-auto"
          >
            Back to Home
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
