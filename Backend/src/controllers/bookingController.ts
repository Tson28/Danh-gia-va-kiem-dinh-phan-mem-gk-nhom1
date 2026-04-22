import { Request, Response } from "express";
import { Booking } from "../types/booking";

const bookings: Booking[] = [];

export function createBooking(req: Request, res: Response) {
  const { fullName, phone, service, date, note } = req.body as Partial<Booking>;

  if (!fullName || !phone || !service || !date) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const booking: Booking = {
    id: `BK-${Date.now()}`,
    fullName,
    phone,
    service,
    date,
    note: note ?? "",
    createdAt: new Date().toISOString()
  };

  bookings.push(booking);
  return res.status(201).json({ message: "Booking received", data: booking });
}

export function getBookings(_req: Request, res: Response) {
  return res.json({ data: bookings });
}
