import { getAllBooks } from '@/app/_lib/data-service';
import { Book } from '@/app/_lib/Types';
import { BookCard } from '@/app/_components/Book';

export default async function Page() {
  const books: Book[] = await getAllBooks();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Books List</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </ul>
      </div>
    </div>
  );
}
