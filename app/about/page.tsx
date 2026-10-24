import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Cta, PageHero } from "../components";
export const metadata = { title: "About Us | Vyoma Eduventures LLP", description: "The meaning of Vyoma, the philosophy behind our logo, our vision, mission and founder." };

function Section({ id, title, sub, alt, children }: { id?: string; title: string; sub?: string; alt?: boolean; children: React.ReactNode }) {
  return <section id={id} className={`section prose ${alt ? "alt" : ""}`}><div className="wrap narrow"><h2>{title}</h2>{sub && <p className="sub">{sub}</p>}{children}</div></section>;
}
const P = ({ t }: { t: string[] }) => <>{t.map(x => <p key={x} className="body">{x}</p>)}</>;

export default function About() {
  // Founder photograph: drop the approved photo at public/founder.jpg and it appears automatically.
  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", "founder.jpg"));
  return (
    <main>
      <PageHero title="About Us" lead="Learning Beyond Boundaries." />

      <Section title="The Meaning of Vyoma" sub="A Name Inspired by the Universe. A Vision Beyond Boundaries.">
        <P t={[
          "The word Vyoma means the universe — vast, interconnected, and limitless in its possibilities.",
          "Inspired by the boundlessness of the universe, Vyoma Eduventures LLP was envisioned as a platform where learning goes beyond conventional boundaries and every individual has the opportunity to discover, learn, grow, and create their own future.",
          "We believe that education is everyone’s right, irrespective of background or financial circumstances. Education is much more than a degree or certificate; it is the freedom to explore knowledge, acquire practical skills, express ideas, discover one’s potential, and transform aspirations into opportunities.",
          "In a world where technology brings knowledge within reach of our fingertips, learning should be increasingly accessible to everyone. Vyoma aims to connect learners with knowledge, practical experiences, skills, and opportunities that empower them to shape their own futures.",
          "We believe that learning should not be a privilege reserved for a few, but an opportunity open to everyone.",
        ]} />
      </Section>

      <Section id="logo" alt title="The Philosophy Behind Our Logo" sub="360-Degree Learning. Limitless Possibilities.">
        <Image className="logo-card about-logo" src="/logo.jpeg" alt="The approved Vyoma logo: Learning Beyond Boundaries" width={1280} height={657} />
        <p className="body">The Vyoma logo represents 360-degree learning, interconnectedness, and limitless exploration.</p>
        <h3>The Orbital Curve</h3>
        <p className="body">The orbital curve surrounding the letter O symbolises continuity and the endless possibilities of learning. It reflects our belief that education extends beyond textbooks, classrooms, qualifications, and conventional career paths.</p>
        <h3>The Colours</h3>
        <p className="body">The deep midnight navy blue represents knowledge, trust, stability, and professionalism, while electric blue represents innovation, technology, energy, and the future of learning.</p>
        <h3>The Deeper Spiritual Inspiration</h3>
        <P t={[
          "The name also holds a personal spiritual significance for our founder. The symbolic connection to Om, representing universal consciousness, and Ma, representing the nurturing creative energy of Shakti, reflects the complementary principles of knowledge and action, stillness and movement, and creation and growth.",
          "This philosophy reinforces our belief that everything is interconnected and that learning is a continuous journey of discovery and transformation.",
          "At Vyoma, we believe in exploring everything that can help a person learn, grow, and create a better future.",
        ]} />
      </Section>

      <Section title="Our Vision" sub="A World Where Learning Has No Boundaries">
        <P t={[
          "To create an inclusive and interconnected learning ecosystem where every individual can access knowledge, discover their potential, develop meaningful skills, and pursue opportunities beyond conventional boundaries.",
          "We envision a world where learning is accessible, practical, continuous, and empowering, enabling individuals to become confident, capable, creative, and independent contributors to society.",
        ]} />
      </Section>

      <Section alt title="Our Mission" sub="Connecting Learning with Opportunity">
        <P t={[
          "To connect learners and institutions with quality education, practical skills, professional development, emerging knowledge, and real-world opportunities.",
          "Through academic partnerships, online and offline learning, professional programmes, skill development, talent connections, and institutional consulting, we strive to bridge the gap between knowledge and application, encourage creativity and entrepreneurship, and empower individuals to create meaningful careers and futures.",
        ]} />
      </Section>

      <Section title="Our Educational Philosophy" sub="Education Goes Beyond Graduation. Learning Goes Beyond Boundaries.">
        <P t={[
          "We believe that true education is not measured by qualifications alone, but by the ability to understand, apply, innovate, solve problems, and continue learning.",
          "Every individual has different interests, abilities, and aspirations. Learning should therefore extend beyond academic knowledge to include hands-on experience, creativity, vocational skills, technology, entrepreneurship, and real-world application.",
          "At Vyoma, we encourage individuals to explore their interests, develop their capabilities, and create their own pathways to success.",
          "We believe that the moment we think we know everything, our growth is limited. The moment we recognise that there is always more to learn, new possibilities begin to emerge.",
        ]} />
        <p className="closing">Learn today. Grow tomorrow. Keep evolving.</p>
      </Section>

      <Section alt title="Our Philosophy of Growth" sub="What We Cultivate Shapes What We Create">
        <P t={[
          "We believe that everything is interconnected and that our actions shape the world we create.",
          "When we sow the seeds of knowledge, integrity, effort, kindness, and opportunity, we contribute to a future where individuals and communities can flourish.",
          "Learning shapes our thinking, influences our actions, and opens doors to new possibilities. By continuously learning and contributing positively, we grow not only as individuals but also as a society.",
          "At Vyoma, we believe that learning is a lifelong journey, and every day brings an opportunity to become better than we were yesterday.",
        ]} />
      </Section>

      <Section title="Our Brand Promise" sub="Learning Beyond Boundaries">
        <P t={[
          "At Vyoma, we believe that every individual deserves the opportunity to learn, grow, explore, and achieve.",
          "Through education, practical skills, meaningful partnerships, and continuous learning, we aim to help people move beyond limitations and discover possibilities they may never have imagined.",
          "We do not believe that everyone must follow the same path. We believe everyone deserves the opportunity to discover their own.",
          "Because the universe is vast, human potential is extraordinary, and learning should never have to stop at a boundary.",
        ]} />
        <div className="signoff">
          <strong>VYOMA EDUVENTURES LLP</strong>
          <span>Learning Beyond Boundaries.</span>
          <p className="closing">Learn without limits. Grow with purpose. Create your own future.</p>
        </div>
      </Section>

      <section id="founder" className="section alt"><div className={`wrap ${hasPhoto ? "founder-grid" : "narrow"}`}>
        {hasPhoto && <Image className="founder-photo" src="/founder.jpg" alt="Founder of Vyoma Eduventures LLP" width={600} height={750} />}
        <div className="prose">
          <h2>About the Founder</h2>
          <p className="sub">An Educationist. An Academic Leader. A Lifelong Learner.</p>
          <P t={[
            "The founder of Vyoma Eduventures LLP is an accomplished educationist and academic leader with over 25 years of professional experience spanning teaching, academic leadership, institutional administration, educational development, and strategic operations.",
            "With expertise across commerce, management, finance, and interdisciplinary education, she has contributed to academic development, institutional growth, and student advancement.",
            "As a faculty member, mentor, and resource person, she has guided countless learners in pursuing academic aspirations, professional qualifications, technical education, finance-related opportunities, and diverse career pathways.",
            "Her experience has strengthened her conviction that every individual has potential and that the right guidance, accessible learning, practical exposure, and encouragement can help transform that potential into achievement.",
            "Vyoma is an extension of this vision: to make learning more accessible, connect education with real-world opportunities, and empower individuals to discover their strengths, develop their skills, and create their own futures.",
          ]} />
          <h3>The Vision That Inspires Vyoma</h3>
          <P t={[
            "The idea behind Vyoma emerged from a conviction that education must evolve with the world.",
            "Learning should not be restricted to formal institutions, conventional qualifications, or a single definition of success. It should be accessible, flexible, practical, and connected to the opportunities that individuals wish to pursue.",
            "Through Vyoma Eduventures LLP, the founder aims to bring together academic learning, professional development, technology, practical skills, entrepreneurship, and career opportunities, creating meaningful connections between learners, educators, institutions, industry, and the wider world of opportunities.",
            "Her guiding belief is simple:",
          ]} />
          <blockquote className="belief">When we make learning accessible, encourage curiosity, and support people in discovering their potential, we help create possibilities that extend far beyond the classroom.</blockquote>
        </div>
      </div></section>

      <Cta title="Work with us" text="Tell us about your institution, learning goals or idea." label="Enquire Now" />
    </main>
  );
}
