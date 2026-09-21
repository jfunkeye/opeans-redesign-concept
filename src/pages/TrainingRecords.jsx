import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  Lock,
  Info,
  Users,
  FileSearch,
  Calendar,
  GraduationCap,
  X,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SEO from "../seo/SEO";
import { courses } from "../data/courses";

const heroModules = import.meta.glob(
  "../assets/images/hero_images/*.webp",
  { eager: true, import: "default" }
);

const heroSlides = Object.entries(heroModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url);

const FALLBACK_HERO =
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=90";

const pickHero = (i) => heroSlides[i] ?? FALLBACK_HERO;

const IMG = pickHero(0);

const DEMO_RECORDS = [
  {
    name: "John Doe",
    certificate: "OPN-DEMO1234",
    course: "BOSIET",
    year: "2024",
    status: "VALID",
  },
  {
    name: "Jane Smith",
    certificate: "OPN-DEMO5678",
    course: "HUET",
    year: "2025",
    status: "VALID",
  },
  {
    name: "Mark Johnson",
    certificate: "OPN-EXPIRED01",
    course: "Basic Fire Fighting",
    year: "2020",
    status: "EXPIRED",
  },
];

export default function TrainingRecords() {
  const [query, setQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [hasSearched, setHasSearched] = useState(false);

  const years = useMemo(() => {
    const set = new Set(DEMO_RECORDS.map((r) => r.year));
    return ["all", ...Array.from(set).sort((a, b) => b - a)];
  }, []);

  const filtered = useMemo(() => {
    if (!hasSearched) return [];

    const q = query.trim().toLowerCase();
    return DEMO_RECORDS.filter((r) => {
      const matchesQuery =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.certificate.toLowerCase().includes(q);
      const matchesCourse =
        courseFilter === "all" || r.course === courseFilter;
      const matchesYear = yearFilter === "all" || r.year === yearFilter;
      return matchesQuery && matchesCourse && matchesYear;
    });
  }, [query, courseFilter, yearFilter, hasSearched]);

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true);
  };

  const handleReset = () => {
    setQuery("");
    setCourseFilter("all");
    setYearFilter("all");
    setHasSearched(false);
  };

  return (
    <>
      <SEO
        title="Training Records"
        description="Search public OPEANS training records by name, certificate number, course or year. For full certificate verification, use our Verify Certificate tool."
        path="/training-records"
        image={IMG}
        keywords="OPEANS training records, public safety training records Nigeria, certificate records search"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Training Records", path: "/training-records" },
        ]}
      />

      <PageHero
        eyebrow="Records"
        title="Training Records"
        subtitle="Search public training records by name or certificate number."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow">Public Records</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
              Search Training Records
            </h2>
            <p className="text-muted leading-relaxed">
              Search OPEANS' public training records by name, certificate
              number, course or year. For full certificate verification, use
              the Verify Certificate tool.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft pt-0">
        <div className="container-x max-w-4xl">
          <form
            onSubmit={handleSearch}
            className="bg-white border border-line p-6 md:p-8 mb-8"
          >
            <label
              htmlFor="record-search"
              className="block text-xs font-extrabold uppercase tracking-wide text-brand mb-3"
            >
              Search Records
            </label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="relative md:col-span-3">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                />
                <input
                  id="record-search"
                  type="text"
                  placeholder="Search by name or certificate number..."
                  className="w-full pl-12 pr-4 py-3.5 border border-line text-sm outline-none focus:border-brand"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <select
                className="w-full px-4 py-3 border border-line text-sm bg-white outline-none focus:border-brand"
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
              >
                <option value="all">All Courses</option>
                {courses.map((c) => (
                  <option key={c.slug} value={c.fullName}>
                    {c.fullName}
                  </option>
                ))}
              </select>

              <select
                className="w-full px-4 py-3 border border-line text-sm bg-white outline-none focus:border-brand"
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
              >
                <option value="all">All Years</option>
                {years
                  .filter((y) => y !== "all")
                  .map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
              </select>

              <button type="submit" className="btn btn-primary">
                <Search size={16} /> Search
              </button>
            </div>

            <div className="flex items-center justify-between gap-3 flex-wrap">
              <p className="text-xs text-muted flex items-center gap-2">
                <Info size={14} className="shrink-0" />
                Only public information is displayed.
              </p>
              {(query || courseFilter !== "all" || yearFilter !== "all" || hasSearched) && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs font-extrabold uppercase text-brand hover:underline"
                >
                  <X size={14} /> Clear
                </button>
              )}
            </div>
          </form>

          {!hasSearched ? (
            <Reveal className="text-center text-muted py-16 border border-dashed border-line bg-white">
              <FileSearch className="w-10 h-10 mx-auto mb-4 text-line" />
              <p className="font-extrabold text-brand mb-2">
                Start Your Search
              </p>
              <p className="text-sm max-w-md mx-auto">
                Enter a name, certificate number, course or year to search the
                OPEANS training records.
              </p>
            </Reveal>
          ) : filtered.length === 0 ? (
            <Reveal className="text-center text-muted py-16 border border-dashed border-line bg-white">
              <FileSearch className="w-10 h-10 mx-auto mb-4 text-line" />
              <p className="font-extrabold text-brand mb-2">
                No Matching Records
              </p>
              <p className="text-sm max-w-md mx-auto mb-6">
                We couldn't find any training records matching your search. Try
                different keywords, or verify a certificate directly.
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <Link to="/verify-certificate" className="btn btn-primary">
                  Verify Certificate
                </Link>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-ghost"
                >
                  Clear Filters
                </button>
              </div>
            </Reveal>
          ) : (
            <>
              <div className="mb-4 text-sm text-muted">
                Showing{" "}
                <strong className="text-brand">{filtered.length}</strong>{" "}
                {filtered.length === 1 ? "record" : "records"}
              </div>

              <div className="bg-white border border-line overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Certificate</th>
                        <th>Course</th>
                        <th>Year</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((r) => (
                        <tr key={r.certificate}>
                          <td className="font-semibold text-ink">
                            {r.name}
                          </td>
                          <td className="font-mono text-xs text-muted">
                            {r.certificate}
                          </td>
                          <td>{r.course}</td>
                          <td>{r.year}</td>
                          <td>
                            <span
                              className={`badge ${
                                r.status === "VALID"
                                  ? "badge-success"
                                  : r.status === "EXPIRED"
                                  ? "badge-warning"
                                  : "badge-danger"
                              }`}
                            >
                              {r.status}
                            </span>
                          </td>
                          <td>
                            <Link
                              to={`/verify-certificate`}
                              className="text-xs font-extrabold uppercase text-brand hover:underline whitespace-nowrap"
                            >
                              Verify →
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          <Reveal className="mt-10 border border-line bg-white p-6 flex gap-4 items-start">
            <Lock className="text-brand shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-extrabold text-brand mb-1">
                Privacy Notice
              </p>
              <p className="text-xs text-muted leading-relaxed">
                For privacy reasons, only minimal identifying information is
                displayed here. If you need more detail about a specific
                certificate, use the{" "}
                <Link
                  to="/verify-certificate"
                  className="text-brand font-bold underline hover:no-underline"
                >
                  Verify Certificate
                </Link>{" "}
                tool or contact our office directly.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-4xl mx-auto bg-brand text-white p-8 md:p-12 text-center">
            <ShieldCheck className="w-10 h-10 mx-auto mb-4" />
            <p className="eyebrow eyebrow-light">Need to Verify a Certificate?</p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
              Use Our Certificate Verification Tool
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-8">
              Verify an OPEANS certificate by entering its number. Get instant
              confirmation of the candidate, course and validity status.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/verify-certificate" className="btn btn-light">
                Verify Certificate <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact OPEANS
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x max-w-4xl">
          <Reveal className="text-center mb-10">
            <p className="eyebrow">About Training Records</p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-brand">
              What You Can Search
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Users,
                title: "By Name",
                description:
                  "Search for a candidate by their full name or part of it.",
              },
              {
                icon: GraduationCap,
                title: "By Course",
                description:
                  "Filter by specific OPEANS courses (BOSIET, HUET, and more).",
              },
              {
                icon: Calendar,
                title: "By Year",
                description:
                  "Narrow results to a specific training year.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <Reveal
                key={title}
                className="bg-white border border-line p-6 text-center"
              >
                <Icon className="text-brand w-8 h-8 mx-auto mb-4" />
                <h3 className="font-display font-extrabold text-brand mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}