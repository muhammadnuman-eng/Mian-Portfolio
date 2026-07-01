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
      position: "SENIOR FULL STACK DEVELOPER",
      company: "Linked Matrix",
      period: "Mar 2025 - Present",
      description:
        "Designed and developed scalable web applications using Laravel, Python, React.js, Next.js, and Vue.js, delivering high-performance and user-centric solutions. Built and integrated AI-powered features, LLM applications, chatbots, and automation workflows using OpenAI, LangChain, and vector databases. Architected and maintained RESTful APIs, microservices, and enterprise-grade backend systems. Designed, optimized, and managed MySQL, PostgreSQL, MongoDB, Redis, and Elasticsearch databases. Implemented cloud-native deployments, Docker containerization, Kubernetes orchestration, and CI/CD pipelines on AWS. Collaborated with cross-functional teams, mentored developers, and led end-to-end project execution from requirements gathering to deployment and ongoing maintenance."
    },
    {
      position: "SENIOR FULL STACK DEVELOPER & TEAM LEAD",
      company: "HRDRV",
      period: "Apr 2023 - Feb 2025",
      description:
        "Led the design, development, and delivery of scalable web, mobile, and cloud-native applications using Laravel, React.js, React Native, Vue.js, and Python. Managed and mentored remote development teams through code reviews, technical planning, task allocation, and performance coaching. Architected clean, maintainable, and scalable software solutions following best practices and modern development standards. Developed and integrated RESTful APIs, third-party services, payment gateways, cloud platforms, and AI-powered features. Implemented CI/CD pipelines, Docker-based deployments, cloud infrastructure, and performance optimization strategies. Collaborated closely with stakeholders across requirements analysis, solution architecture, development, testing, deployment, and ongoing support."
    },
    {
      position: "SENIOR FULL STACK DEVELOPER",
      company: "FiveRiver Technologies",
      period: "Jun 2020 - Mar 2023",
      description:
        "Architected and developed scalable full-stack web and mobile applications using Laravel, Vue.js, React.js, React Native, and Python, following clean architecture and coding best practices. Designed and implemented RESTful APIs, microservices, and third-party integrations for high performance, security, and maintainability. Built and integrated AI-powered solutions, LLM-based features, chatbots, and automation workflows. Optimized and managed MySQL, PostgreSQL, MongoDB, Redis, and Elasticsearch databases to improve performance and data reliability. Deployed and maintained applications on AWS using Docker, Kubernetes, and CI/CD pipelines. Led cross-functional and remote development teams overseeing system architecture, project planning, code reviews, and end-to-end product delivery."
    },
    {
      position: "FULL STACK DEVELOPER",
      company: "Sky Soft",
      period: "Aug 2017 - May 2020",
      description:
        "Developed and maintained scalable web and mobile applications using Laravel, Vue.js, React.js, and React Native, delivering responsive and high-performance user experiences. Designed and implemented RESTful APIs, backend services, and third-party integrations for secure and efficient system communication. Built and integrated AI/ML-powered features, intelligent automation workflows, and data-driven solutions. Designed, optimized, and managed MySQL, PostgreSQL, and MongoDB databases with a focus on performance, scalability, and data integrity. Deployed and maintained applications using cloud services, Docker, version control, and CI/CD pipelines. Collaborated with stakeholders and development teams on system architecture, project planning, code reviews, testing, deployment, and ongoing support."
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
    <section id="experience" ref={sectionRef} className="py-0 bg-background relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className={`fade-in-up ${isVisible ? 'visible' : ''} relative max-w-7xl w-full mx-auto bg-card rounded-lg m-4 p-6 lg:p-8 xl:p-10 shadow-xl border-2 border-border overflow-hidden`} style={{ animationDelay: "0.2s" }}>
        {/* Header */}
        <div className={`mb-8 sm:mb-10 lg:mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-6 h-6 hexagon bg-teal animate-scale-in"></div>
            <h2 className="text-lg font-bold text-foreground">Education & Experience</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
          {/* Education */}
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center">
              <div className="w-4 h-4 hexagon bg-teal mr-2"></div>
              EDUCATION
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`bg-card rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3 hover-scale fade-in-up ${isVisible ? 'visible' : ''} shadow-lg hover:shadow-xl transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-foreground">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-foreground/70 text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.school}
                      </div>
                    </div>
                    <div className="flex items-center text-foreground/70 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 text-sm leading-relaxed">
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
            
            <div className="space-y-4 sm:space-y-6">
              {visibleExperiences.map((exp, index) => (
                <div
                  key={index}
                  className={`bg-card rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3 hover-scale fade-in-up ${isVisible ? 'visible' : ''} shadow-lg hover:shadow-xl transition-all duration-300`}
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
                  
                  <p className="text-foreground/70 text-sm leading-relaxed">
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