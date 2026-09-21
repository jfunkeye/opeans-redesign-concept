export default function TestimonialCard({ testimonial }) {
  const { quote, name, company, course, year } = testimonial;
  return (
    <div className="bg-white border border-line p-7 shadow-sm">
      <p className="text-muted leading-relaxed italic mb-5">"{quote}"</p>
      <div className="text-sm">
        <strong className="text-brand block">{name}</strong>
        <span className="text-muted">
          {company} • {course} {year ? `• ${year}` : ""}
        </span>
      </div>
    </div>
  );
}