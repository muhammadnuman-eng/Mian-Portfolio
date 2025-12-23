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
          setTimeout(() => setAnimateSkills(true), 300);
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
    <section id="about" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 hexagon border border-teal/20"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 hexagon border border-teal/20"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 hexagon border border-teal/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - About */}
          <div className={`space-y-8 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-8 h-8 hexagon bg-gradient-to-br from-teal to-teal-dark animate-scale-in shadow-lg"></div>
              <h2 className="text-xl font-bold text-foreground tracking-wide">About me</h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black text-foreground leading-tight">
                MY PASSION IS <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">DESIGNING & DEVELOPING</span>
                <br />
                THE MEMORABLE WEBSITES THAT CONNECT
                <br />
                AND CONVERT
              </h3>

              {/* Paragraphs moved below the grid for full-width layout */}
            </div>
          </div>

          {/* Right Content - Enhanced Skills */}
          <div className={`space-y-8 fade-in-up ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.3s'}}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Technical Skills</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-teal to-teal-dark mx-auto rounded-full"></div>
            </div>

            {skills.map((skill, index) => (
              <div key={skill.name} className={`group space-y-3 hover-scale fade-in-up ${isVisible ? 'visible' : ''} p-4 rounded-xl hover:bg-teal/5 transition-all duration-300`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80 font-semibold text-sm tracking-wider group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-foreground/80 font-bold text-base group-hover:scale-110 transition-transform duration-300">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 bg-muted rounded-full overflow-hidden shadow-inner">
                  <div
                    className={`h-full bg-gradient-to-r from-teal via-teal-light to-teal-dark progress-bar shadow-lg ${
                      animateSkills ? 'animate' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      width: `${skill.level}%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width description block below the grid */}
        <div className={`mt-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className='w-full space-y-4'>
            <p className="text-base text-foreground/70 leading-relaxed">
              Hi, I'm <span className="font-semibold text-foreground">Numan Akram</span> - a Senior Full Stack Developer with 8+ years of experience, known for building scalable, user-centric web and cloud solutions.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed">
              Skilled in Nuxt.js, React.js, Angular, Vue.js, Node.js, Nest.js, Laravel, and PHP. Highly proficient in front-end development using JavaScript, TypeScript, Tailwind CSS, Bootstrap, and modern UI/UX design principles.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed">
              Expert in the MERN stack (MongoDB, Express.js, React.js, Node.js), RESTful and GraphQL APIs, and working with databases like MongoDB, PostgreSQL, MySQL, and Microsoft SQL Server.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed">
              Strong in Python, using Django, Flask, and scripting for automation, data processing, and backend services. Experienced in AI/ML development using Python libraries like TensorFlow, scikit-learn, and Pandas, with a growing focus on Large Language Models (LLMs) and their integration via OpenAI API and LangChain.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed">
              Capable of building intelligent applications that utilize natural language processing (NLP), embeddings, vector databases, and prompt engineering.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed">
              Well-versed in deploying applications across AWS, Azure, GCP, and Firebase. Skilled in Docker, container orchestration, and CI/CD pipelines using GitHub Actions, GitLab CI/CD, Jenkins, and Azure DevOps. Confident with Git-based workflows (GitHub, Bitbucket, GitLab).
            </p>
            <p className="text-base text-foreground/70 leading-relaxed">
              Passionate about creating high-quality software, secure architecture, and keeping up with cutting-edge technologies. Strong communicator and collaborator in cross-functional teams, delivering clean, maintainable, and future-ready code.
            </p>
          </div>
        </div>
      </div>

       
    </section>
  );
};

export default AboutSection;