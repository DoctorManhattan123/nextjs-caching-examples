import { revalidateTag } from "next/cache";

// export const dynamic = "force-dynamic";
// export const revalidate = 0;

async function RandomNumberComponent() {
  // const { signal } = new AbortController();
  const response = await fetch("http://localhost:3002/random-number", {
    // cache: "no-store",
    // signal,
    // next: {
    //   revalidate: 3,
    //   // tags: ["a"],
    // },
  });

  const json = await response.json();

  return <p>{json.value}</p>;
}

export default function Home() {
  // async function handleRevalidateTag() {
  //   "use server";
  //   revalidateTag("a");
  // }
  return (
    <main>
      <RandomNumberComponent />
      <RandomNumberComponent />
      {/* <form action={handleRevalidateTag}> */}
      {/*   <button>Revalidate</button> */}
      {/* </form> */}
    </main>
  );
}
