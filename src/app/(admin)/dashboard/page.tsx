import { Card } from "@/components/ui/Card";

const stats = [
  { title: "Today Appointments", value: "42", subtitle: "+8% vs yesterday" },
  { title: "Active Patients", value: "1,248", subtitle: "112 new this month" },
  { title: "Doctors On Duty", value: "18", subtitle: "2 in surgery" },
  { title: "Pending Payments", value: "23", subtitle: "Total: 126,000,000 VND" }
];

export default function DashboardPage() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Operational overview for Vinamec Dental Clinic.</p>
      </div>

      <div className="grid-cards">
        {stats.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            value={item.value}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </section>
  );
}
