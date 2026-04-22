export function Header() {
  return (
    <header className="header">
      <div>
        <p className="header-title">Vinamec Management</p>
        <p className="header-subtitle">Dental Clinic Operations Overview</p>
      </div>

      <div className="header-actions">
        <button className="action-btn" type="button">
          Notifications
        </button>
        <button className="action-btn primary" type="button">
          + New Appointment
        </button>
      </div>
    </header>
  );
}
