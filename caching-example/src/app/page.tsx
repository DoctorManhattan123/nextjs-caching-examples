function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function RandomNumberComponent() {
  // const { signal } = new AbortController();
  const response = await fetch("http://localhost:3002/random-number", {
    cache: "no-cache",
    // signal,
  });

  const json = await response.json();

  return <p>{json.value}</p>;
}

export default function Home() {
  return (
    <main>
      <RandomNumberComponent />
      <RandomNumberComponent />
    </main>
  );
}
