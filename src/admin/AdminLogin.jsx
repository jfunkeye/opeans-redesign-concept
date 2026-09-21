import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShieldCheck, Lock, ArrowRight, Home } from "lucide-react";
import { login } from "./adminStore";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      navigate("/admin/dashboard");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark text-white px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-extrabold">OPEANS Admin</h1>
          <p className="text-white/60 text-sm mt-2">
            Sign in to manage the OPEANS website.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8">
          <label
            htmlFor="password"
            className="block text-xs font-extrabold uppercase tracking-wide mb-3"
          >
            Admin Password
          </label>
          <div className="relative mb-4">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 border border-white/20 bg-white/5 text-sm text-white outline-none focus:border-white"
              placeholder="Enter admin password"
              autoFocus
              required
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs mb-4">{error}</p>
          )}

          <button type="submit" className="btn btn-light w-full">
            Sign In <ArrowRight size={16} />
          </button>

          <p className="text-xs text-white/40 mt-6 text-center">
            Demo password: <code className="text-white/70">opeans2026</code>
          </p>
        </form>

        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-white/60 hover:text-white transition"
        >
          <Home size={14} /> Back to Website
        </Link>
      </div>
    </div>
  );
}