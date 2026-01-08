export default async function getPosts(signal?: AbortSignal) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=8", {
    signal, // optional, fetch ignores undefined
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}
