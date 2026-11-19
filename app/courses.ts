// Learning Connect: categories, course listings and the reusable course-page data shape.
// Courses are added to `courses` ONLY once Vyoma has confirmed the programme and supplied its details.
// Do not add placeholder or generic text here: any field left out is shown as "To be confirmed" on the course page.

export type Category = {
  slug: string;
  title: string;
  subtitle: string;
  interest: string;            // must match an option in enquiry-options.ts (preselects the enquiry form)
  mode: "direct" | "partnership";
  intro: string;
  priority?: string[];         // priority programmes: shown on the category page, details still being finalised
};

export const categories: Category[] = [
  { slug: "school", title: "School Education and Academic Support", subtitle: "Primary, Middle and Secondary School", interest: "School / PUC", mode: "partnership",
    intro: "School-level academic support (up to Class 10) is offered through institutional partnerships with schools. Vyoma's individual direct-learning programmes begin from Class 11 onwards." },
  { slug: "puc", title: "Higher Secondary and Pre-University Education", subtitle: "Classes 11–12 / PUC", interest: "School / PUC", mode: "direct",
    intro: "Science, Commerce, Accountancy and related subjects, with academic support and preparation for higher education and professional pathways." },
  { slug: "undergraduate", title: "Undergraduate Education and Degree Programmes", subtitle: "College and University Education", interest: "Undergraduate Programmes", mode: "direct",
    intro: "B.Com, BBA, BCA and relevant Engineering disciplines, subject to programme availability and relevant partnerships." },
  { slug: "professional", title: "Professional Qualifications", subtitle: "Professional Learning and Career Pathways", interest: "Professional Qualifications", mode: "direct",
    intro: "CA Foundation and ACCA are Vyoma's priority programmes. Other professional qualifications are listed only where delivery arrangements are confirmed.",
    priority: ["CA Foundation", "ACCA"] },
  { slug: "competitive", title: "Competitive Examinations and Entrance Preparation", subtitle: "Engineering, Medical and Defence", interest: "Competitive Examinations", mode: "direct",
    intro: "IIT Foundation, IIT-JEE, NEET and NDA preparation, listed only where delivery arrangements are confirmed." },
  { slug: "technology", title: "Technology and Digital Skills", subtitle: "Emerging Technologies and Practical Learning", interest: "AI and Cybersecurity", mode: "direct",
    intro: "AI, cybersecurity, digital technology and hands-on skills development designed to support further learning and career readiness." },
  { slug: "vocational", title: "Vocational Skills and Entrepreneurship", subtitle: "Vyoma Skillpreneur Academy", interest: "Vocational Skills and Entrepreneurship", mode: "direct",
    intro: "Practical vocational skills, entrepreneurship and small-business development across relevant sectors." },
];

export type Course = {
  slug: string;
  category: string;            // a Category slug
  title: string;
  summary?: string;
  audience?: string;           // Who the course is for
  eligibility?: string;        // Eligibility and prerequisites
  syllabus?: string[];         // Syllabus or learning outcomes
  format?: string;             // Recorded, live or in-person
  duration?: string;           // Duration and schedule
  fee?: string;
  assessment?: string;         // Assessment and learner support
  certificate?: string;        // Certificate issuer
  enrolment?: string[];        // Enrolment steps
  refund?: string;             // Refund and cancellation terms
};

export const courses: Course[] = [];

export const getCategory = (slug: string) => categories.find(c => c.slug === slug);
export const coursesIn = (slug: string) => courses.filter(c => c.category === slug);
export const getCourse = (cat: string, slug: string) => courses.find(c => c.category === cat && c.slug === slug);
export const enquiryHref = (interest: string, course?: string) =>
  `/contact?interest=${encodeURIComponent(interest)}${course ? `&course=${encodeURIComponent(course)}` : ""}#enquire`;
