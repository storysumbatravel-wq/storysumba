"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/ContectLanguage";
import { blogs } from "@/lib/blogs";
import { motion, Variants } from "framer-motion";
import { BiFile, BiCheckShield } from "react-icons/bi";

const wa = process.env.NEXT_PUBLIC_WA_NUMBER;

type LangText = {
  id: string;
  en: string;
};

type LangList = {
  id: string[];
  en: string[];
};

type PriceItem = {
  pax: string;
  price: string;
};

type PackageDetail = {
  description: LangText;
  facilities: LangList;
  exclude: LangList;
  prices: PriceItem[];
};

type PackageItem = {
  id: number;
  name: string;
  days: string;
  price: string;
  image: string;
};

/* ================= DATA PAKET ================= */
const packages = [
  {
    id: 1,
    name: "3D2N",
    days: "3 Days 2 Nights",
    price: "IDR 3,250,000",
    image: "/images/paket-3.jpg",
  },
  {
    id: 2,
    name: "4D3N",
    days: "4 Days 3 Nights",
    price: "IDR 3,550,000",
    image: "/images/paket-4.jpg",
  },
  {
    id: 3,
    name: "5D4N",
    days: "5 Days 4 Nights",
    price: "IDR 4,500,000",
    image: "/images/paket-5.jpg",
  },
  {
    id: 4,
    name: "6D5N",
    days: "6 Days 5 Nights",
    price: "IDR 5,000,000",
    image: "/images/paket-6.jpg",
  },
  {
    id: 5,
    name: "7D6N",
    days: "7 Days 6 Nights",
    price: "IDR 7,300,000",
    image: "/images/paket-7.jpg",
  },
];

