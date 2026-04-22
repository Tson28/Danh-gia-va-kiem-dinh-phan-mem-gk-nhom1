import { SiteFooter } from "@/components/public/SiteFooter";
import { SiteHeader } from "@/components/public/SiteHeader";

type PageTemplateProps = {
  title: string;
  description: string;
  items: string[];
};

export function PageTemplate({ title, description, items }: PageTemplateProps) {
  return (
    <div>
      <SiteHeader />
      <section className="section">
        <div className="container">
          <h1>{title}</h1>
          <p className="description">{description}</p>
          <div className="cards">
            {items.map((item) => (
              <article key={item} className="card">
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
