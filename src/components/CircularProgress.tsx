interface CircularProgressProps {
  percentage: number;
  size?: number;
  animate?: boolean;
}

const CircularProgress = ({ percentage, size = 80, animate = true }: CircularProgressProps) => {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        className="circular-progress"
        width={size}
        height={size}
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-muted opacity-30"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={animate ? offset : circumference}
          className="text-teal"
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1.5s ease-in-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-foreground font-bold text-sm">{percentage}%</span>
      </div>
    </div>
  );
};

export default CircularProgress;
