"use client";

import { useEffect, useState } from "react";

type DoctorItem = {
  name: string;
  title: string;
  quote: string;
};

const doctors: DoctorItem[] = [
  {
    name: "TS.BS Nguyễn Tuấn Anh",
    title: "Chuyên gia Implant - 15 năm kinh nghiệm",
    quote: "Ưu tiên điều trị bảo tồn, tối ưu kết quả thẩm mỹ và chức năng ăn nhai."
  },
  {
    name: "ThS.BS Lê Minh Châu",
    title: "Chỉnh nha và răng trẻ em",
    quote: "Cá nhân hóa phác đồ niềng răng để tối ưu hiệu quả theo từng độ tuổi."
  },
  {
    name: "BSCKII Trần Khánh Linh",
    title: "Nội nha và phục hình thẩm mỹ",
    quote: "Minh bạch kế hoạch điều trị và đồng hành sát sao suốt lộ trình."
  }
];

export function DoctorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % doctors.length);
    }, 4500);

    return () => window.clearInterval(id);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % doctors.length);
  };

  return (
    <div className="doctor-carousel">
      <div className="doctor-carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {doctors.map((doctor) => (
          <article key={doctor.name} className="doctor-carousel-item">
            <h3>{doctor.name}</h3>
            <p className="doctor-title">{doctor.title}</p>
            <p className="doctor-quote">"{doctor.quote}"</p>
          </article>
        ))}
      </div>

      <div className="doctor-carousel-controls">
        <button type="button" onClick={goPrev} aria-label="Bác sĩ trước">
          &larr;
        </button>
        <div className="doctor-carousel-dots">
          {doctors.map((doctor, index) => (
            <button
              key={`dot-${doctor.name}`}
              type="button"
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Xem bác sĩ ${index + 1}`}
            />
          ))}
        </div>
        <button type="button" onClick={goNext} aria-label="Bác sĩ tiếp theo">
          &rarr;
        </button>
      </div>
    </div>
  );
}
