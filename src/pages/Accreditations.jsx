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

const credentials = [
  {
    organisation: "Royal Lifesaving Society Commonwealth",
    shortName: "RLSS Commonwealth",
    type: "Professional Membership",
    category: "memberships",
    description:
      "OPEANS is a member of the Royal Lifesaving Society Commonwealth, reflecting our commitment to internationally recognised water safety and lifesaving standards.",
  },
  {
    organisation: "Institute of Safety Professionals of Nigeria",
    shortName: "ISPON",
    type: "Professional Membership",
    category: "memberships",
    description:
      "OPEANS is a member of the Institute of Safety Professionals of Nigeria — the professional body advancing safety practice across Nigerian industries.",
  },
  {
    organisation: "International Association of Drilling Contractors",
    shortName: "IADC",
    type: "Training Approval",
    category: "training-approvals",
    description:
      "OPEANS is approved by the International Association of Drilling Contractors, ensuring our drilling-related safety training aligns with global industry standards.",
  },
  {
    organisation: "International Association for Safety and Survival Training",
    shortName: "IASST",
    type: "Training Approval",
    category: "training-approvals",
    description:
      "OPEANS is approved by the International Association for Safety and Survival Training — the global body setting standards for offshore and maritime safety training.",
  },
];

const categories = [
  { id: "memberships", label: "Professional Memberships" },
  { id: "training-approvals", label: "Training Approvals" },
  { id: "regulatory", label: "Regulatory Approvals" },
  { id: "quality", label: "Quality Standards" },
  { id: "documents", label: "Certificates & Documents" },
];

export default function Accreditations() {
  return (
    <>
      <SEO
        title="Accreditations & Approvals"
        description="OPEANS is approved by IADC and IASST, and is a member of the Royal Lifesaving Society Commonwealth and ISPON. Learn about our training standards and affiliations."
        path="/accreditations"
        image={IMG}
        keywords="IADC approved training, IASST approved, ISPON member, RLSS Commonwealth, accredited safety training Nigeria"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Accreditations", path: "/accreditations" },
        ]}
      />

      <PageHero
        eyebrow="Accreditations"
        title="Standards That Support Quality Training"
        subtitle="Verified approvals, memberships and quality standards."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow">Recognition</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
              Recognised Across the Industry
            </h2>
            <p className="text-muted leading-relaxed">
              OPEANS Nigeria Limited holds professional memberships and training
              approvals from leading industry bodies in Nigeria and
              internationally. These affiliations underpin the quality and
              credibility of our safety training programmes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Our Credentials</p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-brand">
              Categories of Accreditation
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((c) => (
              <Reveal
                key={c.id}
                className="bg-white border border-line p-5 text-center"
              >
                <p className="font-extrabold text-brand text-sm leading-snug">
                  {c.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow">Verified Credentials</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand">
              Our Affiliations &amp; Approvals
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((c) => (
              <Reveal
                key={c.organisation}
                className="bg-white border border-line p-8 hover:shadow-md transition"
              >
                <p className="text-xs font-extrabold uppercase tracking-wider text-muted mb-1">
                  {c.type}
                </p>
                <h3 className="font-display font-extrabold text-brand text-lg mb-1">
                  {c.organisation}
                </h3>
                <p className="text-xs font-bold text-brand/70 mb-4">
                  {c.shortName}
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  {c.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand text-white">
        <div className="container-x max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow eyebrow-light">Our Commitment</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight mb-5">
              Quality You Can Trust
            </h2>
            <p className="text-white/85 leading-relaxed mb-8">
              These memberships and approvals reflect OPEANS' commitment to
              delivering safety training that meets both Nigerian and
              international standards. Every programme we deliver is aligned
              with the requirements of the bodies listed above.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link className="btn btn-light" to="/training">
                View Training Programmes
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