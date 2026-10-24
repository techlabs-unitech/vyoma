import { Block, PageHero, List, Note, Cta } from "../components";
export const metadata = { title: "Partnerships | Vyoma Eduventures LLP" };
export default function Partnerships() {
  return (
    <main>
      <PageHero title="Partnerships" lead="We welcome collaborations that expand meaningful learning, practical exposure and opportunities for learners." />
      <Block title="Who we partner with">
        <div className="grid">{["Schools and colleges", "Universities", "Academic delivery partners", "Trainers", "Employers", "Technology partners", "Skill-development organisations"].map(t => <article key={t} className="card"><h3>{t}</h3></article>)}</div>
      </Block>
      <Block title="How we work together" alt narrow>
        <p className="body">Tell us about your institution, expertise or proposed initiative, and we can explore a suitable model together.</p>
        <p>Each collaboration is clearly labelled with its status:</p>
        <List items={["Proposed", "Under discussion", "Signed", "Active", "Completed"]} />
        <Note>Partner names and logos are shown only with approval. No partner listings are published yet.</Note>
      </Block>
      <Cta title="Partner with Vyoma" text="Share your idea and we will respond with next steps." label="Discuss a Partnership" />
    </main>
  );
}
