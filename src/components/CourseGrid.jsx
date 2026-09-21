import CourseCard from "./CourseCard";

export default function CourseGrid({ courses }) {
  if (!courses || courses.length === 0) {
    return (
      <p className="text-center text-muted py-12">
        No courses match your selection.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((c) => (
        <CourseCard key={c.slug} course={c} />
      ))}
    </div>
  );
}