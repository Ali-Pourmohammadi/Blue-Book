import { getAllBooks } from '@/app/_lib/data-service';
import { Book } from '@/app/_lib/Types';
import { BookCard } from '@/app/_components/Book';
import { Suspense } from 'react';
import Loading from './loading';
import BookList from '../_components/BookList';

interface SearchParams {
  genre?: string;
}

interface PageProps {
  searchParams: SearchParams;
}

export default async function Page({ searchParams }: PageProps) {
  const filter = searchParams?.genre  ?? "all";

  return (
    <div className="flex justify-center items-center scroll-m-3">
      <div className="w-4/6 p-2 flex flex-col">
        <h1 className="text-2xl font-bold text-center my-10 text-gray-100">Books List</h1>
        <p className="text-center mb-6 text-white text-lg">
          Welcome to our extensive library of books! Here, you will find a rich collection of literature that spans numerous genres and topics. Whether you are a fan of classic novels, modern thrillers, romantic tales, or non-fiction narratives, our curated selection has something to offer for every taste and interest. Dive into the world of fiction with our gripping mysteries and adventurous fantasy novels, or expand your knowledge with our comprehensive non-fiction titles covering history, science, self-help, and more.
          <br /><br />
          Our book list is continuously updated to bring you the latest releases and timeless classics. Use the genre filter to refine your search and easily find books that match your preferences. Each book is carefully selected to ensure a quality reading experience, whether you're seeking entertainment, enlightenment, or a bit of both. We invite you to browse through our collection, discover new authors, and find your next great read.
        </p>
        <Suspense fallback={<Loading />}>
          <BookList filter={filter} />
        </Suspense>
      </div>
    </div>
  );
}
