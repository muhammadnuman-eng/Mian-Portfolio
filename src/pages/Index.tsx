import Navigation from "@/components/Navigation";
import Sidebars from "@/components/Sidebars";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection";
import WorksSection from "@/components/WorksSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ProfileCard from "@/components/ProfileCard";
import { useCustomCursor } from "@/hooks/use-custom-cursor";

const Index = () => {
  const { cursorPosition, isHovering } = useCustomCursor();

  return (
    <div className="min-h-screen bg-background">
      <div
        className={`custom-cursor ${isHovering ? "hover" : ""}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transition: "none",
        }}
      />

      <Navigation />
      <Sidebars />

      <div className="lg:ml-[352px] lg:mr-[120px]">
        <div className="lg:hidden m-4 fade-in-up visible">
          <ProfileCard variant="mobile" />
        </div>

        <HeroSection />
        <AboutSection />
        <TechnicalSkillsSection />
        <WorksSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
