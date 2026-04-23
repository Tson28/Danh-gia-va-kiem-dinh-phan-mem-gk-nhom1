import { PageTemplate } from "@/components/public/PageTemplate";
import { services } from "@/lib/siteData";

export default function ServicesPage() {
  return (
    <PageTemplate
      title="Dich Vu Nha Khoa"
      description="Danh muc cac dich vu nha khoa to chuc va chuyen nghiep."
      items={services.map(
        (item: { name: string; desc: string }) => `${item.name} - ${item.desc}`,
      )}
    />
  );
}
