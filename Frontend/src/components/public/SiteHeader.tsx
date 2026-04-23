import Link from "next/link";

const navItems = [
  { label: "Chuyen khoa", href: "/chuyen-khoa" },
  { label: "Dich vu", href: "/dich-vu" },
  { label: "Bac si", href: "/bac-si" },
  { label: "Co so vat chat", href: "/co-so" },
  { label: "Tin tuc", href: "/tin-tuc" },
  { label: "Huong dan", href: "/huong-dan" },
  { label: "Lien he", href: "/lien-he" },
];

export function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Hotline 1900 2323</span>
          <span>Dat lich 24/7 khong can dang nhap</span>
          <span>458 Minh Khai, Ha Noi</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/">
            <span className="brand-icon">V</span>
            <span>
              <strong>VINAMEC DENTAL</strong>
              <small>He thong rang ham mat</small>
            </span>
          </Link>
          <nav className="main-nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/dat-lich" className="btn btn-primary">
            Dat lich ngay
          </Link>
        </div>
      </header>
    </>
  );
}
