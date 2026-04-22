import { Router } from "express";
import { createBooking, getBookings } from "../controllers/bookingController";

export const bookingRouter = Router();

bookingRouter.get("/", getBookings);
bookingRouter.post("/", createBooking);
