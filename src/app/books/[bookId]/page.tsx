
import { BookCard } from "@/app/_components/Book";
import {BookReservation} from "@/app/_components/BookReservation";
import { auth } from "@/app/_lib/auth";
import { getAllBooks, getBook } from "@/app/_lib/data-service";
import { Book } from "@/app/_lib/Types";
import { log } from "console";

interface Params {
  bookId: string;
}

interface PageProps {
  params: Params;
}
export async function generateStaticParams(){
  const books = await getAllBooks();

  const ids  =  books?.map(book=>({bookId :String( book.id)})
  )
  return ids;
}
export default async function Page({ params }: PageProps) {
  const bookId = Number(params.bookId);
  const book = await getBook(bookId);  
  return (
    <div className="w-full flex justify-center my-16">
            <BookReservation book={book} />
      </div>
  );
}
