import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Dribbble, Send, Loader2, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import typewriterImage from '@/assets/typewriter-image.jpg';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Use the same port as the current frontend
      const currentPort = window.location.port || '8080';
      const apiUrl = `http://localhost:5000`;
      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast({
          title: "Failed to send message",
          description: result.message || "Please try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      
      // More specific error messages
      let errorMessage = "Please check your internet connection and try again.";
      if (error.message.includes('Failed to fetch')) {
        errorMessage = "Cannot connect to email server. Please ensure the backend is running.";
      } else if (error.message.includes('CORS')) {
        errorMessage = "Cross-origin request blocked. Please check server configuration.";
      }
      
      toast({
        title: "Connection error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 dark-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-32 h-32 hexagon border border-golden/20"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 hexagon border border-golden/20"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 hexagon border border-golden/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - Enhanced Contact Form */}
          <div className={`space-y-8 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-8 h-8 hexagon bg-gradient-to-br from-golden to-golden-dark animate-scale-in shadow-lg"></div>
                <h2 className="text-2xl font-bold text-golden tracking-wide">Get In Touch</h2>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-black text-golden leading-tight">
                  Let's Create Something
                  <br />
                  <span className="text-golden-light">Amazing Together</span>
                </h3>
                <p className="text-golden/80 text-lg leading-relaxed">
                  Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work together.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-navy-light/30 backdrop-blur-sm rounded-2xl p-8 border border-golden/20">
              {/* First Row: First Name + Last Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-golden text-sm font-semibold mb-2">
                    FIRST NAME*
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-navy-light/50 border-golden/30 text-golden placeholder:text-golden/50 focus:border-golden focus:ring-2 focus:ring-golden/20 text-sm h-12 hover:border-golden/50 transition-all duration-300 rounded-xl"
                    placeholder="Your first name"
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-golden text-sm font-semibold mb-2">
                    LAST NAME*
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-navy-light/50 border-golden/30 text-golden placeholder:text-golden/50 focus:border-golden focus:ring-2 focus:ring-golden/20 text-sm h-12 hover:border-golden/50 transition-all duration-300 rounded-xl"
                    placeholder="Your last name"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Second Row: Phone + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-golden text-sm font-semibold mb-2">
                    PHONE*
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-navy-light/50 border-golden/30 text-golden placeholder:text-golden/50 focus:border-golden focus:ring-2 focus:ring-golden/20 text-sm h-12 hover:border-golden/50 transition-all duration-300 rounded-xl"
                    placeholder="Your phone number"
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-golden text-sm font-semibold mb-2">
                    EMAIL*
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-navy-light/50 border-golden/30 text-golden placeholder:text-golden/50 focus:border-golden focus:ring-2 focus:ring-golden/20 text-sm h-12 hover:border-golden/50 transition-all duration-300 rounded-xl"
                    placeholder="your@email.com"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Third Row: Subject */}
              <div className="space-y-2">
                <label className="block text-golden text-sm font-semibold mb-2">
                  SUBJECT (OPTIONAL)
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-navy-light/50 border-golden/30 text-golden placeholder:text-golden/50 focus:border-golden focus:ring-2 focus:ring-golden/20 text-sm h-12 hover:border-golden/50 transition-all duration-300 rounded-xl"
                  placeholder="Project subject"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-golden text-sm font-semibold mb-2">
                  MESSAGE*
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-navy-light/50 border-golden/30 text-golden placeholder:text-golden/50 focus:border-golden focus:ring-2 focus:ring-golden/20 resize-none text-sm hover:border-golden/50 transition-all duration-300 rounded-xl"
                  placeholder="Tell me about your project..."
                  required
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="group bg-gradient-to-r from-golden to-golden-dark text-navy hover:from-golden-dark hover:to-golden hover:scale-105 transition-all duration-300 px-8 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
          {/* Right Content - Enhanced Image & Footer */}
          <div className={`space-y-8 fade-in-up lg:self-end ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.3s'}}>
            {/* Contact Image */}
            <div className="relative group">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-light to-navy rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-700 shadow-2xl">
                <img 
                  src={typewriterImage} 
                  alt="Vintage typewriter for contact"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-golden rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-navy rounded-full animate-pulse opacity-60"></div>
            </div>

            {/* Enhanced Footer */}
            <div className="space-y-6 bg-navy-light/20 backdrop-blur-sm rounded-2xl p-8 border border-golden/20">
              <div className="text-center space-y-4">
                <h4 className="text-golden font-bold text-lg">Let's Connect</h4>
                <p className="text-golden/70 text-sm">
                  Follow me on social media for updates and insights
                </p>
              </div>
              
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://github.com/NumanAkram" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group text-golden hover:text-golden-light transition-all duration-300 p-3 rounded-full hover:bg-golden/10 hover:scale-110"
                >
                  <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhammad-numan-senior-full-stack-developer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group text-golden hover:text-golden-light transition-all duration-300 p-3 rounded-full hover:bg-golden/10 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a 
                  href="https://wa.me/923225106048" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group text-golden hover:text-golden-light transition-all duration-300 p-3 rounded-full hover:bg-golden/10 hover:scale-110"
                >
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                
              </div>
              
              <div className="text-center pt-4 border-t border-golden/20">
                <p className="text-golden/60 text-sm">© 2024 Numan Akram. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;