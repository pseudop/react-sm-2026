export async function getSlowPosts(signal?: AbortSignal) {
  // for testing slow network / abort controller
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(signal)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?`, { signal });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
 // simulate network delay
  return res.json(); // returns Promise<Post[]>
}
