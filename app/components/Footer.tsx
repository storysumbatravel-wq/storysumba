"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, Music2 } from "lucide-react";
// Import FaTripadvisor tetap dari react-icons
import { FaTripadvisor } from "react-icons/fa";
import { useLanguage } from "@/app/context/ContectLanguage";

export default function Footer() {
  const { lang, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Mahaka URL dari env
  const mahakaUrl =
    process.env.NEXT_PUBLIC_MAHAKA_URL ?? "https://mahakaattraction.id";

  // Kita gunakan navKeys di dalam mapping agar tidak 'Unused'
  const navKeys = ["home", "gallery", "paket", "blog", "kontak"] as const;

  return (
    <footer className="bg-black text-gray-300">
      <h2 className="sr-only">
        Paket Wisata Sumba 3 Hari 2 Malam, 4 Hari 3 Malam, 5 Hari 4 Malam
      </h2>
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-5">
        {/* Kolom 1: Brand & Social Media */}
        <div>
          <div className="flex items-center mb-3">
            <Image
              src="/images/logo.png"
              alt="Story Sumba Logo"
              className="h-12 w-auto"
              height={"300"} // Gunakan number, bukan string
              width={"50"}
            />
            <h3 className="text-xl font-bold text-white ml-2">
              STORY<span className="text-red-700">SUMBA</span>
            </h3>
          </div>

          <p className="text-sm text-gray-300 italic">
            {lang === "id"
              ? "Partner perjalanan terbaik untuk liburan Anda."
              : "Your trusted partner for unforgettable journeys."}
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://instagram.com/storysumba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-red-600 transition"
            >
              <Instagram size={20} className="text-white" />
            </a>
            <a
              href="https://wa.me/+6281246994982"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-green-600 transition"
            >
              <MessageCircle size={20} className="text-white" />
            </a>
            <a
              href="https://tiktok.com/@storysumba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-slate-800 transition"
            >
              <Music2 size={20} className="text-white" />
            </a>
            <a
              href="https://www.tripadvisor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-green-700 transition"
            >
              <FaTripadvisor size={20} className="text-white" />
            </a>
          </div>
        </div>

        {/* Kolom 2: Navigation (Menggunakan navKeys agar tidak 'unused') */}
        <div>
          <h4 className="text-white font-semibold mb-3">Menu</h4>
          <ul className="space-y-2 text-sm">
            {navKeys.map((key) => (
              <li key={key}>
                {/* Link menggunakan anchor # agar smooth scroll di halaman yang sama */}
                <a href={`/#${key}`} className="hover:text-red-500 transition">
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Tourism Permit */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            {lang === "id" ? "Ijin Pariwisata" : "Tourism Permit"}
          </h4>
          <Image
            src="/images/ijin.jpg"
            alt="Travel Agent Permit"
            className="h-50 w-auto rounded shadow-lg"
            height={"600"}
            width={"300"}
          />
        </div>

        {/* Kolom 4: Subsidiary */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            {lang === "id" ? "Unit Bisnis Dari" : "Subsidiary Of"}
          </h4>
          <Link href={mahakaUrl} target="_blank">
            <Image
              src="/images/logo-mahaka.jpg"
              alt="Mahaka Attraction"
              className="h-12 w-auto cursor-pointer hover:opacity-80 transition"
              height={"50"}
              width={"300"}
            />
          </Link>
        </div>

        {/* Kolom 5: Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            {lang === "id" ? "Kontak" : "Contact"}
          </h4>
          <p className="text-sm">Email: storysumbatravel@gmail.com</p>
          <p className="text-sm">WhatsApp: +62812-4699-4982</p>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {currentYear} StorySumba.
        {lang === "id" ? " Seluruh hak cipta." : " All rights reserved."}
      </div>
    </footer>
  );
}
