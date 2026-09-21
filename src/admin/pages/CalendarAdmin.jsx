import { useState } from "react";
import { Plus, Trash2, Calendar } from "lucide-react";
import AdminPageHeader from "../components/AdminPageHeader";
import EmptyState from "../components/EmptyState";
import { getCalendar, addCalendarEntry, deleteCalendarEntry } from "../adminStore";

export default function CalendarAdmin() {
  const [entries, setEntries] = useState(getCalendar());
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    course: "",
    date: "",
    duration: "",
    location: "Port Harcourt",
    availability: "Available",
  });

  const refresh = () => setEntries(getCalendar());

  const handleSubmit = (e) => {
    e.preventDefault();
    addCalendarEntry(form);
    setForm({ course: "", date: "", duration: "", location: "Port Harcourt", availability: "Available" });
    setShowForm(false);
    refresh();
  };

  const handleDelete = (id) => {
    if (confirm("Delete this entry?")) {
      deleteCalendarEntry(id);
      refresh();
    }
  };

  return (
    <>
      <AdminPageHeader
        title="Training Calendar"
        description="Manage scheduled training dates."
        action={
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary"
          >
            <Plus size={16} /> Add Date
          </button>
        }
      />

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-line p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="field">
            <label>Course</label>
            <input
              value={form.course}
              onChange={(e) => setForm({ ...form, course: e.target.value })}
              placeholder="e.g. BOSIET"
              required
            />
          </div>
          <div className="field">
            <label>Date</label>
            <input
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              placeholder="e.g. 14 – 16 October 2026"
              required
            />
          </div>
          <div className="field">
            <label>Duration</label>
            <input
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              placeholder="e.g. 3 Days"
              required
            />
          </div>
          <div className="field">
            <label>Location</label>
            <input
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Availability</label>
            <select
              value={form.availability}
              onChange={(e) => setForm({ ...form, availability: e.target.value })}
            >
              <option value="Available">Available</option>
              <option value="Few Seats Left">Few Seats Left</option>
              <option value="Full">Full</option>
            </select>
          </div>
          <div className="md:col-span-2 flex gap-3">
            <button type="submit" className="btn btn-primary">
              Save Entry
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="btn btn-ghost"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {entries.length === 0 ? (
        <EmptyState
          icon={Calendar}
          title="No Calendar Entries"
          description="Add training dates to show them on the public calendar."
          action={
            <button
              onClick={() => setShowForm(true)}
              className="btn btn-primary"
            >
              <Plus size={16} /> Add Date
            </button>
          }
        />
      ) : (
        <div className="bg-white border border-line overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Date</th>
                <th>Duration</th>
                <th>Location</th>
                <th>Availability</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.id}>
                  <td className="font-bold text-brand">{e.course}</td>
                  <td>{e.date}</td>
                  <td>{e.duration}</td>
                  <td>{e.location}</td>
                  <td>
                    <span
                      className={`badge ${
                        e.availability === "Available"
                          ? "badge-success"
                          : e.availability === "Full"
                          ? "badge-danger"
                          : "badge-warning"
                      }`}
                    >
                      {e.availability}
                    </span>
                  </td>
                  <td className="text-right">
                    <button
                      onClick={() => handleDelete(e.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
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