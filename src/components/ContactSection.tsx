import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Dribbble, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import typewriterImage from '@/assets/typewriter-image.jpg';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
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
    if (!formData.name || !formData.email || !formData.message) {
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
          name: '',
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
    <section id="contact" ref={sectionRef} className="py-16 dark-section">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Contact Form */}
          <div className={`space-y-6 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-6 h-6 hexagon bg-golden animate-scale-in"></div>
              <h2 className="text-lg font-bold text-golden">Get In Touch</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-golden text-xs font-medium mb-1">
                    NAME*
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-navy-light border-golden/30 text-golden placeholder:text-golden/50 focus:border-golden text-sm h-9 hover:border-golden/50 transition-colors"
                    placeholder="Your name"
                    required
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label className="block text-golden text-xs font-medium mb-1">
                    EMAIL*
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-navy-light border-golden/30 text-golden placeholder:text-golden/50 focus:border-golden text-sm h-9 hover:border-golden/50 transition-colors"
                    placeholder="your@email.com"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label className="block text-golden text-xs font-medium mb-1">
                  SUBJECT (OPTIONAL)
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-navy-light border-golden/30 text-golden placeholder:text-golden/50 focus:border-golden text-sm h-9 hover:border-golden/50 transition-colors"
                  placeholder="Project subject"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-golden text-xs font-medium mb-1">
                  MESSAGE*
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-navy-light border-golden/30 text-golden placeholder:text-golden/50 focus:border-golden resize-none text-sm hover:border-golden/50 transition-colors"
                  placeholder="Message..."
                  required
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="bg-golden text-navy hover:bg-golden-dark hover:scale-105 transition-all duration-300 px-6 py-2 text-sm font-semibold rounded-full animate-fade-in flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>


          </div>

          {/* Right Content - Image & Footer */}
          <div className={`space-y-6 fade-in-up ${isVisible ? 'visible' : ''}`} style={{animationDelay: '0.3s'}}>
            {/* Contact Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-navy-light to-navy rounded-xl overflow-hidden hover-scale">
              <img 
                src={typewriterImage} 
                alt="Vintage typewriter for contact"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Footer */}
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-golden/70 text-xs">© Numan Akram</p>
              </div>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://github.com/muhammadnuman-eng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-golden hover:text-golden-light transition-colors hover:scale-110 transform duration-200"
                >
                  <Github className="w-5 h-5 animate-bounce" style={{animationDelay: '0.1s'}} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhammad-numan-senior-full-stack-developer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-golden hover:text-golden-light transition-colors hover:scale-110 transform duration-200"
                >
                  <Linkedin className="w-5 h-5 animate-bounce" style={{animationDelay: '0.2s'}} />
                </a>
                <a 
                  href="https://numanakram.site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-golden hover:text-golden-light transition-colors hover:scale-110 transform duration-200"
                >
                  <Dribbble className="w-5 h-5 animate-bounce" style={{animationDelay: '0.3s'}} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;