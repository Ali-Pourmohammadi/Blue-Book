import ReservationCard from "@/app/_components/ReservationCard";
import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getAllReservations } from "@/app/_lib/data-service";
import Link from "next/link";
// import { getBooking, getBookings, getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title : "reservations"
}

export default async function Page() {
  // CHANGE
//   const session = await auth();
//   const guest =await getGuest(session.user.email);
// const bookings = await getBookings(guest.id)
const reservations = await getAllReservations();

  return (
    <div> 
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {reservations.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="underline text-accent-500" href="/books">
            Books &rarr;
          </Link>
        </p>
      ) : (
        <ReservationList reservations ={reservations}/>
      )}
    </div>
  );
}
