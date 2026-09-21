import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Clock,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Input from "../components/Input";
import Select from "../components/Select";
import SEO from "../seo/SEO";
import { SITE } from "../seo/seoConfig";

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

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  image: SITE.logo,
  telephone: SITE.phone,
  email: SITE.email,
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "₦₦",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: wire to backend / email service (Formspree, Resend, etc.)
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact OPEANS Nigeria Limited in Port Harcourt for safety training enquiries, corporate bookings and certificate verification. Phone, email and address provided."
        path="/contact"
        image={IMG}
        keywords="contact OPEANS, safety training Port Harcourt contact, corporate training Nigeria"
        jsonLd={localBusinessLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <PageHero
        eyebrow="Contact"
        title="Let's Talk Safety"
        subtitle="Reach out to our team for training, corporate enquiries or general information."
        image={IMG}
      />

      <section className="section">
        <div className="container-x grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {[
            {
              title: "Training Enquiries",
              email: "training@opeansafety.com",
              description: "For individual course bookings and schedules.",
            },
            {
              title: "Corporate Training",
              email: "corporate@opeansafety.com",
              description: "For group bookings, custom programmes and proposals.",
            },
            {
              title: "General Enquiries",
              email: "info@opeansafety.com",
              description: "For everything else — partnerships, media, questions.",
            },
          ].map(({ title, email, description }) => (
            <div key={title} className="border border-line p-6 bg-white">
              <p className="font-extrabold text-brand mb-2">{title}</p>
              <a
                href={`mailto:${email}`}
                className="text-brand text-sm font-semibold hover:underline block mb-3"
              >
                {email}
              </a>
              <p className="text-muted text-xs leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div>
              <p className="eyebrow">Our Details</p>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-brand mb-6">
                Visit, Call or Write to Us
              </h2>
            </div>

            <div className="flex gap-3 items-start">
              <MapPin className="text-brand mt-1 shrink-0" size={20} />
              <div>
                <p className="font-bold text-brand mb-1">Address</p>
                <p className="text-muted text-sm leading-relaxed">
                  32 Jessy &amp; Jenny Road,
                  <br />
                  off Odidli Road, Trans-Amadi Industrial Layout,
                  <br />
                  P.O. Box 2243, Port Harcourt,
                  <br />
                  Rivers State, Nigeria
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Phone className="text-brand mt-1 shrink-0" size={20} />
              <div>
                <p className="font-bold text-brand mb-1">Telephone</p>
                <a
                  href="tel:+2348033123456"
                  className="text-muted text-sm hover:text-brand transition"
                >
                  +234 803 312 3456
                </a>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Mail className="text-brand mt-1 shrink-0" size={20} />
              <div>
                <p className="font-bold text-brand mb-1">Email</p>
                <a
                  href="mailto:info@opeansafety.com"
                  className="text-muted text-sm hover:text-brand transition"
                >
                  info@opeansafety.com
                </a>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Globe className="text-brand mt-1 shrink-0" size={20} />
              <div>
                <p className="font-bold text-brand mb-1">Website</p>
                <a
                  href="https://www.opeansafety.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted text-sm hover:text-brand transition"
                >
                  www.opeansafety.com
                </a>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Clock className="text-brand mt-1 shrink-0" size={20} />
              <div>
                <p className="font-bold text-brand mb-1">Office Hours</p>
                <p className="text-muted text-sm leading-relaxed">
                  Monday – Friday: 8:00 AM – 5:00 PM
                  <br />
                  Saturday: By appointment
                </p>
              </div>
            </div>

            <div className="aspect-video bg-soft border border-line grid place-items-center text-muted text-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Trans-Amadi+Industrial+Layout+Port+Harcourt"
                target="_blank"
                rel="noreferrer"
                className="text-brand font-semibold hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a className="btn btn-ghost" href="tel:+2348033123456">
                <Phone size={16} /> Call
              </a>
              <a className="btn btn-ghost" href="mailto:info@opeansafety.com">
                <Mail size={16} /> Email
              </a>
              <a
                className="btn btn-ghost"
                href="https://wa.me/2348033123456"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <Link className="btn btn-primary" to="/register">
                <ShieldCheck size={16} /> Register
              </Link>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="border border-line border-l-4 border-l-brand bg-white p-8 md:p-10">
                <div className="w-12 h-12 bg-brand text-white flex items-center justify-center mb-4">
                  <CheckCircle2 size={22} />
                </div>
                <p className="eyebrow">Message Sent</p>
                <h3 className="font-display text-2xl font-extrabold text-brand mb-3">
                  Thank You
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  We've received your message. A member of our team will get
                  back to you shortly.
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
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="eyebrow">Send a Message</p>
                  <h2 className="font-display text-2xl md:text-3xl font-extrabold text-brand">
                    How Can We Help?
                  </h2>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  <Input label="Full Name" name="name" required />
                  <Input label="Email" name="email" type="email" required />
                  <Input label="Phone" name="phone" type="tel" />
                  <Input label="Company" name="company" />
                  <Select
                    label="Enquiry Type"
                    name="type"
                    options={[
                      "Training Enquiry",
                      "Corporate Training",
                      "Certificate Verification",
                      "Careers",
                      "General",
                      "Other",
                    ]}
                    required
                  />
                  <Input label="Subject" name="subject" />
                  <div className="field md:col-span-2">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required />
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}