import { PageTemplate } from "@/components/public/PageTemplate";
import { doctors } from "@/lib/siteData";

export default function DoctorsPage() {
  return (
    <PageTemplate
      title="Bac Si"
      description="Danh sach bac si va chuyen mon noi bat tai Vinamec Dental."
      items={doctors.map((item) => `${item.name} - ${item.dept} - ${item.exp}`)}
    />
  );
}
