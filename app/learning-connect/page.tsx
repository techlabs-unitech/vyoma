import Link from "next/link";
import { Block, PageHero, List, Note } from "../components";
import { Icon } from "../Icons";
import { PathwayIllustration, LiveClassIllustration, CounsellingIllustration, type PathwayKind } from "../Illustrations";
export const metadata = { title: "Learning Connect | Vyoma", description: "Browse learning pathways with Vyoma, from school education to higher studies, professional qualifications and career-focused skills." };

type Pathway = { kind: PathwayKind; slug: string; badge?: string; title: string; subtitle: string; text?: string; items?: string[]; extra?: string; cta?: string };
const pathways: Pathway[] = [
  { kind: "school", slug: "school", badge: "Through school partnerships", title: "School Education and Academic Support", subtitle: "Primary, Middle and Secondary School", cta: "Explore School Partnerships",
    text: "Academic support in Mathematics, Science, English, Kannada, Social Science and other relevant subjects, offered through partnerships with schools and institutions. Includes foundation learning and preparation for the next stage of education.",
    extra: "IIT Foundation is listed under Competitive Examinations." },
  { kind: "puc", slug: "puc", badge: "Direct learning from Class 11", title: "Higher Secondary and Pre-University Education", subtitle: "Classes 11–12 / PUC",
    text: "Science, Commerce, Accountancy and related subjects, with academic support and preparation for higher education and professional pathways." },
  { kind: "ug", slug: "undergraduate", title: "Undergraduate Education and Degree Programmes", subtitle: "College and University Education",
    items: ["B.Com — Commerce", "BBA — Business Administration", "BCA — Computer Applications", "Engineering — Relevant Engineering Disciplines"],
    text: "Programmes may include practical training, industry exposure, internships, career guidance and placement assistance, subject to programme availability and relevant partnerships." },
  { kind: "pro", slug: "professional", badge: "Direct learning from Class 11", title: "Professional Qualifications", subtitle: "Professional Learning and Career Pathways",
    items: ["CA Foundation — Priority programme", "ACCA — Priority programme"],
    text: "Other professional qualifications, including CMA and CS (Company Secretary), are listed only where delivery arrangements are confirmed. Career guidance, professional skills development, internship opportunities and placement assistance are offered where applicable." },
  { kind: "exam", slug: "competitive", badge: "Direct learning from Class 11", title: "Competitive Examinations and Entrance Preparation", subtitle: "Engineering, Medical and Defence",
    text: "IIT Foundation, IIT-JEE, NEET and NDA preparation to help learners prepare for their chosen academic and career pathways, listed only where delivery arrangements are confirmed." },
  { kind: "tech", slug: "technology", title: "Technology and Digital Skills", subtitle: "Emerging Technologies and Practical Learning",
    text: "AI, cybersecurity, digital technology and hands-on skills development designed to support further learning and career readiness." },
  { kind: "voc", slug: "vocational", title: "Vocational Skills and Entrepreneurship", subtitle: "Vyoma Skillpreneur Academy",
    text: "Practical vocational skills, entrepreneurship and small-business development across relevant sectors, supporting self-employment and business creation." },
];

const features = [
  ["live", "Scheduled live online classes for batches."],
  ["recorded", "Recorded learning resources, where available."],
  ["assess", "Assessments and practice questions."],
  ["solutions", "Answer solutions and explanations."],
  ["doubt", "Guided doubt resolution."],
  ["progress", "Learning progress and performance tracking, where applicable."],
];

