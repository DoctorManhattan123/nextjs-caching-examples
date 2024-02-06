async function RandomNumberComponent() {
  const { signal } = new AbortController();
  const response = await fetch("http://localhost:3002/random-number", {
    signal,
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
