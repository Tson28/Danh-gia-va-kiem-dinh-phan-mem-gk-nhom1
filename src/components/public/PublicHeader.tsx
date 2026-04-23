"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logoVinamec from "../../../assest/logovinamec.jpg";

const navLinks = [
  { label: "Chuyên khoa", href: "#chuyen-khoa" },
  { label: "Dịch vụ", href: "#dich-vu" },
  { label: "Bác sĩ", href: "#bac-si" },
  { label: "Cơ sở vật chất", href: "#co-so-vat-chat" },
  { label: "Đặt lịch", href: "/dat-lich" },
];

export function PublicHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="public-topbar">
        <div className="public-container public-topbar-inner">
          <span>Cấp cứu: 0966282806</span>
          <span>Đặt lịch nhanh 24/7</span>
          <span>467 Hoàng Hoa Thám, Ba Đình, Hà Nội</span>
        </div>
      </div>
      <header className="public-header">
        <div className="public-container public-header-inner">
          <Link href="/" className="public-brand">
            <span className="public-brand-logo">
              <Image src={logoVinamec} alt="Vinamec Logo" priority />
            </span>
            <span>
              <strong>VINAMEC</strong>
              <small>Hệ thống Y tế Răng Hàm Mặt</small>
            </span>
          </Link>

          <nav className="public-nav">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Mở menu điều hướng"
          >
            {isMobileMenuOpen ? "Đóng" : "Menu"}
          </button>

          <Link className="public-cta pulse-cta" href="/dat-lich">
            Đặt lịch ngay
          </Link>
        </div>
        <div
          className={`public-mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="public-container mobile-menu-inner">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.label}`}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/dashboard" onClick={closeMenu}>
              Hệ thống quản trị
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
