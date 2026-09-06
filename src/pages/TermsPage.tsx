import { useSeo } from "../hooks/useSeo";
import { siteConfig } from "../config/site";

export default function TermsPage() {
  useSeo({
    title: "Terms & Conditions | HV Construction Pvt. Ltd.",
    description:
      "Read the Terms of Service for HV Construction Pvt. Ltd. governing use of our website, project inquiries, consultations, and construction contracting services.",
    path: "/terms",
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)]">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Last updated: 28 May 2026
        </p>
      </div>

      <div className="space-y-10 text-slate-700 dark:text-slate-300">

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">1. Agreement to terms</h2>
          <p className="mt-3 leading-7">
            By accessing or using the HV Construction Pvt. Ltd. website (the &ldquo;Site&rdquo;) or submitting a project inquiry,
            you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these
            Terms, please do not use the Site or our services.
          </p>
          <p className="mt-3 leading-7">
            HV Construction Pvt. Ltd. reserves the right to update these Terms at any time. The &ldquo;Last updated&rdquo; date
            above reflects the most recent revision. Continued use of the Site after changes constitutes
            acceptance of the updated Terms.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">2. Description of services</h2>
          <p className="mt-3 leading-7">
            HV Construction Pvt. Ltd. provides comprehensive civil engineering, infrastructure development, and construction contracting services, including but not limited to:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 leading-7">
            <li>Government and public infrastructure development</li>
            <li>Water supply and distribution infrastructure</li>
            <li>Roads, highways, bridges, and transportation infrastructure</li>
            <li>Telecommunications network civil infrastructure</li>
            <li>Residential building and multi-storey apartment construction</li>
            <li>Commercial complexes, office parks, and industrial facilities</li>
            <li>Turnkey construction solutions and EPC contracting</li>
            <li>Preliminary project inquiries, engineering feasibility reviews, and consultations (via our project inquiry form)</li>
          </ul>
          <p className="mt-4 leading-7">
            Specific deliverables, project schedules, bill of quantities (BOQ), milestones, payment terms, and warranties for contracting engagements are governed by
            a separate written agreement, contract, tender document, or Statement of Work (&ldquo;SOW&rdquo;) entered into between HV Construction Pvt. Ltd.
            and the client.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">3. Project inquiries &amp; consultations</h2>
          <p className="mt-3 leading-7">
            Preliminary project inquiries, consultations, and initial budgetary estimates submitted through the Site are provided at no initial cost and with no obligation. It represents
            HV Construction Pvt. Ltd.&rsquo;s preliminary assessment based on the information you provide in the inquiry form. An inquiry submission does not constitute a binding bid, tender commitment, guarantee, warranty,
            or formal contract for construction services until a definitive contract is executed.
          </p>
          <p className="mt-3 leading-7">
            HV Construction Pvt. Ltd. reserves the right to decline, limit, or discontinue preliminary consultations or project assessments at any time without
            prior notice.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">4. Project estimates and timelines</h2>
          <p className="mt-3 leading-7">
            Construction and infrastructure development involves numerous complex variables outside HV Construction Pvt. Ltd.&rsquo;s direct control, including
            site topography, subsurface ground conditions, regulatory approvals, environmental clearances, weather conditions, supply chain availability, and client-directed scope modifications. While we adhere strictly to national building codes, safety regulations, and quality standards, <strong className="text-slate-900 dark:text-white">HV Construction Pvt. Ltd. does not guarantee preliminary project timelines or cost estimates prior to site survey and definitive contract execution</strong>.
          </p>
          <p className="mt-3 leading-7">
            Any case studies, project portfolios, or statistics shared on the Site represent past completed works under specific conditions and serve an illustrative purpose; actual project specifications and timelines will vary based on project-specific conditions.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">5. Acceptable use</h2>
          <p className="mt-3 leading-7">When using the Site you agree not to:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6 leading-7">
            <li>Submit false, misleading, or fraudulent information via the project inquiry form</li>
            <li>Attempt to reverse-engineer, scrape, or automate requests against our API or website</li>
            <li>Use the Site in any way that violates applicable local, state, national, or international law</li>
            <li>Engage in conduct that could harm HV Construction Pvt. Ltd., its clients, or other users</li>
          </ul>
          <p className="mt-4 leading-7">
            Violations may result in immediate termination of services and, where applicable, legal action.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">6. Intellectual property</h2>
          <p className="mt-3 leading-7">
            All content on this Site — including but not limited to text, graphics, logos, architectural renders, project photographs, technical drawings, and code — is the property of HV Construction Pvt. Ltd. or its licensors and is protected by applicable
            intellectual property laws. You may not reproduce, distribute, or create derivative works
            without our prior written permission.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">7. Limitation of liability</h2>
          <p className="mt-3 leading-7">
            To the maximum extent permitted by applicable law, HV Construction Pvt. Ltd. and its directors, officers, employees,
            and partners shall not be liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the Site or our preliminary digital services, including but not limited
            to loss of profits, commercial opportunities, data, or goodwill.
          </p>
          <p className="mt-3 leading-7">
            In no event shall HV Construction Pvt. Ltd.&rsquo;s total aggregate liability to you arising out of Site use exceed the amount you paid
            HV Construction Pvt. Ltd. for digital Site services in the twelve (12) months preceding the claim, or ₹5,000 (Indian Rupees five thousand),
            whichever is greater. Formal construction project liabilities are governed exclusively by respective construction contracts.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">8. Disclaimer of warranties</h2>
          <p className="mt-3 leading-7">
            The Site and all content and services provided through it are offered on an &ldquo;as is&rdquo; and
            &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied, including
            without limitation warranties of merchantability, fitness for a particular purpose, or
            non-infringement.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">9. Third-party links</h2>
          <p className="mt-3 leading-7">
            The Site may contain links to third-party websites (e.g. government authorities, industry regulators, map services).
            HV Construction Pvt. Ltd. is not responsible for the content, privacy practices, or
            accuracy of any third-party site. Links do not constitute an endorsement.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">10. Governing law &amp; disputes</h2>
          <p className="mt-3 leading-7">
            These Terms shall be governed by and construed in accordance with the laws of India. Any
            disputes arising from these Terms or your use of the Site shall be subject to the exclusive
            jurisdiction of the courts located in India.
          </p>
          <p className="mt-3 leading-7">
            Before initiating any formal legal proceeding, you agree to attempt to resolve the dispute
            informally by contacting us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-[var(--brand-gold-muted)] underline dark:text-[var(--brand-gold)]"
            >
              {siteConfig.email}
            </a>
            . We will try to resolve the matter within 30 days.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">11. Termination</h2>
          <p className="mt-3 leading-7">
            HV Construction Pvt. Ltd. reserves the right to terminate or suspend access to the Site or any preliminary service at
            any time, with or without notice, for any reason including breach of these Terms.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">12. Contact</h2>
          <p className="mt-3 leading-7">
            For any questions about these Terms, please contact:
          </p>
          <div className="mt-4 inline-flex flex-col gap-1 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm dark:border-white/10 dark:bg-white/5">
            <span className="font-bold text-slate-900 dark:text-white">{siteConfig.name}</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[var(--brand-gold-muted)] underline dark:text-[var(--brand-gold)]"
            >
              {siteConfig.email}
            </a>
            {siteConfig.phone && (
              <span className="text-slate-600 dark:text-slate-400">{siteConfig.phone}</span>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
