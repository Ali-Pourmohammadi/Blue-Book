import Image from 'next/image';
import MainBg from '../../public/main-bg.png';
import Link from 'next/link';
import { TypeEffect } from './_components/TypeEffect';
import { getAllBooks } from './_lib/data-service';
import { Book } from './_lib/Types';
import { log } from 'console';
// import { Book } from "./_lib/Types";

export default  async function Home() {
  return (
    <main className="flex flex-col items-center justify-start h-full bg-gradient-to-l from-gray-200 to-blue-500 overflow-hidden">
      <div className="mt-10 flex justify-between gap-3 p-4 w-4/5">
        <div className="flex-3 flex flex-col justify-center gap-6">
          <span className="text-white font-bold text-4xl">Welcome to Our Online Library</span>
          <p className="mt-4 text-lg text-gray-200 leading-relaxed">
            Discover a world of knowledge at your fingertips. Our extensive collection includes books, articles, and more, covering a wide range of topics to enrich your learning experience.
          </p>
          <Link href="/books" className="mt-6 p-4 bg-blue-500 text-white rounded hover:bg-blue-600 w-52 text-center block">
            Explore The Library
          </Link>
        </div>
        <div className="flex-6 relative">
          <Image src={MainBg} className="object-cover h-full w-full" alt="Library Image" />
        </div>
      </div>
      <TypeEffect />
    </main>
  );
}
