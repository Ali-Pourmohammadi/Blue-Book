"use client";
import { useState } from 'react';
import { differenceInDays, format } from 'date-fns';
import { DateUtils } from 'react-day-picker';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useReservation } from './ReservationContext';

function DateReservation({book}) {
    const {range  , setRange , resetRange} = useReservation();
    // CHANGE
    const {price_reservation} = book

    const dayCount = differenceInDays(range.to , range.from);
    const bookPrice = dayCount * price_reservation;
 
   
  
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
          disabled={Boolean(dayCount)}
          numberOfMonths={2}
        />
        <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
          <div className="flex items-baseline gap-6">
            <p className="flex gap-2 items-baseline">
                {dayCount ? dayCount : 'Days to Reserve'}
              <span className="">/days</span>
            </p>
            {dayCount ? (
              <>
                <p className="bg-accent-600 px-3 py-2 text-2xl">
                  <span>&times;</span> <span>{}</span>
                </p>
                <p>
                  <span className="text-lg font-bold uppercase">Total</span>{" "}
                  <span className="text-2xl font-semibold">${bookPrice}</span>
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
      </div>
    );
  }
  
  export default DateReservation;
  