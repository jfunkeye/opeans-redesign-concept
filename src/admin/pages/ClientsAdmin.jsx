import { useState } from "react";
import { Plus, Trash2, Users } from "lucide-react";
import AdminPageHeader from "../components/AdminPageHeader";
import EmptyState from "../components/EmptyState";
import { getClients, addClient, deleteClient } from "../adminStore";

export default function ClientsAdmin() {
  const [clients, setClients] = useState(getClients());
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", logo: "", industry: "" });

  const refresh = () => setClients(getClients());

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient(form);
    setForm({ name: "", logo: "", industry: "" });
    setShowForm(false);
    refresh();
  };

  const handleDelete = (id) => {
    if (confirm("Delete this client?")) {
      deleteClient(id);
      refresh();
    }
  };

  return (
    <>
      <AdminPageHeader
        title="Clients"
        description="Manage client logos displayed on the website."
        action={
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary"
          >
            <Plus size={16} /> Add Client
          </button>
        }
      />

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-line p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="field">
            <label>Client Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="field">
            <label>Logo URL</label>
            <input
              value={form.logo}
              onChange={(e) => setForm({ ...form, logo: e.target.value })}
              placeholder="/images/clients/logo.png"
              required
            />
          </div>
          <div className="field md:col-span-2">
            <label>Industry</label>
            <input
              value={form.industry}
              onChange={(e) => setForm({ ...form, industry: e.target.value })}
              placeholder="e.g. Oil & Gas"
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

      {clients.length === 0 ? (
        <EmptyState
          icon={Users}
          title="No Clients Yet"
          description="Add confirmed client logos to display them on the /clients page."
        />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((c) => (
            <div key={c.id} className="bg-white border border-line p-4 text-center">
              <div className="h-20 flex items-center justify-center mb-3">
                {c.logo ? (
                  <img src={c.logo} alt={c.name} className="max-h-full" />
                ) : (
                  <span className="text-xs text-muted">No logo</span>
                )}
              </div>
              <p className="text-xs font-bold text-brand">{c.name}</p>
              {c.industry && (
                <p className="text-[10px] text-muted mt-1">{c.industry}</p>
              )}
              <button
                onClick={() => handleDelete(c.id)}
                className="mt-3 text-red-600 hover:text-red-700 text-xs inline-flex items-center gap-1"
              >
                <Trash2 size={12} /> Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}