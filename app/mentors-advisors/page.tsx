import { Block, PageHero, Note, Cta } from "../components";
export const metadata = { title: "Our Mentors & Advisors | Vyoma Eduventures LLP" };
export default function Mentors() {
  return (
    <main>
      <PageHero title="Our Mentors & Advisors" lead="Experts who share Vyoma's educational purpose." />
      <Block>
        <div className="grid">{["Academic Leadership", "Subject & Learning Experts", "Industry & HR Professionals", "Strategic Advisors"].map(t => (
          <article key={t} className="card"><h3>{t}</h3><p>Profiles will appear here once each expert has given consent and details are verified.</p></article>
        ))}</div>
        <Note>Mentors and advisors are not necessarily employees or board members. The formal LLP partners are listed on the About Us page, separate from mentors, advisors and guest contributors.</Note>
      </Block>
      <Cta title="Interested in contributing?" text="Subject experts, mentors, trainers and advisors are welcome to get in touch." label="Contact Us" />
    </main>
  );
}
