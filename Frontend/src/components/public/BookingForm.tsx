"use client";

import { FormEvent, useState } from "react";

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000";

export function BookingForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      date: String(formData.get("date") ?? ""),
      note: String(formData.get("note") ?? "")
    };

    try {
      const response = await fetch(`${apiBase}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Booking failed");
      }

      setMessage("Dat lich thanh cong. He thong se goi xac nhan trong 15 phut.");
      event.currentTarget.reset();
    } catch {
      setMessage("Khong gui duoc yeu cau. Vui long thu lai sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Dat lich online</h2>
      <p>Khong can tao tai khoan. Dien thong tin va gui ngay.</p>
      <div className="grid-2">
        <input name="fullName" required placeholder="Ho va ten" />
        <input name="phone" required placeholder="So dien thoai" />
        <input name="service" required placeholder="Nhu cau dieu tri" />
        <input name="date" required type="date" />
      </div>
      <textarea name="note" rows={4} placeholder="Ghi chu them (neu co)" />
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Dang gui..." : "Gui yeu cau dat lich"}
      </button>
      {message ? <p className="feedback">{message}</p> : null}
    </form>
  );
}
