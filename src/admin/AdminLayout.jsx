import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  GraduationCap,
  Calendar,
  ClipboardList,
  Users,
  Quote,
  HelpCircle,
  MessageSquare,
  Settings,
  LogOut,
  Home,
  ShieldCheck,
} from "lucide-react";
import { logout } from "./adminStore";

const nav = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/courses", label: "Courses", icon: GraduationCap },
  { to: "/admin/calendar", label: "Calendar", icon: Calendar },
  { to: "/admin/registrations", label: "Registrations", icon: ClipboardList },
  { to: "/admin/clients", label: "Clients", icon: Users },
  { to: "/admin/testimonials", label: "Testimonials", icon: Quote },
  { to: "/admin/faq", label: "FAQ", icon: HelpCircle },
  { to: "/admin/messages", label: "Messages", icon: MessageSquare },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex bg-soft">
      {/* Sidebar — static, no internal scroll */}
      <aside className="w-64 bg-brand-dark text-white flex flex-col shrink-0 sticky top-0 h-screen">
        {/* Sidebar header */}
        <div className="p-6 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div>
              <p className="font-display font-extrabold text-sm leading-tight">
                OPEANS
              </p>
              <p className="text-[10px] uppercase tracking-wider text-white/50">
                Admin Panel
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar nav — no scrollbar */}
        <nav className="flex-1 py-4">
          {nav.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-white/10 text-white border-l-4 border-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white border-l-4 border-transparent"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-white/10 space-y-1 shrink-0">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-2 text-sm text-white/70 hover:text-white transition"
          >
            <Home size={16} /> View Website
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-white/70 hover:text-white transition"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main — normal flow, scrolls with the page */}
      <div className="flex-1 min-w-0">
        <main className="p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}