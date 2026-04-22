import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinamec - Dental Clinic Management",
  description: "Scalable frontend for Vinamec dental clinic management system"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
