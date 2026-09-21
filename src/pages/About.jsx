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

const ABOUT_IMG = pickHero(0);

export default function About() {
  return (
    <>
      <SEO
        title="About Us — Safety Training Since 1988"
        description="Since 1988, OPEANS Nigeria Limited has trained Oil & Gas, marine, industrial and government workforces in Nigeria. Learn about our history, vision and values."
        path="/about"
        image={ABOUT_IMG}
        keywords="OPEANS Nigeria, safety training company Nigeria, IADC IASST approved training, Port Harcourt safety training"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <PageHero
        eyebrow="OPEANS Nigeria Limited"
        title="About OPEANS"
        subtitle="Preparing people to operate safely in demanding environments."
        image={ABOUT_IMG}
      />

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
              A Leader in Safety Training
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              OPEANS Nigeria Limited is a professional safety training and
              consultancy company supporting personnel working in demanding
              industrial, maritime and offshore environments.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              We help the industry shape their working environment by making
              their people work safer. We take people on a journey, ensuring
              they have the knowledge, skills, ability and right attitude to
              operate safely and effectively in their workplace.
            </p>
            <p className="text-muted leading-relaxed">
              Since 1988, OPEANS has been promoting safety awareness across the
              Oil &amp; Gas industries, and today our courses serve the Oil
              &amp; Gas, Offshore, Marine, Energy, Industrial, Telecoms and
              Government sectors.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-4">
            {[
              "Practical training",
              "Industry experience",
              "Qualified instructors",
              "Real-world exercises",
              "Approved facilities",
              "Proven track record",
            ].map((x) => (
              <div key={x} className="border border-line p-5 bg-white">
                <p className="text-sm font-semibold">{x}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* HISTORY */}
      <section className="section bg-soft">
        <div className="container-x max-w-4xl mx-auto">
          <Reveal className="text-center mb-10">
            <p className="eyebrow">Our History</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
              Decades of Safety Excellence
            </h2>
          </Reveal>

          <Reveal className="space-y-5">
            <p className="text-muted leading-relaxed">
              OPEANS was established on <strong>16th February, 1988</strong> by
              the Corporate Affairs Commission (CAC) under the Registration of
              Business Names Act, 1961, as <em>Opeans Enterprises Nigeria</em>.
              It was later incorporated under the Companies and Allied Matters
              Act 1990 as a Limited Liability Company by shares on{" "}
              <strong>14th March, 1995</strong>, with{" "}
              <strong>RC No. 267722</strong>, under the name{" "}
              <strong>OPEANS Nigeria Limited</strong>.
            </p>

            <p className="text-muted leading-relaxed">
              OPEANS started her first business in the same year (1988) with
              Shell Petroleum Development Company Nigeria Limited (SPDC),
              training SPDC Swamp/Offshore personnel on Personal Survival
              Swimming and Advanced Swimming / Lifesaving, Aquatic First Aid /
              General First Aid, and certification of SPDC personnel and
              contractors on Survival Swimming.
            </p>

            <p className="text-muted leading-relaxed">
              These services were later extended to other Oil &amp; Gas
              producing and servicing companies the same year. Since then,
              OPEANS has been promoting safety awareness across the Oil &amp;
              Gas industries.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { year: "1988", label: "Established as Opeans Enterprises Nigeria" },
              { year: "1995", label: "Incorporated as OPEANS Nigeria Limited (RC 267722)" },
              { year: "Today", label: "Serving Oil & Gas, Marine, Industrial & Government sectors" },
            ].map((m) => (
              <Reveal
                key={m.year}
                className="bg-white border border-line p-6 text-center"
              >
                <p className="font-display text-3xl font-extrabold text-brand mb-2">
                  {m.year}
                </p>
                <p className="text-sm text-muted leading-relaxed">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="section">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Reveal className="border border-line p-8 bg-white">
            <h3 className="font-display font-extrabold text-brand text-xl mb-3">
              Our Vision
            </h3>
            <p className="text-muted leading-relaxed">
              To be a world-class provider of efficient and quality safety
              training services and management in the Oil &amp; Gas, maritime,
              transport and other occupational health sectors, meeting
              international standards.
            </p>
          </Reveal>

          <Reveal className="border border-line p-8 bg-white">
            <h3 className="font-display font-extrabold text-brand text-xl mb-3">
              Our Mission
            </h3>
            <p className="text-muted leading-relaxed">
              To always ensure the best possible training for all at risk.
            </p>
          </Reveal>
        </div>

        <div className="container-x mb-16">
          <Reveal className="bg-brand text-white p-10 md:p-14 text-center max-w-4xl mx-auto">
            <p className="eyebrow eyebrow-light">Our Value</p>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
              "Responsible Growth"
            </h3>
            <p className="text-white/85 leading-relaxed max-w-2xl mx-auto">
              Our value, <strong>Responsible Growth</strong>, is the hallmark of
              OPEANS activities. It means a commitment to continuous
              improvement in the way OPEANS impacts the health, safety and
              environment of the Oil &amp; Gas industries in Nigeria and its
              communities, its employees, and of course, its customers.
            </p>
          </Reveal>
        </div>

        <div className="container-x">
          <Reveal className="text-center mb-10">
            <p className="eyebrow">Core Values</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand">
              What Drives Us
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Safety",
              "Professionalism",
              "Competence",
              "Integrity",
              "Quality",
              "Continuous Improvement",
            ].map((label) => (
              <Reveal
                key={label}
                className="border border-line p-6 text-center bg-white"
              >
                <p className="font-extrabold text-brand text-sm uppercase tracking-wide">
                  {label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="section bg-brand text-white">
        <div className="container-x text-center">
          <Reveal>
            <p className="eyebrow eyebrow-light">Training Methodology</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight mb-12">
              How We Deliver Training
            </h2>
          </Reveal>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {["Learn", "Practice", "Assess", "Certify"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-6">
                <Reveal className="text-center">
                  <div className="w-20 h-20 border-2 border-white/40 rounded-full flex items-center justify-center mx-auto mb-3 font-display font-extrabold text-xl">
                    {i + 1}
                  </div>
                  <p className="font-display font-extrabold uppercase tracking-wider">
                    {step}
                  </p>
                </Reveal>
                {i < arr.length - 1 && (
                  <ArrowRight className="text-white/50 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-6">
              Ready to Train With OPEANS?
            </h2>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link className="btn btn-primary" to="/training">
                Explore Training <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-ghost" to="/contact">
                Contact OPEANS
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}