import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { featuredProjects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleViewMore = () => {
    navigate('/all-projects');
  };

  return (
    <section id="works" ref={sectionRef} className="py-16 golden-gradient">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Header */}
        <div className={`mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-6 h-6 hexagon bg-navy animate-scale-in"></div>
            <h2 className="text-lg font-bold text-navy">Featured Works</h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-navy rounded-xl overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer fade-in-up ${
                isVisible ? 'visible' : ''
              } shadow-lg hover:shadow-xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(project.link, '_blank')}
            >
              {/* Project Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-light to-navy overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-golden/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-golden animate-bounce" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-golden text-xs font-medium">{project.category}</span>
                  <span className="text-golden/70 text-xs">{project.techStack.split(' ')[0]}</span>
                </div>
                
                <h3 className="text-base font-bold text-golden group-hover:text-golden-light transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.split(' ').slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-golden/10 text-golden text-xs rounded-full border border-golden/20 hover:bg-golden/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className={`text-center fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={handleViewMore}
            className="bg-navy text-golden hover:bg-navy-light hover:scale-105 transition-all duration-300 px-8 py-3 text-base font-semibold rounded-full animate-fade-in flex items-center gap-3 mx-auto"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;