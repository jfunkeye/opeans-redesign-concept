import { useState } from "react";
import { Plus, Trash2, HelpCircle } from "lucide-react";
import AdminPageHeader from "../components/AdminPageHeader";
import EmptyState from "../components/EmptyState";
import { getFAQ, addFAQ, deleteFAQ } from "../adminStore";

export default function FAQAdmin() {
  const [list, setList] = useState(getFAQ());
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ category: "", q: "", a: "" });

  const refresh = () => setList(getFAQ());

  const handleSubmit = (e) => {
    e.preventDefault();
    addFAQ(form);
    setForm({ category: "", q: "", a: "" });
    setShowForm(false);
    refresh();
  };

  const handleDelete = (id) => {
    if (confirm("Delete this FAQ?")) {
      deleteFAQ(id);
      refresh();
    }
  };

  return (
    <>
      <AdminPageHeader
        title="FAQ"
        description="Manage frequently asked questions."
        action={
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary"
          >
            <Plus size={16} /> Add Question
          </button>
        }
      />

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-line p-6 mb-6 space-y-5"
        >
          <div className="field">
            <label>Category</label>
            <input
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              placeholder="e.g. Training"
              required
            />
          </div>
          <div className="field">
            <label>Question</label>
            <input
              value={form.q}
              onChange={(e) => setForm({ ...form, q: e.target.value })}
              required
            />
          </div>
          <div className="field">
            <label>Answer</label>
            <textarea
              value={form.a}
              onChange={(e) => setForm({ ...form, a: e.target.value })}
              required
            />
          </div>
          <div className="flex gap-3">
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
          icon={HelpCircle}
          title="No FAQ Entries"
          description="Add questions and answers for the FAQ page."
        />
      ) : (
        <div className="space-y-3">
          {list.map((f) => (
            <div key={f.id} className="bg-white border border-line p-5">
              <div className="flex justify-between items-start gap-4 mb-2">
                <div>
                  <span className="badge badge-success mb-2 inline-block">
                    {f.category}
                  </span>
                  <p className="font-bold text-brand">{f.q}</p>
                </div>
                <button
                  onClick={() => handleDelete(f.id)}
                  className="text-red-600 hover:text-red-700 shrink-0"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <p className="text-sm text-muted leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}