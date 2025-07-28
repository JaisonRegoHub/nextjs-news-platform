import sql from 'better-sqlite3';

const db = sql('data/news.db');

export async function getAllNews() {
  return db.prepare('SELECT * FROM news').all();
}

export async function getNewsItem(slug) {
  return db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);
}

export async function getLatestNews() {
  return db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all();
}

export async function getAvailableNewsYears() {
  return db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);
}

export async function getAvailableNewsMonths(year) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
}

export async function getNewsForYear(year) {
  return db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);
}

export async function getNewsForYearAndMonth(year, month) {
  return db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);
}
