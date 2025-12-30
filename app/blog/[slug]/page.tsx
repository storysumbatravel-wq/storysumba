"use client";

import { useParams, useSearchParams, useRouter } from "next/navigation";
import { blogs } from "@/lib/blogs";
import { useEffect } from "react";
import Image from "next/image";

export default function BlogDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter(); // 3. DEFISINISIKAN router di sini

  // Ambil bahasa dari URL (?lang=en)
  const lang = (searchParams.get("lang") as "id" | "en") || "id";
  const currentSlug = params.slug as string;

  // Cari blog berdasarkan slug apa pun (ID atau EN)
  const blog = blogs.find(
    (b) => b.slug.id === currentSlug || b.slug.en === currentSlug
  );

  // Cari blog yang slug-nya cocok (baik slug ID maupun EN)
  useEffect(() => {
    if (blog) {
      const correctSlug = blog.slug[lang];
      if (currentSlug !== correctSlug) {
        // Redirect otomatis jika slug tidak sesuai dengan bahasa yang dipilih
        router.replace(`/blog/${correctSlug}?lang=${lang}`);
      }
    }
  }, [lang, blog, currentSlug, router]);

  if (!blog) {
    return <div className="py-20 text-center">Post Not Found</div>;
  }

  return (
    <article key={lang} className="max-w-4xl mx-auto py-24 px-6">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {blog.title[lang]}
        </h1>
        <p className="text-gray-500">
          {new Date(blog.date).toLocaleDateString(
            lang === "id" ? "id-ID" : "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        </p>
      </header>

      <div className="relative h-100 w-full mb-10">
        <Image
          src={blog.image}
          alt={blog.title[lang]}
          fill
          className="object-cover rounded-3xl"
        />
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {/* Render konten berdasarkan bahasa */}
        <p className="whitespace-pre-line">{blog.content[lang]}</p>
      </div>
    </article>
  );
}
