import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import CourseGrid from "../components/CourseGrid";
import SEO from "../seo/SEO";
import { SITE } from "../seo/seoConfig";
import { courses, getCourseBySlug } from "../data/courses";

export default function CourseDetails() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) {
    return <Navigate to="/training" replace />;
  }

  const related = courses.filter((c) => course.related?.includes(c.slug));

  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.fullName,
    description: course.summary,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      sameAs: SITE.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      courseWorkload: course.duration,
      location: {
        "@type": "Place",
        name: "OPEANS Training Centre",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Port Harcourt",
          addressRegion: "Rivers State",
          addressCountry: "NG",
        },
      },
    },
  };

  return (
    <>
      <SEO
        title={`${course.fullName} Training`}
        description={course.summary}
        path={`/training/${course.slug}`}
        image={course.image}
        type="article"
        keywords={`${course.name}, ${course.fullName}, ${course.type}, safety training Nigeria`}
        jsonLd={courseLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Training", path: "/training" },
          { name: course.name, path: `/training/${course.slug}` },
        ]}
      />

      <PageHero
        eyebrow={`Training • ${course.type}`}
        title={course.fullName}
        subtitle={course.summary}
        image={course.image}
      >
        <Link to="/register" className="btn btn-light">
          Register for this Course <ArrowRight size={16} />
        </Link>
      </PageHero>

      <section className="section">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_0.4fr] gap-14">
          <div className="space-y-10">
            <div>
              <p className="eyebrow">Overview</p>
              <h2 className="font-display text-2xl font-extrabold text-brand mb-4">
                Course Overview
              </h2>
              <p className="text-muted leading-relaxed">{course.overview}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="eyebrow">Who Should Attend</p>
                <ul className="space-y-2">
                  {course.audience.map((x) => (
                    <li key={x} className="flex gap-2 text-muted text-sm">
                      <CheckCircle2 size={16} className="text-brand mt-0.5 shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="eyebrow">Course Objectives</p>
                <ul className="space-y-2">
                  {course.objectives.map((x) => (
                    <li key={x} className="flex gap-2 text-muted text-sm">
                      <CheckCircle2 size={16} className="text-brand mt-0.5 shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="eyebrow">What You'll Learn</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.learn.map((x) => (
                  <li key={x} className="flex gap-2 text-muted text-sm">
                    <CheckCircle2 size={16} className="text-brand mt-0.5 shrink-0" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">Course Content / Modules</p>
              <ol className="space-y-2">
                {course.modules.map((x) => (
                  <li key={x} className="text-muted text-sm">
                    {x}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="eyebrow">Practical Exercises</p>
              <ul className="space-y-2">
                {course.practical.map((x) => (
                  <li key={x} className="flex gap-2 text-muted text-sm">
                    <CheckCircle2 size={16} className="text-brand mt-0.5 shrink-0" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            {course.faq?.length > 0 && (
              <div>
                <p className="eyebrow">Course FAQ</p>
                <Accordion items={course.faq} />
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 h-fit space-y-6">
            <div className="border border-line p-6 bg-white">
              <h3 className="font-display font-extrabold text-brand text-lg mb-4">
                Course Facts
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted font-semibold">Duration</dt>
                  <dd>{course.duration}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted font-semibold">Type</dt>
                  <dd>{course.type}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted font-semibold">Assessment</dt>
                  <dd className="text-right">{course.assessment}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted font-semibold">Certification</dt>
                  <dd className="text-right">{course.certification}</dd>
                </div>
              </dl>
            </div>

            {course.prerequisites?.length > 0 && (
              <div className="border border-line p-6 bg-white">
                <h3 className="font-display font-extrabold text-brand text-lg mb-3">
                  Prerequisites
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  {course.prerequisites.map((x) => (
                    <li key={x}>• {x}</li>
                  ))}
                </ul>
              </div>
            )}

            {course.bring?.length > 0 && (
              <div className="border border-line p-6 bg-white">
                <h3 className="font-display font-extrabold text-brand text-lg mb-3">
                  What to Bring
                </h3>
                <ul className="space-y-2 text-sm text-muted">
                  {course.bring.map((x) => (
                    <li key={x}>• {x}</li>
                  ))}
                </ul>
              </div>
            )}

            <Link to="/register" className="btn btn-primary w-full">
              Register for this Course
            </Link>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-soft">
          <div className="container-x">
            <div className="mb-8">
              <p className="eyebrow">Related Courses</p>
              <h2 className="font-display text-2xl font-extrabold text-brand">
                You May Also Like
              </h2>
            </div>
            <CourseGrid courses={related} />
          </div>
        </section>
      )}

      <section className="section bg-brand text-white text-center">
        <div className="container-x">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            Ready to Register?
          </h2>
          <Link to="/register" className="btn btn-light">
            Register for This Course <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}