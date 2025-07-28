import Image from "next/image";
import { getNewsItem } from "@/lib/news";

export default async function ImagePage({ params }) {
  const newsSlug = params.newsSlug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="news-image-wrapper">
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        fill
        className="news-image"
      />
    </div>
  );
}
