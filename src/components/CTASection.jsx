import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

export default function CTASection({
  eyebrow = "GET CERTIFIED",
  title = "Invest in a Safer Tomorrow",
  subtitle = "Find the right safety course for you or your team.",
  image,
  primary = { label: "Register Online", to: "/register" },
  secondary = { label: "Contact Us", to: "/contact" },
  checks,
}) {
  return (
    <section
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(25,26,62,.97), rgba(44,46,92,.7)), url(${image})`,
      }}
    >
      <div className="container-x py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h2 className="font-display text-3xl md:text-[38px] font-extrabold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-white/85 mb-8">{subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Link to={primary.to} className="btn btn-light">
              {primary.label}
            </Link>
            <Link to={secondary.to} className="btn btn-outline">
              {secondary.label}
            </Link>
          </div>
        </Reveal>

        {checks && checks.length > 0 && (
          <Reveal className="flex flex-col gap-4">
            {checks.map((c) => (
              <span key={c} className="flex items-center gap-3">
                <CheckCircle2 size={20} /> {c}
              </span>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}