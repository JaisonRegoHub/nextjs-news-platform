import { Suspense } from "react";
import Link from "next/link";
import NewsList from "@/components/news-list";
import {
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

async function ArchiveHeader({ year, month }) {
  let links = [];

  if (year && !month) {
    links = await getAvailableNewsMonths(year);
  } else if (!year) {
    links = await getAvailableNewsYears();
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function ArchiveNews({ year, month }) {
  let news = [];

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  return news.length > 0 ? (
    <NewsList news={news} />
  ) : (
    <p>No news found for the selected period.</p>
  );
}

export default async function ArchivePage({ params }) {
  const [year, month] = params.filter || [];

  return (
    <>
      <Suspense fallback={<p>Loading filters...</p>}>
        <ArchiveHeader year={year} month={month} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <ArchiveNews year={year} month={month} />
      </Suspense>
    </>
  );
}
