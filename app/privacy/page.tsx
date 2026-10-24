import { Block, PageHero, List } from "../components";
import { CONTACT } from "../enquiry-options";
export const metadata = { title: "Privacy Policy | Vyoma Eduventures LLP" };
export default function Privacy() {
  return (
    <main>
      <PageHero title="Privacy Policy" lead="How Vyoma Eduventures LLP uses the details you share with us." />
      <Block narrow>
        <h3>What we collect</h3>
        <p className="body">When you submit the enquiry form, we collect your name, audience type, phone or WhatsApp number, email address (if provided), area of interest, preferred contact method and any message you write.</p>
        <h3>How we use it</h3>
        <p className="body">We use these details only to respond to your enquiry, understand your requirements and guide you to suitable programmes or services.</p>
        <h3>Who sees it</h3>
        <p className="body">Your enquiry is delivered to the Vyoma team. We do not sell your details. We may use trusted service providers, such as email delivery services, solely to operate the website and handle enquiries.</p>
        <h3>Your choices</h3>
        <List items={["Ask us what details we hold about you", "Ask us to correct or delete your details", "Withdraw your consent to be contacted"]} />
        <p className="body">Write to <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>.</p>
      </Block>
    </main>
  );
}
