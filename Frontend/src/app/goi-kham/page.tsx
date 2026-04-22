import { PageTemplate } from "@/components/public/PageTemplate";

const packages = [
  "Goi kham tong quat Premium",
  "Goi nieng rang trong suot",
  "Goi trong rang Implant tron goi",
  "Goi cham soc rang tre em"
];

export default function PackagesPage() {
  return (
    <PageTemplate
      title="Goi Kham"
      description="Cac goi dich vu duoc thiet ke theo nhu cau dieu tri cu the."
      items={packages}
    />
  );
}
