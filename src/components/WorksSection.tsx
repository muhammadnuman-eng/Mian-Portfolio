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
    <section id="works" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 hexagon border border-teal/20"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 hexagon border border-teal/20"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 hexagon border border-teal/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Enhanced Header */}
        <div className={`mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                <div className="absolute inset-0 bg-gradient-to-t from-muted/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-teal/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink className="w-6 h-6 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 space-y-5">
                {/* Project Title - Large and Bold */}
                <h3 className="text-2xl font-bold text-foreground group-hover:text-teal transition-colors leading-tight">
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
                <p className="text-foreground/70 text-sm leading-relaxed">
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
            className="group bg-teal text-foreground hover:bg-teal-dark hover:scale-105 transition-all duration-300 px-10 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto border border-teal/20 hover:border-teal/40"
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