import { PageTemplate } from "@/components/public/PageTemplate";

const contacts = [
  "Tong dai: 1900 2323",
  "Email: care@vinamec.vn",
  "Dia chi: 458 Minh Khai, Hai Ba Trung, Ha Noi",
  "Fanpage: facebook.com/vinamecdental"
];

export default function ContactPage() {
  return (
    <PageTemplate
      title="Lien He"
      description="Tat ca kenh lien he va ho tro dat lich nhanh cho benh nhan."
      items={contacts}
    />
  );
}
