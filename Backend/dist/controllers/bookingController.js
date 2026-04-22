"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = createBooking;
exports.getBookings = getBookings;
const bookings = [];
function createBooking(req, res) {
    const { fullName, phone, service, date, note } = req.body;
    if (!fullName || !phone || !service || !date) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const booking = {
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
function getBookings(_req, res) {
    return res.json({ data: bookings });
}
