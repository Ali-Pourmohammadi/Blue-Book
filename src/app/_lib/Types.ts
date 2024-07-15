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
