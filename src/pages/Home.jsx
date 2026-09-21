import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import CourseGrid from "../components/CourseGrid";
import ClientLogoGrid from "../components/ClientLogoGrid";
import CTASection from "../components/CTASection";
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

const rig = pickHero(0);
const facility = pickHero(9);

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = useMemo(
    () => (heroSlides.length > 0 ? heroSlides : [FALLBACK_HERO]),
    []
  );

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  useEffect(() => {
    if (slideIndex >= slides.length) setSlideIndex(0);
  }, [slideIndex, slides.length]);

  const popularSlugs = [
    "survival-at-sea",
    "huet",
    "basic-fire-fighting",
    "advanced-fire-fighting",
    "bosiet",
    "self-contained-breathing-apparatus-confined-space",
    "basic-first-aid-cpr",
    "advanced-first-aid-cpr",
    "gas-testing",
  ];

  const popular = popularSlugs
    .map((slug) => courses.find((c) => c.slug === slug))
    .filter(Boolean);

  return (
    <>
      <SEO
        title="Offshore & Industrial Safety Training in Nigeria"
        description="OPEANS Nigeria Limited delivers accredited offshore, marine, fire, first aid, HSE and industrial safety training in Port Harcourt since 1988. Register online."
        path="/"
        image={rig}
        keywords="safety training Nigeria, BOSIET, HUET, offshore training Port Harcourt, HSE courses Nigeria, fire fighting training"
      />

      {/* HERO with silent fade slideshow */}
      <section className="relative min-h-[610px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={slideIndex}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(24,25,63,.96), rgba(35,37,79,.78) 48%, rgba(35,37,79,.18)), url(${slides[slideIndex]})`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] gap-10 items-center py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow eyebrow-light">
              Offshore &amp; Industrial Safety Training
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[66px] font-extrabold uppercase leading-[0.98] tracking-tight mb-6">
              Safer People.
              <br />
              <span className="font-semibold">Stronger Industries.</span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              A leading safety training provider to the African Oil &amp; Gas
              industry. We help individuals and organisations understand,
              prepare for and mitigate the risks within which they operate.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link className="btn btn-light" to="/training">
                Explore Courses <ArrowRight size={17} />
              </Link>
              <Link className="btn btn-outline" to="/register">
                Register Online
              </Link>
            </div>
          </motion.div>

          <div className="hidden lg:block self-end justify-self-end mb-12 text-right font-display font-extrabold text-2xl leading-none">
            PEOPLE
            <br />
            SAFETY
            <br />
            PROGRESS
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-white shadow-md">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Emergency Preparedness", "Be ready. Save lives."],
            ["People Empowerment", "Skilled. Confident. Safer."],
            ["Technical Skills", "Practical training for real-world challenges."],
            ["Stronger Organisations", "Safety today. A better tomorrow."],
          ].map(([title, sub]) => (
            <Reveal
              key={title}
              className="px-6 py-7 border-b lg:border-b-0 lg:border-r last:border-0 border-line"
            >
              <b className="block text-brand text-sm">{title}</b>
              <small className="block text-muted text-xs mt-1 leading-snug">
                {sub}
              </small>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-6">
              Leading Safety Training for the African Oil &amp; Gas Industry
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Opeans Nigeria Limited is a leading safety training provider to
              the African Oil &amp; Gas industry. Our target is to help
              individuals and organisations better understand, prepare for and
              mitigate the risks within which they operate — through a mixture
              of theoretical class sessions and hands-on practical drills.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              We are committed to driving improvement in safety attitudes and
              behaviours across workforces, through the delivery of the best in
              safety training and consultancy.
            </p>
            <p className="text-muted leading-relaxed">
              At Opeans Nigeria Limited, we make you aware of all possible
              escape procedures, techniques and survival equipment available
              for survival in case of disaster — so as to reduce casualties in
              emergencies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="section bg-gradient-to-br from-white to-soft">
        <div className="container-x">
          <Reveal className="section-head flex flex-wrap justify-between items-end gap-4 mb-8">
            <div>
              <p className="eyebrow">Our Training Programmes</p>
              <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand">
                Popular Training Programmes
              </h2>
            </div>
            <Link
              to="/training"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-brand uppercase"
            >
              View All Courses <ArrowRight size={16} />
            </Link>
          </Reveal>

          <CourseGrid courses={popular} />
        </div>
      </section>

      {/* WHY OPEANS */}
      <section
        className="bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(33,34,73,.97), rgba(45,47,94,.82)), url(${rig})`,
        }}
      >
        <div className="container-x grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center py-20">
          <Reveal>
            <p className="eyebrow eyebrow-light">Why OPEANS?</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight mb-4">
              More Than Training.
              <br />
              A Safer Future.
            </h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Accidents in our industries today have cost us all dearly — in
              serious injuries, property damage, lost time, litigation and
              death.
            </p>
            <p className="text-white/85 leading-relaxed mb-6">
              Therefore, the purpose to set a standard for the knowledge and
              proficiency required for safe work practices within the Oil &amp;
              Gas industries and construction sites should be paramount.
            </p>
            <Link className="btn btn-light" to="/about">
              About Us <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 border border-white/20">
            {[
              ["35+ Years", "Industry Experience"],
              ["Qualified", "Instructors"],
              ["Practical", "Training Facility"],
              ["Industry", "Focused Training"],
            ].map(([big, small]) => (
              <Reveal
                key={big + small}
                className="min-h-[140px] flex flex-col justify-center px-6 py-7 border-r border-b border-white/20 [&:nth-child(2n)]:border-r-0 [&:nth-child(n+3)]:border-b-0"
              >
                <strong className="block text-lg">{big}</strong>
                <span className="block text-sm opacity-75 mt-1">
                  {small}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY */}
      <section className="section">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-14 items-center">
          <Reveal>
            <p className="eyebrow">Our Facility</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-4">
              Built for Real-World Training
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Opeans provides an extensive range of offshore and onshore
              specialist manpower skills and safety trainings to give
              individuals the strength and skill to work better in their field.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              With modern and state-of-the-art training equipment in our
              facilities, we take trainees through rigorous training to improve
              their value as workmen and employees in their various workplaces.
            </p>
            <Link className="btn btn-primary" to="/facilities">
              Explore Facilities <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div
            className="relative h-[440px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${facility})`,
              backgroundColor: "#333",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
            <span className="absolute z-10 left-7 bottom-7 font-display font-extrabold text-xl">
              HANDS-ON. PRACTICAL. PROFESSIONAL.
            </span>
          </div>
        </div>
      </section>

      {/* CORPORATE */}
      <section className="section bg-soft">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="eyebrow">Corporate Training</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-4">
              Customised Organisational Programmes
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              We design and deliver group training programmes tailored to your
              operational needs and delivered on-site or at our centre.
            </p>
            <Link className="btn btn-primary" to="/corporate-training">
              Corporate Training <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-4">
            {[
              "Customised programmes",
              "Group training",
              "On-site delivery",
              "Needs assessment",
            ].map((x) => (
              <div key={x} className="bg-white border border-line p-5">
                <p className="text-sm font-semibold">{x}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* STANDARDS & AFFILIATIONS */}
      <section className="section">
        <div className="container-x max-w-4xl mx-auto">
          <Reveal className="text-center mb-10">
            <p className="eyebrow">Standards &amp; Affiliations</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand">
              Recognised Across the Industry
            </h2>
          </Reveal>

          <Reveal className="bg-white border border-line p-8 md:p-10">
            <p className="text-muted leading-relaxed mb-6">
              Opeans is a member of the{" "}
              <strong>Royal Lifesaving Society Commonwealth</strong> and the{" "}
              <strong>Institute of Safety Professionals of Nigeria (ISPON)</strong>
              , and is approved by the{" "}
              <strong>International Association of Drilling Contractors (IADC)</strong>{" "}
              and the{" "}
              <strong>International Association for Safety and Survival Training (IASST)</strong>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Royal Lifesaving Society Commonwealth",
                "ISPON",
                "IADC",
                "IASST",
              ].map((x) => (
                <div
                  key={x}
                  className="border border-line p-4 text-center text-xs font-extrabold uppercase tracking-wide text-brand"
                >
                  {x}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                to="/accreditations"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-brand uppercase"
              >
                View Accreditations <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section bg-soft">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Clients</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand">
              Trusted by Organisations
            </h2>
          </Reveal>

          <ClientLogoGrid />

          <div className="text-center mt-8">
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-brand uppercase"
            >
              View Our Clients <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        eyebrow="GET CERTIFIED"
        title="Ready to Start Your Training?"
        subtitle="Find the right safety course for you or your team."
        image={rig}
        primary={{ label: "Register Online", to: "/register" }}
        secondary={{ label: "Contact OPEANS", to: "/contact" }}
        checks={[
          "Professional training programmes",
          "Experienced instructors",
          "Hands-on practical training",
          "Training for safety-critical environments",
        ]}
      />
    </>
  );
}