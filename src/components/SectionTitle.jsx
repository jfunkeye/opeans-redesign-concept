import Reveal from "./Reveal";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "left",
  action,
}) {
  const alignClass =
    align === "center" ? "text-center mx-auto max-w-2xl" : "";

  return (
    <Reveal className={`mb-10 ${alignClass}`}>
      {eyebrow && (
        <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p>
      )}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          {title && (
            <h2
              className={`font-display text-3xl md:text-[38px] font-extrabold tracking-tight leading-tight ${
                light ? "text-white" : "text-brand"
              }`}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`mt-4 max-w-2xl ${light ? "text-white/80" : "text-muted"}`}>
              {subtitle}
            </p>
          )}
        </div>
        {action && <div>{action}</div>}
      </div>
    </Reveal>
  );
}