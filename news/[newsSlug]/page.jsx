export default function newsDetailsPage({ params }) {
  const newsID = params.newsSlug;

  return (
    <>
      <h1>News Details Page</h1>
      <p>The ID is {newsID}</p>
    </>
  );
}
