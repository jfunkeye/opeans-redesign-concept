import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, subtitle, image, children }) {
  return (
    <section
      className="min-h-[390px] flex items-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(34,35,68,.96), rgba(50,52,101,.65)), url(${image})`,
      }}
    >
      <div className="container-x py-16">
        <Reveal>
          {eyebrow && <p className="eyebrow eyebrow-light">{eyebrow}</p>}
          <h1 className="font-display text-4xl md:text-[54px] font-extrabold tracking-tight leading-none mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg max-w-2xl text-white/90 leading-relaxed">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}