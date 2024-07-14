import { getAllBooks } from "../_lib/data-service";
import { Book } from "../_lib/Types";
import { BookCard } from "./Book";

export default async function BookList(){
    const books: Book[] = await getAllBooks();
    return(  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>)
}