export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts = await res.json();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="container max-w-4xl px-4 py-8 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center">Posts</h1>
        <ul className="space-y-4">
          {posts.map((post: { id: number; title: string; body: string }) => (
            <li key={post.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{post.id}.{post.title}</h2>
              <p className="mt-2 text-gray-700">{post.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}