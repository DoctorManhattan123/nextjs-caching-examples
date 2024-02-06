import Link from "next/link";

async function RandomNumberComponent() {
  const response = await fetch("http://localhost:3002/random-number", {
    // cache: "no-store",
  });

  const json = await response.json();

  return <p>{json.value}</p>;
}

export default function Page() {
  return (
    <main>
      <RandomNumberComponent />
      <Link href="/router-cache">Go to parent</Link>
    </main>
  );
}
