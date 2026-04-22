type CardProps = {
  title: string;
  value: string;
  subtitle: string;
};

export function Card({ title, value, subtitle }: CardProps) {
  return (
    <section className="stat-card">
      <p className="stat-title">{title}</p>
      <p className="stat-value">{value}</p>
      <p className="stat-subtitle">{subtitle}</p>
    </section>
  );
}
