import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Input from "../components/Input";
import Select from "../components/Select";
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

const steps = [
  "Consultation",
  "Needs Assessment",
  "Programme Design",
  "Training",
  "Assessment",
  "Reporting / Certification",
];

const offerings = [
  "Customised programmes",
  "Training needs assessment",
  "Group training",
  "On-site training",
  "Offshore workforce training",
  "Emergency response programmes",
];

const industries = [
  "Oil & Gas",
  "Offshore",
  "Marine",
  "Energy",
  "Industrial",
  "Construction",
  "Telecoms",
  "Government",
];

export default function CorporateTraining() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: wire to backend / email service
  };

  return (
    <>
      <SEO
        title="Corporate Safety Training"
        description="Customised group safety training for organisations across Nigeria. OPEANS designs programmes around your operations — delivered on-site or at our Port Harcourt facility."
        path="/corporate-training"
        image={IMG}
        keywords="corporate safety training Nigeria, group training, on-site safety training, offshore workforce training"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Corporate Training", path: "/corporate-training" },
        ]}
      />

      <PageHero
        eyebrow="Corporate Training"
        title="Safer Teams. Stronger Organisations."
        subtitle="Tailored safety training for companies, contractors and offshore workforces."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center mb-14">
          <Reveal>
            <p className="eyebrow">Corporate Safety Training</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
              Training Built Around Your Organisation
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              We help organisations shape their working environment by making
              their people work safer. Our corporate programmes combine
              theoretical class sessions with hands-on practical drills —
              designed around your operations, your workforce and your risks.
            </p>
            <p className="text-muted leading-relaxed">
              Whether you're training a small team or an entire offshore crew,
              we deliver a journey that ensures your people have the knowledge,
              skills, ability and right attitude to operate safely and
              effectively.
            </p>
          </Reveal>
        </div>

        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <p className="eyebrow">What We Offer</p>
            <h3 className="font-display text-2xl font-extrabold text-brand mb-6">
              Corporate Training Services
            </h3>
            <ul className="space-y-3 text-muted">
              {offerings.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="border border-line p-8 bg-soft">
            <p className="eyebrow">How It Works</p>
            <h3 className="font-display text-2xl font-extrabold text-brand mb-6">
              Our Corporate Process
            </h3>
            <ol className="space-y-4">
              {steps.map((label, i) => (
                <li key={label} className="flex gap-4 items-center">
                  <span className="w-9 h-9 bg-brand text-white grid place-items-center font-extrabold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-ink">{label}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">Why Train With OPEANS</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand">
              Trusted by Nigeria's Safety-Critical Industries
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                title: "Internationally Approved",
                description:
                  "Approved by IADC and IASST. Member of RLSS Commonwealth and ISPON.",
              },
              {
                title: "Since 1988",
                description:
                  "Over three decades of safety training for Oil & Gas, marine, industrial and government workforces.",
              },
              {
                title: "State-of-the-Art Facility",
                description:
                  "Training pool, live-fire areas, confined-space simulators and modern classrooms for realistic simulation.",
              },
            ].map(({ title, description }) => (
              <Reveal
                key={title}
                className="bg-white border border-line p-6 text-center"
              >
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

      <section className="section">
        <div className="container-x max-w-4xl mx-auto">
          <Reveal className="text-center mb-10">
            <p className="eyebrow">Industries We Serve</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand">
              Sectors We Support
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((x) => (
              <Reveal
                key={x}
                className="bg-white border border-line p-5 text-center hover:border-brand transition"
              >
                <p className="font-extrabold text-brand text-sm">{x}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x max-w-3xl">
          <Reveal className="text-center mb-10">
            <p className="eyebrow">Corporate Enquiry</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-4">
              Request a Training Proposal
            </h2>
            <p className="text-muted">
              Tell us about your team, courses of interest and preferred dates.
              We'll respond with a tailored proposal.
            </p>
          </Reveal>

          {submitted ? (
            <Reveal className="border border-line border-l-4 border-l-brand bg-white p-8 md:p-10">
              <p className="eyebrow">Request Received</p>
              <h3 className="font-display text-2xl font-extrabold text-brand mb-3">
                Thank You
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                Your corporate training enquiry has been received. Our team
                will review your requirements and prepare a proposal tailored
                to your organisation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/training" className="btn btn-primary">
                  Browse Training
                </Link>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn btn-ghost"
                >
                  Submit Another
                </button>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <Input label="Company" name="company" required />
                <Input label="Contact Person" name="contact" required />
                <Input label="Email" name="email" type="email" required />
                <Input label="Telephone" name="phone" type="tel" required />
                <Select
                  label="Course of Interest"
                  name="course"
                  options={courses.map((c) => ({
                    value: c.slug,
                    label: c.fullName,
                  }))}
                />
                <Select
                  label="Industry"
                  name="industry"
                  options={industries}
                />
                <Input
                  label="Number of Participants"
                  name="participants"
                  type="number"
                  min="1"
                />
                <Input label="Preferred Date" name="date" type="date" />
                <div className="field md:col-span-2">
                  <label htmlFor="location">Training Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="On-site / Port Harcourt centre / Other"
                  />
                </div>
                <div className="field md:col-span-2">
                  <label htmlFor="message">Message / Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your workforce, expected outcomes and any specific requirements..."
                  />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="btn btn-primary">
                    Request a Training Proposal
                  </button>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section bg-brand text-white">
        <div className="container-x text-center">
          <Reveal>
            <p className="eyebrow eyebrow-light">Need Different Dates?</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight mb-4">
              Custom Dates for Your Team
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-8">
              We deliver programmes at our Port Harcourt training centre or
              on-site at your facility. Tell us your schedule and we'll work
              around it.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/training-calendar" className="btn btn-light">
                View Training Calendar <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact OPEANS
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}