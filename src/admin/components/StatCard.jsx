export default function StatCard({ icon: Icon, label, value, accent = "brand" }) {
  const accentClass = {
    brand: "bg-brand text-white",
    emerald: "bg-emerald-500 text-white",
    amber: "bg-amber-500 text-white",
    red: "bg-red-500 text-white",
  }[accent] || "bg-brand text-white";

  return (
    <div className="bg-white border border-line p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 flex items-center justify-center ${accentClass}`}>
          <Icon size={20} />
        </div>
      </div>
      <p className="text-3xl font-display font-extrabold text-brand mb-1">
        {value}
      </p>
      <p className="text-xs font-extrabold uppercase tracking-wide text-muted">
        {label}
      </p>
    </div>
  );
}