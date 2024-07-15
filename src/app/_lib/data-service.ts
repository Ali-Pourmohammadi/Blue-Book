// _lib/data-service.ts
import supabase from "./supabase";
import { Book } from "./Types";


//get All Books
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
    throw new Error(`Error fetching books${error}`);
  }
}

export { getAllBooks };

// get specific Book with id
async function getBook(bookId:number){

  try{
    let { data: Book, error } = await supabase
    .from('Book')
    .select('*')
    .eq('id' , bookId)
    .single();

    if(error) throw new Error (error.message);
    return Book;
  }catch(error){
    throw new Error(`Error fetching books${error}`);
  }


}
export { getBook };
