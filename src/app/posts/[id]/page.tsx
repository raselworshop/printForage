import { Post } from "@/types";
export default async function postDetails({params}:{params:{ id: string }}) {
    const { id } = params;
    console.log("Post Details Params:", params, id);
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    console.log("Fetching URL:", url);
    const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  const post: Post = await res.json();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="container max-w-4xl px-4 py-8 mx-auto">
        <p>{post.userId}</p>
        <h1 className="mb-6 text-4xl font-bold text-center">{post.title}</h1>
        <p className="mt-2 text-gray-700">{post.body}</p>
      </section>
    </main>
  );
}
