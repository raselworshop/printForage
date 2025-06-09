import ModelCard from "@/components/ModelCard";
import { getAllModels } from "@/lib/models";
import { Model } from "@/types";
// import Link from "next/link";

export default async function ThreeDModels() {
  const models = await getAllModels();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <section className="container max-w-4xl px-4 py-8 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center">
          3D Models
        </h1>
        <p className="text-lg text-gray-700 text-center">
          Explore our vast library of user-submitted 3D models ready for printing.
        </p>
        {/* {models.map((model: Model) => (
          <div key={model.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{model.title}</h2>
            <p className="mt-2 text-gray-700">{model.description}</p>
            <Link href={`/3d-models/${model.id}`} className="mt-4 text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))} */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          role="region"
          aria-label="3D Models Gallery"
        >
          {models.map((model: Model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </section>
    </main>
  );
}