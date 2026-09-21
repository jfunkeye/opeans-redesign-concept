import { Link } from "react-router-dom";
import {
  FileText,
  Calendar,
  CreditCard,
  Users,
  Clock,
  RefreshCw,
  XCircle,
  RotateCcw,
  HeartPulse,
  ShieldCheck,
  ClipboardCheck,
  Award,
  FilePlus2,
  Building2,
  ArrowRight,
  Info,
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
    id: "registration",
    title: "Registration",
    icon: FileText,
    body: [
      "Registration is confirmed on receipt of a completed registration form and acknowledgement from OPEANS.",
      "Submitting a registration does not automatically guarantee a place. Places are confirmed on a first-come, first-served basis, subject to availability.",
      "Delegates will receive a confirmation email or call from our training office once their registration has been processed.",
    ],
  },
  {
    id: "confirmation",
    title: "Confirmation",
    icon: Calendar,
    body: [
      "Course confirmation is issued by our training office once the registration has been processed and payment terms have been agreed.",
      "The confirmation includes the course details, dates, venue and any specific requirements for the delegate.",
    ],
  },
  {
    id: "payment",
    title: "Payment",
    icon: CreditCard,
    body: [
      "Payment terms are set out in the training confirmation and must be adhered to.",
      "Payments can be made by bank transfer or other approved methods communicated by OPEANS.",
      "Corporate clients may be invoiced directly, subject to prior agreement.",
    ],
  },
  {
    id: "attendance",
    title: "Course Attendance",
    icon: Users,
    body: [
      "Delegates must attend the full course to be assessed and certified.",
      "Partial attendance may result in non-certification, and no refund will be given for missed sessions.",
    ],
  },
  {
    id: "late-arrival",
    title: "Late Arrival",
    icon: Clock,
    body: [
      "Late arrival may result in exclusion from practical sessions, as safety and course integrity depend on full attendance.",
      "Delegates arriving significantly late may be asked to re-register for a future session at the discretion of the training team.",
    ],
  },
  {
    id: "rescheduling",
    title: "Rescheduling",
    icon: RefreshCw,
    body: [
      "Rescheduling is subject to availability and reasonable notice.",
      "Requests to reschedule should be made to our training office as early as possible before the course date.",
      "Repeated rescheduling may incur additional administrative charges.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation",
    icon: XCircle,
    body: [
      "Cancellation terms apply as set out in the training confirmation.",
      "Delegates who wish to cancel must notify our training office in writing.",
      "Late cancellations may be subject to administrative charges as per the terms of the confirmation.",
    ],
  },
  {
    id: "refunds",
    title: "Refunds",
    icon: RotateCcw,
    body: [
      "Refunds are processed in line with our cancellation terms.",
      "Refunds will be issued to the original payer account where possible.",
      "Administrative fees may be deducted where applicable.",
    ],
  },
  {
    id: "medical",
    title: "Medical / Fitness Requirements",
    icon: HeartPulse,
    body: [
      "Certain courses require medical fitness declarations — particularly water-based, offshore and physically demanding programmes such as BOSIET, HUET, PSS and Survival at Sea.",
      "Delegates must disclose any medical conditions or special requirements at the time of registration.",
      "OPEANS reserves the right to refuse training to any delegate whose medical condition poses a safety risk to themselves or others.",
    ],
  },
  {
    id: "conduct",
    title: "Training Conduct",
    icon: ShieldCheck,
    body: [
      "Delegates must follow all safety and instructor instructions at all times.",
      "Any behaviour that puts the delegate or others at risk may result in immediate removal from the course without refund.",
      "Delegates must respect instructors, staff and fellow trainees.",
    ],
  },
  {
    id: "assessments",
    title: "Assessments",
    icon: ClipboardCheck,
    body: [
      "Assessment is continuous and includes practical and written elements, as specified for each course.",
      "Delegates must demonstrate competence in both practical and theoretical components to be certified.",
      "Failed assessments may be retaken subject to availability and additional fees.",
    ],
  },
  {
    id: "certificates",
    title: "Certificates",
    icon: Award,
    body: [
      "Certificates are issued on successful completion of the course, assessment and any outstanding payments.",
      "Certificate validity depends on the course. Most offshore certificates (BOSIET, HUET) are valid for 4 years.",
      "Certificates can be verified at any time using our online verification tool.",
    ],
  },
  {
    id: "replacement",
    title: "Replacement Certificates",
    icon: FilePlus2,
    body: [
      "Replacement certificates may be requested from our training office.",
      "A replacement fee may apply, depending on the course and the nature of the request.",
      "The original certificate number will be retained for verification purposes.",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Bookings",
    icon: Building2,
    body: [
      "Corporate bookings follow agreed contractual terms.",
      "Corporate clients are invoiced directly and are subject to the terms agreed in their proposal or contract.",
      "Group courses may be delivered on-site subject to a prior site assessment and safety review.",
    ],
  },
];

export default function TrainingPolicy() {
  return (
    <>
      <SEO
        title="Training Policy"
        description="OPEANS Nigeria Limited Training Policy — terms governing registration, confirmation, payment, attendance, rescheduling, cancellation, refunds, assessments and certification."
        path="/training-policy"
        image={IMG}
        keywords="OPEANS training policy, safety training terms Nigeria, training cancellation policy"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Training Policy", path: "/training-policy" },
        ]}
      />

      <PageHero
        eyebrow="Policies"
        title="Training Policy"
        subtitle="Terms governing OPEANS training bookings and attendance."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow">Training Policy</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
              Terms Governing Our Training
            </h2>
            <p className="text-muted leading-relaxed">
              These terms apply to all OPEANS training bookings, whether made
              online, by phone, by email or through a corporate agreement. By
              registering for a course, delegates accept the policy outlined
              below.
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
                  className="bg-white border border-line p-6 md:p-8 scroll-mt-24"
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
              OPEANS reserves the right to update this Training Policy from time
              to time. The most current version will always be available on this
              page. For any questions about the policy, please contact our
              training office.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/terms" className="text-xs font-extrabold uppercase text-brand hover:underline">
                Terms &amp; Conditions →
              </Link>
              <Link to="/privacy-policy" className="text-xs font-extrabold uppercase text-brand hover:underline">
                Privacy Policy →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-brand text-white">
        <div className="container-x text-center">
          <Reveal>
            <p className="eyebrow eyebrow-light">Questions About the Policy?</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight mb-4">
              Get in Touch With Our Team
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-8">
              If you have questions about registration, payments, cancellation,
              certificates or any other policy matter, our training team is
              here to help.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/contact" className="btn btn-light">
                Contact OPEANS <ArrowRight size={16} />
              </Link>
              <Link to="/faq" className="btn btn-outline">
                Read FAQs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}