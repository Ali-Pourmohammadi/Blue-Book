import { PencilSquareIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function ReservationCard({reservation}){
  const {id , reserved_book , user_email , book_price , day_count , Book : {name , image}} = reservation
  return (
    <div className='flex border border-primary-800 rounded-lg overflow-hidden p-3'>
      <div className='relative h-32 w-32'>
        <Image
          src={image}
          alt={`book ${name}`}
          layout="fill"
          objectFit="cover"
          className='object-cover'
        />
      </div>

      <div className='flex-grow flex flex-col px-6 py-3'>
        <div className='flex items-center justify-between mb-3'>
          <h3 className='text-xl font-semibold'>
            {day_count} days reserve for {name}
          </h3>
         
        </div>

        <div className='flex gap-5 mt-auto items-center'>
          <p className='text-xl font-semibold text-accent-400'>${book_price}</p>
       
          <p className='text-lg text-primary-300'>
            {/* {numGuests} guest{numGuests > 1 ? 's' : ''} */}
          </p>
          <p className='ml-auto text-sm text-primary-400'>
            {/* Booked {new Date(created_at).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' })} */}
          </p>
        </div>
      </div>

      <div className='flex flex-col border-l border-primary-800 px-3 py-2'>
        <a
          href={`/account/reservations/edit/${id}`}
          className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 hover:text-primary-900 transition-colors'
        >
          <PencilSquareIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
          <span className='mt-1'>Edit</span>
        </a>
        {/* <button
          onClick={() => onDelete(id)}
          className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 hover:text-primary-900 transition-colors'
        >
          <span className='mt-1'>Delete</span>
        </button> */}
      </div>
    </div>
  );
}