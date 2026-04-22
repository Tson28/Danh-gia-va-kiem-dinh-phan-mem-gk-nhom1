import { BookingForm } from "@/components/public/BookingForm";
import { SiteFooter } from "@/components/public/SiteFooter";
import { SiteHeader } from "@/components/public/SiteHeader";

export default function BookingPage() {
  return (
    <div>
      <SiteHeader />
      <section className="section">
        <div className="container">
          <h1>Dat Lich Kham</h1>
          <p className="description">
            Khong can dang ky dang nhap. Gui thong tin va nhan xac nhan lich hen.
          </p>
          <BookingForm />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
