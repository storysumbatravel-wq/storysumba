import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* SEO FRIENDLY */
export const metadata = {
  metadataBase: new URL("https://storysumbatravel.com"),

  title: {
    default: "Story Sumba Travel | Paket Wisata Sumba Terbaik",
    template: "%s | Story Sumba Travel",
  },

  description:
    "Story Sumba Travel menyediakan paket wisata Sumba 3D2N sampai 7D6N dengan harga terbaik, guide lokal profesional, dan booking mudah via WhatsApp & online payment.",

  keywords: [
    "Travel Sumba",
    "Paket Wisata Sumba",
    "Tour Sumba",
    "Sumba Tour Package",
    "Sumba Travel Agent",
  ],

  authors: [{ name: "Story Sumba Travel" }],
  creator: "Story Sumba Travel",

  /* 🔥 TITLE ICON / FAVICON */
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "images/logo2.png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "images/logo2.png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "Story Sumba Travel | Paket Wisata Sumba Terbaik",
    description:
      "Paket wisata Sumba lengkap 3D2N – 7D6N. Booking mudah, harga transparan, dan guide lokal berpengalaman.",
    url: "https://storysumbatravel.com",
    siteName: "Story Sumba Travel",
    images: [
      {
        url: "/images/seo-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Paket Wisata Sumba",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Story Sumba Travel | Paket Wisata Sumba",
    description:
      "Nikmati liburan terbaik di Sumba dengan paket wisata terpercaya dan guide lokal.",
    images: ["/images/seo-cover.jpg"],
  },

  alternates: {
    canonical: "https://storysumbatravel.com",
    languages: {
      "id-ID": "https://storysumbatravel.com",
      "en-US": "https://storysumbatravel.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
