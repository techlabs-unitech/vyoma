import { Block, PageHero, List, Note } from "../components";
import Link from "next/link";
export const metadata = { title: "Talent Connect | Vyoma Eduventures LLP" };
export default function TalentConnect() {
  return (
    <main>
      <PageHero title="Talent Connect" lead="A proposed pilot talent directory for school, college and university students." />
      <Block narrow>
        <p className="body">Vyoma Talent Connect is planned to showcase student skills, projects, achievements, portfolios and interests, and to help connect them with legitimate opportunities. Access is for verified institutions and approved talent seekers.</p>
        <Note>Pilot status: the operating model is being finalised. Register your interest and we will keep you informed.</Note>
      </Block>
      <Block title="Safeguards" alt narrow>
        <List items={["Clear consent and control over profile visibility", "Verification of institutions and talent seekers", "Defined data retention, reporting and removal processes", "Parent or guardian consent and additional safeguards for minors", "Access limited to approved talent seekers; sensitive personal data is never shown publicly"]} />
        <p><strong>Listing does not guarantee internships, jobs, selection or placement.</strong></p>
      </Block>
      <Block title="Get involved" narrow>
        <div className="row">
          <Link className="btn solid" href="/contact">Register Interest in Talent Connect</Link>
          <Link className="btn" href="/contact">Discuss Talent Access</Link>
        </div>
        <Note>Register Interest is for learners and institutions. Discuss Talent Access is for employers.</Note>
      </Block>
    </main>
  );
}
