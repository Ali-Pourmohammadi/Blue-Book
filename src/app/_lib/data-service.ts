// _lib/data-service.ts
import supabase from "./supabase";
import { Book } from "./Types";



async function getAllBooks() {
  try {
    const { data, error } = await supabase
      .from('Book')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }
    return data ;
  } catch (error) {
    throw new Error(`Error fetching books:`);
  }
}

export { getAllBooks };

