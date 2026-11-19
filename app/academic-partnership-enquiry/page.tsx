import { PageHero, Block } from "../components";
import AcademicEnquiryForm from "../AcademicEnquiryForm";
export const metadata = {
  title: "Academic Partnership Enquiry | Vyoma",
  description: "Schools, colleges and universities: share your collaboration requirements with Vyoma and our team will connect with you to explore suitable academic partnerships.",
};
export default function AcademicPartnershipEnquiry() {
  return (
    <main>
      <PageHero title="Academic Partnership Enquiry" long lead="Interested in collaborating with Vyoma? Share your details and tell us about your institution and partnership requirements. Our team will connect with you to explore suitable opportunities." />
      <Block narrow>
        <AcademicEnquiryForm />
      </Block>
    </main>
  );
}
