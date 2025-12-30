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
      id: `Keajaiban Bima Sakti di Langit Sumba
          Sumba sering dijuluki sebagai "Pulau Terlupakan," namun bagi para pemburu bintang, pulau ini adalah surga yang nyata. Karena pembangunan infrastruktur yang masih terbatas, Sumba memiliki tingkat polusi cahaya yang sangat rendah. Hal ini menciptakan langit malam yang murni, gelap gulita, dan transparan, memberikan panggung sempurna bagi galaksi Bima Sakti untuk memamerkan kemegahannya.

          Saat berdiri di tepi Pantai Walakiri atau di atas bukit sabana yang luas, Anda akan melihat pita kabut bercahaya yang membentang dari cakrawala ke cakrawala. Ini bukan sekadar kumpulan bintang; ini adalah penampakan jutaan matahari dan debu kosmik yang membentuk struktur galaksi kita. Di Sumba, detail debu antarbintang (nebula gelap) terlihat sangat kontras dengan latar belakang jutaan bintang yang berkelap-kelip tajam. Keheningan alam Sumba, yang hanya diiringi suara deburan ombak atau tiupan angin di rumput sabana, menambah kesan magis yang membuat siapa pun merasa kecil di hadapan alam semesta yang luas.

          Detail Teknis Pengamatan:
          Waktu Terbaik: Musim kemarau antara bulan Juni hingga September.
          Lokasi Favorit: Pantai Walakiri, Bukit Tenau, dan Desa Adat Ratenggaro.
          Keunikan: Karena letak geografisnya di belahan bumi selatan, pusat galaksi (Galactic Core) terlihat sangat tinggi dan jelas di langit Sumba.`,

      en: `The Majesty of the Milky Way in Sumba
          Sumba is often referred to as the "Forgotten Island," but for stargazers, it is a true sanctuary. Due to its limited infrastructure and remote nature, Sumba possesses incredibly low levels of light pollution. This results in a pristine, ink-black, and transparent night sky, providing the ultimate stage for the Milky Way galaxy to reveal its full splendor.

          Standing on the shores of Walakiri Beach or atop the vast rolling savannahs, you will witness a luminous band of celestial fog stretching from horizon to horizon. This is not merely a cluster of stars; it is the visible manifestation of millions of suns and cosmic dust forming the structure of our galaxy. In Sumba, the intricate details of interstellar dust (dark nebulae) stand in sharp contrast against a backdrop of millions of diamond-like stars. The profound silence of the Sumba wilderness, broken only by the sound of crashing waves or the wind whispering through the grass, enhances a magical atmosphere that humbles anyone before the vastness of the universe.
          
          Observation Highlights:
          Best Time: The dry season between June and September.
          Top Locations: Walakiri Beach, Tenau Hill, and Ratenggaro Traditional Village.
          The View: Given its position in the Southern Hemisphere, the Galactic Core appears exceptionally high and vivid in the Sumba sky, offering a perspective rarely seen in the northern parts of the world.`,
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
      id: `Berlibur ke Sumba menawarkan petualangan yang tidak ada duanya, mulai dari bukit sabana yang eksotis hingga desa adat yang     
          masih memegang teguh tradisi Megalitikum. Namun, karena medannya yang cukup menantang, persiapan yang matang adalah kunci kenyamanan.

          Berikut adalah panduan lengkap tips liburan nyaman di Sumba dalam dua bahasa.

          Tips Liburan Nyaman di Sumba
          Sumba bukan sekadar destinasi wisata biasa; ini adalah perjalanan melintasi waktu. Agar pengalaman Anda tetap menyenangkan dan jauh dari stres, perhatikan beberapa poin penting berikut:

          1. Pilih Waktu Kunjungan yang Tepat
          Sumba memiliki dua wajah yang berbeda. Jika Anda ingin melihat sabana berwarna cokelat keemasan seperti di Afrika, datanglah pada musim kemarau (Mei – September). Namun, jika Anda lebih suka pemandangan hijau zamrud yang menyegarkan, datanglah di awal tahun (Januari – Maret).

          2. Gunakan Kendaraan yang Tangguh
          Transportasi umum di Sumba masih sangat terbatas. Sangat disarankan untuk menyewa mobil (biasanya jenis SUV/4WD) beserta sopir lokal. Sopir lokal bukan hanya pengemudi, tetapi juga pemandu yang tahu jalan pintas dan etika berkunjung ke desa-desa adat.

          3. Siapkan "Amunisi" Fisik dan Logistik
          Banyak destinasi di Sumba memerlukan trekking ringan hingga sedang. Pastikan Anda membawa:
          Sepatu yang nyaman: Sandal gunung atau sepatu lari dengan daya cengkeram yang baik.
          Perlindungan Matahari: Tabir surya (sunblock), topi, dan kacamata hitam sangat wajib karena sinar matahari Sumba sangat terik.
          Uang Tunai: ATM hanya tersedia di kota-kota besar seperti Waingapu dan Waikabubak. Pastikan Anda membawa uang tunai yang cukup untuk keperluan di pelosok.

          4. Hormati Adat Istiadat Setempat
          Masyarakat Sumba sangat menjunjung tinggi tradisi. Selalu minta izin sebelum memotret warga atau masuk ke rumah adat. Membawa "Sirih Pinang" atau memberikan sumbangan sukarela biasanya dianggap sebagai tanda penghormatan saat mengunjungi desa-desa tradisional.`,

      en: `Tips for a Comfortable Holiday in Sumba
          Sumba is more than just a travel destination; it is a journey through time. To ensure your experience remains enjoyable and stress-free, consider these essential tips:

          1. Timing is Everything
          Sumba has two distinct "faces." If you want to see the golden-brown savannahs reminiscent of Africa, visit during the dry season (May – September). However, if you prefer a lush, emerald-green landscape, the early months of the year (January – March) are ideal.

          2. Rent a Reliable Vehicle
          Public transportation in Sumba is quite limited. It is highly recommended to rent a sturdy car (preferably an SUV or 4WD) with a local driver. A local driver acts as both a navigator and a guide who understands the terrain and the cultural etiquette of the villages.

          3. Prepare Your Physical and Logistic "Ammo"
          Many of Sumba’s best spots require light to moderate trekking. Make sure to pack:
          Comfortable Footwear: Trekking sandals or running shoes with good grip.
          Sun Protection: Sunblock, a hat, and sunglasses are mandatory as the sun can be quite intense.
          Cash is King: ATMs are only available in major towns like Waingapu and Waikabubak. Ensure you carry enough cash for expenses in remote areas.

          4. Respect Local Customs
          Sumbanese people hold their traditions in high regard. Always ask for permission before taking photos of locals or entering traditional houses. Offering "Sirih Pinang" (betel nut) or giving a small voluntary donation is often seen as a sign of respect when visiting traditional villages.`,
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
      id: `Panduan Waktu Terbaik Berkunjung ke Sumba Sumba memiliki karakteristik iklim yang unik dibandingkan pulau lain di Indonesia. 
          Terletak di Nusa Tenggara Timur, Sumba cenderung lebih kering, yang menjadikannya destinasi yang eksotis sepanjang tahun. Namun, pilihan waktu Anda akan menentukan "warna" perjalanan Anda.

          1. Musim Kemarau (Mei – September): Sumba yang Eksotis
          Inilah waktu paling populer bagi wisatawan. Pada periode ini, curah hujan sangat rendah, sehingga jalanan menuju pelosok lebih mudah diakses.

          Pemandangan: Sabana yang hijau akan berubah menjadi cokelat keemasan, memberikan nuansa seperti berada di tengah liar-nya Afrika.

          Astrofotografi: Langit malam sangat bersih dan cerah, menjadikannya waktu terbaik untuk melihat pusat galaksi Bima Sakti (Milky Way) dengan mata telanjang.

          Budaya: Bulan Juli dan Agustus biasanya dipenuhi dengan berbagai festival adat dan acara pacuan kuda tradisional.

          2. Musim Hujan (Desember – Maret): Sumba yang Menyegarkan
          Bagi Anda yang menyukai ketenangan dan kesegaran alam, musim hujan menawarkan sisi Sumba yang berbeda.

          Pemandangan: Seluruh pulau bertransformasi menjadi hijau zamrud. Bukit-bukit yang kering kini tampak seperti perbukitan di Selandia Baru.

          Air Terjun: Ini adalah waktu terbaik untuk mengunjungi air terjun seperti Lapopu atau Matayangu karena debit airnya melimpah dan pemandangannya sangat dramatis.

          Catatan: Akses ke beberapa lokasi mungkin lebih sulit karena jalanan yang licin dan beberapa daerah rawan banjir.

          3. Waktu Khusus: Festival Pasola (Februari atau Maret)
          Jika tujuan utama Anda adalah budaya, Anda wajib datang saat Festival Pasola. Upacara ritual perang kavaleri tradisional ini dilakukan untuk menyambut musim panen. Tanggal pastinya ditentukan oleh para Rato (pemimpin adat) berdasarkan kemunculan Nyale (cacing laut berwarna-warni) di pinggir pantai.`,

      en: `Best Time to Visit Sumba: A Comprehensive Guide
          Choosing the right time to visit Sumba is crucial because the island offers two drastically different landscapes depending on the season. Here is a detailed guide to help you plan your journey.

          1. The Dry Season (May – September): The Exotic Sumba
          This is the most popular time for travelers. During these months, rainfall is minimal, making remote roads much easier to navigate.

          The Landscape: The lush greenery fades into a golden-brown savannah, creating a majestic atmosphere that resembles the wilds of Africa.

          Stargazing: The night skies are exceptionally clear, making it the prime window to witness the Milky Way and its galactic core with the naked eye.

          Culture: July and August are often filled with local festivals and traditional horse racing events.

          2. The Wet Season (December – March): The Refreshing Sumba
          For those who prefer tranquility and vibrant nature, the rainy season reveals a different side of the island.

          The Landscape: The entire island transforms into an emerald-green paradise. The once-dry rolling hills look like the lush landscapes of New Zealand.

          Waterfalls: This is the best time to visit waterfalls like Lapopu or Matayangu, as the water volume is at its peak, creating a dramatic and powerful sight.

          Note: Some remote areas might be harder to reach due to slippery roads and occasional flooding.

          3. Special Event: The Pasola Festival (February or March)
          If your main interest is culture, you must visit during the Pasola Festival. This traditional cavalry war ritual is held to welcome the harvest season. The exact dates are determined by the Ratos (priests) based on the arrival of Nyale (colorful sea worms) on the shores.`,
    },
    image: "/images/blog-3.jpg",
    date: "2025-01-25",
  },
];
