import { Button } from "@/components/ui/button";
import { Check, Home, Send } from "lucide-react";
import { HERO_CONTENT } from "@/data/profile";
import { scrollToSection } from "@/lib/scroll";

interface HeroContentProps {
  centered?: boolean;
  headingClass?: string;
  descriptionClass?: string;
  buttonClass?: string;
}

const HeroContent = ({
  centered = false,
  headingClass = "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl",
  descriptionClass = "text-base sm:text-lg max-w-2xl",
  buttonClass = "px-8 py-3",
}: HeroContentProps) => (
  <>
    <div className={centered ? "flex justify-center" : ""}>
      <button
        type="button"
        className={`flex items-center gap-2 rounded-lg px-4 py-2 bg-muted/30 hover:bg-muted/50 transition-all duration-300 w-fit ${
          centered ? "mx-auto" : ""
        }`}
      >
        <div className="w-0.5 h-4 bg-teal" />
        <Home className="w-4 h-4 text-teal" />
        <span className="text-teal text-xs font-semibold uppercase tracking-wider">
          {HERO_CONTENT.badge}
        </span>
      </button>
    </div>

    <div className={`space-y-2 ${centered ? "text-center" : ""}`}>
      <h1 className={`${headingClass} font-black text-foreground leading-tight`}>
        {HERO_CONTENT.titleLine1}
      </h1>
      <h1 className={`${headingClass} font-black text-teal leading-tight`}>
        {HERO_CONTENT.titleLine2}
      </h1>
    </div>

    <p
      className={`text-foreground/70 leading-relaxed ${descriptionClass} ${
        centered ? "text-center px-2 max-w-md" : "pl-2"
      }`}
    >
      I'm a{" "}
      <span className="font-bold text-foreground">Senior Full Stack Developer & Team Lead</span> with{" "}
      <span className="font-bold text-foreground">10+ years of experience</span> building scalable
      digital products — from architecture to deployment.
    </p>

    <div className={`flex flex-col gap-2 ${centered ? "items-center px-2" : "pl-2"}`}>
      {HERO_CONTENT.highlights.map((item) => (
        <div
          key={item}
          className={`flex items-center gap-2 text-foreground/70 ${
            centered ? "justify-center" : ""
          }`}
        >
          <Check className="w-5 h-5 text-teal flex-shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>

    <div className={centered ? "flex justify-center" : ""}>
      <Button
        onClick={() => scrollToSection("contact")}
        className={`bg-teal hover:bg-teal-dark text-white font-semibold rounded-lg flex items-center gap-2 transition-all duration-300 ${buttonClass}`}
      >
        <Send className="w-4 h-4" />
        {HERO_CONTENT.cta}
      </Button>
    </div>
  </>
);

export default HeroContent;
