"use client"

import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/navigation";

export default function ImagePage({ params }) {
  const route = useRouter()

  const newsSlug = params.newsSlug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={route.back}/>
      <dialog className="modal" open>
        <div className="news-image-wrapper">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            fill
            className="news-image"
          />
        </div>
      </dialog>
    </>
  );
}
