import { Smile, HeartHandshake, ShieldCheck, Sprout, Palette, MoonStar, BookOpen, Brush, Puzzle, Users, Landmark, Bike, type LucideIcon } from "lucide-react";

// TODO: Replace with actual school information
export const schoolInfo = {
  name: "TK Khoirul Wildan",
  tagline: "Tempat Tumbuh, Bermain, dan Belajar dengan Bahagia",
  description: "Memberikan pengalaman belajar yang menyenangkan, penuh kasih sayang, dan membangun karakter anak sejak usia dini.",
  whatsapp: "628992326421", // TODO: format 62xxxxxxxxxx tanpa +
  address: "Jl. Angsana Indah Raya, Legok, Kec. Legok, Kabupaten Tangerang, Banten 15820", // TODO: Replace with actual school information
  email: "info@tkkhoirulwildan.sch.id", // TODO: Replace with actual school information
  hours: "Senin – Jumat, 07.30 – 11.30", // TODO: Replace with actual school information
  instagram: "https://www.instagram.com/tkit_khoirulwildan", // TODO: Replace with actual school information
  facebook: "https://www.facebook.com/share/18GqbmLcqY/",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8306854638686!2d106.58885057586934!3d-6.285974493702974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fde578fb0c09%3A0x9a176384c3b5b1bc!2sTKIT%20KHOIRUL%20WILDAN!5e0!3m2!1sid!2sid!4v1790741950981!5m2!1sid!2sid",// TODO: paste Google Maps embed URL (src of the iframe)
};



export const navigation = [
  { label: "Beranda", href: "#beranda" }, { label: "Tentang Kami", href: "#tentang" },
  { label: "Program", href: "#program" }, { label: "Fasilitas", href: "#fasilitas" },
  { label: "Galeri", href: "#galeri" }, { label: "Informasi", href: "#informasi" }, { label: "Kontak", href: "#kontak" },
];

// TODO: Replace with actual school information
export const stats = [
  { value: "10+", label: "Tahun Pengalaman" }, { value: "100+", label: "Anak" },
  { value: "10+", label: "Guru & Tenaga Pendidik" }, { value: "100%", label: "Peduli Anak" },
];

type Item = { title: string; description: string; icon: LucideIcon; tone: "sky" | "sun" | "coral" | "leaf" };

export const features: Item[] = [
  { title: "Pembelajaran Menyenangkan", description: "Belajar lewat bermain, cerita, dan eksplorasi agar anak selalu antusias.", icon: Smile, tone: "sun" },
  { title: "Guru yang Peduli", description: "Pendamping yang sabar dan hangat untuk setiap anak.", icon: HeartHandshake, tone: "coral" },
  { title: "Lingkungan Aman & Nyaman", description: "Ruang belajar yang bersih, ramah, dan mendukung tumbuh kembang.", icon: ShieldCheck, tone: "leaf" },
  { title: "Pengembangan Karakter", description: "Menanamkan kejujuran, empati, dan kemandirian sejak dini.", icon: Sprout, tone: "leaf" },
  { title: "Aktivitas Kreatif", description: "Menggambar, mewarnai, dan berkarya untuk mengasah imajinasi.", icon: Palette, tone: "sky" },
  { title: "Nilai-Nilai Islami", description: "Pembiasaan doa, akhlak baik, dan cinta kepada sesama.", icon: MoonStar, tone: "sky" },
];

export const programs: Item[] = [
  { title: "Pembelajaran Tematik", description: "Tema sehari-hari yang mengenalkan dunia sekitar secara utuh.", icon: BookOpen, tone: "sky" },
  { title: "Seni & Kreativitas", description: "Mewarnai, menggambar, dan kerajinan tangan.", icon: Brush, tone: "coral" },
  { title: "Permainan Edukatif", description: "Puzzle dan permainan yang melatih logika dan fokus.", icon: Puzzle, tone: "sun" },
  { title: "Pendidikan Karakter", description: "Pembiasaan sikap baik dalam kegiatan sehari-hari.", icon: Users, tone: "leaf" },
  { title: "Kegiatan Keagamaan", description: "Doa harian, hafalan surat pendek, dan praktik ibadah sederhana.", icon: Landmark, tone: "sky" },
  { title: "Aktivitas Motorik", description: "Bermain di luar ruangan untuk melatih motorik kasar dan halus.", icon: Bike, tone: "leaf" },
];

// Ganti `src` dengan path gambar, mis. "/images/menggambar.jpg". Kosong = placeholder.
export const activities = ["Menggambar", "Mewarnai", "Membaca", "Bermain Bersama", "Kegiatan Outdoor", "Belajar Agama", "Membuat Kerajinan", "Bernyanyi"]
  .map((title) => ({ title, src: "", alt: `Anak-anak sedang ${title.toLowerCase()} di TK Khoirul Wildan` }));

export const gallery = ["Kegiatan Belajar", "Outing", "Pentas Seni", "Hari Kemerdekaan", "Kegiatan Keagamaan", "Bermain Bersama"]
  .map((title) => ({ title, src: "", alt: `Dokumentasi ${title} TK Khoirul Wildan` }));

// TODO: Replace with real parent testimonials
export const testimonials = [
  { quote: "Anak saya sangat senang sekolah di TK Khoirul Wildan. Setiap pulang sekolah selalu bercerita tentang kegiatan yang dilakukan bersama guru dan teman-temannya.", name: "Orang Tua Siswa" },
  { quote: "Dulu anak saya suka nangis kalau ditinggal. Sekarang malah dia yang ngingetin, \"Ayo Bunda, nanti telat.\" Gurunya sabar banget, nggak pernah main marah.", name: "Orang Tua Siswa" },
  { quote: "Yang saya suka, di rumah dia jadi hafal doa makan sama doa mau tidur. Bahkan kadang saya yang ketinggalan, dia yang ingetin. Alhamdulillah.", name: "Orang Tua Siswa" },
];

export const waLink = (msg = "Assalamu'alaikum, saya ingin bertanya tentang pendaftaran di TK Khoirul Wildan.") =>
  `https://wa.me/${schoolInfo.whatsapp}?text=${encodeURIComponent(msg)}`;

export const tones = {
  sky: { bg: "bg-sky-100", text: "text-sky-600" }, sun: { bg: "bg-sun-100", text: "text-coral-600" },
  coral: { bg: "bg-coral-100", text: "text-coral-600" }, leaf: { bg: "bg-leaf-100", text: "text-leaf-600" },
};
