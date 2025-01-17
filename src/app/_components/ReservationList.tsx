'use client';
import { Reservation } from "../_lib/Types";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from 'react';
// import {deleteReservation} from '../_lib/actions';
interface ReservationListProps {
  reservations: Reservation[];
}
export default function ReservationList({ reservations }:ReservationListProps) {
  
  // const [optimisticBookings, optimisticDelete] = useOptimistic(bookings, (currBookings , bookingId) => {
  //   return currBookings.filter(booking=> booking.id !== bookingId)
  // });

  // async function handleDelete(bookingId) {
  //   // optimisticDelete({ type: 'delete', id: bookingId });
  //   await deleteReservation(bookingId);
  // }

  return (
    <ul className="flex flex-col gap-5   p-16 rounded-lg">
      {reservations.map((reservation) => (
        <ReservationCard 
          reservation={reservation} 
          key={reservation.id}  
        />
      ))}
    </ul>
  );
}
