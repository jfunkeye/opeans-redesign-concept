import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white border border-line shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
      <div
        className="h-52 bg-cover bg-center"
        style={{ backgroundImage: `url(${course.image})` }}
      />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex gap-2 mb-3 flex-wrap">
          <span className="text-[11px] font-bold uppercase tracking-wide bg-soft text-muted px-2.5 py-1">
            {course.type}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wide bg-soft text-muted px-2.5 py-1">
            {course.duration}
          </span>
        </div>
        <h3 className="font-display text-lg font-extrabold text-brand uppercase mb-2">
          {course.name}
        </h3>
        <p className="text-sm text-muted leading-relaxed flex-1 mb-4">
          {course.summary}
        </p>
        <Link
          to={`/training/${course.slug}`}
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase text-brand"
        >
          View Course <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}