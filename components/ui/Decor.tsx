import { ReactNode } from "react";
import { Star, Cloud, Sun, Moon } from "lucide-react";

// Terang: tampil `day`. Gelap: berganti ke `night` dengan animasi putar + memudar.
function Swap({ day, night, className }: { day: ReactNode; night: ReactNode; className: string }) {
  return (
    <span aria-hidden className={`absolute animate-float ${className}`}>
      <span className="absolute inset-0 transition-all duration-700 dark:rotate-90 dark:scale-0 dark:opacity-0">{day}</span>
      <span className="absolute inset-0 -rotate-90 scale-0 opacity-0 transition-all duration-700 dark:rotate-0 dark:scale-100 dark:opacity-100">{night}</span>
    </span>
  );
}
const full = "h-full w-full";
export const FloatingSun = ({ className = "" }: { className?: string }) => (
  <Swap className={className} day={<Sun className={`${full} text-sun-400`} />} night={<Moon className={`${full} fill-sun-300 text-sun-400`} />} />
);
export const FloatingCloud = ({ className = "" }: { className?: string }) => (
  <Swap className={className} day={<Cloud className={`${full} fill-white text-sky-200`} />} night={<Star className={`${full} fill-sun-300 text-sun-400`} />} />
);
export const FloatingStar = ({ className = "" }: { className?: string }) => (
  <Star aria-hidden className={`absolute animate-float fill-sun-300 text-sun-400 ${className}`} />
);
