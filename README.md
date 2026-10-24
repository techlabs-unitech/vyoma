# Vyoma Eduventures LLP website (Next.js)
npm install && npm run dev  (http://localhost:3000)

Pages: Home, About Us, Services, Learning Connect, Talent Connect, Mentors & Advisors, Partnerships, Contact.
Service content lives in app/data.ts. Shared header/footer/form are in app/components.tsx.
Dark/light toggle in header (follows system, remembers choice).
## Enquiry form
POST /api/enquiry validates and emails submissions via Resend. Set in Vercel > Settings > Environment Variables
(see .env.example): RESEND_API_KEY, ENQUIRY_TO (default Raj@vyomaeduventures.com), ENQUIRY_FROM (verified sender).
Without RESEND_API_KEY the form shows an error instead of a false success message.

## Before launch
- Add the approved founder photo as public/founder.jpg (the Founder section picks it up automatically).
- Pathway/online-class/counselling visuals in app/Illustrations.tsx are original illustrations; swap for licensed photos if preferred.
- Privacy Policy (/privacy) is a plain-language draft: have it reviewed before launch.
- Confirm WhatsApp number format (+91 99861 77007) in app/enquiry-options.ts.
- Swap in the approved vector logo and favicon.

## Deploying on Vercel
package.json uses patched Next.js (^15.5.9) and React (^19.1.2). If your repo has a package-lock.json
from the earlier version, delete it, run `npm install`, and commit the new lockfile.