const packageDetails: Record<number, PackageDetail> = {
  1: {
    description: {
      id: "Paket wisata 3 hari 2 malam dengan destinasi unggulan, cocok untuk liburan singkat.",
      en: "3 days 2 nights tour package, perfect for a short getaway.",
    },
    facilities: {
      id: [
        "Hotel bintang 3",
        "Transport Hiace (AC, Free Wifi, Air Mineral, Cool Box, TV Plafon)",
        "Makan 3 kali sehari",
        "Dokumentasi (Drone)",
        "Asuransi perjalanan",
        "Guide profesional",
        "Tiket wisata",
      ],
      en: [
        "3-star hotel",
        "Transport Hiace (AC, Free Wifi, Mineral Water, Cool Box, TV Plafon)",
        "Free meals 3 times a day",
        "Drone documentation",
        "Travel insurance",
        "Professional guide",
        "Entrance tickets",
      ],
    },
    exclude: {
      id: ["Tiket pesawat", "Keperluan Pribadi"],
      en: ["Flight tickets", "Personal expenses"],
    },
    prices: [
      { pax: "2 Pax", price: "IDR 4,200,000 / pax" },
      { pax: "3 Pax", price: "IDR 3,650,000 / pax" },
      { pax: "4 Pax", price: "IDR 2,880,000 / pax" },
      { pax: "5 Pax", price: "IDR 2,820,000 / pax" },
      { pax: "6 Pax", price: "IDR 3,370,000 / pax" },
      { pax: "7–12 Pax", price: "IDR 2,200,000 / pax" },
    ],
  },

  2: {
    description: {
      id: "Paket wisata 4 hari 3 malam dengan itinerary lebih lengkap dan santai.",
      en: "4 days 3 nights package with more complete itinerary.",
    },
    facilities: {
      id: [
        "Hotel bintang 3",
        "Transport Hiace (AC, Free Wifi, Air Mineral, Cool Box, TV Plafon)",
        "Makan 3 kali sehari",
        "Dokumentasi (Drone)",
        "Asuransi perjalanan",
        "Guide profesional",
        "Tiket wisata",
      ],
      en: [
        "3-star hotel",
        "Transport Hiace (AC, Free Wifi, Mineral Water, Cool Box, TV Plafon)",
        "Free meals 3 times a day",
        "Drone documentation",
        "Travel insurance",
        "Professional guide",
        "Entrance tickets",
      ],
    },
    exclude: {
      id: ["Tiket pesawat", "Keperluan Pribadi"],
      en: ["Flight tickets", "Personal expenses"],
    },
    prices: [
      { pax: "2 Pax", price: "IDR 5,800,000 / pax" },
      { pax: "3 Pax", price: "IDR 5,130,000 / pax" },
      { pax: "4 Pax", price: "IDR 4,040,000 / pax" },
      { pax: "5 Pax", price: "IDR 3,990,000 / pax" },
      { pax: "6 Pax", price: "IDR 3,680,000 / pax" },
      { pax: "7–12 Pax", price: "IDR 3,550,000 / pax" },
    ],
  },

  3: {
    description: {
      id: "Paket wisata 5 hari 4 malam untuk eksplorasi destinasi terbaik.",
      en: "5 days 4 nights tour to explore top destinations.",
    },
    facilities: {
      id: [
        "Hotel bintang 3",
        "Transport Hiace (AC, Free Wifi, Air Mineral, Cool Box, TV Plafon)",
        "Makan 3 kali sehari",
        "Dokumentasi (Drone)",
        "Asuransi perjalanan",
        "Guide profesional",
        "Tiket wisata",
      ],
      en: [
        "3-star hotel",
        "Transport Hiace (AC, Free Wifi, Mineral Water, Cool Box, TV Plafon)",
        "Free meals 3 times a day",
        "Drone documentation",
        "Travel insurance",
        "Professional guide",
        "Entrance tickets",
      ],
    },
    exclude: {
      id: ["Tiket pesawat", "Keperluan Pribadi"],
      en: ["Flight tickets", "Personal expenses"],
    },
    prices: [
      { pax: "2 Pax", price: "IDR 6,000,000 / pax" },
      { pax: "3 Pax", price: "IDR 4,700,000 / pax" },
      { pax: "4 Pax", price: "IDR 4,500,000 / pax" },
      { pax: "5 Pax", price: "IDR 3,950,000 / pax" },
      { pax: "6 Pax", price: "IDR 3,750,000 / pax" },
      { pax: "7–12 Pax", price: "IDR 4,500,000 / pax" },
    ],
  },

  4: {
    description: {
      id: "Paket wisata 6 hari 5 malam dengan pengalaman mendalam.",
      en: "6 days 5 nights immersive travel experience.",
    },
    facilities: {
      id: [
        "Hotel bintang 3",
        "Transport Hiace (AC, Free Wifi, Air Mineral, Cool Box, TV Plafon)",
        "Makan 3 kali sehari",
        "Dokumentasi (Drone)",
        "Asuransi perjalanan",
        "Guide profesional",
        "Tiket wisata",
      ],
      en: [
        "3-star hotel",
        "Transport Hiace (AC, Free Wifi, Mineral Water, Cool Box, TV Plafon)",
        "Free meals 3 times a day",
        "Drone documentation",
        "Travel insurance",
        "Professional guide",
        "Entrance tickets",
      ],
    },
    exclude: {
      id: ["Tiket pesawat", "Keperluan Pribadi"],
      en: ["Flight tickets", "Personal expenses"],
    },
    prices: [
      { pax: "2 Pax", price: "IDR 8,500,000 / pax" },
      { pax: "3 Pax", price: "IDR 7,500,000 / pax" },
      { pax: "4 Pax", price: "IDR 5,800,000 / pax" },
      { pax: "5 Pax", price: "IDR 5,400,000 / pax" },
      { pax: "6 Pax", price: "IDR 5,800,000 / pax" },
      { pax: "7–12 Pax", price: "IDR 5,000,000 / pax" },
    ],
  },

  5: {
    description: {
      id: "Paket wisata 7 hari 6 malam untuk liburan lengkap & santai.",
      en: "7 days 6 nights full and relaxing holiday package.",
    },
    facilities: {
      id: [
        "Hotel bintang 3",
        "Transport Hiace (AC, Free Wifi, Air Mineral, Cool Box, TV Plafon)",
        "Makan 3 kali sehari",
        "Dokumentasi (Drone)",
        "Asuransi perjalanan",
        "Guide profesional",
        "Tiket wisata",
      ],
      en: [
        "3-star hotel",
        "Transport Hiace (AC, Free Wifi, Mineral Water, Cool Box, TV Plafon)",
        "Free meals 3 times a day",
        "Drone documentation",
        "Travel insurance",
        "Professional guide",
        "Entrance tickets",
      ],
    },
    exclude: {
      id: ["Tiket pesawat", "Keperluan Pribadi"],
      en: ["Flight tickets", "Personal expenses"],
    },
    prices: [
      { pax: "2 Pax", price: "IDR 10,780,000 / pax" },
      { pax: "3 Pax", price: "IDR 9,970,000 / pax" },
      { pax: "4 Pax", price: "IDR 7,650,000 / pax" },
      { pax: "5 Pax", price: "IDR 7,600,000 / pax" },
      { pax: "6 Pax", price: "IDR 8,750,000 / pax" },
      { pax: "7–12 Pax", price: "IDR 7,300,000 / pax" },
    ],
  },
};

