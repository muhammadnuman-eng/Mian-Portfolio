import { useEffect, useState } from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { allProjects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

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
    
    // Smooth cursor tracking with requestAnimationFrame
    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    
    const animateCursor = () => {
      // Less smooth interpolation for better responsiveness
      currentX += (targetX - currentX) * 0.3;
      currentY += (targetY - currentY) * 0.3;
      
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

  const handleBack = () => {
    navigate('/');
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
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        {/* Header */}
        <div className={`mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center justify-between mb-8">
            <Button
              onClick={handleBack}
              variant="ghost"
              className="text-white/70 hover:text-teal hover:bg-teal/10 transition-all duration-300 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 hexagon bg-teal animate-scale-in"></div>
              <h1 className="text-3xl lg:text-4xl font-black text-white">All Projects</h1>
            </div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Explore my complete portfolio of web applications, websites, and digital solutions built with modern technologies.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-dark-gray-light rounded-2xl overflow-hidden hover:scale-105 hover:-translate-y-3 transition-all duration-700 cursor-pointer fade-in-up ${
                isVisible ? 'visible' : ''
              } shadow-xl hover:shadow-2xl border border-dark-gray-dark/50 hover:border-teal/50`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(project.link, '_blank')}
            >
              {/* Project Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-dark-gray-dark to-dark-gray overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-teal/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 space-y-5">
                {/* Project Title - Large and Bold */}
                <h3 className="text-2xl font-bold text-white group-hover:text-teal transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.split(' ').map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-dark-gray-dark/80 border border-teal/50 text-teal text-sm font-medium"
                      style={{ borderRadius: '10px' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {project.description || `A modern project built with cutting-edge technology and industry best practices.`}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Top Button */}
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
