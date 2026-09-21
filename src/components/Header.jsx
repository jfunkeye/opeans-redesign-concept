import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ShieldCheck, ChevronDown } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { mainNav } from "../data/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  const toggleSub = (label) =>
    setOpenSub(openSub === label ? null : label);

  return (
    <>
      {/* Utility bar */}
      <div className="bg-brand text-white text-xs">
        <div className="container-x h-9 flex items-center justify-between">
          <span>Training People. Safer Workplaces. A Better Tomorrow.</span>
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={13} /> +234 803 312 3456
            </span>
            <span className="flex items-center gap-2">
              <Mail size={13} /> info@opeansafety.com
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="container-x h-[82px] flex items-center gap-8">
          <Link to="/" className="brand shrink-0">
            <img
              src="/images/opeans-logo.png"
              alt="OPEANS Nigeria Limited"
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 ml-auto">
            {mainNav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="text-sm font-bold py-8 inline-flex items-center gap-1 hover:text-brand transition">
                    {item.label} <ChevronDown size={14} />
                  </button>
                  <div className="absolute left-0 top-full min-w-[240px] bg-white border border-line shadow-md py-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        className="block px-5 py-2.5 text-[13px] font-semibold text-ink hover:bg-soft hover:text-brand"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `text-sm font-bold py-8 transition hover:text-brand ${
                      isActive ? "text-brand" : "text-ink"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3 ml-4">
            <Link to="/verify-certificate" className="btn btn-primary !px-4 !py-3">
             Verify Certificate
            </Link>
            <Link to="/register" className="btn btn-ghost !px-4 !py-3">
              Register
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden ml-auto text-brand"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-white border-t border-line"
            >
              <div className="container-x py-4 flex flex-col">
                {mainNav.map((item) =>
                  item.children ? (
                    <div key={item.label} className="border-b border-line">
                      <button
                        className="w-full text-left py-4 font-bold flex items-center justify-between"
                        onClick={() => toggleSub(item.label)}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition ${
                            openSub === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openSub === item.label && (
                        <div className="pb-3">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.to}
                              onClick={() => setOpen(false)}
                              className="block py-2.5 pl-4 text-sm text-muted hover:text-brand"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="py-4 border-b border-line font-bold"
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <Link
                  to="/verify-certificate"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary mt-4"
                >
                 Verify Certificate
                </Link>
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="btn btn-ghost mt-2"
                >
                  Register Online
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}