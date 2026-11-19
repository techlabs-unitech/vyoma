import Image from "next/image";
import { Block, PageHero, Note, Cta } from "../components";
export const metadata = { title: "Our Mentors & Advisors | Vyoma", description: "Meet the mentors and advisors guiding Vyoma on its journey of Learning Beyond Boundaries." };
export default function Mentors() {
  return (
    <main>
      <PageHero title="Our Mentors & Advisors" lead="Experts who share Vyoma's educational purpose." />
      <section id="radha-padmanabhan" className="section"><div className="wrap mentor-grid">
        <Image className="mentor-photo" src="/mentor-radha-padmanabhan.jpg" alt="Smt. Dr. Radha Padmanabhan, Mentor – VYOMA" width={1280} height={853} priority />
        <div className="prose">
          <h2>Smt. Dr. Radha Padmanabhan</h2>
          <p className="sub">Mentor – VYOMA</p>
          <p className="body">Smt. Dr. Radha Padmanabhan is a distinguished academician and education leader, with an illustrious career in higher education and academic leadership. An IIT alumna and a former Vice-Chancellor, she brings with her a wealth of knowledge, experience and insight into the evolving landscape of education.</p>
          <p className="body">Her extensive experience in academic leadership and institution building adds immense value to VYOMA’s vision of creating meaningful learning opportunities and impactful educational initiatives.</p>
          <p className="body">As a Mentor to VYOMA, Smt. Dr. Radha Padmanabhan will guide and inspire the organisation in its journey towards academic excellence, innovation and future-ready education.</p>
          <p className="body">Her mentorship will be a valuable strength as VYOMA continues its journey of Learning Beyond Boundaries.</p>
        </div>
      </div></section>
      <Block alt>
        <div className="grid">{["Academic Leadership", "Subject & Learning Experts", "Industry & HR Professionals", "Strategic Advisors"].map(t => (
          <article key={t} className="card"><h3>{t}</h3><p>Profiles will appear here once each expert has given consent and details are verified.</p></article>
        ))}</div>
        <Note>Mentors and advisors are not necessarily employees or board members. The formal LLP partners are listed on the About Us page, separate from mentors, advisors and guest contributors.</Note>
      </Block>
      <Cta title="Interested in contributing?" text="Subject experts, mentors, trainers and advisors are welcome to get in touch." label="Contact Us" />
    </main>
  );
}
