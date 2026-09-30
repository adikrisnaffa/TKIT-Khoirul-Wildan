import { Image as ImageIcon } from "lucide-react";
// Jika `src` kosong, tampil placeholder. Ganti src di lib/data.ts.
export default function PlaceholderImage({ src, alt, label, className = "" }: { src?: string; alt: string; label?: string; className?: string }) {
  if (src) return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  return (
    <div role="img" aria-label={alt} className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-sky-100 via-sun-100 to-coral-100 text-sky-600 ${className}`}>
      <ImageIcon className="h-8 w-8" aria-hidden />
      {label && <span className="px-3 text-center text-sm font-bold">{label}</span>}
    </div>
  );
}
