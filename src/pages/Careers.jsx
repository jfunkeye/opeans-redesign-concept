import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Input from "../components/Input";
import Select from "../components/Select";
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

const jobs = [];

const benefits = [
  {
    title: "Meaningful Work",
    description:
      "Contribute directly to safer workplaces across Nigeria's most demanding industries.",
  },
  {
    title: "Professional Development",
    description:
      "Continuous training and career growth in safety and instructional practice.",
  },
  {
    title: "Collaborative Culture",
    description:
      "Work alongside experienced instructors, HSE professionals and industry specialists.",
  },
  {
    title: "Real Impact",
    description:
      "Every course you deliver helps protect lives across high-risk sectors.",
  },
];

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: wire to backend / email service
  };

  return (
    <>
      <SEO
        title="Careers at OPEANS"
        description="Join OPEANS Nigeria Limited — build a career in safety training, HSE and instructional practice. View open positions and submit a general application."
        path="/careers"
        image={IMG}
        keywords="OPEANS careers, safety training jobs Nigeria, HSE jobs Port Harcourt, instructor jobs"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ]}
      />

      <PageHero
        eyebrow="Careers"
        title="Build a Career That Makes Workplaces Safer"
        subtitle="Join a team that shapes safety training in Nigeria."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center mb-14">
          <Reveal>
            <p className="eyebrow">Working at OPEANS</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
              Why Join Us
            </h2>
            <p className="text-muted leading-relaxed">
              At OPEANS, we're building a team of instructors, HSE professionals
              and specialists who share a commitment to safety, quality and
              continuous improvement. If you want your work to protect lives,
              you'll fit right in.
            </p>
          </Reveal>
        </div>

        <div className="container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map(({ title, description }) => (
            <Reveal
              key={title}
              className="bg-white border border-line p-6 hover:shadow-md transition"
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
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Current Opportunities</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand">
              Open Positions
            </h2>
          </Reveal>

          {jobs.length === 0 ? (
            <Reveal className="max-w-2xl mx-auto bg-white border border-dashed border-line p-10 text-center">
              <p className="font-extrabold text-brand mb-2">
                No Vacancies Published Right Now
              </p>
              <p className="text-muted text-sm leading-relaxed mb-6">
                We're always interested in hearing from talented instructors,
                HSE professionals and specialists. Submit a general application
                below and we'll keep your details on file.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-brand uppercase hover:underline"
              >
                Go to Application <ArrowRight size={14} />
              </a>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {jobs.map((j) => (
                <Reveal
                  key={j.id ?? j.title}
                  className="bg-white border border-line p-6 hover:shadow-md transition flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-display font-extrabold text-brand text-lg">
                      {j.title}
                    </h3>
                    {j.posted && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted shrink-0">
                        {j.posted}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-muted mb-5">
                    <span>{j.department}</span>
                    <span>{j.location}</span>
                    <span>{j.type}</span>
                  </div>
                  <div className="mt-auto pt-4 border-t border-line">
                    <a
                      href="#apply"
                      className="inline-flex items-center gap-2 text-xs font-extrabold text-brand uppercase hover:underline"
                    >
                      Apply Now <ArrowRight size={14} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="apply" className="section">
        <div className="container-x max-w-3xl">
          <Reveal className="text-center mb-10">
            <p className="eyebrow">General Application</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-4">
              Submit an Application
            </h2>
            <p className="text-muted">
              We review every application. If your skills match a current or
              upcoming role, we'll be in touch.
            </p>
          </Reveal>

          {submitted ? (
            <Reveal className="border border-line border-l-4 border-l-brand bg-white p-8 md:p-10">
              <p className="eyebrow">Application Received</p>
              <h3 className="font-display text-2xl font-extrabold text-brand mb-3">
                Thank You
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                We've received your application. Our HR team will review it and
                contact you if there's a match.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/about" className="btn btn-primary">
                  Learn About OPEANS
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
                <Input label="Full Name" name="name" required />
                <Input label="Email" name="email" type="email" required />
                <Input label="Phone" name="phone" type="tel" />
                <Input label="Location" name="location" />
                <Select
                  label="Position of Interest"
                  name="position"
                  options={[
                    "Instructor",
                    "HSE Professional",
                    "Training Coordinator",
                    "Administration",
                    "Operations",
                    "Other",
                  ]}
                  required
                />
                <Select
                  label="Employment Type"
                  name="type"
                  options={["Full-time", "Part-time", "Contract", "Internship"]}
                />
                <div className="field md:col-span-2">
                  <label htmlFor="linkedin">LinkedIn / Portfolio URL (optional)</label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    placeholder="https://"
                  />
                </div>
                <div className="field md:col-span-2">
                  <label htmlFor="cv">CV Upload</label>
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <p className="text-[11px] text-muted mt-1">
                    Accepted formats: PDF, DOC, DOCX
                  </p>
                </div>
                <div className="field md:col-span-2">
                  <label htmlFor="cover">Cover Letter</label>
                  <textarea
                    id="cover"
                    name="cover"
                    placeholder="Tell us why you'd like to join OPEANS..."
                  />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="btn btn-primary">
                    Submit Application
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
            <p className="eyebrow eyebrow-light">Not Sure Where You Fit?</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight mb-6">
              Reach Out to Our Team
            </h2>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/contact" className="btn btn-light">
                Contact OPEANS
              </Link>
              <Link to="/about" className="btn btn-outline">
                About OPEANS
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}