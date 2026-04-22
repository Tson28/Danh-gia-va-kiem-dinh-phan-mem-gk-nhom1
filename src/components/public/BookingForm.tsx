"use client";

import { FormEvent, useState } from "react";

export function BookingForm() {
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage(
      "Đặt lịch thành công. Vinamec sẽ gọi xác nhận với bạn trong 15 phút."
    );
    event.currentTarget.reset();
  };

  return (
    <form className="booking-form" onSubmit={onSubmit}>
      <h2>Đặt lịch online không cần đăng nhập</h2>
      <p>Để lại thông tin, hệ thống tiếp nhận và xếp lịch nhanh cho bạn.</p>

      <div className="booking-grid">
        <input required name="fullName" placeholder="Họ và tên" />
        <input required name="phone" placeholder="Số điện thoại" />
        <input required name="service" placeholder="Nhu cầu khám/chữa trị" />
        <input required type="date" name="date" />
      </div>

      <textarea
        name="note"
        placeholder="Triệu chứng hoặc ghi chú thêm (không bắt buộc)"
        rows={4}
      />

      <button type="submit" className="public-cta">
        Gửi yêu cầu đặt lịch
      </button>

      {successMessage ? <p className="booking-success">{successMessage}</p> : null}
    </form>
  );
}
