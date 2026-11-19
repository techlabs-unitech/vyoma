import Image from "next/image";
import Link from "next/link";
import { Icon } from "../Icons";
import { Block, PageHero, List, Note, Cta } from "../components";
export const metadata = { title: "Partnerships | Vyoma", description: "Partner with Vyoma: schools, colleges, universities, trainers, employers and technology partners collaborating to expand meaningful learning." };
export default function Partnerships() {
  return (
    <main>
      <PageHero title="Partnerships" lead="We welcome collaborations that expand meaningful learning, practical exposure and opportunities for learners." image={{ src: "/images/services/education-investment.jpg", alt: "A modern university campus with architectural plans and a laptop showing a campus masterplan" }} />
      <Block title="Who we partner with">
        <div className="grid">{[["Schools and colleges","building"], ["Universities","cap"], ["Academic delivery partners","handshake"], ["Trainers","users"], ["Employers","briefcase"], ["Technology partners","shield"], ["Skill-development organisations","rocket"]].map(([t, ic]) => <article key={t} className="card"><span className="help-ico"><Icon name={ic} /></span><h3>{t}</h3></article>)}</div>
      </Block>
      <Block title="How we work together" alt narrow>
        <p className="body">Tell us about your institution, expertise or proposed initiative, and we can explore a suitable model together.</p>
        <p>Each collaboration is clearly labelled with its status:</p>
        <List items={["Proposed", "Under discussion", "Signed", "Active", "Completed"]} />
        <Note>Partner names and logos are shown only with approval. No partner listings are published yet.</Note>
      </Block>
      <section className="section"><div className="wrap split">
        <div>
          <h2>Partner with Vyoma</h2>
          <p className="body">Share your idea and we will respond with next steps.</p>
          <Link className="btn solid" href="/contact">Discuss a Partnership</Link>
        </div>
        <div className="split-art"><Image src="/images/about/mentorship-and-growth.jpg" alt="Education professionals in a collaborative discussion" fill sizes="(max-width: 860px) 100vw, 40vw" style={{ objectPosition: "50% 30%" }} /></div>
      </div></section>
    </main>
  );
}
