import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li><Link>First News Item</Link></li>
        <li><Link>Second News Item</Link></li>
        <li><Link>Third News Item</Link></li>
      </ul>
    </>
  );
}
