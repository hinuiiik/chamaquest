import Image from "next/image";

export default function Home() {
  return (
    <div
      id="fullpage"
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main
        id="center"
        className="flex-col gap-8 rounded-xl bg-blue-400 row-start-2 items-center sm:items-start p-3">
        <div id="logoContainer" className="flex flex-row justify-center">
          <Image
            className="dark:invert m-4"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div
          id="list"
          className="list-inside m-2 list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p className="mb-2">
            Log in to the thingy!{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded-sm font-semibold">
              src/app/page.tsx
            </code>
            .
          </p>
          <p>Save and see your changes instantly.</p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
