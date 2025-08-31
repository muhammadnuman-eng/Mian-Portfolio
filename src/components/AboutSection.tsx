import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'DEVELOPMENT', level: 90 },
    { name: 'WEBFLOW', level: 75 },
    { name: 'DEPLOYMENTS/DEVOPS', level: 85 },
    { name: 'AI MODEL TRAINING', level: 90 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateSkills(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 dark-section">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-6 h-6 hexagon bg-golden animate-scale-in"></div>
              <h2 className="text-lg font-bold text-golden">About me</h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-black text-golden leading-tight">
                MY PASSION IS <span className="text-golden-dark">DESIGNING & DEVELOPING</span>
                <br />
                THE MEMORABLE WEBSITES THAT CONNECT
                <br />
                AND CONVERT
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Hi, I'm Numan Akram - a passionate Full Stack Developer with 8+ years of experience in creating innovative digital solutions. I specialize in building scalable web applications using modern technologies like React, Node.js, and Python. My expertise extends to DevOps practices, cloud deployment, and cutting-edge AI/ML integration. I believe in crafting not just functional websites, but memorable digital experiences that drive real business results and create lasting connections with users.
              </p>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className={`space-y-6 fade-in-up ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.3s'}}>
            {skills.map((skill, index) => (
              <div key={skill.name} className={`space-y-2 hover-scale fade-in-up ${isVisible ? 'visible' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-between items-center">
                  <span className="text-golden font-semibold text-xs tracking-wider">
                    {skill.name}
                  </span>
                  <span className="text-golden font-bold text-sm">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="h-1.5 bg-navy-light rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-golden to-golden-dark progress-bar ${
                      animateSkills ? 'animate' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;