import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Link href="/page1" className="underline text-sky-600">Go to slider</Link>
    </div>
  );
}
