import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col-reverse sm:flex-row-reverse items-center gap-[24px] w-full">
          <div className="relative sm:w-1/2 w-full flex justify-center rounded-full overflow-hidden">
            <Image
              className="dark:invert"
              src="/scrimba-placeholder-image.png"
              alt="Next.js logo"
              width={660}
              height={660}
              priority
            />
            <div className="absolute left-1/2 top-1/2 z-50 w-full h-1/4 sm:h-1/5 bg-white flex items-center justify-center"
            style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }}>
             <div className=" w-32 h-32 sm:w-48 sm:h-48 bg-white hover:bg-blue-500 rounded-full transition-all duration-300"></div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] sm:w-1/2 w-full text-center sm:text-left ">
            <p className="hidden md:block">Your go-to platform for 3D printing files</p>
            <h1 className="text-2xl md:text-4xl font-bold text-left sm:mr-24">
              Discover what’s possible with 3D printing
            </h1>
            <p className="text-lg text-left sm:mr-24">
              Join our community of creators and explore a vast library of user-submitted models.
            </p>
            <button className="hover:bg-blue-500 hover:text-white py-1 px-2 rounded cursor-pointer place-self-start border-2 transition-all duration-300">Browse models</button>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>This is footer</p>
      </footer>
    </div>
  );
}
