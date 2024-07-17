"use client";
import { useState } from 'react';
import { differenceInDays, format } from 'date-fns';
import { DateUtils } from 'react-day-picker';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useReservation } from './ReservationContext';
import { CardActions  , Button} from '@mui/material';
import LoginMessage from './LoginMessage';
import { createReservation } from '../_lib/action';

 function  DateReservation({book , user}) {
  console.log(user);
  
  const {email : user_email} = user
    const {range  , setRange , resetRange} = useReservation();
    // CHANGE
    const {price_reservation , id :reserved_book  } = book

    const day_count = differenceInDays(range.to , range.from);
    const book_price = day_count * price_reservation;
 

    // reservation object
    const reservationData = {
      reserved_book,
      user_email,
      day_count,
      book_price
    }
    // handle Reservation
    function handleReservation(){
      createReservation(reservationData);
    }
  
    return (
      <div className="w-full border flex  flex-col  align-bottom">
        <DayPicker
          className="pt-12 place-self-center"
          mode="range"
        //   min={minBookingLength + 1}
          onSelect={setRange}
          selected={range}
        //   max={maxBookingLength}
          fromMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear() + 5}
          captionLayout="dropdown"
          disabled={Boolean(day_count)}
          numberOfMonths={2}
        />
        <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
          <div className="flex items-baseline gap-6">
            <p className="flex gap-2 items-baseline">
                {day_count ? day_count : 'Days to Reserve'}
              <span className="">/days</span>
            </p>
            {day_count ? (
              <>
                <p className="bg-accent-600 px-3 py-2 text-2xl">
                  <span>&times;</span> <span>{}</span>
                </p>
                <p>
                  <span className="text-lg font-bold uppercase">Total</span>{" "}
                  <span className="text-2xl font-semibold">${book_price}</span>
                </p>
              </>
            ) : null}
          </div>
  
          {range.from || range.to ? (
            <button
              className="border border-primary-800 py-2 px-4 text-sm font-semibold"
              onClick={() => resetRange()}
            >
              Clear
            </button>
          ) : null}
        </div>
        <CardActions>
            { range.to && range.from ? <Button onClick={handleReservation} size="small" color="primary">
              { "Add to your cart"}
            </Button>: <p className='warning p-3 text-red-500'> please select the days before add to cart !</p>
  }
          </CardActions>
      </div>
    );
  }
  
  export default DateReservation;
  