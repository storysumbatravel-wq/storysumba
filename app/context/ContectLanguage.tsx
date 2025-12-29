"use client";
import React, { createContext, useContext, useState } from "react";

type Lang = "id" | "en";

// 1. Definisikan struktur translasi secara eksplisit
const translations = {
  id: {
    nav: {
      home: "Home",
      about: "Tentang Kami",
      gallery: "Galeri",
      paket: "Paket",
      blog: "Blog",
      kontak: "Kontak",
    },
    blogTitle: "Artikel & Blog",
    readMore: "Baca Selengkapnya",
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
      blog: "Blog",
      kontak: "Contact",
    },
    blogTitle: "Travel Blog",
    readMore: "Read More",
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

// 2. Gunakan typeof untuk mendapatkan tipe otomatis dari objek di atas
type TranslationType = typeof translations.id;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TranslationType; // Ganti 'any' dengan tipe asli
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 3. Lazy initialization untuk localStorage
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferredLang");
      return saved === "id" || saved === "en" ? saved : "id";
    }
    return "id";
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLang", newLang);
    }
  };

  // 4. Casting yang aman tanpa 'any'
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
