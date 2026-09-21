import { Link } from "react-router-dom";
import {
  Globe,
  FileCheck2,
  Copyright,
  GraduationCap,
  ClipboardCheck,
  CreditCard,
  Scale,
  ExternalLink,
  RefreshCw,
  Gavel,
  Info,
  ArrowRight,
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
    id: "website",
    title: "Website Terms",
    icon: Globe,
    body: [
      "By accessing or using the OPEANS Nigeria Limited website, you agree to be bound by these Terms & Conditions.",
      "If you do not agree with any part of these terms, please discontinue use of the website.",
    ],
  },
  {
    id: "accuracy",
    title: "Information Accuracy",
    icon: FileCheck2,
    body: [
      "The content on this website is provided in good faith and for general information purposes only.",
      "Training details, schedules, prices and availability may change without notice. Always confirm details with OPEANS directly before making decisions based on website content.",
    ],
  },
  {
    id: "ip",
    title: "Intellectual Property",
    icon: Copyright,
    body: [
      "All OPEANS content — including logos, text, images, course materials and graphics — is protected by copyright and other intellectual property rights.",
      "Content may not be reproduced, distributed, modified or reused without prior written permission from OPEANS Nigeria Limited.",
    ],
  },
  {
    id: "training-info",
    title: "Training Information",
    icon: GraduationCap,
    body: [
      "Course descriptions, durations, prerequisites and certifications listed on this website are illustrative and subject to updates.",
      "While we make every effort to keep information accurate and current, the definitive course details will always be confirmed during registration and in the training confirmation.",
    ],
  },
  {
    id: "registration",
    title: "Registration",
    icon: ClipboardCheck,
    body: [
      "Registrations submitted through this website are subject to availability and confirmation by OPEANS.",
      "A registration is not confirmed until you receive an acknowledgement from our training office.",
      "Registration is also subject to our Training Policy, which sets out attendance, cancellation and refund terms.",
    ],
  },
  {
    id: "payments",
    title: "Payments",
    icon: CreditCard,
    body: [
      "Payment terms are provided during the registration process and in the training confirmation.",
      "Payments must be made in accordance with the terms agreed at the time of booking.",
      "Corporate bookings may be invoiced directly, subject to prior agreement.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: Scale,
    body: [
      "OPEANS Nigeria Limited is not liable for any indirect, incidental, or consequential losses arising from the use of this website or reliance on its content.",
      "This limitation does not affect any rights you may have under applicable law, nor does it limit liability for death or personal injury caused by negligence where such liability cannot be excluded by law.",
    ],
  },
  {
    id: "external-links",
    title: "External Links",
    icon: ExternalLink,
    body: [
      "Links to third-party websites are provided for convenience only. OPEANS does not control and is not responsible for the content, privacy practices, or accuracy of any external site.",
      "Following an external link is done at your own discretion.",
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    icon: RefreshCw,
    body: [
      "OPEANS reserves the right to update these Terms & Conditions from time to time.",
      "The most current version will always be available on this page. Continued use of the website after changes constitutes acceptance of the updated terms.",
    ],
  },
  {
    id: "governing",
    title: "Governing Law",
    icon: Gavel,
    body: [
      "These Terms & Conditions are governed by the laws of the Federal Republic of Nigeria.",
      "Any disputes arising from the use of this website or OPEANS services will be subject to the exclusive jurisdiction of the Nigerian courts.",
    ],
  },
];

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms governing the use of the OPEANS Nigeria Limited website, including training information, registration, payments, liability and governing law."
        path="/terms"
        image={IMG}
        keywords="OPEANS terms and conditions, website terms Nigeria"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />

      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Terms governing the use of the OPEANS website."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow">Terms &amp; Conditions</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
              Terms of Use
            </h2>
            <p className="text-muted leading-relaxed">
              These terms govern your use of the OPEANS Nigeria Limited website
              and the information and services presented on it. Please read
              them carefully.
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
              Related Documents
            </p>
            <p className="text-sm text-muted leading-relaxed mb-4">
              These Terms should be read together with our Privacy Policy and
              Training Policy, which set out how we handle personal data and
              the rules governing training bookings and attendance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/privacy-policy"
                className="text-xs font-extrabold uppercase text-brand hover:underline"
              >
                Privacy Policy →
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
            <p className="eyebrow eyebrow-light">Questions About These Terms?</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight mb-4">
              Contact OPEANS
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-8">
              If you have questions about these Terms &amp; Conditions or how
              they apply to your use of our website or services, please reach
              out.
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