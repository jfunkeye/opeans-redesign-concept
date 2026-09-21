import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Quote, MessageSquareQuote } from "lucide-react";
import PageHero from "../components/PageHero";
import TestimonialCard from "../components/TestimonialCard";
import SEO from "../seo/SEO";
import {
  testimonials,
  testimonialFilters,
} from "../data/testimonials";

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

export default function Testimonials() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? testimonials
        : testimonials.filter((t) => t.course === filter),
    [filter]
  );

  return (
    <>
      <SEO
        title="Trainee Testimonials"
        description="Read real feedback from OPEANS training participants — offshore personnel, HSE officers, emergency responders and corporate teams across Nigeria."
        path="/testimonials"
        image={IMG}
        keywords="OPEANS testimonials, safety training reviews, BOSIET testimonials Nigeria"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ]}
      />

      <PageHero
        eyebrow="Testimonials"
        title="What Our Trainees Say"
        subtitle="Real feedback from OPEANS training participants."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
            Trusted by Trainees Across Industries
          </h2>
          <p className="text-muted leading-relaxed">
            From offshore personnel and HSE officers to emergency responders and
            corporate teams, hear directly from the people who have trained with
            OPEANS.
          </p>
        </div>
      </section>

      <section className="section bg-soft pt-0">
        <div className="container-x">
          <div className="mb-8 -mx-5 px-5 md:mx-0 md:px-0">
            <div className="flex gap-2.5 overflow-x-auto md:flex-wrap md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
              {testimonialFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`shrink-0 px-4 py-2.5 text-xs font-bold uppercase tracking-wide border transition whitespace-nowrap ${
                    filter === f
                      ? "bg-brand text-white border-brand"
                      : "bg-white text-muted border-line hover:bg-soft"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {testimonials.length > 0 && (
            <div className="mb-6 text-sm text-muted">
              Showing <strong className="text-brand">{filtered.length}</strong>{" "}
              {filtered.length === 1 ? "testimonial" : "testimonials"}
              {filter !== "All" && (
                <>
                  {" "}
                  for <strong className="text-brand">{filter}</strong>
                </>
              )}
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center text-muted py-16 border border-dashed border-line bg-white">
              <MessageSquareQuote className="w-10 h-10 mx-auto mb-4 text-line" />
              <p className="mb-2 max-w-md mx-auto">
                Testimonials will appear here once published by OPEANS.
              </p>
              <p className="text-xs text-muted/80">
                Real trainee feedback is being collected and will be added soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
              ))}
            </div>
          )}

          <div className="mt-16 border border-line bg-white p-8 md:p-10 text-center">
            <div className="w-12 h-12 bg-brand text-white flex items-center justify-center mx-auto mb-4">
              <Quote size={22} />
            </div>
            <p className="eyebrow">Share Your Experience</p>
            <h3 className="font-display text-2xl font-extrabold text-brand mb-3">
              Trained With OPEANS?
            </h3>
            <p className="text-muted max-w-xl mx-auto mb-6">
              We'd love to hear about your experience. Share your feedback with
              our training team and help us keep improving.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn btn-primary">
                Share Your Feedback
              </Link>
              <Link to="/training" className="btn btn-ghost">
                Browse Training
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}