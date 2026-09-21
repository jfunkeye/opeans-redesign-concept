import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, X } from "lucide-react";
import PageHero from "../components/PageHero";
import CourseGrid from "../components/CourseGrid";
import SEO from "../seo/SEO";
import { courses, courseCategories } from "../data/courses";

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

export default function Training() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";
  const [query, setQuery] = useState("");

  const setCategory = (id) => {
    if (id === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", id);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesCat = category === "all" || c.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.fullName.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.type.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <SEO
        title="All Training Programmes"
        description="Browse 40+ accredited OPEANS safety training courses — BOSIET, HUET, fire fighting, first aid, HSE, lifting, logistics, driving and more. Register online."
        path="/training"
        image={IMG}
        keywords="safety training courses Nigeria, BOSIET course, HUET training, HSE training Port Harcourt, fire fighting course Nigeria"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Training", path: "/training" },
        ]}
      />

      <PageHero
        eyebrow="OPEANS Nigeria Limited"
        title="Professional Safety Training"
        subtitle="Browse the full OPEANS course catalogue and find the programme that fits your needs."
        image={IMG}
      />

      <section className="section">
        <div className="container-x">
          <div className="max-w-4xl mb-12">
            <p className="eyebrow">Our Training</p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-brand mb-5">
              Safety Skills for Every Workforce
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              We have a wide range of training for workers in fields where
              safety is key. From offshore/onshore rig workers to emergency
              response, ambulance and tactical bullion van drivers, we are
              poised to add survival and safety skills to the manpower of
              workers in various workforces to mitigate emergency and disaster.
            </p>
            <p className="text-muted leading-relaxed">
              We take people on a journey, ensuring they have the knowledge,
              skills, ability and right attitude to operate safely and
              effectively in their workplace and its environment as a whole.
            </p>
          </div>

          <div className="relative mb-6 max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search training programmes..."
              className="w-full pl-12 pr-12 py-3.5 border border-line text-sm outline-none focus:border-brand bg-white"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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

          <div className="mb-8 -mx-5 px-5 md:mx-0 md:px-0">
            <div className="flex gap-2.5 overflow-x-auto md:flex-wrap md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
              {courseCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`shrink-0 px-4 py-2.5 text-xs font-bold uppercase tracking-wide border transition whitespace-nowrap ${
                    category === cat.id
                      ? "bg-brand text-white border-brand"
                      : "bg-white text-muted border-line hover:bg-soft"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 text-sm text-muted">
            Showing <strong className="text-brand">{filtered.length}</strong>{" "}
            {filtered.length === 1 ? "course" : "courses"}
            {category !== "all" && (
              <>
                {" "}
                in{" "}
                <strong className="text-brand">
                  {courseCategories.find((c) => c.id === category)?.label}
                </strong>
              </>
            )}
            {query && (
              <>
                {" "}
                matching <strong className="text-brand">"{query}"</strong>
              </>
            )}
          </div>

          <CourseGrid courses={filtered} />
        </div>
      </section>
    </>
  );
}