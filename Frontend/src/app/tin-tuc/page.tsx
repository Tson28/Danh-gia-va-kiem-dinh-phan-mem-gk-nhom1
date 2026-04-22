import { PageTemplate } from "@/components/public/PageTemplate";
import { news } from "@/lib/siteData";

export default function NewsPage() {
  return (
    <PageTemplate
      title="Tin Tuc"
      description="Cap nhat kien thuc suc khoe rang mieng va hoat dong benh vien."
      items={news}
    />
  );
}
