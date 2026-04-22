"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRouter = void 0;
const express_1 = require("express");
const bookingController_1 = require("../controllers/bookingController");
exports.bookingRouter = (0, express_1.Router)();
exports.bookingRouter.get("/", bookingController_1.getBookings);
exports.bookingRouter.post("/", bookingController_1.createBooking);
