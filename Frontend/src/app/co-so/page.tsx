import { PageTemplate } from "@/components/public/PageTemplate";
import { facilities } from "@/lib/siteData";

export default function FacilitiesPage() {
  return (
    <PageTemplate
      title="Co So Vat Chat"
      description="He thong phong kham va thiet bi chan doan hinh anh hien dai."
      items={facilities}
    />
  );
}
