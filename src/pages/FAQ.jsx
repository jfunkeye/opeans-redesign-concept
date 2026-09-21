import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import SEO from "../seo/SEO";
import { faqCategories } from "../data/faq";

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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...faqCategories.map((c) => c.category)],
    []
  );

  const filtered = useMemo(() => {
    let list = faqCategories;

    if (activeCategory !== "All") {
      list = list.filter((c) => c.category === activeCategory);
    }

    if (!query.trim()) return list;

    const q = query.trim().toLowerCase();
    return list
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (i) =>
            i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query, activeCategory]);

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Answers about OPEANS training, registration, payment, certification, corporate bookings and certificate verification in Nigeria."
        path="/faq"
        image={IMG}
        keywords="OPEANS FAQ, safety training questions, BOSIET FAQ, HUET FAQ"
        jsonLd={faqLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />

      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about training, payments, certificates and more."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-3xl">
          <div className="relative mb-6">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 border border-line text-sm outline-none focus:border-brand bg-white"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-brand"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="mb-10 -mx-5 px-5 md:mx-0 md:px-0">
            <div className="flex gap-2.5 overflow-x-auto md:flex-wrap md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`shrink-0 px-4 py-2.5 text-xs font-bold uppercase tracking-wide border transition whitespace-nowrap ${
                    activeCategory === c
                      ? "bg-brand text-white border-brand"
                      : "bg-white text-muted border-line hover:bg-soft"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 text-sm text-muted">
            Showing{" "}
            <strong className="text-brand">
              {filtered.reduce((sum, cat) => sum + cat.items.length, 0)}
            </strong>{" "}
            {filtered.reduce((sum, cat) => sum + cat.items.length, 0) === 1
              ? "question"
              : "questions"}
            {activeCategory !== "All" && (
              <>
                {" "}
                in <strong className="text-brand">{activeCategory}</strong>
              </>
            )}
            {query && (
              <>
                {" "}
                matching <strong className="text-brand">"{query}"</strong>
              </>
            )}
          </div>

          <div className="space-y-10">
            {filtered.map((cat) => (
              <div key={cat.category}>
                <p className="eyebrow mb-4">{cat.category}</p>
                <Accordion items={cat.items} />
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="text-center text-muted py-16 border border-dashed border-line">
                <p className="mb-2">No questions match your search.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("All");
                  }}
                  className="text-brand font-extrabold text-xs uppercase hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          <div className="mt-16 border border-line bg-soft p-8 md:p-10 text-center">
            <p className="eyebrow">Still Have Questions?</p>
            <h3 className="font-display text-2xl font-extrabold text-brand mb-3">
              Can't Find What You Need?
            </h3>
            <p className="text-muted max-w-xl mx-auto mb-6">
              Our team is here to help. Reach out and we'll get back to you as
              soon as possible.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn btn-primary">
                Contact OPEANS
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