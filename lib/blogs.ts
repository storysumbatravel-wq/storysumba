// lib/blogs.ts

export type BlogItem = {
  id: number;
  slug: { id: string; en: string }; // Ubah slug menjadi objek
  title: { id: string; en: string };
  excerpt: { id: string; en: string };
  content: { id: string; en: string };
  image: string;
  date: string;
};

export const blogs: BlogItem[] = [
  {
    id: 1,
    slug: {
      id: "milky-way-sumba",
      en: "sumba-milky-way-guide",
    },
    title: {
      id: "Milky Way di Sumba",
      en: "Milky Way in Sumba",
    },
    excerpt: {
      id: "Destinasi wisata paling ikonik di Sumba.",
      en: "The most iconic destination in Sumba.",
    },
    content: {
      id: `Milky Way di Sumba merupakan salah satu daya tarik alam yang memukau bagi para pecinta astrofotografi dan wisata alam. Minimnya polusi cahaya, hamparan savana yang luas, serta langit malam yang bersih membuat galaksi Bima Sakti dapat terlihat jelas pada malam hari.`,
      en: `The Milky Way in Sumba is one of the island’s most captivating natural attractions, especially for astrophotography enthusiasts and nature lovers. With minimal light pollution and clear skies, the Milky Way is vividly visible.`,
    },
    image: "/images/blog-1.jpg",
    date: "2025-01-10",
  },
  {
    id: 2,
    slug: {
      id: "tips-travels",
      en: "tips-travels",
    },
    title: {
      id: "Tips Liburan Nyaman di Sumba",
      en: "Tips for a Comfortable Trip in Sumba",
    },
    excerpt: {
      id: "Persiapan penting agar liburan Anda di Sumba aman dan menyenangkan.",
      en: "Essential preparation tips for a safe and enjoyable Sumba trip.",
    },
    content: {
      id: `Liburan nyaman di Sumba dapat terwujud dengan perencanaan yang tepat sebelum berangkat. Memilih waktu kunjungan pada musim kemarau dan transportasi yang andal sangat membantu kelancaran perjalanan.`,
      en: `A comfortable holiday in Sumba can be achieved through proper planning. Choosing the right season and reliable transportation will greatly enhance your travel experience.`,
    },
    image: "/images/blog-2.jpg",
    date: "2025-01-18",
  },
  {
    id: 3,
    slug: {
      id: "time-travels",
      en: "time-travels",
    },
    title: {
      id: "Waktu Terbaik Berkunjung ke Sumba",
      en: "Best Time to Visit Sumba",
    },
    excerpt: {
      id: "Kenali musim terbaik untuk menikmati keindahan Sumba.",
      en: "Learn the best season to enjoy Sumba at its finest.",
    },
    content: {
      id: `Waktu terbaik untuk berkunjung ke Sumba adalah pada bulan April hingga Oktober, saat musim kemarau berlangsung. Cuaca cenderung cerah, ideal untuk menikmati pantai dan savana.`,
      en: `The best time to visit Sumba is between April and October during the dry season. The weather is sunny, making it perfect for exploring beaches and savannas.`,
    },
    image: "/images/blog-3.jpg",
    date: "2025-01-25",
  },
];
