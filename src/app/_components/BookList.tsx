import { getAllBooks } from "../_lib/data-service";
import { Book } from "../_lib/Types";
import { BookCard } from "./Book";
import Filter from "./Filter";

interface BookListProps {
  filter: string;
}

export default async function BookList({ filter }: BookListProps) {
  const books: Book[] = await getAllBooks();
  console.log(filter);

  let filterBooks: Book[] = [];

  // Use the filter prop to filter the books array
  switch (filter) {
    case "all":
      filterBooks = books;
      break;
    case "Fiction":
      filterBooks = books.filter(book => book.genre === "Fiction");
      break;
    case "Fantasy":
      filterBooks = books.filter(book => book.genre === "Fantasy");
      break;
    default:
      filterBooks = books; // Handle unexpected filter values
  }

  return (
    <div className="flex flex-col items-center">
      <div className="my-5 flex justify-end w-full">
        <Filter />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-red-300 justify-items-center">
        {filterBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
