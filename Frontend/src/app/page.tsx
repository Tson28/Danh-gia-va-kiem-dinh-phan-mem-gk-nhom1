import Link from "next/link";
import { BookingForm } from "@/components/public/BookingForm";
import { SiteFooter } from "@/components/public/SiteFooter";
import { SiteHeader } from "@/components/public/SiteHeader";
import { doctors, facilities, news, specialties } from "@/lib/siteData";

export default function HomePage() {
  return (
    <div>
      <SiteHeader />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="kicker">HE THONG Y TE RANG HAM MAT VINAMEC</p>
            <h1>Dat lich nha khoa online, cham soc toan dien cho gia dinh</h1>
            <p>
              Giao dien va trai nghiem theo phong cach benh vien hien dai: ro rang,
              chuyen nghiep, toi uu cho benh nhan.
            </p>
            <div className="cta-row">
              <Link href="/dat-lich" className="btn btn-primary">
                Dat lich ngay
              </Link>
              <Link href="/chuyen-khoa" className="btn btn-outline">
                Xem chuyen khoa
              </Link>
            </div>
          </div>
          <div className="panel">
            <h3>Diem noi bat</h3>
            <ul>
              <li>Khong can dang ky dang nhap de dat lich</li>
              <li>He thong tiep nhan va goi xac nhan nhanh</li>
              <li>Phong kham vo trung va thiet bi ky thuat so</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cards">
          {specialties.slice(0, 3).map((item) => (
            <article key={item.name} className="card">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Bac si noi bat</h2>
          <div className="cards">
            {doctors.map((doctor) => (
              <article key={doctor.name} className="card">
                <h3>{doctor.name}</h3>
                <p>{doctor.dept}</p>
                <p>{doctor.exp}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Co so vat chat</h2>
          <div className="cards">
            {facilities.map((facility) => (
              <article key={facility} className="card">
                <h3>{facility}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Tin tuc moi</h2>
          <div className="cards">
            {news.map((item) => (
              <article key={item} className="card">
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <BookingForm />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
