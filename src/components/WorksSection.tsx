import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { featuredProjects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
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
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-5 sm:top-10 right-4 sm:right-10 lg:right-20 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 hexagon border border-teal/20"></div>
        <div className="absolute bottom-5 sm:bottom-10 left-4 sm:left-10 lg:left-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 hexagon border border-teal/20"></div>
        <div className="absolute top-1/2 right-1/4 sm:right-1/3 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 hexagon border border-teal/20"></div>
      </div>

      <div className={`fade-in-up ${isVisible ? 'visible' : ''} relative max-w-7xl w-full mx-auto bg-card rounded-lg m-4 p-6 lg:p-8 xl:p-10 shadow-xl border-2 border-border overflow-hidden`} style={{ animationDelay: "0.2s" }}>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${project.title}`}
              project={project}
              index={index}
              isVisible={isVisible}
              variant="works"
            />
          ))}
        </div>

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
