import { getAllBooks } from '@/app/_lib/data-service';
import { Book } from '@/app/_lib/Types';
import { BookCard } from '@/app/_components/Book';
import { Suspense } from 'react';
import Loading from './loading';
import BookList from '../_components/BookList';

export default async function Page() {
  return (
    <div className="flex justify-center items-center">
      <div className=" w-3/6 p-2  flex  flex-col">
        <h1 className="text-2xl font-bold text-center  my-10 text-gray-100">Books List</h1>
      <Suspense fallback={<Loading/>}>
        <BookList/>
      </Suspense>
      </div>
    </div>
  );
}
