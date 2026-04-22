import { Table } from "@/components/ui/Table";

const patientColumns = [
  { key: "id", header: "Patient ID" },
  { key: "name", header: "Full Name" },
  { key: "phone", header: "Phone Number" },
  { key: "nextVisit", header: "Next Visit" },
  { key: "status", header: "Status" }
] as const;

const patientRows = [
  {
    id: "PT-1001",
    name: "Nguyen Minh Anh",
    phone: "0901 223 456",
    nextVisit: "2026-04-22 09:00",
    status: "Active"
  },
  {
    id: "PT-1002",
    name: "Tran Bao Chau",
    phone: "0909 552 100",
    nextVisit: "2026-04-22 10:30",
    status: "In Treatment"
  },
  {
    id: "PT-1003",
    name: "Le Hoang Nam",
    phone: "0912 234 890",
    nextVisit: "2026-04-23 14:00",
    status: "Follow-up"
  },
  {
    id: "PT-1004",
    name: "Pham Thanh Vy",
    phone: "0988 901 223",
    nextVisit: "2026-04-24 08:30",
    status: "New"
  }
];

export default function PatientsPage() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Patients</h1>
        <p>Manage dental patient profiles and upcoming visits.</p>
      </div>

      <Table columns={patientColumns} rows={patientRows} />
    </section>
  );
}
