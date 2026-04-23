import Link from "next/link";
import Image from "next/image";
import { BookingForm } from "@/components/public/BookingForm";
import { PublicFooter } from "@/components/public/PublicFooter";
import { PublicHeader } from "@/components/public/PublicHeader";
import { Reveal } from "@/components/public/Reveal";
import { CountUpNumber } from "@/components/public/CountUpNumber";
import { DoctorCarousel } from "@/components/public/DoctorCarousel";
import { NewsCarousel } from "@/components/public/NewsCarousel";
import logoVinamec from "../../assest/logovinamec.jpg";

export default function HomePage() {
  return (
    <div className="public-page">
      <PublicHeader />

      <section className="hero">
        <div className="hero-ambient-orb hero-orb-one" />
        <div className="hero-ambient-orb hero-orb-two" />
        <div className="public-container hero-grid">
          <Reveal delay={80}>
            <p className="hero-tag">Hệ thống y tế răng hàm mặt VINAMEC</p>
            <h1>
              Chăm sóc răng miệng chuẩn bệnh viện, đặt lịch online nhanh chóng
            </h1>
            <p className="hero-desc">
              Tối ưu quy trình tiếp nhận, có đội ngũ bác sĩ chuyên môn cao và hệ
              thống phòng khám hiện đại giống mô hình website Vinmec.
            </p>
            <div className="hero-actions">
              <Link href="/dat-lich" className="public-cta pulse-cta">
                Đặt lịch khám
              </Link>
              <Link href="/dashboard" className="public-link">
                Vào hệ thống quản trị
              </Link>
            </div>
            <div className="hero-kpi-row">
              <div className="hero-kpi">
                <strong>
                  <CountUpNumber value={35} suffix="+" />
                </strong>
                <span>Bác sĩ chuyên khoa</span>
              </div>
              <div className="hero-kpi">
                <strong>
                  <CountUpNumber value={15} suffix="'" />
                </strong>
                <span>Phản hồi đặt lịch</span>
              </div>
              <div className="hero-kpi">
                <strong>
                  <CountUpNumber value={24} suffix="/7" />
                </strong>
                <span>Hỗ trợ online</span>
              </div>
            </div>
          </Reveal>
          <Reveal className="hero-panel" delay={180}>
            <div className="hero-panel-logo">
              <Image src={logoVinamec} alt="Vinamec mark" />
            </div>
            <h3>Thông tin nhanh</h3>
            <ul>
              <li>35+ bác sĩ chuyên khoa răng hàm mặt</li>
              <li>Đặt lịch online 24/7, không cần đăng ký</li>
              <li>Tư vấn và xác nhận lịch trong 15 phút</li>
              <li>Hệ thống nha khoa vô trùng tiêu chuẩn cao</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="service-shortcuts">
        <div className="public-container service-shortcuts-grid">
          <Reveal delay={70}>
            <article>
              <h3>Đặt khám theo bác sĩ</h3>
              <p>Chọn bác sĩ phù hợp và khung giờ linh hoạt cho bạn.</p>
            </article>
          </Reveal>
          <Reveal delay={150}>
            <article>
              <h3>Đặt khám theo gói</h3>
              <p>Gói khám tổng quát, niềng răng, implant, thẩm mỹ răng.</p>
            </article>
          </Reveal>
          <Reveal delay={230}>
            <article>
              <h3>Tra cứu kết quả</h3>
              <p>Đồng bộ kết quả khám, đơn thuốc và lịch hẹn tái khám.</p>
            </article>
          </Reveal>
          <Reveal delay={310}>
            <article>
              <h3>Tư vấn từ xa</h3>
              <p>Kết nối điều dưỡng và bác sĩ qua hotline chuyên khoa.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="dich-vu" className="public-section">
        <div className="public-container">
          <h2>Dịch vụ nổi bật</h2>
          <div className="info-grid">
            <article>
              <h3>Kế hoạch chăm sóc nha khoa</h3>
              <p>
                Khám kiểm tra tổng quát, lấy cao răng và điều trị phòng ngừa.
              </p>
            </article>
            <article>
              <h3>Niềng răng chỉnh nha</h3>
              <p>
                Giải pháp niềng răng mắc cài và niềng trong suốt cho mọi lứa
                tuổi.
              </p>
            </article>
            <article>
              <h3>Implant và phục hình</h3>
              <p>
                Cấy ghép implant chính xác, tái tạo răng mất với công nghệ hiện
                đại.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="chuyen-khoa" className="public-section">
        <div className="public-container">
          <h2>Chuyên khoa nổi bật</h2>
          <div className="info-grid">
            <article>
              <h3>Nha khoa tổng quát</h3>
              <p>
                Kiểm tra định kỳ, lấy cao răng, trám trượt và phòng ngừa sâu
                răng.
              </p>
            </article>
            <article>
              <h3>Chỉnh nha - niềng răng</h3>
              <p>
                Tư vấn phác đồ niềng trong suốt và niềng mắc cài cho mọi độ
                tuổi.
              </p>
            </article>
            <article>
              <h3>Implant răng</h3>
              <p>
                Phục hình răng mất bằng công nghệ implant chính xác và an toàn.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="bac-si" className="public-section">
        <div className="public-container">
          <h2>Đội ngũ bác sĩ</h2>
          <Reveal delay={120}>
            <DoctorCarousel />
          </Reveal>
        </div>
      </section>

      <section id="co-so-vat-chat" className="public-section">
        <div className="public-container">
          <h2>Cơ sở vật chất</h2>
          <p className="section-desc">
            Hệ thống chụp CT 3D, phòng điều trị vô trùng, và quy trình khám một
            chiều tối ưu trải nghiệm bệnh nhân.
          </p>
        </div>
      </section>

      <section className="public-section">
        <div className="public-container">
          <h2>Gói dịch vụ nha khoa</h2>
          <div className="package-grid">
            <article>
              <h3>Gói Khám Tổng Quát Premium</h3>
              <p>
                Khám, chụp phim, vệ sinh răng miệng và tư vấn phác đồ chi tiết.
              </p>
              <strong>Từ 1.200.000 VND</strong>
            </article>
            <article>
              <h3>Gói Chỉnh Nha Chuyên Sâu</h3>
              <p>
                Đánh giá khớp cắn, lập kế hoạch niềng răng và theo dõi định kỳ.
              </p>
              <strong>Từ 15.000.000 VND</strong>
            </article>
            <article>
              <h3>Gói Implant Trọn Gói</h3>
              <p>
                Dành cho bệnh nhân mất răng, bao gồm phẫu thuật và phục hình.
              </p>
              <strong>Từ 19.000.000 VND</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="public-section news-section">
        <div className="public-container">
          <h2>Tin tức sức khỏe răng miệng</h2>
          <Reveal delay={120}>
            <NewsCarousel />
          </Reveal>
        </div>
      </section>

      <section className="public-section booking-section">
        <div className="public-container">
          <BookingForm />
        </div>
      </section>

      <section className="public-section process-section">
        <div className="public-container">
          <h2>Quy trình thăm khám 5 bước</h2>
          <div className="process-grid">
            <Reveal delay={70}>
              <article>
                <span>01</span>
                <h3>Đặt lịch và tiếp nhận</h3>
                <p>Đặt lịch online hoặc hotline, tiếp nhận nhanh tại quầy.</p>
              </article>
            </Reveal>
            <Reveal delay={150}>
              <article>
                <span>02</span>
                <h3>Khám và chụp phim</h3>
                <p>Đánh giá tổng quan, chụp cận lâm sàng cần thiết.</p>
              </article>
            </Reveal>
            <Reveal delay={230}>
              <article>
                <span>03</span>
                <h3>Tư vấn phác đồ</h3>
                <p>Bác sĩ giải thích rõ lộ trình và chi phí minh bạch.</p>
              </article>
            </Reveal>
            <Reveal delay={310}>
              <article>
                <span>04</span>
                <h3>Điều trị</h3>
                <p>Thực hiện theo quy trình vô trùng và checklist an toàn.</p>
              </article>
            </Reveal>
            <Reveal delay={390}>
              <article>
                <span>05</span>
                <h3>Tái khám và theo dõi</h3>
                <p>Nhắc lịch tái khám và chăm sóc hậu điều trị chủ động.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="public-section testimonial-section">
        <div className="public-container">
          <h2>Cảm nhận bệnh nhân</h2>
          <div className="testimonial-grid">
            <Reveal delay={80}>
              <article>
                <p>
                  "Bác sĩ tư vấn rất rõ ràng, quy trình nhanh, mình không phải
                  đợi lâu."
                </p>
                <strong>Chị Thu Hà - Hai Bà Trưng</strong>
              </article>
            </Reveal>
            <Reveal delay={160}>
              <article>
                <p>
                  "Đặt lịch online tiện, đến nơi có nhân viên hướng dẫn xuyên
                  suốt."
                </p>
                <strong>Anh Đức Anh - Cầu Giấy</strong>
              </article>
            </Reveal>
            <Reveal delay={240}>
              <article>
                <p>
                  "Làm implant êm, không gian sạch, chăm sóc sau điều trị rất
                  tốt."
                </p>
                <strong>Cô Mai Lan - Long Biên</strong>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="public-section gallery-section">
        <div className="public-container">
          <h2>Thư viện trước - sau điều trị</h2>
          <div className="before-after-grid">
            <Reveal delay={90}>
              <article>
                <div className="ba-image">
                  <div className="ba-half">
                    <Image src={logoVinamec} alt="Ca trước điều trị" />
                    <span>Trước</span>
                  </div>
                  <div className="ba-half after">
                    <Image src={logoVinamec} alt="Ca sau điều trị" />
                    <span>Sau</span>
                  </div>
                </div>
                <h3>Ca chỉnh nha niềng trong suốt</h3>
                <p>Căn chỉnh khớp cắn và cải thiện thẩm mỹ sau 10 tháng.</p>
              </article>
            </Reveal>
            <Reveal delay={170}>
              <article>
                <div className="ba-image">
                  <div className="ba-half">
                    <Image src={logoVinamec} alt="Ca trước điều trị" />
                    <span>Trước</span>
                  </div>
                  <div className="ba-half after">
                    <Image src={logoVinamec} alt="Ca sau điều trị" />
                    <span>Sau</span>
                  </div>
                </div>
                <h3>Ca phục hình implant đơn lẻ</h3>
                <p>Phục hồi khả năng ăn nhai và hình thái răng tự nhiên.</p>
              </article>
            </Reveal>
            <Reveal delay={250}>
              <article>
                <div className="ba-image">
                  <div className="ba-half">
                    <Image src={logoVinamec} alt="Ca trước điều trị" />
                    <span>Trước</span>
                  </div>
                  <div className="ba-half after">
                    <Image src={logoVinamec} alt="Ca sau điều trị" />
                    <span>Sau</span>
                  </div>
                </div>
                <h3>Ca điều trị thẩm mỹ răng cửa</h3>
                <p>Điều chỉnh màu sắc, hình dáng và cân đối nụ cười.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="public-section accreditation-section">
        <div className="public-container">
          <h2>Chứng nhận và đối tác bảo hiểm</h2>
          <div className="badge-grid">
            <Reveal delay={70}>
              <article>
                <strong>ISO 9001</strong>
                <p>Hệ thống quản lý chất lượng dịch vụ y tế nha khoa.</p>
              </article>
            </Reveal>
            <Reveal delay={140}>
              <article>
                <strong>JCI aligned process</strong>
                <p>Quy trình tiếp nhận, an toàn và kiểm soát nhiễm khuẩn.</p>
              </article>
            </Reveal>
            <Reveal delay={210}>
              <article>
                <strong>Bảo hiểm liên kết</strong>
                <p>Bảo lãnh viện phí với nhiều đối tác bảo hiểm uy tín.</p>
              </article>
            </Reveal>
            <Reveal delay={280}>
              <article>
                <strong>Hội chẩn chuyên khoa</strong>
                <p>Phối hợp đa chuyên khoa cho ca bệnh phức tạp.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="public-section faq-section">
        <div className="public-container">
          <h2>Câu hỏi thường gặp</h2>
          <div className="faq-grid">
            <Reveal delay={90}>
              <details open>
                <summary>Cần đặt lịch trước khi đến khám không?</summary>
                <p>
                  Nên đặt lịch trước để được ưu tiên khung giờ và bác sĩ phù
                  hợp.
                </p>
              </details>
            </Reveal>
            <Reveal delay={170}>
              <details>
                <summary>Sau bao lâu nhận được xác nhận lịch hẹn?</summary>
                <p>Thông thường trong 15 phút trong giờ hành chính.</p>
              </details>
            </Reveal>
            <Reveal delay={250}>
              <details>
                <summary>Có hỗ trợ trả góp cho dịch vụ lớn không?</summary>
                <p>Có, tùy từng gói dịch vụ và đối tác thanh toán liên kết.</p>
              </details>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="public-section cta-banner">
        <div className="public-container cta-banner-inner">
          <div>
            <h2>Sẵn sàng đặt lịch khám răng ngay hôm nay?</h2>
            <p>
              Tư vấn nhanh, minh bạch chi phí, đội ngũ bác sĩ chuyên môn cao.
            </p>
          </div>
          <Link href="/dat-lich" className="public-cta pulse-cta">
            Đặt lịch ngay
          </Link>
        </div>
      </section>

      <PublicFooter />
      <a className="floating-hotline" href="/dat-lich">
        Đặt lịch 24/7
      </a>
    </div>
  );
}
