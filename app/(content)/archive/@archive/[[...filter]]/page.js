import Link from "next/link";
import NewsList from "@/components/news-list";
import {
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const [year, month] = params.filter || [];

  const availableYears = getAvailableNewsYears();
  const isValidYear = !year || availableYears.includes(+year);

  const availableMonths = year ? getAvailableNewsMonths(year) : [];
  const isValidMonth = !month || availableMonths.includes(+month);

  if (!isValidYear || !isValidMonth) {
    throw new Error("Invalid filter.");
  }

  const news =
    year && month
      ? getNewsForYearAndMonth(year, month)
      : year
      ? getNewsForYear(year)
      : [];

  const links = year ? availableMonths : availableYears;

  return (
    <>
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

      {news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        <p>No news found for the selected period.</p>
      )}
    </>
  );
}
