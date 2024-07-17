'use server';

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import  supabase  from "./supabase";
// import { getBookings, getGuest } from "./data-service";
import { redirect } from "next/navigation";


// signIn
export  async function  signInAction(){
    await signIn('google' , {redirectTo:"/account"});
}

// SignOut
export async function signOutAction(){
    await signOut({redirectTo : "/"});
}

// create Reservation
export async function createReservation(reservationData){
    const session =  await auth();
    if(!session) throw new Error("you must be logged in !");
    const { error } = await supabase
        .from('Reservation')
        .insert([reservationData])
        .select()
        .single();
        
    if (error) {
        throw new Error(error.message);
    }
    revalidatePath(`books/${reservationData.reserved_book}`);
    redirect('/account/reservations')
}
