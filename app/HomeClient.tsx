"use client";

import { useState } from "react";
import { Instagram, MessageCircle, Music2 } from "lucide-react";
import { Menu, X, Globe } from "lucide-react";
import { BiCheckShield, BiFile } from "react-icons/bi";
import { FaTripadvisor } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const wa = process.env.NEXT_PUBLIC_WA_NUMBER;
const mahakaUrl =
  process.env.NEXT_PUBLIC_MAHAKA_URL ?? "https://mahakaattraction.id";

/* ================= TRANSLATION ================= */
const translations = {
  id: {
    nav: {
      home: "Home",
      about: "Tentang Kami",
      gallery: "Galeri",
      paket: "Paket",
      kontak: "Kontak",
    },
    homeTitle: "Liburan Impian Anda",
    homeDesc: "Nikmati paket wisata terbaik dengan pelayanan profesional.",
    galleryTitle: "Galeri Wisata",
    paketTitle: "Paket Wisata",
    kontakTitle: "Kontak Kami",
    detail: "Detail",
    booking: "Booking",
    close: "Tutup",
    sendWA: "Kirim ke WhatsApp",
    cancel: "Batal",
    form: {
      title: "Form Booking",
      name: "Nama Lengkap",
      phone: "No WhatsApp",
      email: "Email",
      date: "Tanggal Berangkat",
      people: "Jumlah Peserta",
      note: "Catatan Tambahan",
    },
    waIntro: "Halo, saya ingin booking paket",
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      gallery: "Gallery",
      paket: "Packages",
      kontak: "Contact",
    },
    homeTitle: "Your Dream Vacation",
    homeDesc: "Enjoy the best tour packages with professional service.",
    galleryTitle: "Travel Gallery",
    paketTitle: "Tour Packages",
    kontakTitle: "Contact Us",
    detail: "Details",
    booking: "Booking",
    close: "Close",
    sendWA: "Send to WhatsApp",
    cancel: "Cancel",
    form: {
      title: "Booking Form",
      name: "Full Name",
      phone: "WhatsApp Number",
      email: "Email",
      date: "Departure Date",
      people: "Number of People",
      note: "Additional Notes",
    },
    waIntro: "Hello, I would like to book the package",
  },
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

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [lang, setLang] = useState<"id" | "en">("id");

  const [detail, setDetail] = useState<PackageItem | null>(null);

  const [booking, setBooking] = useState<PackageItem | null>(null);

  const prices = booking ? packageDetails[booking.id].prices : [];

  const [people, setPeople] = useState(2);

  const pricePerPax = booking ? getPriceByPax(prices, people) : 0;

  const totalPrice = pricePerPax * people;

  const t = translations[lang];

  return (
    <main className="font-sans">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-sm">
        <h2 className="sr-only">
          Paket Wisata Sumba 3 Hari 2 Malam, 4 Hari 3 Malam, 5 Hari 4 Malam
        </h2>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-auto"
              height={"600"}
              width={"300"}
            />
            <span className="font-bold text-lg">
              Story<span className="unbounded-font text-red-700">Sumba</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-red-600">
              {t.nav.home}
            </a>
            <a href="#about" className="hover:text-red-600">
              {t.nav.about}
            </a>
            <a href="#gallery" className="hover:text-red-600">
              {t.nav.gallery}
            </a>
            <a href="#paket" className="hover:text-red-600">
              {t.nav.paket}
            </a>
            <a href="#kontak" className="hover:text-red-600">
              {t.nav.kontak}
            </a>

            {/* Language Switch */}
            <button
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className="flex items-center gap-1 border px-3 py-1 rounded-lg text-sm hover:bg-gray-100"
            >
              <Globe size={16} />
              {lang === "id" ? "EN" : "ID"}
            </button>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <div className="absolute top-0 right-0 w-72 h-screen bg-black/90 text-gray-300 p-6 flex flex-col">
              {/* Close */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
                onClick={() => setMenuOpen(false)}
              >
                <X size={24} />
              </button>

              {/* Menu */}
              <nav className="mt-16 space-y-8">
                <a
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                  className="block text-xl font-semibold hover:text-white transition"
                >
                  {t.nav.home}
                </a>

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="block text-xl font-semibold hover:text-white transition"
                >
                  {t.nav.about}
                </a>

                <a
                  href="#gallery"
                  onClick={() => setMenuOpen(false)}
                  className="block text-xl font-semibold hover:text-white transition"
                >
                  {t.nav.gallery}
                </a>

                <a
                  href="#paket"
                  onClick={() => setMenuOpen(false)}
                  className="block text-xl font-semibold hover:text-white transition"
                >
                  {t.nav.paket}
                </a>

                <a
                  href="#kontak"
                  onClick={() => setMenuOpen(false)}
                  className="block text-xl font-semibold hover:text-white transition"
                >
                  {t.nav.kontak}
                </a>
              </nav>

              {/* Divider */}
              <div className="my-10 border-t border-gray-700" />

              {/* Language Switch */}
              <button
                onClick={() => {
                  setLang(lang === "id" ? "en" : "id");
                  setMenuOpen(false);
                }}
                className="mt-auto w-full flex items-center justify-center gap-2 border border-gray-600 rounded-lg py-3 text-lg font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition"
              >
                <Globe size={18} />
                {lang === "id" ? "English" : "Bahasa"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ================= HOME ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
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

          {/* <p className="text-gray-600 mb-7">
            Kami menyediakan <strong>paket wisata Sumba terpercaya</strong>{" "}
            dengan durasi 3 hari hingga 7 hari.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#paket"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              {lang === "id" ? "Lihat Paket" : "View Packages"}
            </a>

            {/* <a
              href="https://wa.me/+6281246994982"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              {lang === "id" ? "Konsultasi Gratis" : "Free Consultation"}
            </a> */}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="py-24 px-6 bg-linear-to-b from-white via-gray-50 to-white"
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
      </section>

      {/* ================= GALLERY ================= */}
      <section
        id="gallery"
        className="py-20 px-6 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900"
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
      </section>

      {/* ================= PAKET ================= */}
      <section
        id="paket"
        className="py-20 px-6 bg-linear-to-b from-gray-50 via-white to-gray-100"
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
                  {/* <Link
                    href={`/paket/${p.id}`}
                    className="flex-1 bg-white/90 text-black py-2 rounded-lg text-center"
                  >
                    {t.detail}
                  </Link> */}
                  <button
                    onClick={() => setDetail(p)}
                    className="flex-1 bg-white/90 text-black py-2 rounded-lg"
                  >
                    {t.detail}
                  </button>
                  <button
                    onClick={() => setBooking(p)}
                    className="flex-1 bg-red-600 py-2 rounded-lg"
                  >
                    {t.booking}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= KONTAK ================= */}
      <section
        id="kontak"
        className="py-20 px-6 bg-linear-to-b from-white via-gray-100 to-white"
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
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-gray-300">
        <h2 className="sr-only">
          Paket Wisata Sumba 3 Hari 2 Malam, 4 Hari 3 Malam, 5 Hari 4 Malam
        </h2>
        <div className="max-w-7xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-5">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-3">
              <Image
                src="/images/logo.png"
                alt="Travel Agent Logo"
                className="h-12 w-auto"
                height={"300"}
                width={"50"}
              />
              <h3 className="text-xl font-bold text-white">
                Story<span className="unbounded-font text-red-700">Sumba</span>
              </h3>
            </div>

            <p className="text-sm text-gray-300">
              {lang === "id"
                ? "Partner perjalanan terbaik untuk liburan Anda."
                : "Your trusted partner for unforgettable journeys."}
            </p>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              {/* Instagram */}
              <a
                href="https://instagram.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-pink-600 transition"
              >
                <Instagram size={20} className="text-white" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+6281246994982"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-green-600 transition"
              >
                <MessageCircle size={20} className="text-white" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-black transition"
              >
                <Music2 size={20} className="text-white" />
              </a>

              {/* Tripadvisor */}
              <a
                href="https://www.tripadvisor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-green-700 transition"
                aria-label="Tripadvisor"
              >
                <FaTripadvisor size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              {lang === "id" ? "Menu" : "Menu"}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#paket" className="hover:text-white">
                  {t.nav.paket}
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white">
                  {t.nav.kontak}
                </a>
              </li>
            </ul>
          </div>

          {/* Permit */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              {lang === "id" ? "Ijin Pariwisata" : "Tourism Permit"}
            </h4>
            <div className="items-center justify-center">
              <Image
                src="/images/ijin.jpg"
                alt="Travel Agent Ijin"
                className="h-30 w-auto"
                height={"600"}
                width={"300"}
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">
              {lang === "id" ? "Unit Bisnis Dari" : "Subsidiary Of"}
            </h4>
            {/* <p className="text-white font-semibold mb-3">
              {lang === "id" ? "Mahaka Attraction" : "Mahaka Attraction"}
            </p> */}
            <div className="items-center justify-center">
              <Link href={mahakaUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/logo-mahaka.jpg"
                  alt="Mahaka attraction"
                  className="h-12 w-auto cursor-pointer hover:opacity-80 transition "
                  height={"50"}
                  width={"300"}
                />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">
              {lang === "id" ? "Kontak" : "Contact"}
            </h4>
            <p className="text-sm">Email: storysumbatravel@gmail.com</p>
            <p className="text-sm">WhatsApp: +62812-4699-4982</p>
            {/* <p className="text-sm mt-2">
              {lang === "id" ? "Siap melayani 24/7" : "Available 24/7"}
            </p> */}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 py-4 text-center text-sm">
          © {new Date().getFullYear()} StorySumba.
          {lang === "id" ? " Seluruh hak cipta." : " All rights reserved."}
        </div>
      </footer>

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
            url: "https://storysumba.com",
            logo: "https://storysumba.com/images/logo.png",
            image: "https://storysumba.com/images/seo-cover.jpg",
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
              "https://instagram.com/username",
              "https://www.tripadvisor.com",
              "https://www.tiktok.com/@username",
            ],
          }),
        }}
      />
    </main>
  );
}