const getPriceNumber = (price: string) => Number(price.replace(/[^0-9]/g, ""));

const parsePaxRange = (pax: string) => {
  const numbers = pax.match(/\d+/g)?.map(Number) || [];
  return {
    min: numbers[0],
    max: numbers[1] ?? numbers[0],
  };
};

const getPriceByPax = (prices: PriceItem[], pax: number): number => {
  const matched = prices.find((p) => {
    const range = parsePaxRange(p.pax);
    return pax >= range.min && pax <= range.max;
  });

  return matched ? getPriceNumber(matched.price) : 0;
};

const formatRupiah = (value: number) => "IDR " + value.toLocaleString("id-ID");

const sectionFadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const sectionFadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const sectionZoom: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function HomeClient() {
  const { lang, t } = useLanguage();

  const [detail, setDetail] = useState<PackageItem | null>(null);

  const [booking, setBooking] = useState<PackageItem | null>(null);

  const prices = booking ? packageDetails[booking.id].prices : [];

  const [people, setPeople] = useState(2);

  const pricePerPax = booking ? getPriceByPax(prices, people) : 0;

  const totalPrice = pricePerPax * people;

  return (
    <main className="font-sans">
      {/* ================= HOME ================= */}
      <motion.section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
        variants={sectionFadeUp}
        initial="visible"
        animate="visible"
        viewport={{ once: true }}
      >
        <h2 className="sr-only">
          Paket Wisata Sumba 3 Hari 2 Malam, 4 Hari 3 Malam, 5 Hari 4 Malam
        </h2>
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Video wisata Sumba"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {lang === "id"
              ? "Jelajahi Liburan Impian Anda"
              : "Explore Your Dream Vacation"}
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            {lang === "id"
              ? "Nikmati paket wisata terbaik dengan pelayanan profesional dan destinasi pilihan."
              : "Enjoy the best tour packages with professional service and handpicked destinations."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#paket"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              {lang === "id" ? "Lihat Paket" : "View Packages"}
            </a>
          </div>
        </div>
      </motion.section>

      {/* ================= ABOUT ================= */}
      <motion.section
        id="about"
        className="py-24 px-6 bg-linear-to-b from-white via-gray-50 to-white"
        variants={sectionFadeLeft}
        initial="visible"
        animate="visible"
        viewport={{ once: true }}
      >
        <h2 className="sr-only">
          Paket Wisata Sumba 3 Hari 2 Malam, 4 Hari 3 Malam, 5 Hari 4 Malam
        </h2>
        <div className="max-w-7xl mx-auto grid gap-14 md:grid-cols-2 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {lang === "id" ? "Tentang Kami" : "About Us"}
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {lang === "id"
                ? "Kami adalah travel agent profesional yang menghadirkan pengalaman wisata berkualitas, aman, dan berkesan dengan pelayanan terbaik."
                : "We are a professional travel agent delivering high-quality, safe, and memorable travel experiences with excellent service."}
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {lang === "id"
                ? "Dengan fasilitas kendaraan terbaru 2025 (Hiace) dan fasilitas pendukung lainnya kami menjamin perjalanan anda aman dan nyaman."
                : "With the latest 2025 vehicle facilities (Hiace) and other supporting facilities, we guarantee your trip is safe and comfortable."}
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {lang === "id"
                ? "Evan (Frans Edberg Stevan) adalah driver dan tour guide local yang berpengalaman belasan tahun yang siap melayani anda"
                : "Evan (Frans Edberg Stevan) is a local driver and tour guide with decades of experience who is ready to serve you."}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-red-600 text-center flex items-center justify-center gap-2 mx-auto">
                  <BiFile />
                </p>
                <p className="text-sm text-gray-500">
                  {lang === "id" ? "Izin Pariwisata" : "Tourism Permit"}
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-red-600 text-center flex items-center justify-center gap-2 mx-auto">
                  <BiCheckShield />
                </p>
                <p className="text-sm text-gray-500">
                  {lang === "id" ? "Asuransi Perjalanan" : "Tour Insurance"}
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">15+</p>
                <p className="text-sm text-gray-500">
                  {lang === "id" ? "Destinasi" : "Destinations"}
                </p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-6">
            <div
              className="h-80 rounded-2xl shadow-lg bg-cover bg-center hover:scale-105 transition"
              style={{ backgroundImage: "url('/images/about-1.png')" }}
            />
            <div
              className="h-80 rounded-2xl shadow-lg bg-cover bg-center hover:scale-105 transition"
              style={{ backgroundImage: "url('/images/about-2.jpg')" }}
            />
          </div>
        </div>
      </motion.section>

      {/* ================= GALLERY ================= */}
      <motion.section
        id="gallery"
        className="py-20 px-6 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900"
        variants={sectionZoom}
        initial="visible"
        animate="visible"
        viewport={{ once: true }}
      >
        <h2 className="sr-only">
          Paket Wisata Sumba 3 Hari 2 Malam, 4 Hari 3 Malam, 5 Hari 4 Malam
        </h2>
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          {t.galleryTitle}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "/images/gallery-1.jpg",
            "/images/gallery-2.jpg",
            "/images/gallery-3.jpg",
            "/images/gallery-4.jpg",
            "/images/gallery-5.jpg",
            "/images/gallery-6.jpg",
            "/images/gallery-7.jpg",
            "/images/gallery-8.jpg",
          ].map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* ================= PAKET ================= */}
      <motion.section
        id="paket"
        className="py-20 px-6 bg-linear-to-b from-gray-50 via-white to-gray-100"
        variants={sectionFadeUp}
        initial="visible"
        animate="visible"
        viewport={{ once: true }}
      >
        <h2 className="sr-only">
          Paket Wisata Sumba 3 Hari 2 Malam, 4 Hari 3 Malam, 5 Hari 4 Malam
        </h2>
        <h2 className="text-3xl font-bold text-center mb-12">{t.paketTitle}</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {packages.map((p) => (
            <div
              key={p.id}
              className="relative h-80 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="text-sm opacity-90">{p.days}</p>
                <p className="mt-2 font-semibold">{p.price}</p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setDetail(p)}
                    className="flex-1 bg-white/90 cursor-pointer text-black py-2 rounded-lg"
                  >
                    {t.detail}
                  </button>
                  <button
                    onClick={() => setBooking(p)}
                    className="flex-1 bg-red-600 cursor-pointer py-2 rounded-lg"
                  >
                    {t.booking}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ================= BLOG ================= */}
      <motion.section
        id="blog"
        className="py-20 px-6 bg-linear-to-b from-white via-gray-50 to-white"
        variants={sectionFadeUp}
        initial="visible"
        animate="visible"
        viewport={{ once: true }}
      >
        <h2 className="sr-only">Blog Wisata Sumba</h2>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.blogTitle} {/* Menggunakan translasi statis */}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <motion.article
                key={blog.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition"
              >
                {/* Image */}
                <div className="relative h-52">
                  <Image
                    src={blog.image}
                    alt={blog.title[lang]} // Mengakses judul berdasarkan bahasa
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(blog.date).toLocaleDateString(
                      lang === "id" ? "id-ID" : "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>

                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {blog.title[lang]}{" "}
                    {/* Mengakses judul berdasarkan bahasa */}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.excerpt[lang]}{" "}
                    {/* Mengakses ringkasan berdasarkan bahasa */}
                  </p>

                  <Link
                    href={`/blog/${blog.slug[lang]}?lang=${lang}`}
                    className="inline-flex items-center text-red-600 font-semibold hover:underline"
                  >
                    {lang === "id" ? "Baca Selengkapnya" : "Read More"} →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= KONTAK ================= */}
      <motion.section
        id="kontak"
        className="py-20 px-6 bg-linear-to-b from-white via-gray-100 to-white"
        variants={sectionFadeUp}
        initial="visible"
        animate="visible"
        viewport={{ once: true }}
      >
        <h2 className="sr-only">
          Paket Wisata Sumba 3 Hari 2 Malam, 4 Hari 3 Malam, 5 Hari 4 Malam
        </h2>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.kontakTitle}
          </h2>

          <div className="grid gap-10 md:grid-cols-2 items-start">
            {/* Info Kontak */}
            <div className="bg-white rounded-2xl shadow p-8 space-y-4">
              <h3 className="text-xl font-semibold mb-2">
                {lang === "id" ? "Informasi Kontak" : "Contact Information"}
              </h3>

              <p>
                <span className="font-semibold">
                  {lang === "id" ? "Alamat:" : "Address:"}
                </span>
                <br />
                Jl. Rambu Duka, RT. 026 / RW. 009, Kel. Prailiu, Kec. Kambera,
                Kab. Sumba Timur, NTT, Indonesia
              </p>

              <p>
                <span className="font-semibold">Email:</span>
                <br />
                storysumbatravel@gmail.com
              </p>

              <p>
                <span className="font-semibold">WhatsApp:</span>
                <br />
                +62 812-4699-4982
              </p>

              {/* <p>
                <span className="font-semibold">
                  {lang === "id" ? "Jam Operasional:" : "Working Hours:"}
                </span>
                <br />
                {lang === "id"
                  ? "Senin – Minggu, 08.00 – 20.00 WIB"
                  : "Monday – Sunday, 08.00 AM – 08.00 PM"}
              </p> */}

              <a
                href="https://wa.me/+6281246994982"
                target="_blank"
                className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                {lang === "id" ? "Chat via WhatsApp" : "Chat via WhatsApp"}
              </a>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow">
              <iframe
                title="Google Map"
                src={process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED}
                className="w-full h-80 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= MODAL DETAIL ================= */}
      {detail && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          onClick={() => setDetail(null)}
        >
          <div
            className="bg-white max-w-5xl w-full rounded-2xl relative max-h-[90vh] overflow-y-auto md:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setDetail(null)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            {/* Image */}
            {/* <div
              className="h-64 md:h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(${detail.image})` }}
            /> */}

            {/* Content */}
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
              {/* LEFT */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Paket {detail.name}</h3>
                <p className="text-gray-600 mb-4">
                  {packageDetails[detail.id].description[lang]}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">
                    {lang === "id" ? "Fasilitas:" : "Facilities:"}
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {packageDetails[detail.id].facilities[lang].map(
                      (item: string, i: number) => (
                        <li key={i}>{item}</li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">
                    {lang === "id" ? "Tidak Termasuk:" : "Exclude:"}
                  </h4>

                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {packageDetails[detail.id].exclude[lang].map(
                      (item: string, i: number) => (
                        <li key={i}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* RIGHT */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold mb-4">
                  {lang === "id" ? "Harga Paket" : "Package Prices"}
                </h4>

                <ul className="space-y-3">
                  {packageDetails[detail.id].prices.map(
                    (p: PriceItem, i: number) => (
                      <li
                        key={i}
                        className="flex justify-between border-b pb-2 text-sm"
                      >
                        <span>{p.pax}</span>
                        <span className="font-semibold">{p.price}</span>
                      </li>
                    )
                  )}
                </ul>

                <button
                  onClick={() => {
                    setDetail(null); // tutup modal detail
                    setBooking(detail); // buka modal booking + kirim data paket
                  }}
                  className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
                >
                  {lang === "id" ? "Booking Sekarang" : "Book Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL BOOKING ================= */}
      {booking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4">
              {t.form.title} {booking.name}
            </h3>

            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                if (!booking) return;

                const formData = new FormData(e.currentTarget);

                const name = String(formData.get("name") || "");
                const phone = String(formData.get("phone") || "");
                const email = String(formData.get("email") || "");
                const date = String(formData.get("date") || "");
                const note = String(formData.get("note") || "");

                const text =
                  `${t.waIntro} ${booking.name}\n` +
                  `${t.form.name}: ${name}\n` +
                  `${t.form.phone}: ${phone}\n` +
                  `${t.form.email}: ${email}\n` +
                  `${t.form.date}: ${date}\n` +
                  `${t.form.people}: ${people}\n` +
                  `${
                    lang === "id" ? "Harga / Pax" : "Price / Pax"
                  }: ${formatRupiah(pricePerPax)}\n` +
                  `${
                    lang === "id" ? "Total Harga" : "Total Price"
                  }: ${formatRupiah(totalPrice)}\n\n` +
                  `${t.form.note}: ${note}`;

                window.open(
                  `https://wa.me/${wa}?text=${encodeURIComponent(text)}`,
                  "_blank"
                );
              }}
              className="space-y-3"
            >
              <input
                name="name"
                placeholder={t.form.name}
                className="w-full border p-2 rounded"
                required
              />
              <input
                name="phone"
                placeholder={t.form.phone}
                className="w-full border p-2 rounded"
                required
              />
              <input
                name="email"
                placeholder={t.form.email}
                className="w-full border p-2 rounded"
              />
              <input
                type="date"
                name="date"
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="number"
                name="people"
                placeholder={t.form.people}
                min={2}
                max={12}
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                name="note"
                placeholder={t.form.note}
                className="w-full border p-2 rounded"
              />

              <div className="bg-gray-50 border rounded p-3 text-sm space-y-2">
                <div className="flex justify-between">
                  <span>{lang === "id" ? "Harga / Pax" : "Price / Pax"}</span>
                  <span className="font-semibold">
                    {pricePerPax
                      ? formatRupiah(pricePerPax)
                      : lang === "id"
                      ? "Tidak tersedia"
                      : "Not available"}
                  </span>
                </div>

                <div className="flex justify-between font-bold">
                  <span>{lang === "id" ? "Total Harga" : "Total Price"}</span>
                  <span className="text-green-600">
                    {pricePerPax ? formatRupiah(totalPrice) : "-"}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 rounded"
                >
                  {t.sendWA}
                </button>
                <button
                  type="button"
                  onClick={() => setBooking(null)}
                  className="flex-1 bg-gray-500 text-white py-2 rounded"
                >
                  {t.cancel}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Story Sumba Travel",
            url: "https://storysumbatravel.com",
            logo: "https://storysumbatravel.com/images/logo.png",
            image: "https://storysumbatravel.com/images/seo-cover.jpg",
            description:
              "Travel agent profesional penyedia paket wisata Sumba dengan guide lokal berpengalaman.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jl. Rambu Duka, Prailiu, Kambera, Sumba Timur",
              addressLocality: "Sumba Timur",
              addressRegion: "NTT",
              postalCode: "87113",
              addressCountry: "ID",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62-812-4699-4982",
              contactType: "customer service",
            },
            sameAs: [
              "https://instagram.com/storysumba",
              "https://www.tripadvisor.com",
              "https://www.tiktok.com/@storysumba",
            ],
          }),
        }}
      />
    </main>
  );
}
