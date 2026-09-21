import { useState } from "react";
import { ClipboardList, Check, X, Trash2 } from "lucide-react";
import AdminPageHeader from "../components/AdminPageHeader";
import EmptyState from "../components/EmptyState";
import {
  getRegistrations,
  updateRegistrationStatus,
  saveRegistrations,
} from "../adminStore";

export default function RegistrationsAdmin() {
  const [registrations, setRegistrations] = useState(getRegistrations());
  const [filter, setFilter] = useState("all");

  const refresh = () => setRegistrations(getRegistrations());

  const filtered =
    filter === "all"
      ? registrations
      : registrations.filter((r) => r.status === filter);

  const handleStatus = (id, status) => {
    updateRegistrationStatus(id, status);
    refresh();
  };

  const handleDelete = (id) => {
    if (confirm("Delete this registration?")) {
      saveRegistrations(registrations.filter((r) => r.id !== id));
      refresh();
    }
  };

  return (
    <>
      <AdminPageHeader
        title="Registrations"
        description="Review and manage course registrations."
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {["all", "pending", "approved", "rejected"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wide border transition ${
              filter === f
                ? "bg-brand text-white border-brand"
                : "bg-white text-muted border-line hover:bg-soft"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={ClipboardList}
          title="No Registrations"
          description="Registrations will appear here when people sign up for courses."
        />
      ) : (
        <div className="bg-white border border-line overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id}>
                  <td>
                    <p className="font-semibold text-ink">
                      {r.firstName} {r.lastName}
                    </p>
                    <p className="text-xs text-muted">{r.email}</p>
                  </td>
                  <td>{r.course}</td>
                  <td>{r.date}</td>
                  <td>
                    <span
                      className={`badge ${
                        r.status === "approved"
                          ? "badge-success"
                          : r.status === "rejected"
                          ? "badge-danger"
                          : "badge-warning"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      {r.status !== "approved" && (
                        <button
                          onClick={() => handleStatus(r.id, "approved")}
                          className="text-emerald-600 hover:text-emerald-700"
                          title="Approve"
                        >
                          <Check size={16} />
                        </button>
                      )}
                      {r.status !== "rejected" && (
                        <button
                          onClick={() => handleStatus(r.id, "rejected")}
                          className="text-amber-600 hover:text-amber-700"
                          title="Reject"
                        >
                          <X size={16} />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(r.id)}
                        className="text-red-600 hover:text-red-700"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}