import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { bookingRouter } from "./routes/bookingRoutes";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 4000);
const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:3000";

app.use(cors({ origin: frontendUrl }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/bookings", bookingRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Vinamec BE listening on port ${port}`);
});
