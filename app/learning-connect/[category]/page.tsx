import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, Note } from "../../components";
import { categories, coursesIn, getCategory, enquiryHref } from "../../courses";

export const dynamicParams = false;
export function generateStaticParams() { return categories.map(c => ({ category: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const c = getCategory((await params).category);
  return c ? { title: `${c.title} | Learning Connect | Vyoma`, description: c.intro } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const cat = getCategory((await params).category);
  if (!cat) notFound();
  const list = coursesIn(cat.slug);
  const partnership = cat.mode === "partnership";

  return (
    <main>
      <PageHero title={cat.title} lead={cat.subtitle} />
      <section className="section"><div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb"><Link href="/learning-connect">Learning Connect</Link><span aria-hidden="true">/</span><span aria-current="page">{cat.title}</span></nav>
        <p className="body intro">{cat.intro}</p>

        {partnership ? (
          <div className="enq-panel">
            <h3>School-level support through partnerships</h3>
            <p>Vyoma works with schools and institutions to bring academic support to learners up to Class 10. If you represent a school, share your requirements and our team will get in touch.</p>
            <p>Students and parents looking for individual learning can explore the pathways that begin from Class 11 onwards.</p>
            <div className="enq-actions">
              <Link className="btn" href="/academic-partnership-enquiry">Enquire About School Partnerships</Link>
              <Link className="btn ghost-light" href="/learning-connect#pathways">View All Pathways</Link>
            </div>
          </div>
        ) : (
          <>
            {list.length > 0 ? (
              <>
                <h2>Available courses</h2>
                <div className="grid">{list.map(c => (
                  <article key={c.slug} className="card">
                    <h3>{c.title}</h3>
                    {c.summary && <p>{c.summary}</p>}
                    <Link href={`/learning-connect/${cat.slug}/${c.slug}`}>View course details</Link>
                  </article>
                ))}</div>
              </>
            ) : (
              <>
                {cat.priority && (
                  <>
                    <h2>Priority programmes</h2>
                    <div className="grid">{cat.priority.map(p => (
                      <article key={p} className="card">
                        <h3>{p}</h3>
                        <p>Course details are being finalised and will be published here once confirmed.</p>
                        <Link href={enquiryHref(cat.interest, p)}>Enquire about {p}</Link>
                      </article>
                    ))}</div>
                  </>
                )}
                <div className="empty-state">
                  <h3>Course listings are being finalised</h3>
                  <p>Courses in this category will appear here as soon as each programme is confirmed, including eligibility, syllabus, fees, duration and delivery mode. Until then, our team can tell you what is planned and what is currently available.</p>
                </div>
              </>
            )}
            <div className="enq-actions">
              <Link className="btn solid" href={enquiryHref(cat.interest)}>Enquire About This Category</Link>
              <Link className="btn" href="/learning-connect#pathways">Back to All Pathways</Link>
            </div>
          </>
        )}
        <Note>Programme availability, teaching partners, fees and delivery modes will be confirmed course-wise. A listed programme is not open for admission until confirmed.</Note>
      </div></section>
    </main>
  );
}
