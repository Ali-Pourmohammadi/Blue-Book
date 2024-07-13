// _lib/Types.ts
export interface Book {
  id: number;
  name: string;
  genre: string;
  author: string;
  publisher: string;
  final_copies: number;
  created_at: string;
  description?: string;
  image: string | null;
}
