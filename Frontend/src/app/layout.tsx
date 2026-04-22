import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinamec Dental",
  description: "Website dat lich nha khoa Vinamec"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
