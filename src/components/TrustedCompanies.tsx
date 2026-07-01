import { TRUSTED_COMPANIES } from "@/data/profile";

interface TrustedCompaniesProps {
  centered?: boolean;
  className?: string;
}

const TrustedCompanies = ({ centered = false, className = "" }: TrustedCompaniesProps) => (
  <div className={`space-y-4 w-full ${className}`}>
    <p className={`text-foreground/70 text-sm ${centered ? "text-center" : ""}`}>
      Trusted companies
    </p>
    <div className={`relative w-full overflow-hidden ${centered ? "" : "pr-16 ml-4 mr-4"}`}>
      <div
        className={`flex items-center animate-scroll-left ${
          centered ? "gap-6" : "gap-8 pl-16"
        }`}
      >
        {[...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES].map((company, index) => (
          <span
            key={`${company}-${index}`}
            className="text-foreground/70 text-base font-medium whitespace-nowrap"
          >
            {company}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TrustedCompanies;
