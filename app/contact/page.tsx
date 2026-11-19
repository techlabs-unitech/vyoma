import { EnquiryForm } from "../components";
import { Icon } from "../Icons";
import { CounsellingIllustration } from "../Illustrations";
import { CONTACT } from "../enquiry-options";
export const metadata = { title: "Contact | Vyoma", description: "Contact Vyoma by enquiry form, phone, email or WhatsApp." };

const help = [
  ["cap", "Students and Parents", "Academic programmes, professional qualifications, competitive examination preparation and skill development."],
  ["building", "Educational Institutions", "Academic partnerships, institutional consulting, education projects, faculty development and training."],
  ["briefcase", "Corporate Clients and Employers", "Industry-linked training, internships, talent development and industry–academia partnerships."],
  ["handshake", "Academic and Training Partners", "Programme delivery, collaborations, faculty engagement and learning initiatives."],
  ["bulb", "Consultants, Mentors & Subject-Matter Experts", "Opportunities to collaborate in institutional development, mentoring, advisory services and specialised learning initiatives."],
];

export default async function Contact({ searchParams }: { searchParams: Promise<{ interest?: string; course?: string }> }) {
  const { interest, course } = await searchParams;
  return (
    <main>
      <section className="page-hero contact-hero"><div className="wrap hero-split">
        <div>
          <h1>Contact Vyoma</h1>
          <p className="lead long">Have a question or looking for the right learning opportunity? Connect with Vyoma Eduventures LLP. Our team will understand your requirements and guide you to the appropriate programme or service.</p>
          <p className="lead-line">Enquire online or connect with us on WhatsApp.</p>
        </div>
        <div className="hero-art" aria-hidden="false"><CounsellingIllustration /></div>
      </div></section>

      <section className="section"><div className="wrap contact-grid">
        <EnquiryForm defaultInterest={interest} defaultMessage={course ? `I would like to know more about: ${course.slice(0, 120)}.` : undefined} />
        <aside className="contact-card" aria-label="Contact details">
          <h2>Talk to us</h2>
          <ul>
            <li><Icon name="phone" /><div><span>Phone</span><a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a></div></li>
            <li><Icon name="mail" /><div><span>Email</span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div></li>
          </ul>
          <a className="btn wa" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </aside>
      </div></section>

      <section className="section alt"><div className="wrap">
        <h2>How Can We Help You?</h2>
        <div className="help-grid">{help.map(([i, t, d]) => (
          <article key={t} className="help"><span className="help-ico"><Icon name={i} size={26} /></span><h3>{t}</h3><p>{d}</p></article>
        ))}</div>
      </div></section>
    </main>
  );
}
