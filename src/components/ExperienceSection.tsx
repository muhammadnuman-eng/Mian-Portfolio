import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      degree: "INTERMEDIATE IN (ICS)",
      school: "SKILLS GROUP OF COLLEGE",
      period: "Sep 2013 - Aug 2015",
      description: "Focused study of computer science basics including programming, logic building, and web fundamentals. Completed several academic projects and gained strong analytical and problem-solving skills that built a solid foundation for higher studies in computer science."
    }
,    
    {
      degree: "BACHELOR'S DEGREE IN COMPUTER SCIENCE",
      school: "UMT - University of Management and Technology",
      period: "Sep 2015 - Aug 2019",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development. Graduated with honors and completed multiple projects demonstrating practical application of theoretical concepts."
    }
  ];

  const experience = [
    {
      position: "FULL STACK LEAD ENGINEER",
      company: "Cognita-Innovative Solutions",
      period: "Jan 2024 - Present",
      description:
        "Overseeing the development of enterprise-grade web applications using Next.js, Laravel, and AWS. Responsible for technical architecture, mentoring engineers, and driving innovation across product development."
    },
    {
      position: "TECHNICAL TEAM LEAD",
      company: "Jan's Group",
      period: "Jan 2022 - Dec 2023",
      description:
        "Managed a team of engineers building SaaS-based business solutions. Implemented modern DevOps practices, improved system scalability, and guided developers on clean architecture and testing strategies."
    },
    {
      position: "SENIOR FULL STACK ENGINEER",
      company: "MDTS",
      period: "Aug 2020 - Dec 2021",
      description:
        "Led the design and development of multi-tenant platforms. Worked on real-time dashboards, authentication flows, and database optimization, ensuring seamless integration between frontend and backend systems."
    },
    {
      position: "SOFTWARE ENGINEER (FULL STACK)",
      company: "Dg Optimizer",
      period: "Apr 2019 - Jul 2020",
      description:
        "Developed performance-driven web applications using React and Laravel. Focused on optimizing APIs, improving frontend responsiveness, and collaborating closely with the design team for better user experience."
    },
    {
      position: "JUNIOR FULL STACK DEVELOPER",
      company: "Elefta Inc",
      period: "Jan 2017 - Mar 2019",
      description:
        "Built and maintained internal tools and APIs using JavaScript, Node.js, and MySQL. Assisted senior developers in creating scalable architectures and learned deployment automation and version control best practices."
    }
    
   
   
   
  ];
  

  const [showAllExperience, setShowAllExperience] = useState(false);
  const visibleExperiences = showAllExperience ? experience : experience.slice(0, 2);

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

  return (
    <section id="experience" ref={sectionRef} className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Header */}
        <div className={`mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-6 h-6 hexagon bg-teal animate-scale-in"></div>
            <h2 className="text-lg font-bold text-foreground">Education & Experience</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center">
              <div className="w-4 h-4 hexagon bg-teal mr-2"></div>
              EDUCATION
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`bg-card rounded-xl p-4 space-y-3 hover-scale fade-in-up ${isVisible ? 'visible' : ''} shadow-lg hover:shadow-xl transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-foreground">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-foreground/70 text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.school}
                      </div>
                    </div>
                    <div className="flex items-center text-foreground/70 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 text-xs leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center">
              <div className="w-4 h-4 hexagon bg-teal mr-2"></div>
              EXPERIENCE
            </h3>
            
            <div className="space-y-6">
              {visibleExperiences.map((exp, index) => (
                <div
                  key={index}
                  className={`bg-card rounded-xl p-4 space-y-3 hover-scale fade-in-up ${isVisible ? 'visible' : ''} shadow-lg hover:shadow-xl transition-all duration-300`}
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-foreground">
                        {exp.position}
                      </h4>
                      <div className="flex items-center text-foreground/70 text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center text-foreground/70 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 text-xs leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
              {experience.length > 2 && (
                <div className="pt-2 flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-teal text-foreground hover:bg-teal-dark border-teal"
                    aria-expanded={showAllExperience}
                    aria-controls="experience-list"
                    onClick={() => setShowAllExperience((prev) => !prev)}
                  >
                    {showAllExperience ? 'See less' : 'See more'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;