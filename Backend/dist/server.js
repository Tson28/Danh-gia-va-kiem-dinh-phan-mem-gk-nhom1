"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const bookingRoutes_1 = require("./routes/bookingRoutes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT ?? 4000);
const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:3000";
app.use((0, cors_1.default)({ origin: frontendUrl }));
app.use(express_1.default.json());
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
});
app.use("/api/bookings", bookingRoutes_1.bookingRouter);
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Vinamec BE listening on port ${port}`);
});
