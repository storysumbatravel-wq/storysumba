import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LanguageProvider } from "@/app/context/ContectLanguage";
import Navbar from "@/app/components/Navbar"; // Sesuaikan path-nya
import Footer from "@/app/components/Footer"; // Sesuaikan path-nya

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
    "Tour",
    "Tour Sumba",
    "Sumba",
    "Travel Agent",
    "Sumba Travel Agent",
    "Sumba Tour Package",
  ],

  authors: [{ name: "Story Sumba Travel" }],
  creator: "Story Sumba Travel",

  /* 🔥 TITLE ICON / FAVICON */
  icons: {
    icon: [
      { url: "/images/logo2.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo2.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.icon",
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
      <head>
        {GA_ID && (
          <>
            {/* Google Analytics */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
