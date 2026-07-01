import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import CircularProgress from "@/components/CircularProgress";
import { PROFILE, PROFILE_SKILLS, TYPEWRITER_TITLES } from "@/data/profile";
import { useTypewriter } from "@/hooks/use-typewriter";
import { downloadResume } from "@/lib/resume";

interface ProfileCardProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

const ProfileCard = ({ variant = "desktop", className = "" }: ProfileCardProps) => {
  const [animateSkills, setAnimateSkills] = useState(false);
  const currentTitle = useTypewriter(TYPEWRITER_TITLES);
  const isDesktop = variant === "desktop";

  useEffect(() => {
    const timer = setTimeout(() => setAnimateSkills(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-card rounded-xl p-6 space-y-6 shadow-xl border-2 border-border overflow-hidden ${
        isDesktop ? "space-y-4 lg:space-y-6 p-4 lg:p-6" : ""
      } ${className}`}
    >
      <div className={`flex justify-center pt-2 ${isDesktop ? "" : ""}`}>
        <div
          className={`rounded-full overflow-hidden border-2 border-teal shadow-lg ${
            isDesktop ? "w-24 lg:w-32 h-24 lg:h-32" : "w-32 h-32"
          }`}
        >
          <img
            src={PROFILE.image}
            alt={PROFILE.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center space-y-1 pb-3 mb-3 border-b border-border">
        <h2 className="text-xl font-bold text-foreground leading-tight">{PROFILE.name}</h2>
        <p className="text-teal text-sm font-medium min-h-[20px] flex items-center justify-center gap-1">
          <span className="inline-block">{currentTitle}</span>
          <span className="typing-cursor text-teal inline-block">|</span>
        </p>
      </div>

      <div className="space-y-3 text-sm pb-2 mb-2 border-b border-border">
        <div className="flex justify-between text-foreground">
          <span className="opacity-70">Residence:</span>
          <span>{PROFILE.residence}</span>
        </div>
        <div className="flex justify-between text-foreground">
          <span className="opacity-70">City:</span>
          <span>{PROFILE.city}</span>
        </div>
        <div className="flex justify-between text-foreground">
          <span className="opacity-70">Age:</span>
          <span>{PROFILE.age}</span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-foreground font-semibold text-sm">Skills</h3>
        <div className="bg-muted rounded-lg p-10 border border-border space-y-4">
          <div className="flex flex-row gap-3 justify-center items-center">
            {PROFILE_SKILLS.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center space-y-1">
                <CircularProgress
                  percentage={skill.level}
                  size={50}
                  animate={animateSkills}
                />
                <span className="text-foreground text-xs">{skill.name}</span>
              </div>
            ))}
          </div>
          <Button
            onClick={downloadResume}
            className="w-full bg-teal hover:bg-teal-dark text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Download className="w-3 h-3" />
            DOWNLOAD CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
