import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  variant?: 'works' | 'all';
}

const ProjectCard = ({ project, index, isVisible, variant = 'works' }: ProjectCardProps) => {
  const hasLiveLink = Boolean(project.link && project.link !== '#' && project.link !== '');
  const isAllVariant = variant === 'all';

  const cardClass = isAllVariant
    ? 'group bg-dark-gray-light rounded-2xl overflow-hidden hover:scale-105 hover:-translate-y-3 transition-all duration-700 fade-in-up shadow-xl hover:shadow-2xl border border-dark-gray-dark/50 hover:border-teal/50'
    : 'group bg-card rounded-2xl overflow-hidden hover:scale-105 hover:-translate-y-3 transition-all duration-700 fade-in-up shadow-xl hover:shadow-2xl border border-border hover:border-teal/50';

  const imageWrapClass = isAllVariant
    ? 'aspect-[4/3] bg-gradient-to-br from-dark-gray-dark to-dark-gray overflow-hidden relative'
    : 'aspect-[4/3] bg-gradient-to-br from-muted to-card overflow-hidden relative';

  const imageOverlayClass = isAllVariant
    ? 'absolute inset-0 bg-gradient-to-t from-dark-gray-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'
    : 'absolute inset-0 bg-gradient-to-t from-muted/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500';

  const contentPadding = isAllVariant ? 'p-6 space-y-4' : 'p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4';
  const titleClass = isAllVariant
    ? 'text-2xl font-bold text-foreground group-hover:text-teal transition-colors leading-tight'
    : 'text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-teal transition-colors leading-tight';

  const badgeClass = isAllVariant
    ? 'px-3 py-1 bg-dark-gray-dark/80 border border-teal/50 text-teal text-sm font-medium'
    : 'px-3 py-1 bg-muted border border-teal/40 text-teal text-sm font-medium';

  const descriptionClass = isAllVariant
    ? 'text-foreground/70 text-sm leading-relaxed'
    : 'text-foreground/70 text-base leading-relaxed';

  return (
    <div
      className={`${cardClass} ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={imageWrapClass}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={imageOverlayClass} />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          {hasLiveLink ? (
            <div className="bg-teal/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
          ) : (
            <div className="transform scale-75 group-hover:scale-100 transition-transform duration-500">
              <span className="text-yellow-400 font-bold text-xl">Coming Soon</span>
            </div>
          )}
        </div>
        {project.category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-card/90 backdrop-blur-sm border border-teal/40 text-teal rounded-lg">
            {project.category}
          </span>
        )}
      </div>

      <div className={contentPadding}>
        <h3 className={titleClass}>{project.title}</h3>

        <div className="flex flex-wrap items-center gap-2">
          {project.techStack.split(' ').map((tech, idx) => (
            <span
              key={idx}
              className={`inline-flex w-fit ${badgeClass}`}
              style={{ borderRadius: '10px' }}
            >
              {tech}
            </span>
          ))}
        </div>

        <p className={`${descriptionClass} line-clamp-3`}>
          {project.description || `A modern ${project.category} project built with cutting-edge technology and industry best practices.`}
        </p>

        {hasLiveLink && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              className="group/btn bg-teal text-white hover:bg-teal-dark hover:scale-105 transition-all duration-300 px-5 py-2 text-sm font-semibold rounded-full shadow-lg flex items-center gap-2"
            >
              Live Demo
              <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
