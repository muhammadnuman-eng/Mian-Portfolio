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
              className={`group bg-navy rounded-2xl overflow-hidden hover:scale-105 hover:-translate-y-3 transition-all duration-700 cursor-pointer fade-in-up ${
                isVisible ? 'visible' : ''
              } shadow-xl hover:shadow-2xl border border-golden/10 hover:border-golden/30`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(project.link, '_blank')}
            >
              {/* Project Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-light to-navy overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-golden/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink className="w-6 h-6 text-navy" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 space-y-5">
                {/* Project Title - Large and Bold */}
                <h3 className="text-2xl font-bold text-golden group-hover:text-golden-light transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.split(' ').map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-900/80 border border-golden/50 text-golden text-sm font-medium"
                      style={{ borderRadius: '10px' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Description */}
                <p className="text-golden/80 text-sm leading-relaxed">
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
