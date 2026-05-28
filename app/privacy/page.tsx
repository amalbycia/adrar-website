import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Adrar Advertising LLC Dubai',
  description: 'Privacy Policy for Adrar Advertising LLC. Learn how we collect, use and protect your personal data in compliance with UAE data protection law.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

const sections = [
  {
    title: '1. Who We Are',
    content: `Adrar Advertising Requisites LLC (trading as Adrar Advertising LLC) is a limited liability company registered in the Emirate of Dubai, United Arab Emirates, with offices at Industrial Area 4, Al Qusais, Dubai (P.O. Box 234176). We are the data controller for personal information collected through this website (adraradvertising.com).

For any privacy-related queries, contact us at: sales@flashinkjet.com or call +971 4 258 7553.`,
  },
  {
    title: '2. Legal Framework',
    content: `This Privacy Policy is governed by and compliant with:

• UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) and its Executive Regulations
• UAE Federal Law No. 5 of 2012 on Combating Cybercrimes
• Dubai Electronic Commerce Law (Law No. 2 of 2002)

Where applicable, we also observe principles aligned with international standards including GDPR where visitors access our site from the European Economic Area.`,
  },
  {
    title: '3. Information We Collect',
    content: `We collect the following categories of personal data:

Contact Inquiries & WhatsApp
When you contact us via WhatsApp (+971 552217026), email, or our chat widget, we collect your name (if provided), phone number or email address, and the content of your message.

Chat Widget
Our website includes an AI-assisted chat widget. Conversations are processed to respond to your inquiry and may be stored to improve service quality. No conversation data is sold or shared with third parties for marketing.

Analytics & Cookies
We use Google Analytics 4 and Microsoft Clarity to understand how visitors use our website. These tools may collect your IP address (anonymised), browser type, device type, pages visited, and session duration. Clarity additionally records anonymised session replays and heatmaps — no personally identifiable information is captured in these recordings.

Automatically Collected Data
Standard web server logs may record your IP address, referring URL, and the time of your visit. This data is used solely for security and operational purposes and is not linked to your identity.`,
  },
  {
    title: '4. How We Use Your Information',
    content: `We use collected data only for the following purposes:

• Responding to your service enquiries and providing quotations
• Communicating about your project or order
• Improving our website's performance and user experience (analytics)
• Detecting and preventing fraudulent or abusive activity (security)
• Complying with legal obligations under UAE law

We do not use your personal data for automated decision-making or profiling that produces legal effects.`,
  },
  {
    title: '5. Legal Basis for Processing',
    content: `Under the UAE PDPL, we process your personal data on the following bases:

• Contractual necessity: to respond to your inquiry and fulfil a service agreement
• Legitimate interests: website analytics and security monitoring, where these do not override your rights
• Legal obligation: where required by UAE federal or emirate-level law
• Consent: where you have explicitly provided it (e.g., opting into marketing communications)`,
  },
  {
    title: '6. Sharing Your Information',
    content: `We do not sell, rent, or trade your personal data. We may share it only in the following limited circumstances:

Service Providers: We use third-party tools (Google Analytics, Microsoft Clarity, n8n for workflow automation) solely to operate our website. These processors are contractually bound to handle your data securely and only as instructed.

Legal Requirements: We may disclose personal data if required by UAE law, a court order, or a request from a competent UAE regulatory authority.

Business Transfers: In the event of a merger or acquisition, personal data may be transferred as part of that transaction, subject to the same protections described in this policy.

We do not transfer personal data outside the UAE except where the destination country provides an adequate level of data protection or where appropriate safeguards (such as standard contractual clauses) are in place, as required by the UAE PDPL.`,
  },
  {
    title: '7. Data Retention',
    content: `We retain personal data only for as long as necessary:

• Enquiry and contact records: up to 3 years from last contact
• Analytics data: up to 26 months (per Google Analytics default)
• Security logs: up to 90 days

After these periods, data is securely deleted or anonymised.`,
  },
  {
    title: '8. Your Rights',
    content: `Under UAE Federal Decree-Law No. 45 of 2021 (PDPL), you have the right to:

• Access: request a copy of the personal data we hold about you
• Correction: request correction of inaccurate or incomplete data
• Deletion: request erasure of your data where it is no longer necessary
• Restriction: request that we limit processing in certain circumstances
• Objection: object to processing based on legitimate interests
• Portability: receive your data in a commonly used, machine-readable format
• Withdraw consent: where processing is based on consent, you may withdraw it at any time without affecting prior processing

To exercise any of these rights, email us at sales@flashinkjet.com with the subject line "Data Rights Request". We will respond within 30 days as required by the PDPL. We may need to verify your identity before processing the request.`,
  },
  {
    title: '9. Cookies',
    content: `Our website uses cookies and similar tracking technologies:

Essential Cookies: Required for the website to function. These cannot be disabled.

Analytics Cookies: Google Analytics 4 and Microsoft Clarity use cookies to collect aggregated, anonymised usage data. You can opt out of Google Analytics at any time via Google's opt-out browser add-on.

By continuing to use our website, you consent to the use of analytics cookies. You can manage or delete cookies through your browser settings at any time.`,
  },
  {
    title: '10. Security',
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. These include HTTPS encryption, security response headers, rate limiting on our APIs, and access controls on internal systems.

However, no method of transmission over the internet is 100% secure. We encourage you to contact us via WhatsApp or phone for highly sensitive communications.`,
  },
  {
    title: '11. Children\'s Privacy',
    content: `Our website and services are directed at businesses and adult consumers. We do not knowingly collect personal data from individuals under the age of 18. If you believe a minor has submitted data to us, please contact us immediately and we will delete it.`,
  },
  {
    title: '12. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or UAE law. The effective date at the top of this page will be updated accordingly. Material changes will be communicated via a notice on our website. Continued use of our website after any changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '13. Contact & Complaints',
    content: `For any privacy questions, requests, or concerns:

Adrar Advertising Requisites LLC
Industrial Area 4, Al Qusais, Dubai, UAE
P.O. Box 234176
Email: sales@flashinkjet.com
Phone: +971 4 258 7553
WhatsApp: +971 55 221 7026

If you are not satisfied with our response, you have the right to lodge a complaint with the UAE data protection authority: the UAE Data Office (uaedataoffice.ae).`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-[800px] mx-auto px-6 md:px-8">

        <p className="text-[11px] font-body font-medium uppercase tracking-widest text-white/40 mb-6">
          Legal
        </p>

        <h1
          className="font-heading font-bold text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          Privacy Policy
        </h1>

        <p className="font-body text-[14px] text-white/40 mb-16">
          Effective date: 28 May 2026 &nbsp;·&nbsp; Adrar Advertising LLC, Dubai, UAE
        </p>

        <div className="flex flex-col gap-12">
          {sections.map((section) => (
            <div key={section.title} className="border-t border-white/10 pt-8">
              <h2 className="font-heading font-semibold text-white text-[18px] mb-4">
                {section.title}
              </h2>
              <div className="font-body text-[15px] text-white/60 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
