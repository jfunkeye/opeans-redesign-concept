import { useState } from "react";
import { Plus, Trash2, Quote, Eye, EyeOff } from "lucide-react";
import AdminPageHeader from "../components/AdminPageHeader";
import EmptyState from "../components/EmptyState";
import {
  getTestimonials,
  addTestimonial,
  toggleTestimonialPublished,
  deleteTestimonial,
} from "../adminStore";

export default function TestimonialsAdmin() {
  const [list, setList] = useState(getTestimonials());
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    quote: "",
    name: "",
    company: "",
    course: "",
    year: new Date().getFullYear().toString(),
  });

  const refresh = () => setList(getTestimonials());

  const handleSubmit = (e) => {
    e.preventDefault();
    addTestimonial(form);
    setForm({ quote: "", name: "", company: "", course: "", year: new Date().getFullYear().toString() });
    setShowForm(false);
    refresh();
  };

  const handleToggle = (id) => {
    toggleTestimonialPublished(id);
    refresh();
  };

  const handleDelete = (id) => {
    if (confirm("Delete this testimonial?")) {
      deleteTestimonial(id);
      refresh();
    }
  };

  return (
    <>
      <AdminPageHeader
        title="Testimonials"
        description="Review, approve and publish trainee testimonials."
        action={
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary"
          >
            <Plus size={16} /> Add Testimonial
          </button>
        }
      />

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-line p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="field md:col-span-2">
            <label>Quote</label>
            <textarea
              value={form.quote}
              onChange={(e) => setForm({ ...form, quote: e.target.value })}
              required
            />
          </div>
          <div className="field">
            <label>Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="field">
            <label>Company</label>
            <input
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Course</label>
            <input
              value={form.course}
              onChange={(e) => setForm({ ...form, course: e.target.value })}
              placeholder="e.g. BOSIET"
            />
          </div>
          <div className="field">
            <label>Year</label>
            <input
              value={form.year}
              onChange={(e) => setForm({ ...form, year: e.target.value })}
            />
          </div>
          <div className="md:col-span-2 flex gap-3">
            <button type="submit" className="btn btn-primary">Save</button>
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

      {list.length === 0 ? (
        <EmptyState
          icon={Quote}
          title="No Testimonials Yet"
          description="Add testimonials and publish them to display on the /testimonials page."
        />
      ) : (
        <div className="space-y-4">
          {list.map((t) => (
            <div key={t.id} className="bg-white border border-line p-6">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                <div>
                  <p className="font-semibold text-ink">
                    {t.name}
                    {t.company && ` · ${t.company}`}
                  </p>
                  <p className="text-xs text-muted">
                    {t.course} {t.year && `· ${t.year}`}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleToggle(t.id)}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase px-3 py-1.5 border transition ${
                      t.published
                        ? "border-emerald-500 text-emerald-600"
                        : "border-line text-muted hover:border-brand hover:text-brand"
                    }`}
                  >
                    {t.published ? <Eye size={13} /> : <EyeOff size={13} />}
                    {t.published ? "Published" : "Draft"}
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="text-red-600 hover:text-red-700 px-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <p className="text-muted text-sm italic leading-relaxed">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}