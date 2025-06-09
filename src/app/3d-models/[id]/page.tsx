import { ModelDetailsPageProps } from "@/types";
import { getModelById } from "@/lib/models";
import Image from "next/image";

export default async function ModelDetailsPage({params}: ModelDetailsPageProps){
      /**
   * Challenge: 
   * Import and use the `getModelById()` function from 
   * "@/app/lib/models" and use it to get the details for
   * this specific dynamic page's 3d model.
   * 
   * Note that `getModelById()` is an async function.
   * 
   * Then display the relevant information about the model,
   * using the Figma design as a guide if you'd like.
   */
  const {id } = await params;
//   const { getModelById } = await import('@/lib/models');
  const model = await getModelById(id);
  if (!model) {
    throw new Error(`Model with id ${id} not found`);
  }
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="container max-w-4xl px-4 py-8 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center">{model.title}</h1>
        <p className="mt-2 text-gray-700">{model.description}</p>
        <Image src={model.image || "@/public/scrimba-placeholder-image.png"} alt={model.title} width={100} height={100} className="w-full h-auto mt-4 rounded-lg" />
        <p className="mt-4 text-gray-500">Category: {model.category}</p>
        <p className="mt-2 text-gray-500">Likes: {model.likes}</p>
        <p className="mt-2 text-gray-500">Date Added: {new Date(model.dateAdded).toLocaleDateString()}</p>
      </section>
    </main>
  );
}