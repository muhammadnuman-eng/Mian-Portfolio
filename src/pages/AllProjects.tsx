import { useEffect, useState } from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { allProjects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AllProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen golden-gradient">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        {/* Header */}
        <div className={`mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center justify-between mb-8">
            <Button
              onClick={handleBack}
              variant="ghost"
              className="text-navy hover:text-navy-light hover:bg-golden/10 transition-all duration-300 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 hexagon bg-navy animate-scale-in"></div>
              <h1 className="text-3xl lg:text-4xl font-black text-navy">All Projects</h1>
            </div>
            <p className="text-navy/80 text-lg max-w-2xl mx-auto">
              Explore my complete portfolio of web applications, websites, and digital solutions built with modern technologies.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
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
                  <ExternalLink className="w-8 h-8 text-golden animate-bounce" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-golden text-sm font-medium px-3 py-1 bg-golden/10 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-golden group-hover:text-golden-light transition-colors">
                  {project.title}
                </h3>
                
                {project.description && (
                  <p className="text-navy/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.split(' ').slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-golden/10 text-golden text-xs rounded-full border border-golden/20 hover:bg-golden/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Top Button */}
        <div className={`text-center mt-16 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.8s' }}>
          <Button
            onClick={handleBack}
            className="bg-navy text-golden hover:bg-navy-light hover:scale-105 transition-all duration-300 px-8 py-3 text-base font-semibold rounded-full animate-fade-in flex items-center gap-3 mx-auto"
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
