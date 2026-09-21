import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Filter } from "lucide-react";
import PageHero from "../components/PageHero";
import SEO from "../seo/SEO";

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

const schedule = [
  {
    course: "BOSIET",
    fullName: "Basic Offshore Safety Induction & Emergency Training",
    slug: "bosiet",
    date: "14 – 16 October 2026",
    duration: "3 Days",
    location: "Port Harcourt",
    availability: "Available",
  },
  {
    course: "HUET",
    fullName: "Helicopter Underwater Escape Training",
    slug: "huet",
    date: "18 October 2026",
    duration: "1 Day",
    location: "Port Harcourt",
    availability: "Available",
  },
  {
    course: "Survival at Sea (SAS)",
    fullName: "Survival at Sea",
    slug: "survival-at-sea",
    date: "20 October 2026",
    duration: "1 Day",
    location: "Port Harcourt",
    availability: "Available",
  },
  {
    course: "Personal Survival Swimming (PSS)",
    fullName: "Personal Survival Swimming",
    slug: "personal-survival-swimming",
    date: "2 – 13 November 2026",
    duration: "10 Days",
    location: "Port Harcourt",
    availability: "Available",
  },
  {
    course: "Basic Fire Fighting (BFF)",
    fullName: "Basic Fire Fighting",
    slug: "basic-fire-fighting",
    date: "22 October 2026",
    duration: "1 Day",
    location: "Port Harcourt",
    availability: "Few Seats Left",
  },
  {
    course: "Advanced Fire Fighting (AFF)",
    fullName: "Advanced Fire Fighting",
    slug: "advanced-fire-fighting",
    date: "26 – 29 October 2026",
    duration: "4 Days",
    location: "Port Harcourt",
    availability: "Available",
  },
  {
    course: "Basic First Aid / CPR (BFA)",
    fullName: "Basic First Aid / CPR",
    slug: "basic-first-aid-cpr",
    date: "5 November 2026",
    duration: "1 Day",
    location: "Port Harcourt",
    availability: "Available",
  },
  {
    course: "Advanced First Aid / CPR (AFA)",
    fullName: "Advanced First Aid / CPR",
    slug: "advanced-first-aid-cpr",
    date: "9 – 13 November 2026",
    duration: "5 Days",
    location: "Port Harcourt",
    availability: "Available",
  },
  {
    course: "SCBA / Confined Space",
    fullName: "Self-Contained Breathing Apparatus / Confined Space",
    slug: "self-contained-breathing-apparatus-confined-space",
    date: "17 – 20 November 2026",
    duration: "4 Days",
    location: "Port Harcourt",
    availability: "Available",
  },
  {
    course: "Gas Testing",
    fullName: "Gas Testing",
    slug: "gas-testing",
    date: "24 – 26 November 2026",
    duration: "3 Days",
    location: "Port Harcourt",
    availability: "Available",
  },
  {
    course: "Intro to HSE Competence",
    fullName: "Introduction to HSE Competence",
    slug: "intro-to-hse-competence",
    date: "1 – 5 December 2026",
    duration: "5 Days",
    location: "Port Harcourt",
    availability: "Available",
  },
];

export default function TrainingCalendar() {
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(
    () => (filter === "all" ? schedule : schedule.filter((s) => s.slug === filter)),
    [filter]
  );

  return (
    <>
      <SEO
        title="Training Calendar — Upcoming Course Dates"
        description="View upcoming OPEANS training dates in Port Harcourt for BOSIET, HUET, fire fighting, first aid, confined space, HSE and more. Register online."
        path="/training-calendar"
        image={IMG}
        keywords="OPEANS training calendar, BOSIET dates, HUET schedule, safety training dates Nigeria"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Training Calendar", path: "/training-calendar" },
        ]}
      />

      <PageHero
        eyebrow="Training Calendar"
        title="Upcoming Training"
        subtitle="Browse upcoming OPEANS training dates and register directly."
        image={IMG}
      />

      <section className="section">
        <div className="container-x">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Schedule</p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-brand mb-3">
              Plan Your Training
            </h2>
            <p className="text-muted leading-relaxed">
              Below are our scheduled sessions for main OPEANS courses. For
              custom dates or corporate bookings, please{" "}
              <Link to="/corporate-training" className="text-brand font-bold underline">
                request a training proposal
              </Link>
              .
            </p>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-brand">
              <Filter size={16} />
              <span className="text-xs font-extrabold uppercase tracking-wide">
                Filter by Course
              </span>
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-line px-4 py-3 text-sm bg-white min-w-[240px] outline-none focus:border-brand"
            >
              <option value="all">All Courses</option>
              {schedule.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.fullName}
                </option>
              ))}
            </select>
          </div>

          <div className="overflow-x-auto border border-line bg-white">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Location</th>
                  <th>Availability</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr key={s.slug}>
                    <td>
                      <Link
                        to={`/training/${s.slug}`}
                        className="font-bold text-brand hover:underline"
                      >
                        {s.course}
                      </Link>
                    </td>
                    <td className="whitespace-nowrap">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays size={14} className="text-muted" />
                        {s.date}
                      </span>
                    </td>
                    <td className="whitespace-nowrap">{s.duration}</td>
                    <td className="whitespace-nowrap">{s.location}</td>
                    <td>
                      <span
                        className={`badge ${
                          s.availability === "Available"
                            ? "badge-success"
                            : s.availability === "Full"
                            ? "badge-danger"
                            : "badge-warning"
                        }`}
                      >
                        {s.availability}
                      </span>
                    </td>
                    <td className="whitespace-nowrap">
                      <Link
                        to={`/register?course=${s.slug}`}
                        className="text-brand font-extrabold text-xs uppercase hover:text-brand-dark"
                      >
                        Register →
                      </Link>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center text-muted py-8">
                      No sessions scheduled for this course.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 text-xs text-muted">
            <span className="flex items-center gap-2">
              <span className="badge badge-success">Available</span> Register anytime
            </span>
            <span className="flex items-center gap-2">
              <span className="badge badge-warning">Few Seats Left</span> Limited availability
            </span>
            <span className="flex items-center gap-2">
              <span className="badge badge-danger">Full</span> Closed — join waitlist
            </span>
          </div>

          <div className="mt-14 border border-line bg-soft p-8 md:p-10 text-center">
            <p className="eyebrow">Need Different Dates?</p>
            <h3 className="font-display text-2xl font-extrabold text-brand mb-3">
              Corporate &amp; Group Bookings
            </h3>
            <p className="text-muted max-w-2xl mx-auto mb-6">
              We deliver customised programmes for organisations, on-site or at
              our training centre. Contact us to schedule a date that works for
              your team.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/corporate-training" className="btn btn-primary">
                Request a Training Proposal
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Contact OPEANS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}