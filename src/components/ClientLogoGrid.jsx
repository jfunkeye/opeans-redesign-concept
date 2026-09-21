import { clients } from "../data/clients";

export default function ClientLogoGrid() {
  if (!clients || clients.length === 0) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-24 bg-white border border-line grid place-items-center text-xs text-muted font-bold"
          >
            CLIENT LOGO
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {clients.map((c) => (
        <div
          key={c.name}
          className="h-24 bg-white border border-line grid place-items-center p-4"
          title={c.name}
        >
          <img
            src={c.logo}
            alt={c.name}
            className="max-h-14 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}