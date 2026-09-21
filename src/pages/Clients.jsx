import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ClientLogoGrid from "../components/ClientLogoGrid";
import SEO from "../seo/SEO";
import { industriesServed, clients } from "../data/clients";
import { testimonials } from "../data/testimonials";

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

export default function Clients() {
  const hasClients = clients && clients.length > 0;
  const featuredTestimonial = testimonials?.[0];

  return (
    <>
      <SEO
        title="Our Clients"
        description="OPEANS Nigeria Limited has delivered safety training to oil & gas producers, offshore contractors, marine operators, industrial firms and government organisations since 1988."
        path="/clients"
        image={IMG}
        keywords="OPEANS clients, safety training clients Nigeria, oil and gas training clients"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Clients", path: "/clients" },
        ]}
      />

      <PageHero
        eyebrow="Clients"
        title="Trusted by Organisations That Take Safety Seriously"
        subtitle="Confirmed client logos are displayed in their original brand colours."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow">Our Clients</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
              Organisations That Train With OPEANS
            </h2>
            <p className="text-muted leading-relaxed">
              Since 1988, OPEANS has delivered safety training to oil &amp; gas
              producers, offshore contractors, marine operators, industrial
              firms, and government organisations across Nigeria. Our clients
              trust us to prepare their people for real-world emergencies.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft pt-0">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Confirmed Clients</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-4">
              Client Organisations
            </h2>
            <p className="text-muted text-sm">
              Logos shown in their original brand colours.
            </p>
          </Reveal>

          <ClientLogoGrid />

          {!hasClients && (
            <Reveal className="text-center mt-10 max-w-xl mx-auto">
              <p className="text-muted text-sm">
                Confirmed client logos will appear here as they are supplied by
                OPEANS. If you'd like to be listed as a client,{" "}
                <Link
                  to="/contact"
                  className="text-brand font-bold underline hover:no-underline"
                >
                  get in touch
                </Link>
                .
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Industries Served</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-4">
              Sectors We Support
            </h2>
            <p className="text-muted">
              From offshore rigs to industrial plants, from marine operations to
              government agencies — OPEANS training is designed for every
              safety-critical workforce.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industriesServed.map((x) => (
              <Reveal
                key={x}
                className="bg-white border border-line p-6 text-center hover:border-brand hover:shadow-sm transition"
              >
                <p className="font-extrabold text-brand text-sm">{x}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {featuredTestimonial && (
        <section className="section bg-soft">
          <div className="container-x max-w-4xl mx-auto">
            <Reveal className="text-center mb-10">
              <p className="eyebrow">Client Voice</p>
              <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand">
                What Our Clients Say
              </h2>
            </Reveal>

            <Reveal className="bg-white border border-line p-8 md:p-12 text-center relative">
              <p className="text-muted leading-relaxed text-lg italic mb-6">
                "{featuredTestimonial.quote}"
              </p>
              <p className="font-display font-extrabold text-brand">
                {featuredTestimonial.name}
              </p>
              <p className="text-xs text-muted mt-1">
                {featuredTestimonial.company} • {featuredTestimonial.course}
                {featuredTestimonial.year && ` • ${featuredTestimonial.year}`}
              </p>
            </Reveal>

            <div className="text-center mt-8">
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-brand uppercase hover:underline"
              >
                Read More Testimonials <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Why Clients Choose Us</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand">
              Built on Trust and Standards
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                title: "Internationally Approved",
                description:
                  "Approved by IADC and IASST; member of RLSS Commonwealth and ISPON.",
              },
              {
                title: "Decades of Experience",
                description:
                  "Delivering safety training to Nigeria's Oil & Gas industry since 1988.",
              },
              {
                title: "State-of-the-Art Facility",
                description:
                  "Training pool, live-fire areas, confined-space simulators, and modern classrooms.",
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

      <section className="section bg-brand text-white">
        <div className="container-x text-center">
          <Reveal>
            <p className="eyebrow eyebrow-light">Corporate Training</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight mb-4">
              Train Your Team With OPEANS
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-8">
              Customised programmes for organisations of all sizes — delivered
              at our centre or on-site at your facility.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/corporate-training" className="btn btn-light">
                Corporate Training <ArrowRight size={16} />
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