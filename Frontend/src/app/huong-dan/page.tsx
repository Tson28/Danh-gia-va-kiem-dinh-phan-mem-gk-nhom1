import { PageTemplate } from "@/components/public/PageTemplate";

const guides = [
  "Huong dan dat lich online",
  "Quy trinh kham benh tai Vinamec Dental",
  "Cach chuan bi truoc khi trong Implant",
  "Chinh sach thanh toan va bao hiem"
];

export default function GuidesPage() {
  return (
    <PageTemplate
      title="Huong Dan"
      description="Huong dan chi tiet cho benh nhan truoc, trong va sau dieu tri."
      items={guides}
    />
  );
}
