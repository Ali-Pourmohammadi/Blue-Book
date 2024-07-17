
import { Session } from 'inspector';
import { auth } from '../_lib/auth';
import BookDetails from './BookDetails';
import DateReservation from './DateReservations';
import LoginMessage from './LoginMessage';


 async function BookReservation({ book }) {
  const session  = await auth();
  const user  = session?.user;
 return(
      <div className="flex  items-center w-1/2 gap-5 bg-white p-5">
        <BookDetails book={book}/>
        {
         user ? <DateReservation book={book}  user={user} />: <div className='flex justify-center w-full'><LoginMessage/></div>

        }
      
      </div>
  );
}
export {BookReservation}
