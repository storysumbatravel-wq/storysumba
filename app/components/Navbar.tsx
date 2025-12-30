"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/app/context/ContectLanguage";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  // OPTIONAL: restore language from localStorage (AMAN)
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "id" || savedLang === "en") {
      setLang(savedLang);
    }
  }, [setLang]);

  const toggleLang = () => {
    const nextLang = lang === "id" ? "en" : "id";
    setLang(nextLang);
    localStorage.setItem("lang", nextLang);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-sm"
    >
      {/* SEO HIDDEN TITLE */}
      <h2 className="sr-only">
        Paket Wisata Sumba 3 Hari 2 Malam, 4 Hari 3 Malam, 5 Hari 4 Malam
      </h2>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Story Sumba Travel"
            height={40}
            width={120}
            className="h-10 w-auto"
          />
          <span className="font-bold text-lg text-black">
            STORY <span className="text-red-700">SUMBA</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["home", "about", "gallery", "paket", "blog", "kontak"].map(
            (item) => (
              <Link
                key={item}
                href={item === "home" ? "/" : `/#${item}`}
                className="hover:text-red-700 transition"
              >
                {t.nav[item as keyof typeof t.nav]}
              </Link>
            )
          )}

          <button
            onClick={toggleLang}
            className="flex items-center gap-1 border px-3 py-1 rounded-lg text-sm hover:bg-gray-100 transition"
          >
            <Globe size={16} />
            {lang === "id" ? "EN" : "ID"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Overlay (click anywhere to close) */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 w-72 h-screen bg-black text-gray-300 p-6 flex flex-col"
            >
              <button
                className="self-end text-white mb-8"
                onClick={() => setMenuOpen(false)}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-6 text-lg">
                {["home", "about", "gallery", "paket", "blog", "kontak"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={item === "home" ? "/" : `/#${item}`}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-red-500 transition"
                    >
                      {t.nav[item as keyof typeof t.nav]}
                    </Link>
                  )
                )}
              </div>

              <button
                onClick={() => {
                  toggleLang();
                  setMenuOpen(false);
                }}
                className="mt-auto flex items-center justify-center gap-2 border border-gray-600 rounded-lg py-3 text-lg font-semibold text-white hover:bg-white hover:text-black transition"
              >
                <Globe size={20} />
                {lang === "id" ? "English" : "Bahasa"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
