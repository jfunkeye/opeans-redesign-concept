import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Reveal from "../components/Reveal";
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

const quickLinks = [
  {
    to: "/training",
    label: "Browse Training",
    description: "Explore all 43 OPEANS courses.",
  },
  {
    to: "/verify-certificate",
    label: "Verify Certificate",
    description: "Confirm a certificate's status.",
  },
  {
    to: "/register",
    label: "Register Online",
    description: "Reserve your place on a course.",
  },
];

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for could not be found on OPEANS Nigeria Limited."
        path="/404"
        noindex
      />

      <section
        className="min-h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center px-6 py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(20,20,45,.92), rgba(20,20,45,.92)), url(${IMG})`,
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow eyebrow-light mb-4">Error 404</p>
          <h1 className="font-display text-7xl md:text-[140px] font-extrabold tracking-tight leading-none mb-6">
            404
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4">
            This Page Couldn't Be Found
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            The page you're looking for may have moved, been renamed, or no
            longer exists. Let's get you back on track.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link to="/" className="btn btn-light">
              Back to Home
            </Link>
            <Link to="/training" className="btn btn-outline">
              View Training
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-2xl mx-auto text-center">
          <Reveal>
            <div className="w-12 h-12 bg-brand text-white flex items-center justify-center mx-auto mb-4">
              <Search size={22} />
            </div>
            <p className="eyebrow">Looking for Something?</p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-brand mb-4">
              Try One of These Instead
            </h2>
            <p className="text-muted mb-8">
              These are the pages visitors most often need.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {quickLinks.map(({ to, label, description }) => (
              <Reveal
                key={to}
                className="bg-white border border-line p-6 text-center hover:border-brand hover:shadow-md transition group"
              >
                <Link to={to} className="block">
                  <p className="font-display font-extrabold text-brand mb-1">
                    {label}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">
                    {description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x max-w-4xl">
          <Reveal className="text-center mb-8">
            <p className="eyebrow">Still Stuck?</p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-brand">
              Get in Touch With Our Team
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="tel:+2348033123456"
              className="bg-white border border-line p-5 hover:border-brand transition"
            >
              <p className="text-xs font-extrabold uppercase text-muted">
                Call Us
              </p>
              <p className="text-sm font-bold text-brand">
                +234 803 312 3456
              </p>
            </a>
            <a
              href="mailto:info@opeansafety.com"
              className="bg-white border border-line p-5 hover:border-brand transition"
            >
              <p className="text-xs font-extrabold uppercase text-muted">
                Email Us
              </p>
              <p className="text-sm font-bold text-brand">
                info@opeansafety.com
              </p>
            </a>
            <Link
              to="/contact"
              className="bg-brand text-white p-5 hover:bg-brand-dark transition"
            >
              <p className="text-xs font-extrabold uppercase text-white/70">
                Contact Page
              </p>
              <p className="text-sm font-bold">Full Contact Form</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}