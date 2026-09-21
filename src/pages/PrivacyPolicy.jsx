import { Link } from "react-router-dom";
import {
  FileText,
  Database,
  Mail,
  ShieldCheck,
  Cookie,
  Lock,
  Server,
  UserCheck,
  Info,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
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

const sections = [
  {
    id: "collect",
    title: "Information We Collect",
    icon: Database,
    body: [
      "We collect registration information, contact information, and certificate verification details required to deliver training and maintain accurate records.",
      "This information is provided directly by you when you register for a course, contact us, or use our certificate verification tool.",
    ],
  },
  {
    id: "registration",
    title: "Registration Information",
    icon: FileText,
    body: [
      "Personal details submitted during registration — such as your name, contact details, nationality, and company information — are used to process your booking, issue certificates, and communicate with you about your training.",
      "We may also collect medical or special requirement information where it is necessary for course delivery and delegate safety.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    icon: Mail,
    body: [
      "Contact information is used to respond to enquiries, confirm bookings, share relevant training updates, and provide customer support.",
      "We do not sell or share your contact information with third parties for marketing purposes.",
    ],
  },
  {
    id: "verification",
    title: "Certificate Verification",
    icon: ShieldCheck,
    body: [
      "Only minimal identifying information is exposed during certificate verification — such as the candidate's name, course, and certificate status.",
      "This information is limited intentionally to protect the privacy of certificate holders.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    icon: Cookie,
    body: [
      "Cookies may be used to improve site performance, remember your preferences, and provide a smoother user experience.",
      "You can disable cookies in your browser settings, though some features of the site may not function as expected.",
    ],
  },
  {
    id: "processing",
    title: "Data Processing & Retention",
    icon: Lock,
    body: [
      "Data is processed securely and retained only as long as required for legal, regulatory, and operational purposes.",
      "Where possible, we anonymise data that is no longer required for these purposes.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    icon: Server,
    body: [
      "Trusted third-party services may be used for hosting, analytics, payment processing, or communications.",
      "These providers are chosen for their commitment to data protection and are bound by their own privacy obligations.",
    ],
  },
  {
    id: "rights",
    title: "Your Rights",
    icon: UserCheck,
    body: [
      "You may request access to, correction of, or deletion of your personal information at any time.",
      "You may also object to certain types of processing or request that we restrict how your data is used.",
      "To exercise these rights, please contact us using the details below.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    icon: MessageSquare,
    body: [
      "For any privacy questions or to exercise your data rights, contact us at info@opeansafety.com or write to us at our registered address in Port Harcourt.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How OPEANS Nigeria Limited collects, uses and protects personal information submitted through training registration, contact forms and certificate verification."
        path="/privacy-policy"
        image={IMG}
        keywords="OPEANS privacy policy, data protection Nigeria, personal information policy"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How OPEANS Nigeria Limited handles personal information."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow">Privacy Policy</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
              How We Protect Your Information
            </h2>
            <p className="text-muted leading-relaxed">
              OPEANS Nigeria Limited is committed to protecting the privacy of
              our trainees, clients, and website visitors. This policy explains
              what information we collect, how we use it, and the rights you
              have over your personal data.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft pt-0">
        <div className="container-x max-w-4xl">
          <Reveal className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="text-brand shrink-0" size={20} />
              <p className="text-sm text-muted">
                Jump to any section using the links below.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wide bg-white border border-line text-muted hover:border-brand hover:text-brand transition"
                  >
                    <Icon size={14} />
                    {s.title}
                  </a>
                );
              })}
            </div>
          </Reveal>

          <div className="space-y-6">
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal
                  key={s.id}
                  className="bg-white border border-line p-6 md:p-8"
                >
                  <div
                    id={s.id}
                    className="flex items-start gap-4 mb-4 scroll-mt-24"
                  >
                    <div className="w-12 h-12 bg-brand text-white flex items-center justify-center shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-muted mb-1">
                        Section {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="font-display text-xl md:text-2xl font-extrabold text-brand">
                        {s.title}
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-3 pl-0 md:pl-16">
                    {s.body.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-muted leading-relaxed text-sm"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-10 border border-line bg-white p-6 md:p-8">
            <p className="text-xs font-extrabold uppercase tracking-wider text-muted mb-3">
              Policy Updates
            </p>
            <p className="text-sm text-muted leading-relaxed mb-4">
              OPEANS may update this Privacy Policy from time to time. The most
              current version will always be available on this page. Continued
              use of our services after changes constitutes acceptance of the
              updated policy.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/terms"
                className="text-xs font-extrabold uppercase text-brand hover:underline"
              >
                Terms &amp; Conditions →
              </Link>
              <Link
                to="/training-policy"
                className="text-xs font-extrabold uppercase text-brand hover:underline"
              >
                Training Policy →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-brand text-white">
        <div className="container-x text-center">
          <Reveal>
            <p className="eyebrow eyebrow-light">Privacy Questions?</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight mb-4">
              We're Here to Help
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-8">
              If you have questions about how we handle your personal
              information, or would like to exercise any of your data rights,
              please contact us.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/contact" className="btn btn-light">
                Contact OPEANS <ArrowRight size={16} />
              </Link>
              <a
                href="mailto:info@opeansafety.com"
                className="btn btn-outline"
              >
                Email Info
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}