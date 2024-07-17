// _lib/Types.ts
export interface Book {
  id: number;
  name: string;
  genre: string;
  author: string;
  publisher: string;
  final_copies: number;
  created: Date;
  description?: string;
  image: string | null;
  price_reservation : number
}



export interface Reservation {
  id: number;
  reserved_book: string;
  user_email: string;
  book_price: number;
  day_count: number;
  Book: {
    name: string;
    image: string;
    // Add more fields if necessary based on your actual data structure
  };
}