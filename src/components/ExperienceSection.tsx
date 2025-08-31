import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      degree: "BACHELOR'S DEGREE IN COMPUTER SCIENCE",
      school: "UMT - University of Management and Technology",
      period: "Sep 2015 - Aug 2019",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development. Graduated with honors and completed multiple projects demonstrating practical application of theoretical concepts."
    }
  ];

  const experience = [
    {
      position: "FULL STACK LEAD DEVELOPER",
      company: "Mico Data Tech (MDT)",
      period: "Sep 2020 - Dec 2023",
      description: "Led development team in creating scalable web applications using modern technologies. Managed full-stack development projects, mentored junior developers, and implemented best practices for code quality and deployment automation."
    },
    {
      position: "FULL STACK DEVELOPER",
      company: "QMMC",
      period: "May 2021 - April 2023",
      description: "Developed scalable applications using MEAN stack (MongoDB, Express.js, Angular, Node.js) with clean architecture. Built real-time dashboards using WebSockets and integrated external services (Google Maps, Twilio, Stripe, PayPal). Managed Git workflows and deployed SaaS applications on AWS/Vercel/DigitalOcean using Docker with CI/CD pipelines via GitHub Actions and Jenkins."
    }
  ];

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

  return (
    <section id="experience" ref={sectionRef} className="py-16 golden-gradient">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Header */}
        <div className={`mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-6 h-6 hexagon bg-navy animate-scale-in"></div>
            <h2 className="text-lg font-bold text-navy">Education & Experience</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-lg font-bold text-navy mb-6 flex items-center">
              <div className="w-4 h-4 hexagon bg-navy mr-2"></div>
              EDUCATION
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`bg-navy rounded-xl p-4 space-y-3 hover-scale fade-in-up ${isVisible ? 'visible' : ''} shadow-lg hover:shadow-xl transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-golden">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-golden/80 text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.school}
                      </div>
                    </div>
                    <div className="flex items-center text-golden/80 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <p className="text-golden/70 text-xs leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className={`fade-in-up ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.2s'}}>
            <h3 className="text-lg font-bold text-navy mb-6 flex items-center">
              <div className="w-4 h-4 hexagon bg-navy mr-2"></div>
              EXPERIENCE
            </h3>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`bg-navy rounded-xl p-4 space-y-3 hover-scale fade-in-up ${isVisible ? 'visible' : ''} shadow-lg hover:shadow-xl transition-all duration-300`}
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-golden">
                        {exp.position}
                      </h4>
                      <div className="flex items-center text-golden/80 text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center text-golden/80 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-golden/70 text-xs leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;