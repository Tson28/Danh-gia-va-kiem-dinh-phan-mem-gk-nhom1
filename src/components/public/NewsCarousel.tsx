"use client";

import { useEffect, useState } from "react";

type NewsItem = {
  title: string;
  desc: string;
  tag: string;
};

const newsItems: NewsItem[] = [
  {
    title: "7 dấu hiệu cần đi khám răng ngay",
    desc: "Nhận biết sớm dấu hiệu viêm lợi, sâu răng và hướng xử trí đúng cách.",
    tag: "Phòng ngừa"
  },
  {
    title: "Chăm sóc răng trẻ em đúng cách",
    desc: "Hướng dẫn đánh răng, chế độ ăn và lịch khám định kỳ cho trẻ.",
    tag: "Nhi khoa"
  },
  {
    title: "Implant có đau không?",
    desc: "Giải đáp quy trình, gây tê và chăm sóc hậu phẫu để giảm khó chịu.",
    tag: "Implant"
  }
];

export function NewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="news-carousel">
      <div className="news-carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {newsItems.map((item) => (
          <article key={item.title} className="news-carousel-item">
            <span>{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button type="button">Xem chi tiết</button>
          </article>
        ))}
      </div>
      <div className="news-progress">
        {newsItems.map((item, idx) => (
          <i key={item.title} className={idx === activeIndex ? "active" : ""} />
        ))}
      </div>
    </div>
  );
}
