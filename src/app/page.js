import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SignedOut>
        <div className="w-1/2 p-5 bg-purple-600 flex text-white justify-between items-center rounded-lg">
          Next.js TODO App
          <SignInButton className="btn bg-black p-2 rounded-md" />
        </div>

      </SignedOut>

      <SignedIn className="flex">
        <main className="w-1/2 p-5 rounded-lg flex justify-between bg-purple-600 gap-8 row-start-2 items-center sm:items-start">
          <h2>NextTODO</h2>
          <UserButton />
        </main>
      </SignedIn>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
