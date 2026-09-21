import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
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
const IMG2 = pickHero(1);
const IMG3 = pickHero(6);

export default function Facilities() {
  const sections = [
    {
      title: "Water & Survival Training",
      image: IMG,
      items: [
        "Survival swimming",
        "Water-entry exercises",
        "Life-saving exercises",
        "Life raft training",
        "HUET-related practical training",
      ],
    },
    {
      title: "Fire Training Facility",
      image: IMG2,
      items: ["Fire response", "Extinguisher exercises", "Practical firefighting"],
    },
    {
      title: "Classrooms",
      image: IMG3,
      items: [
        "Instructor-led learning",
        "Safety briefings",
        "Theory",
        "Assessments",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Training Facilities"
        description="OPEANS training facilities in Port Harcourt include a training swimming pool, fire ground, confined-space simulators and modern classrooms for realistic simulation."
        path="/facilities"
        image={IMG}
        keywords="OPEANS facilities, training pool Port Harcourt, fire training ground Nigeria, confined space simulator"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Facilities", path: "/facilities" },
        ]}
      />

      <PageHero
        eyebrow="OPEANS Nigeria Limited"
        title="Built for Real-World Training"
        subtitle="Purpose-designed training environments that prepare people for the field."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow">Facility Introduction</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-6">
              Trained Where It Matters
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              With a clean and well-maintained training swimming pool, training
              ground, conducive classrooms, training equipment and materials, we
              guarantee a safe and conducive environment for our clients.
            </p>
            <p className="text-muted leading-relaxed">
              Our facility is well equipped with modern and state-of-the-art
              training equipment to give our clients a simulation of what can be
              encountered in a real-life scenario.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">Our Facility</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand">
              Where Training Comes to Life
            </h2>
          </Reveal>

          <div className="space-y-16">
            {sections.map((s, i) => (
              <Reveal
                key={s.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className="h-72 md:h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
                <div>
                  <h3 className="font-display font-extrabold text-brand text-2xl mb-4">
                    {s.title}
                  </h3>
                  <ul className="text-muted space-y-3">
                    {s.items.map((x) => (
                      <li key={x} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Training Safety</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand">
              Safety Comes First — Always
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Instructor supervision",
              "Risk assessment",
              "Equipment checks",
              "Emergency procedures",
            ].map((x) => (
              <Reveal key={x} className="bg-white border border-line p-6 text-center">
                <p className="font-extrabold text-brand">{x}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand text-white">
        <div className="container-x text-center">
          <Reveal>
            <p className="eyebrow eyebrow-light">Get Started</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight mb-6">
              Ready to Use Our Facility?
            </h2>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link className="btn btn-light" to="/register">
                Register for Training <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-outline" to="/contact">
                Contact OPEANS
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}