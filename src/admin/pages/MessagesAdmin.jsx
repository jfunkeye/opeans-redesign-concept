import { useState } from "react";
import { MessageSquare, Trash2, Mail, Check } from "lucide-react";
import AdminPageHeader from "../components/AdminPageHeader";
import EmptyState from "../components/EmptyState";
import { getMessages, markMessageRead, deleteMessage } from "../adminStore";

export default function MessagesAdmin() {
  const [messages, setMessages] = useState(getMessages());

  const refresh = () => setMessages(getMessages());

  const handleMarkRead = (id) => {
    markMessageRead(id);
    refresh();
  };

  const handleDelete = (id) => {
    if (confirm("Delete this message?")) {
      deleteMessage(id);
      refresh();
    }
  };

  return (
    <>
      <AdminPageHeader
        title="Messages"
        description="Contact form submissions from the website."
      />

      {messages.length === 0 ? (
        <EmptyState
          icon={MessageSquare}
          title="No Messages Yet"
          description="Messages submitted via the contact form will appear here."
        />
      ) : (
        <div className="space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`bg-white border p-5 ${
                m.read ? "border-line" : "border-brand border-l-4"
              }`}
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                <div>
                  <p className="font-bold text-brand">
                    {m.name}
                    {m.company && ` · ${m.company}`}
                  </p>
                  <p className="text-xs text-muted flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1">
                      <Mail size={12} /> {m.email}
                    </span>
                    {m.phone && <span>📞 {m.phone}</span>}
                  </p>
                </div>
                <div className="flex gap-2">
                  {!m.read && (
                    <button
                      onClick={() => handleMarkRead(m.id)}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand hover:underline"
                    >
                      <Check size={13} /> Mark Read
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(m.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              {m.subject && (
                <p className="text-sm font-semibold text-ink mb-2">
                  {m.subject}
                </p>
              )}
              <p className="text-sm text-muted leading-relaxed">{m.message}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}