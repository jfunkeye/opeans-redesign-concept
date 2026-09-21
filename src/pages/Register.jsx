import { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  User,
  GraduationCap,
  Building2,
  FileText,
  ClipboardCheck,
  Phone,
  Mail,
} from "lucide-react";
import PageHero from "../components/PageHero";
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
  { id: 1, label: "Personal", icon: User },
  { id: 2, label: "Training", icon: GraduationCap },
  { id: 3, label: "Organisation", icon: Building2 },
  { id: 4, label: "Additional", icon: FileText },
  { id: 5, label: "Review", icon: ClipboardCheck },
];

export default function Register() {
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get("course") || "";

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [ref] = useState(
    () => "OPN-" + Math.random().toString(36).slice(2, 8).toUpperCase()
  );

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    nationality: "",
    course: preselectedCourse,
    date: "",
    centre: "Port Harcourt",
    type: "individual",
    companyName: "",
    position: "",
    companyEmail: "",
    participants: "",
    medical: "",
    comments: "",
  });

  useEffect(() => {
    if (preselectedCourse && courses.some((c) => c.slug === preselectedCourse)) {
      setForm((f) => ({ ...f, course: preselectedCourse }));
    }
  }, [preselectedCourse]);

  const update = (field, value) =>
    setForm((f) => ({ ...f, [field]: value }));

  const selectedCourse = useMemo(
    () => courses.find((c) => c.slug === form.course),
    [form.course]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo({ top: 200, behavior: "instant" });
    } else {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "instant" });
      // TODO: wire to backend
    }
  };

  if (submitted) {
    return (
      <>
        <SEO
          title="Registration Successful"
          description="Your OPEANS training registration has been received. A member of our team will contact you to confirm your place."
          path="/register"
          noindex
        />

        <PageHero
          eyebrow="Registration Complete"
          title="Registration Successful"
          subtitle="Your place has been reserved. We'll be in touch shortly."
          image={IMG}
        />

        <section className="section">
          <div className="container-x max-w-2xl">
            <div className="bg-white border border-line border-l-4 border-l-brand p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-brand text-white flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={30} />
              </div>

              <p className="eyebrow">Your Reference</p>
              <p className="font-display text-3xl font-extrabold text-brand mb-6">
                {ref}
              </p>

              <p className="text-muted leading-relaxed mb-8">
                A member of our training team will contact you shortly to
                confirm your place and share payment details.
              </p>

              {selectedCourse && (
                <div className="bg-soft border border-line p-5 text-left max-w-md mx-auto mb-8">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-muted mb-1">
                    Course Registered
                  </p>
                  <p className="font-display font-extrabold text-brand">
                    {selectedCourse.fullName}
                  </p>
                  <p className="text-xs text-muted mt-1">
                    Duration: {selectedCourse.duration}
                  </p>
                </div>
              )}

              <p className="text-xs text-muted mb-8">
                Please keep this reference number for your records.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/training" className="btn btn-primary">
                  Browse Training
                </Link>
                <Link to="/contact" className="btn btn-ghost">
                  Contact OPEANS
                </Link>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="tel:+2348033123456"
                className="bg-white border border-line p-5 flex items-center gap-3 hover:border-brand transition"
              >
                <Phone className="text-brand shrink-0" size={20} />
                <div>
                  <p className="text-xs font-extrabold uppercase text-muted">
                    Call Us
                  </p>
                  <p className="text-sm font-bold text-brand">
                    +234 803 312 3456
                  </p>
                </div>
              </a>
              <a
                href="mailto:training@opeansafety.com"
                className="bg-white border border-line p-5 flex items-center gap-3 hover:border-brand transition"
              >
                <Mail className="text-brand shrink-0" size={20} />
                <div>
                  <p className="text-xs font-extrabold uppercase text-muted">
                    Email Us
                  </p>
                  <p className="text-sm font-bold text-brand">
                    training@opeansafety.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Register for Training"
        description="Register online for OPEANS safety training in Port Harcourt — BOSIET, HUET, fire fighting, first aid, HSE and more. Reserve your place in 3 minutes."
        path="/register"
        image={IMG}
        keywords="register safety training Nigeria, book BOSIET, book HUET, OPEANS registration"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Register", path: "/register" },
        ]}
      />

      <PageHero
        eyebrow="Register"
        title="Register for Training"
        subtitle="Complete the steps below to reserve your place."
        image={IMG}
      />

      <section className="section">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-10">
            <p className="eyebrow">Registration</p>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-brand mb-3">
              Reserve Your Place
            </h2>
            <p className="text-muted text-sm">
              Step {step} of {steps.length} — takes about 3 minutes.
            </p>
          </div>

          <div className="mb-10">
            <div className="flex items-center justify-between gap-2">
              {steps.map(({ id, label, icon: Icon }, i) => {
                const isDone = step > id;
                const isCurrent = step === id;

                return (
                  <div key={id} className="flex items-center flex-1">
                    <button
                      type="button"
                      onClick={() => id < step && setStep(id)}
                      disabled={id > step}
                      className={`flex items-center gap-2 shrink-0 ${
                        id < step ? "cursor-pointer" : "cursor-default"
                      }`}
                    >
                      <span
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm shrink-0 transition ${
                          isDone
                            ? "bg-brand text-white"
                            : isCurrent
                            ? "bg-brand text-white"
                            : "bg-line text-muted"
                        }`}
                      >
                        {isDone ? <CheckCircle2 size={16} /> : <Icon size={16} />}
                      </span>
                      <span
                        className={`hidden md:block text-xs font-extrabold uppercase tracking-wide ${
                          isCurrent ? "text-brand" : "text-muted"
                        }`}
                      >
                        {label}
                      </span>
                    </button>
                    {i < steps.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          step > id ? "bg-brand" : "bg-line"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {step === 1 && (
              <div>
                <h3 className="font-display font-extrabold text-brand text-lg mb-5">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    required
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    required
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    required
                  />
                  <Select
                    label="Gender (optional)"
                    name="gender"
                    options={["Male", "Female", "Prefer not to say"]}
                    value={form.gender}
                    onChange={(e) => update("gender", e.target.value)}
                  />
                  <Input
                    label="Nationality (optional)"
                    name="nationality"
                    value={form.nationality}
                    onChange={(e) => update("nationality", e.target.value)}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="font-display font-extrabold text-brand text-lg mb-5">
                  Training Selection
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <Select
                      label="Course"
                      name="course"
                      required
                      options={courses.map((c) => ({
                        value: c.slug,
                        label: c.fullName,
                      }))}
                      value={form.course}
                      onChange={(e) => update("course", e.target.value)}
                    />
                  </div>
                  <Input
                    label="Preferred Training Date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    required
                  />
                  <Input
                    label="Training Centre"
                    name="centre"
                    value={form.centre}
                    onChange={(e) => update("centre", e.target.value)}
                  />

                  {selectedCourse && (
                    <div className="md:col-span-2 border border-line bg-soft p-5">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-muted mb-2">
                        Course Summary
                      </p>
                      <p className="font-display font-extrabold text-brand mb-1">
                        {selectedCourse.fullName}
                      </p>
                      <p className="text-xs text-muted">
                        {selectedCourse.duration} · {selectedCourse.type}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="font-display font-extrabold text-brand text-lg mb-5">
                  Organisation Details
                </h3>

                <div className="mb-6">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-brand mb-3">
                    Registering As
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value="individual"
                        checked={form.type === "individual"}
                        onChange={() => update("type", "individual")}
                      />
                      <span className="text-sm font-semibold">
                        Individual
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value="company"
                        checked={form.type === "company"}
                        onChange={() => update("type", "company")}
                      />
                      <span className="text-sm font-semibold">Company</span>
                    </label>
                  </div>
                </div>

                {form.type === "company" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                      label="Company Name"
                      name="companyName"
                      value={form.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                    />
                    <Input
                      label="Your Position"
                      name="position"
                      value={form.position}
                      onChange={(e) => update("position", e.target.value)}
                    />
                    <Input
                      label="Company Email"
                      name="companyEmail"
                      type="email"
                      value={form.companyEmail}
                      onChange={(e) => update("companyEmail", e.target.value)}
                    />
                    <Input
                      label="Number of Participants"
                      name="participants"
                      type="number"
                      min="1"
                      value={form.participants}
                      onChange={(e) => update("participants", e.target.value)}
                    />
                  </div>
                )}

                {form.type === "individual" && (
                  <p className="text-sm text-muted bg-soft border border-line p-5">
                    You're registering as an individual. If your employer is
                    sponsoring your training, select "Company" above and provide
                    the details.
                  </p>
                )}
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="font-display font-extrabold text-brand text-lg mb-5">
                  Additional Information
                </h3>
                <div className="space-y-5">
                  <div className="field">
                    <label htmlFor="medical">
                      Medical / Special Requirements (optional)
                    </label>
                    <textarea
                      id="medical"
                      name="medical"
                      value={form.medical}
                      onChange={(e) => update("medical", e.target.value)}
                      placeholder="If you have any medical conditions or special requirements we should know about, please tell us."
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="comments">
                      Comments (optional)
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={form.comments}
                      onChange={(e) => update("comments", e.target.value)}
                      placeholder="Anything else we should know about your registration?"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <h3 className="font-display font-extrabold text-brand text-lg mb-5">
                  Review Your Registration
                </h3>

                <div className="space-y-4">
                  <div className="border border-line bg-white p-5">
                    <p className="eyebrow mb-3">Personal</p>
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm">
                      <dt className="text-muted">Name</dt>
                      <dd>
                        {form.firstName} {form.lastName}
                      </dd>
                      <dt className="text-muted">Email</dt>
                      <dd>{form.email}</dd>
                      <dt className="text-muted">Phone</dt>
                      <dd>{form.phone}</dd>
                      {form.nationality && (
                        <>
                          <dt className="text-muted">Nationality</dt>
                          <dd>{form.nationality}</dd>
                        </>
                      )}
                    </dl>
                  </div>

                  <div className="border border-line bg-white p-5">
                    <p className="eyebrow mb-3">Training</p>
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm">
                      <dt className="text-muted">Course</dt>
                      <dd>{selectedCourse?.fullName || "—"}</dd>
                      <dt className="text-muted">Date</dt>
                      <dd>{form.date || "—"}</dd>
                      <dt className="text-muted">Centre</dt>
                      <dd>{form.centre}</dd>
                    </dl>
                  </div>

                  <div className="border border-line bg-white p-5">
                    <p className="eyebrow mb-3">Organisation</p>
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm">
                      <dt className="text-muted">Type</dt>
                      <dd className="capitalize">{form.type}</dd>
                      {form.type === "company" && (
                        <>
                          <dt className="text-muted">Company</dt>
                          <dd>{form.companyName || "—"}</dd>
                          <dt className="text-muted">Position</dt>
                          <dd>{form.position || "—"}</dd>
                          <dt className="text-muted">Participants</dt>
                          <dd>{form.participants || "—"}</dd>
                        </>
                      )}
                    </dl>
                  </div>

                  <p className="text-xs text-muted text-center">
                    By submitting, you agree to our{" "}
                    <Link
                      to="/training-policy"
                      className="text-brand font-bold underline"
                    >
                      Training Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between gap-4 flex-wrap pt-6 border-t border-line">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="btn btn-ghost"
                >
                  <ArrowLeft size={16} /> Back
                </button>
              ) : (
                <span />
              )}
              <button type="submit" className="btn btn-primary">
                {step < 5 ? (
                  <>
                    Continue <ArrowRight size={16} />
                  </>
                ) : (
                  <>
                    <ShieldCheck size={16} /> Submit Registration
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}