import { useState, useMemo } from "react";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
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

const categories = [
  "All",
  "Offshore & Marine",
  "Fire & Emergency",
  "First Aid",
  "Industrial Safety",
  "Lifting & Rigging",
  "HSE",
  "Facilities",
  "Classroom Training",
];

const photos = [
  { src: pickHero(0), category: "Offshore & Marine", caption: "Sea survival training" },
  { src: pickHero(1), category: "Offshore & Marine", caption: "HUET — helicopter escape simulator" },
  { src: pickHero(2), category: "Offshore & Marine", caption: "Life raft and abandonment drills" },
  { src: pickHero(3), category: "Fire & Emergency", caption: "Live firefighting drills" },
  { src: pickHero(4), category: "Fire & Emergency", caption: "Advanced fire team exercises" },
  { src: pickHero(5), category: "First Aid", caption: "CPR and casualty management" },
  { src: pickHero(6), category: "First Aid", caption: "Advanced first aid practice" },
  { src: pickHero(7), category: "Industrial Safety", caption: "Confined space entry training" },
  { src: pickHero(8), category: "Industrial Safety", caption: "Gas testing and BA drills" },
  { src: pickHero(9), category: "Lifting & Rigging", caption: "Crane and rigging operations" },
  { src: pickHero(10), category: "HSE", caption: "HSE competency workshop" },
  { src: pickHero(11), category: "Facilities", caption: "Training centre — classroom block" },
  { src: pickHero(12), category: "Facilities", caption: "Training pool and survival area" },
  { src: pickHero(13), category: "Classroom Training", caption: "Instructor-led theory sessions" },
  { src: pickHero(14), category: "Classroom Training", caption: "Safety briefings and assessments" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? photos
        : photos.filter((p) => p.category === filter),
    [filter]
  );

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextPhoto = () =>
    setLightboxIndex((i) => (i + 1) % filtered.length);
  const prevPhoto = () =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  const currentPhoto =
    lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      <SEO
        title="Training Gallery"
        description="See real moments from OPEANS training — offshore survival drills, live-fire exercises, confined space rescues, classroom sessions and our Port Harcourt facility."
        path="/gallery"
        image={IMG}
        keywords="OPEANS gallery, safety training photos Nigeria, BOSIET training photos, fire training images"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />

      <PageHero
        eyebrow="Gallery"
        title="Training Gallery"
        subtitle="Real moments from OPEANS training sessions and facilities."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center">
          <p className="eyebrow">Our Gallery</p>
          <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
            A Look Inside Our Training
          </h2>
          <p className="text-muted leading-relaxed">
            From offshore survival drills to live-fire exercises, confined
            space rescues and classroom sessions — here's a snapshot of what
            training with OPEANS looks like.
          </p>
        </div>
      </section>

      <section className="section bg-soft pt-0">
        <div className="container-x">
          <div className="mb-8 -mx-5 px-5 md:mx-0 md:px-0">
            <div className="flex gap-2.5 overflow-x-auto md:flex-wrap md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setFilter(c);
                    setLightboxIndex(null);
                  }}
                  className={`shrink-0 px-4 py-2.5 text-xs font-bold uppercase tracking-wide border transition whitespace-nowrap ${
                    filter === c
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
            Showing <strong className="text-brand">{filtered.length}</strong>{" "}
            {filtered.length === 1 ? "photo" : "photos"}
            {filter !== "All" && (
              <>
                {" "}
                in{" "}
                <strong className="text-brand">{filter}</strong>
              </>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center text-muted py-16 border border-dashed border-line bg-white">
              <ImageIcon className="w-10 h-10 mx-auto mb-3 text-line" />
              <p>No photos in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((p, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="group relative h-64 overflow-hidden bg-brand-dark"
                  aria-label={`Open ${p.caption}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition group-hover:scale-105"
                    style={{ backgroundImage: `url(${p.src})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-white/70 mb-1">
                      {p.category}
                    </p>
                    <p className="text-sm font-semibold leading-snug">
                      {p.caption}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {currentPhoto && (
        <div
          className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {filtered.length > 1 && (
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          <div
            className="flex flex-col items-center max-w-[92vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.src}
              alt={currentPhoto.caption}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="mt-5 text-center text-white">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-white/60 mb-1">
                {currentPhoto.category}
              </p>
              <p className="text-sm font-semibold">{currentPhoto.caption}</p>
              <p className="text-xs text-white/50 mt-1">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {filtered.length > 1 && (
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              aria-label="Next"
            >
              <ChevronRight size={26} />
            </button>
          )}
        </div>
      )}
    </>
  );
}