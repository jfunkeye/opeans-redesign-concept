import { useState } from "react";
import { Plus, Trash2, GraduationCap } from "lucide-react";
import AdminPageHeader from "../components/AdminPageHeader";
import EmptyState from "../components/EmptyState";
import { getCourses, addCourse, deleteCourse } from "../adminStore";

export default function CoursesAdmin() {
  const [courses, setCourses] = useState(getCourses());
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    fullName: "",
    category: "offshore",
    duration: "",
    type: "",
  });

  const refresh = () => setCourses(getCourses());

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(form);
    setForm({ name: "", fullName: "", category: "offshore", duration: "", type: "" });
    setShowForm(false);
    refresh();
  };

  const handleDelete = (id) => {
    if (confirm("Delete this course?")) {
      deleteCourse(id);
      refresh();
    }
  };

  return (
    <>
      <AdminPageHeader
        title="Courses"
        description="Manage all OPEANS training courses."
        action={
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary"
          >
            <Plus size={16} /> Add Course
          </button>
        }
      />

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-line p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="field">
            <label>Short Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. BOSIET"
              required
            />
          </div>
          <div className="field">
            <label>Full Name</label>
            <input
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              placeholder="e.g. Basic Offshore Safety Induction..."
              required
            />
          </div>
          <div className="field">
            <label>Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="offshore">Offshore / Marine</option>
              <option value="fire">Fire & Emergency</option>
              <option value="first-aid">First Aid</option>
              <option value="industrial">Industrial Safety</option>
              <option value="lifting">Lifting & Rigging</option>
              <option value="hse">HSE</option>
              <option value="logistics">Logistics</option>
              <option value="driving">Driving</option>
            </select>
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
            <label>Type</label>
            <input
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              placeholder="e.g. Offshore"
            />
          </div>
          <div className="md:col-span-2 flex gap-3">
            <button type="submit" className="btn btn-primary">
              Save Course
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

      {courses.length === 0 ? (
        <EmptyState
          icon={GraduationCap}
          title="No Courses Yet"
          description="Add your first course to get started."
          action={
            <button
              onClick={() => setShowForm(true)}
              className="btn btn-primary"
            >
              <Plus size={16} /> Add Course
            </button>
          }
        />
      ) : (
        <div className="bg-white border border-line overflow-hidden">
          <table className="data-table">
            <thead>
              <tr>
                <th>Short Name</th>
                <th>Full Name</th>
                <th>Category</th>
                <th>Duration</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.id}>
                  <td className="font-bold text-brand">{c.name}</td>
                  <td>{c.fullName}</td>
                  <td>
                    <span className="badge badge-success">{c.category}</span>
                  </td>
                  <td>{c.duration}</td>
                  <td className="text-right">
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="text-red-600 hover:text-red-700"
                      aria-label="Delete"
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