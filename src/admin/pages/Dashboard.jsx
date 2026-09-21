import { Link } from "react-router-dom";
import {
  GraduationCap,
  Calendar,
  ClipboardList,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import AdminPageHeader from "../components/AdminPageHeader";
import StatCard from "../components/StatCard";
import {
  getCourses,
  getCalendar,
  getRegistrations,
  getMessages,
} from "../adminStore";

export default function Dashboard() {
  const courses = getCourses();
  const calendar = getCalendar();
  const registrations = getRegistrations();
  const messages = getMessages();

  const pendingRegistrations = registrations.filter(
    (r) => r.status === "pending"
  ).length;
  const unreadMessages = messages.filter((m) => !m.read).length;

  return (
    <>
      <AdminPageHeader
        title="Dashboard"
        description="Overview of the OPEANS website."
      />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={GraduationCap}
          label="Total Courses"
          value={courses.length}
          accent="brand"
        />
        <StatCard
          icon={Calendar}
          label="Calendar Entries"
          value={calendar.length}
          accent="emerald"
        />
        <StatCard
          icon={ClipboardList}
          label="Pending Registrations"
          value={pendingRegistrations}
          accent={pendingRegistrations > 0 ? "amber" : "brand"}
        />
        <StatCard
          icon={MessageSquare}
          label="Unread Messages"
          value={unreadMessages}
          accent={unreadMessages > 0 ? "red" : "brand"}
        />
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-line p-6">
          <h2 className="font-display font-extrabold text-brand text-lg mb-4">
            Quick Actions
          </h2>
          <div className="space-y-2">
            {[
              { to: "/admin/courses", label: "Add or manage courses" },
              { to: "/admin/calendar", label: "Add training dates" },
              { to: "/admin/registrations", label: "Review registrations" },
              { to: "/admin/messages", label: "Check contact messages" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center justify-between py-3 px-4 border border-line hover:border-brand transition group"
              >
                <span className="text-sm font-semibold text-ink">
                  {label}
                </span>
                <ArrowRight
                  size={16}
                  className="text-muted group-hover:text-brand group-hover:translate-x-1 transition"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white border border-line p-6">
          <h2 className="font-display font-extrabold text-brand text-lg mb-4">
            Recent Registrations
          </h2>
          {registrations.length === 0 ? (
            <p className="text-muted text-sm">
              No registrations yet. They'll appear here when people register.
            </p>
          ) : (
            <div className="space-y-3">
              {registrations.slice(0, 5).map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between py-2 border-b border-line last:border-0"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {r.firstName} {r.lastName}
                    </p>
                    <p className="text-xs text-muted">{r.course}</p>
                  </div>
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}