export default function LearningConnect() {
  return (
    <main>
      <PageHero title="Learning Connect" lead="Find learning options in one clear, organised place, whether you are a student or a parent." />

      <section className="section" id="pathways"><div className="wrap">
        <h2>Browse by Pathway</h2>
        <p className="body intro">Explore learning opportunities from school education to higher studies, professional qualifications and career-focused skills. Choose a pathway that matches your learning goals and aspirations.</p>
        <p className="scope-note"><b>Who can enrol directly:</b> Vyoma&rsquo;s initial direct-learning programmes for individual students begin from <b>Class 11 onwards</b>. School-level support (up to Class 10) is offered through institutional partnerships with schools, not as individual enrolment.</p>
        <div className="pgrid">{pathways.map((p, i) => (
          <Link key={p.title} className="pcard" href={`/learning-connect/${p.slug}`}>
            <div className="pimg"><PathwayIllustration kind={p.kind} /><span className="pnum" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span></div>
            <div className="pbody">
              {p.badge && <span className={`pbadge ${p.slug === "school" ? "partner" : ""}`}>{p.badge}</span>}
              <h3>{p.title}</h3>
              <p className="psub">{p.subtitle}</p>
              {p.items && <ul>{p.items.map(t => { const [a, b] = t.split(" — "); return <li key={t}><b>{a}</b> — {b}</li>; })}</ul>}
              {p.text && <p>{p.text}</p>}
              {p.extra && <p className="pextra">{p.extra}</p>}
              <span className="plink">{p.cta ?? "Explore Courses"}</span>
            </div>
          </Link>
        ))}</div>
        <Note>Programme availability varies. Programmes that are planned or forthcoming are not open for admission until confirmed. Course listings appear under each pathway as programmes are finalised.</Note>
      </div></section>

      <section className="section alt" id="flexible"><div className="wrap narrow">
        <h2>Flexible Learning — Online and Offline</h2>
        <p className="body">Vyoma aims to make learning accessible through both online and offline modes. When you enquire, our team will understand your learning goals, preferred mode, location and requirements, and guide you regarding suitable programmes, faculty availability, batches, schedules and commencement dates.</p>
        <p className="body">Programme delivery will be planned according to learner demand, faculty availability and operational feasibility.</p>
      </div></section>

      <section className="section" id="direct-online"><div className="wrap">
        <div className="split">
          <div>
            <h2>Direct Online Learning</h2>
            <p className="body">Vyoma offers structured online learning opportunities through batch-based programmes, with CA Foundation and ACCA as priority programmes for initial development. Direct learning for individual students begins from Class 11 onwards.</p>
            <p className="body">Our approach combines structured online classes with learning resources, assessments and learner support, as applicable to each programme. Recorded learning resources may also be made available for individual access.</p>
            <p className="body">Interested students and parents can contact Vyoma for guidance on available programmes and suitable learning options.</p>
          </div>
          <div className="split-art"><LiveClassIllustration /></div>
        </div>
        <h3 className="feat-h">Our learning approach</h3>
        <ul className="features">{features.map(([i, t]) => <li key={t}><span className="feat-ico"><Icon name={i} /></span>{t}</li>)}</ul>
        <Note>Features depend on the programme. Batches, faculty, start dates and enrolment are confirmed only after availability is verified.</Note>

        <div className="enq-panel">
          <div>
            <h3>Explore Your Learning Options</h3>
            <p>Every learner has different goals and requirements. Contact Vyoma to understand the available programmes and receive guidance from our counselling team.</p>
            <p>Our counsellors can discuss your requirements by phone, through an online consultation or during an in-person visit to our office.</p>
            <Link className="btn" href="/contact#enquire">Enquire for More Details</Link>
          </div>
        </div>
      </div></section>

      <Block title="What every course page will show" alt narrow>
        <List items={["Who the course is for", "Eligibility and prerequisites", "Syllabus or learning outcomes", "Format: recorded, live or in-person", "Duration and schedule", "Fee", "Assessment and learner support", "Certificate issuer", "Enrolment steps", "Refund and cancellation terms"]} />
        <Note>Fees, schedules and start dates are not shown until confirmed. This is the standard structure used for every individual course page.</Note>
      </Block>

      <section className="section" id="help"><div className="wrap">
        <div className="help-panel">
          <div>
            <h2>Help Us Help You</h2>
            <p className="help-sub">Tell us what you are looking for.</p>
            <p>Share your learning interests, academic goals and career aspirations. Our team will help you explore suitable programmes, learning pathways and opportunities.</p>
            <Link className="btn" href="/contact#enquire">Enquire About a Course</Link>
          </div>
          <div className="help-art"><CounsellingIllustration /></div>
        </div>
      </div></section>
    </main>
  );
}
