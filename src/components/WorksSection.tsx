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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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
    <section id="works" ref={sectionRef} className="py-0 bg-background relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-5 sm:top-10 right-4 sm:right-10 lg:right-20 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 hexagon border border-teal/20"></div>
        <div className="absolute bottom-5 sm:bottom-10 left-4 sm:left-10 lg:left-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 hexagon border border-teal/20"></div>
        <div className="absolute top-1/2 right-1/4 sm:right-1/3 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 hexagon border border-teal/20"></div>
      </div>

      <div className={`fade-in-up ${isVisible ? 'visible' : ''} relative max-w-7xl w-full mx-auto bg-card rounded-lg m-4 p-6 lg:p-8 xl:p-10 shadow-xl border-2 border-border overflow-hidden`} style={{ animationDelay: "0.2s" }}>
          {/* Enhanced Header */}
        <div className={`mb-8 sm:mb-12 lg:mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-8 h-8 hexagon bg-teal animate-scale-in shadow-lg"></div>
              <h2 className="text-2xl font-bold text-foreground tracking-wide">Featured Works</h2>
            </div>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Explore some of my recent projects that showcase my expertise in modern web development
            </p>
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card rounded-2xl overflow-hidden hover:scale-105 hover:-translate-y-3 transition-all duration-700 cursor-pointer fade-in-up ${isVisible ? 'visible' : ''
                } shadow-xl hover:shadow-2xl border border-border hover:border-teal/50`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(project.link, '_blank')}
            >
              {/* Project Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-card overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-muted/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-teal/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
                {/* Project Title - Large and Bold */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-teal transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.split(' ').map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted border border-teal/40 text-teal text-sm font-medium"
                      style={{ borderRadius: '10px' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Project Description */}
                <p className="text-foreground/70 text-base leading-relaxed">
                  {project.description || `A modern ${project.category} project built with cutting-edge technology and industry best practices.`}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced View More Projects Button */}
        <div className={`text-center fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.8s' }}>
          <Button
            onClick={handleViewMore}
            className="group bg-teal text-white hover:bg-teal-dark hover:scale-105 transition-all duration-300 px-10 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto border border-teal/20 hover:border-teal/40"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;