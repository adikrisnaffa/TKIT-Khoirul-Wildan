import { ReactNode } from "react";
const variants = {
  primary: "bg-coral-500 text-white shadow-soft hover:bg-coral-600",
  secondary: "bg-surface text-sky-700 ring-2 ring-sky-200 hover:bg-sky-50",
  light: "bg-surface text-sky-700 hover:bg-sun-100",
  outline: "bg-transparent text-white ring-2 ring-white/70 hover:bg-white/15",
};
export default function Button({ href, children, variant = "primary", external, className = "" }:
  { href: string; children: ReactNode; variant?: keyof typeof variants; external?: boolean; className?: string }) {
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-bold transition hover:-translate-y-0.5 active:scale-95 ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
