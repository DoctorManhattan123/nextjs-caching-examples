import Refresh from "@/components/refresh";
import Link from "next/link";

// export const dynamic = "force-dynamic";

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
      {/* <Refresh /> */}
      <RandomNumberComponent />
      <Link href="/router-cache/subpage">Go to subpage</Link>
    </main>
  );
}
