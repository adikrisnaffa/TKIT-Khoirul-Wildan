import { Star, Cloud, Sun } from "lucide-react";
export const FloatingStar = ({ className = "" }: { className?: string }) => <Star aria-hidden className={`absolute animate-float fill-sun-300 text-sun-400 ${className}`} />;
export const FloatingCloud = ({ className = "" }: { className?: string }) => <Cloud aria-hidden className={`absolute animate-float fill-white text-sky-200 ${className}`} />;
export const FloatingSun = ({ className = "" }: { className?: string }) => <Sun aria-hidden className={`absolute animate-float text-sun-400 ${className}`} />;
