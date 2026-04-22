import { BookingForm } from "@/components/public/BookingForm";
import { PublicFooter } from "@/components/public/PublicFooter";
import { PublicHeader } from "@/components/public/PublicHeader";

export default function BookingPage() {
  return (
    <div className="public-page">
      <PublicHeader />
      <section className="public-section booking-page">
        <div className="public-container">
          <h1>Đặt lịch khám online</h1>
          <p className="section-desc">
            Bạn không cần đăng ký tài khoản. Chỉ cần để lại thông tin và nhu cầu
            điều trị, hệ thống Vinamec sẽ liên hệ xác nhận ngay.
          </p>
          <BookingForm />
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}