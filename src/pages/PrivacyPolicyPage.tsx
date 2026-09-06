import { useSeo } from "../hooks/useSeo";
import { siteConfig } from "../config/site";

export default function PrivacyPolicyPage() {
  useSeo({
    title: "Privacy Policy | HV Construction Pvt. Ltd.",
    description:
      "Learn how HV Construction Pvt. Ltd. collects, uses, and protects your personal information when you submit a construction project inquiry.",
    path: "/privacy",
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)]">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Last updated: 28 May 2026
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-slate-700 dark:text-slate-300">

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">1. Who we are</h2>
          <p className="mt-3 leading-7">
            HV Construction Pvt. Ltd. (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a premier
            infrastructure, civil engineering, and commercial construction firm. Our website is{" "}
            <a
              href={siteConfig.url}
              className="font-semibold text-[var(--brand-gold-muted)] underline dark:text-[var(--brand-gold)]"
              target="_blank"
              rel="noreferrer"
            >
              {siteConfig.url}
            </a>
            . You can reach us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-[var(--brand-gold-muted)] underline dark:text-[var(--brand-gold)]"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">2. What data we collect</h2>
          <p className="mt-3 leading-7">
            We collect only the information you actively provide when submitting our construction project inquiry form:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 leading-7">
            <li>Full name</li>
            <li>Work or business email address</li>
            <li>Phone number</li>
            <li>Organization / company name</li>
            <li>Project type (e.g. Government Infrastructure, Roads &amp; Transportation, Water Infrastructure, Commercial Building, Residential Building, Turnkey Solutions)</li>
            <li>Project location</li>
            <li>Estimated budget range</li>
            <li>Project timeline</li>
            <li>Project description and specifications</li>
          </ul>
          <p className="mt-4 leading-7">
            If you have enabled optional analytics (Plausible or Google Analytics 4), we may collect
            aggregated, anonymised page-view and interaction events such as clicks and form start events.
            These are never linked back to personally identifiable information without your consent.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">3. How we use your data</h2>
          <p className="mt-3 leading-7">We use your information exclusively to:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6 leading-7">
            <li>Review and evaluate your construction project inquiry</li>
            <li>Prepare project feasibility assessments, proposals, and cost estimates</li>
            <li>Contact you to discuss project specifications, engineering requirements, and next steps</li>
            <li>Respond to any follow-up questions you have about our construction and infrastructure services</li>
          </ul>
          <p className="mt-4 font-semibold text-slate-900 dark:text-white">
            We do not sell, rent, or trade your personal data to any third party.
          </p>
          <p className="mt-2 leading-7">
            We will never add you to a bulk marketing list without your explicit consent. Every communication
            we send is directly related to your project inquiry or consultation request.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">4. How your data is stored</h2>
          <p className="mt-3 leading-7">
            Project inquiry submissions are stored securely in our private internal database and server systems.
            Access is restricted to authorised HV Construction Pvt. Ltd. team members, project managers, and
            estimating engineers only. We may also forward an encrypted notification to our internal communication
            channels or CRM systems (e.g. via secure webhook) so that our engineering team can respond promptly.
          </p>
          <p className="mt-3 leading-7">
            We take reasonable technical and organisational measures to protect your data against
            unauthorised access, alteration, or disclosure. These include encrypted HTTPS transmission,
            server-side rate limiting, and role-based access control.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">5. Data retention</h2>
          <p className="mt-3 leading-7">
            We retain your contact and project information for as long as is reasonably necessary to evaluate
            the project inquiry, conduct consultations, respond to follow-up questions, and maintain business
            and engineering records — typically no longer than 24 months from the date of your submission unless
            you engage us for an ongoing construction or contracting project, in which case standard client and
            statutory record-keeping periods apply.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">6. Your rights</h2>
          <p className="mt-3 leading-7">You have the right to:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6 leading-7">
            <li>
              <strong>Access</strong> — request a copy of the personal data we hold about you
            </li>
            <li>
              <strong>Rectification</strong> — ask us to correct inaccurate information
            </li>
            <li>
              <strong>Erasure</strong> — request deletion of your data (&ldquo;right to be forgotten&rdquo;)
            </li>
            <li>
              <strong>Objection</strong> — object to our processing of your data at any time
            </li>
          </ul>
          <p className="mt-4 leading-7">
            To exercise any of these rights, email us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-[var(--brand-gold-muted)] underline dark:text-[var(--brand-gold)]"
            >
              {siteConfig.email}
            </a>{" "}
            with the subject line <em>&ldquo;Data Request&rdquo;</em>. We will respond within 30 days.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">7. Cookies</h2>
          <p className="mt-3 leading-7">
            Our website does not use tracking cookies by default. If you have opted in to analytics
            (Plausible or GA4), those providers may set first-party or third-party cookies per their
            respective privacy policies. Plausible Analytics is cookieless by design.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">8. Third-party services</h2>
          <p className="mt-3 leading-7">We may use the following third-party services:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6 leading-7">
            <li>
              <strong>Resend</strong> — transactional email delivery of inquiry notifications to our team
              (your data is transmitted to Resend solely for this purpose)
            </li>
            <li>
              <strong>Google Fonts</strong> — font delivery (no personal data is shared)
            </li>
            <li>
              <strong>Plausible / Google Analytics 4</strong> — optional, anonymised analytics
            </li>
          </ul>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">9. Changes to this policy</h2>
          <p className="mt-3 leading-7">
            We may update this Privacy Policy from time to time. When we do, we will revise the
            &ldquo;Last updated&rdquo; date at the top. We encourage you to review this page periodically.
            Continued use of our website and services after changes constitutes acceptance of the revised policy.
          </p>
        </section>

        <div className="border-t border-slate-200 dark:border-white/10" />

        <section>
          <h2 className="text-xl font-black text-slate-900 dark:text-white">10. Contact</h2>
          <p className="mt-3 leading-7">
            If you have any questions or concerns about this Privacy Policy or how we handle your
            personal data, please contact us:
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
