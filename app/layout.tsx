import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import { schoolInfo } from "@/lib/data";

const display = Baloo_2({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Nunito({ subsets: ["latin"], variable: "--font-body" });

const title = "TK Khoirul Wildan — Tempat Tumbuh, Bermain, dan Belajar";
const description = "TK Khoirul Wildan adalah tempat pendidikan anak usia dini yang menyenangkan, aman, dan penuh kasih sayang untuk membantu anak tumbuh, belajar, dan berkembang.";

export const metadata: Metadata = {
  metadataBase: new URL(schoolInfo.siteUrl),
  alternates: { canonical: "/" },
  title, description,
  icons: { icon: "/icons/favicon.svg" }, // TODO: Replace with actual school logo
  openGraph: { title, description, type: "website", locale: "id_ID", siteName: "TK Khoirul Wildan" },
};

// Menentukan tema sebelum halaman tampil, supaya tidak berkedip.
// Gelap: 18.00 - 05.59. Terang: 06.00 - 17.59. Pilihan manual tetap diutamakan.
const themeScript = `(function(){try{var t=localStorage.getItem('theme'),h=new Date().getHours();var d=t==='dark'||(t!=='light'&&(h>=18||h<6));document.documentElement.classList.toggle('dark',d)}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}