import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  AlertCircle,
  HelpCircle,
  Phone,
  Mail,
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

const DEMO_DB = {
  "OPN-DEMO1234": {
    candidate: "John Doe",
    course: "BOSIET",
    issued: "12 March 2024",
    expires: "12 March 2028",
    status: "VALID",
  },
  "OPN-DEMO5678": {
    candidate: "Jane Smith",
    course: "HUET",
    issued: "05 June 2025",
    expires: "05 June 2029",
    status: "VALID",
  },
  "OPN-EXPIRED01": {
    candidate: "Mark Johnson",
    course: "Basic Fire Fighting",
    issued: "10 January 2020",
    expires: "10 January 2024",
    status: "EXPIRED",
  },
};

export default function VerifyCertificate() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    const clean = number.trim().toUpperCase();
    if (!clean) return;
    const record = DEMO_DB[clean];
    setResult(record ? { ok: true, ...record, ref: clean } : { ok: false, ref: clean });
    setCopied(false);
  };

  const handleReset = () => {
    setNumber("");
    setResult(null);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result.ref);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available
    }
  };

  return (
    <>
      <SEO
        title="Verify an OPEANS Certificate"
        description="Verify an OPEANS Nigeria Limited certificate instantly by entering the certificate number. Confirm the candidate, course, issue date, expiry and validity status."
        path="/verify-certificate"
        image={IMG}
        keywords="verify OPEANS certificate, BOSIET verification, HUET certificate check, safety certificate Nigeria"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Verify Certificate", path: "/verify-certificate" },
        ]}
      />

      <PageHero
        eyebrow="Certificate Verification"
        title="Verify an OPEANS Certificate"
        subtitle="Enter a certificate number to confirm its status."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="eyebrow">Certificate Verification</p>
            <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight text-brand mb-5">
              Confirm a Certificate's Status
            </h2>
            <p className="text-muted leading-relaxed">
              OPEANS certificates can be verified by entering the certificate
              number printed on the document. For privacy reasons, only
              minimal identifying information is shown.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-soft pt-0">
        <div className="container-x max-w-2xl">
          <form
            onSubmit={handleVerify}
            className="bg-white border border-line p-6 md:p-8"
          >
            <label
              htmlFor="cert"
              className="block text-xs font-extrabold uppercase tracking-wide text-brand mb-3"
            >
              Certificate Number
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                />
                <input
                  id="cert"
                  type="text"
                  placeholder="e.g. OPN-DEMO1234"
                  className="w-full pl-12 pr-4 py-3.5 border border-line text-sm outline-none focus:border-brand uppercase"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  autoComplete="off"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary shrink-0">
                 Verify
              </button>
            </div>

            <p className="text-xs text-muted mt-4">
              Tip: Try{" "}
              <button
                type="button"
                onClick={() => setNumber("OPN-DEMO1234")}
                className="font-mono font-bold text-brand underline hover:no-underline"
              >
                OPN-DEMO1234
              </button>{" "}
              to see a valid result, or{" "}
              <button
                type="button"
                onClick={() => setNumber("OPN-EXPIRED01")}
                className="font-mono font-bold text-brand underline hover:no-underline"
              >
                OPN-EXPIRED01
              </button>{" "}
              to see an expired one.
            </p>
          </form>

          {result && result.ok && result.status === "VALID" && (
            <div className="mt-8 bg-white border border-line border-l-4 border-l-emerald-500 p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 mb-1">
                    Certificate Verified
                  </p>
                  <h3 className="font-display text-2xl font-extrabold text-brand">
                    Valid Certificate
                  </h3>
                </div>
              </div>

              <dl className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-y-3 gap-x-4 text-sm mb-6">
                <dt className="text-muted font-semibold">Candidate</dt>
                <dd>{result.candidate}</dd>

                <dt className="text-muted font-semibold">Course</dt>
                <dd>{result.course}</dd>

                <dt className="text-muted font-semibold">Issue Date</dt>
                <dd>{result.issued}</dd>

                <dt className="text-muted font-semibold">Expiry Date</dt>
                <dd>{result.expires}</dd>

                <dt className="text-muted font-semibold">Status</dt>
                <dd>
                  <span className="badge badge-success">
                    {result.status}
                  </span>
                </dd>
              </dl>

              <div className="flex items-center justify-between gap-3 border border-line bg-soft px-4 py-3">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-muted">
                    Certificate Number
                  </p>
                  <p className="text-sm font-mono font-bold text-brand">
                    {result.ref}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-xs font-extrabold uppercase text-brand hover:text-brand-dark transition"
                >
                  {copied ? (
                    <>
                      <Check size={14} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-ghost"
                >
                  Verify Another Certificate
                </button>
              </div>
            </div>
          )}

          {result && result.ok && result.status === "EXPIRED" && (
            <div className="mt-8 bg-white border border-line border-l-4 border-l-amber-500 p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-600 mb-1">
                    Certificate Expired
                  </p>
                  <h3 className="font-display text-2xl font-extrabold text-brand">
                    Certificate Record Found
                  </h3>
                </div>
              </div>

              <dl className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-y-3 gap-x-4 text-sm mb-6">
                <dt className="text-muted font-semibold">Candidate</dt>
                <dd>{result.candidate}</dd>

                <dt className="text-muted font-semibold">Course</dt>
                <dd>{result.course}</dd>

                <dt className="text-muted font-semibold">Issue Date</dt>
                <dd>{result.issued}</dd>

                <dt className="text-muted font-semibold">Expiry Date</dt>
                <dd>{result.expires}</dd>

                <dt className="text-muted font-semibold">Status</dt>
                <dd>
                  <span className="badge badge-warning">
                    {result.status}
                  </span>
                </dd>
              </dl>

              <p className="text-sm text-muted mb-6">
                This certificate has expired. To renew, please contact our
                training team or re-register for the course.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/register" className="btn btn-primary">
                  Re-Register for Training
                </Link>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-ghost"
                >
                  Verify Another
                </button>
              </div>
            </div>
          )}

          {result && !result.ok && (
            <div className="mt-8 bg-white border border-line border-l-4 border-l-red-500 p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center shrink-0">
                  <XCircle size={24} />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-red-600 mb-1">
                    Not Found
                  </p>
                  <h3 className="font-display text-2xl font-extrabold text-brand">
                    Certificate Not Found
                  </h3>
                </div>
              </div>

              <p className="text-muted leading-relaxed mb-4">
                No record matches the certificate number{" "}
                <span className="font-mono font-bold text-brand">
                  {result.ref}
                </span>
                . Please check the number and try again.
              </p>

              <ul className="text-sm text-muted space-y-2 mb-6 list-disc pl-5">
                <li>Make sure the certificate number is entered correctly</li>
                <li>Check for similar-looking characters (O vs 0, I vs 1)</li>
                <li>Contact us if you believe this is an error</li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-primary"
                >
                  Try Again
                </button>
                <Link to="/contact" className="btn btn-ghost">
                  Contact OPEANS
                </Link>
              </div>
            </div>
          )}

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="tel:+2348033123456"
              className="bg-white border border-line p-5 flex items-center gap-3 hover:border-brand transition"
            >
              <Phone className="text-brand shrink-0" size={20} />
              <div>
                <p className="text-xs font-extrabold uppercase text-muted">
                  Need Help?
                </p>
                <p className="text-sm font-bold text-brand">
                  +234 803 312 3456
                </p>
              </div>
            </a>
            <a
              href="mailto:info@opeansafety.com"
              className="bg-white border border-line p-5 flex items-center gap-3 hover:border-brand transition"
            >
              <Mail className="text-brand shrink-0" size={20} />
              <div>
                <p className="text-xs font-extrabold uppercase text-muted">
                  Email Support
                </p>
                <p className="text-sm font-bold text-brand">
                  info@opeansafety.com
                </p>
              </div>
            </a>
          </div>

          <div className="mt-8 flex items-start gap-3 text-xs text-muted">
            <HelpCircle size={16} className="shrink-0 mt-0.5" />
            <p>
              Certificate validity depends on the course. Most offshore
              certificates (BOSIET, HUET) are valid for 4 years. If your
              certificate appears missing, please contact our training office.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}