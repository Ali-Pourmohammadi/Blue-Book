// ReservationContext.tsx (or ReservationContext.ts)
"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

interface Reservation {
  from?: Date;
  to?: Date;
}

interface ReservationContextType {
  range: Reservation;
  setRange: (range: Reservation) => void;
  resetRange: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

const initialState: Reservation = { from: undefined, to: undefined };

function ReservationProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState<Reservation>(initialState);

  function resetRange() {
    setRange(initialState);
  }

  const contextValue: ReservationContextType = {
    range,
    setRange,
    resetRange,
  };

  return <ReservationContext.Provider value={contextValue}>{children}</ReservationContext.Provider>;
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) throw new Error("You're using context outside of its provider");
  return context;
}

export { ReservationProvider, useReservation }; // Export useReservation here
