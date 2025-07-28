import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import Image from "next/image";

export default async function ImagePage({ params }) {
  const newsSlug = params.newsSlug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
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
