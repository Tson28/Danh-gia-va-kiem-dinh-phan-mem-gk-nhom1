import { PageTemplate } from "@/components/public/PageTemplate";
import { specialties } from "@/lib/siteData";

export default function SpecialtiesPage() {
  return (
    <PageTemplate
      title="Chuyen Khoa"
      description="Danh muc chuyen khoa nha khoa theo mo hinh benh vien."
      items={specialties.map((item) => `${item.name} - ${item.desc}`)}
    />
  );
}
