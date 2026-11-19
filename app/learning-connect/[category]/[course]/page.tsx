import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Note } from "../../../components";
import { getCategory, getCourse, enquiryHref, type Course } from "../../../courses";

export async function generateMetadata({ params }: { params: Promise<{ category: string; course: string }> }) {
  const { category, course } = await params;
  const c = getCourse(category, course);
  return c ? { title: `${c.title} | Vyoma`, description: c.summary } : {};
}

const TBC = <span className="tbc">To be confirmed</span>;
const text = (v?: string) => (v ? <p>{v}</p> : TBC);
const steps = (v?: string[]) => (v?.length ? <ol className="list">{v.map(x => <li key={x}>{x}</li>)}</ol> : TBC);

// Reusable course-page template. Sections follow "What every course page will show" on Learning Connect.
// Anything not yet supplied for a course renders as "To be confirmed"; nothing is invented.
function CourseTemplate({ c }: { c: Course }) {
  const sections: [string, React.ReactNode][] = [
    ["Who the course is for", text(c.audience)],
    ["Eligibility and prerequisites", text(c.eligibility)],
    ["Syllabus or learning outcomes", c.syllabus?.length ? <ul className="list">{c.syllabus.map(x => <li key={x}>{x}</li>)}</ul> : TBC],
    ["Format: recorded, live or in-person", text(c.format)],
    ["Duration and schedule", text(c.duration)],
    ["Fee", text(c.fee)],
    ["Assessment and learner support", text(c.assessment)],
    ["Certificate issuer", text(c.certificate)],
    ["Enrolment steps", steps(c.enrolment)],
    ["Refund and cancellation terms", text(c.refund)],
  ];
  return <div className="course-sections">{sections.map(([h, body]) => <section key={h} className="course-sec"><h3>{h}</h3>{body}</section>)}</div>;
}

export default async function CoursePage({ params }: { params: Promise<{ category: string; course: string }> }) {
  const { category, course } = await params;
  const cat = getCategory(category);
  const c = getCourse(category, course);
  if (!cat || !c) notFound();
  return (
    <main>
      <PageHero title={c.title} lead={cat.title} />
      <section className="section"><div className="wrap narrow">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/learning-connect">Learning Connect</Link><span aria-hidden="true">/</span>
          <Link href={`/learning-connect/${cat.slug}`}>{cat.title}</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{c.title}</span>
        </nav>
        {c.summary && <p className="body">{c.summary}</p>}
        <CourseTemplate c={c} />
        <Note>Fees, schedules and start dates are not shown until confirmed.</Note>
        <div className="enq-actions">
          <Link className="btn solid" href={enquiryHref(cat.interest, c.title)}>Enquire About This Course</Link>
          <Link className="btn" href={`/learning-connect/${cat.slug}`}>Back to {cat.title}</Link>
        </div>
      </div></section>
    </main>
  );
}
