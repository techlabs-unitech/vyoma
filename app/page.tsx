import Image from "next/image";
import Link from "next/link";
import { services } from "./data";
import { Block, EnquiryForm, Note } from "./components";

const audiences = [
  ["Schools and colleges", "Academic partnerships, courses, faculty development, student training and institutional support."],
  ["Students and parents", "Subject support, professional pathways, practical skills, certifications and career development."],
  ["Universities and institutional partners", "Collaboration, academic delivery partnerships, consulting, outreach and education projects."],
  ["Corporate clients and employers", "Trained talent, internships, placement-readiness initiatives, recruitment connections and customised learning."],
  ["Subject experts, mentors and trainers", "Opportunities to contribute to learning and institutional initiatives."],
];
const journeys = [
  ["Learning Connect", "Explore learning by subject, pathway and format, including direct online learning for individual students.", "/learning-connect", "Find a Learning Pathway"],
  ["Talent Connect", "A proposed pilot directory showcasing student skills and projects to verified institutions and approved talent seekers.", "/talent-connect", "Register Interest in Talent Connect"],
  ["Partnerships", "Collaborations with institutions, employers, trainers and technology partners.", "/partnerships", "Partner with Vyoma"],
];

export default function Home() {
  return (
    <main>
      <section className="hero"><div className="wrap hero-grid">
        <div>
          <h1>Learning Beyond Boundaries.</h1>
          <p className="lead">Connecting learners, institutions, educators and industry through meaningful learning, practical skills and education partnerships.</p>
          <div className="row"><Link className="btn solid" href="/services">Explore Our Services</Link><Link className="btn ghost" href="/partnerships">Partner with Vyoma</Link></div>
        </div>
        <Image className="logo-card" src="/logo.jpeg" alt="Vyoma Eduventures LLP logo: Learning Beyond Boundaries" width={1280} height={657} priority />
      </div></section>

      <Block title="Education. Skills. Opportunity." narrow>
        <p className="body">At Vyoma Eduventures LLP, we believe education should open doors beyond the classroom. We bring together academic learning, practical capability, institutional collaboration and talent development to help learners and education partners move forward with confidence.</p>
      </Block>

      <section className="section philosophy" aria-labelledby="philosophy-h"><div className="wrap narrow">
        <h2 id="philosophy-h">VYOMA — Learning Beyond Boundaries</h2>
        <p className="sub">Born of the Universe. Inspired by Possibility. Driven by Learning.</p>
        <p>Vyoma means the universe — vast, interconnected, and limitless in possibilities.</p>
        <p>We believe every individual deserves the opportunity to learn, grow, discover their potential, and create their own future. Education extends beyond degrees and certificates to include practical skills, creativity, experience, and lifelong learning.</p>
        <p>At Vyoma, we connect learning with opportunity, helping individuals explore new horizons and move beyond conventional boundaries.</p>
        <p className="closing">Learn without limits. Grow with purpose. Create your own future.</p>
        <Link className="btn solid" href="/about">Discover Our Philosophy</Link>
      </div></section>

      <Block title="Who we work with" alt>
        <div className="grid">{audiences.map(([t, d]) => <article key={t} className="card"><h3>{t}</h3><p>{d}</p></article>)}</div>
      </Block>

      <Block title="What we do">
        <div className="grid">{services.map((s, i) => (
          <article key={s.id} className={`card ${i === 6 ? "wide" : ""}`}><h3>{s.title}</h3><p>{s.short}</p><Link href={`/services#${s.id}`}>Learn more</Link></article>
        ))}</div>
      </Block>

      <Block title="Choose your path" alt>
        <div className="grid three">{journeys.map(([t, d, h, c]) => (
          <article key={t} className="path"><h3>{t}</h3><p>{d}</p><Link className="btn" href={h}>{c}</Link></article>
        ))}</div>
      </Block>

      <Block title="Led by experience" narrow>
        <p className="body">With over 25 years of professional experience spanning teaching, academic leadership, institutional administration, educational development and strategic operations, the founder leads Vyoma’s vision of accessible, practical and lifelong learning.</p>
        <Link className="btn" href="/about#founder">Read the founder profile</Link>
      </Block>

      <Block title="Start an enquiry" alt narrow>
        <p className="body">Tell us who you are and what you are looking for. We route your enquiry to the right team.</p>
        <EnquiryForm />
        <Note>Partner names and logos appear on this site only with their approval.</Note>
      </Block>
    </main>
  );
}
