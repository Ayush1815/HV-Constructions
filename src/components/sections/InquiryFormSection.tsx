import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Clock, Globe, Mail, Phone } from "lucide-react";
import { initialInquiryForm, type ProjectInquiry, projectTypeOptions, budgetOptions, timelineOptions } from "../../data/inquiryForm";
import { siteConfig } from "../../config/site";
import { classNames } from "../../lib/classNames";
import { trackEvent } from "../../lib/analytics";
import { InquirySubmitError, submitInquiry } from "../../lib/submitInquiry";
import { Reveal, SectionHeader } from "../ui/Reveal";
import { CustomSelect } from "../ui/CustomSelect";
import { MultiSelect } from "../ui/MultiSelect";

export function InquiryFormSection() {
  const [form, setForm] = useState<ProjectInquiry>(initialInquiryForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ProjectInquiry, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const startedRef = useRef(false);

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("form_start", { form: "inquiry" });
  };

  const updateField = <K extends keyof ProjectInquiry>(field: K, value: ProjectInquiry[K]) => {
    markStarted();
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
    setSubmitError(null);
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof ProjectInquiry, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Enter your name.";
    if (!form.organization.trim()) nextErrors.organization = "Enter your organization name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.phone.trim()) nextErrors.phone = "Enter a valid phone number.";
    if (form.projectType.length === 0) nextErrors.projectType = "Select at least one project type.";
    if (!form.projectLocation.trim()) nextErrors.projectLocation = "Enter the project location.";
    if (!form.description.trim()) nextErrors.description = "Provide a brief description of your project.";
    return nextErrors;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      await submitInquiry({
        ...form,
        source: window.location.pathname,
      });
      setSubmitted(true);
      trackEvent("form_submit", { form: "inquiry", types: form.projectType.join(", ") });
      setForm(initialInquiryForm);
      startedRef.current = false;
    } catch (error) {
      const message =
        error instanceof InquirySubmitError
          ? error.message
          : "Could not submit right now. Email us directly and we will respond shortly.";
      setSubmitError(message);
      trackEvent("form_error", { form: "inquiry" });
    } finally {
      setSubmitting(false);
    }
  };

  const fieldBase =
    "mt-2 w-full rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3.5 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[var(--brand-gold)] focus:ring-4 focus:ring-amber-500/15 dark:bg-white/8 dark:text-white dark:placeholder:text-slate-500";

  return (
    <section id="contact" className="border-t border-slate-200/80 py-16 dark:border-white/10 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Get a Quote"
            title="Start Your Project"
            text="Tell us about your project requirements and our team will get back to you within one business day to discuss how we can help."
          />
          <div className="mt-10 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)]" />
              <a href={`mailto:${siteConfig.email}`} className="font-semibold hover:text-[var(--brand-gold-muted)] dark:hover:text-[var(--brand-gold)]">
                {siteConfig.email}
              </a>
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-[var(--brand-gold-muted)] dark:text-[var(--brand-gold)]" />
              {siteConfig.phone}
            </span>
            <span className="flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-50/80 px-3 py-2 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-200 w-fit">
              <Clock className="h-4 w-4 shrink-0" />
              Typical reply: 1 business day
            </span>
          </div>
        </div>

        <Reveal>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-[2rem] border border-[var(--border-soft)] bg-[var(--surface-light-elevated)] p-5 shadow-[0_34px_100px_-62px_rgba(11,37,64,0.72)] dark:bg-[var(--surface-dark-elevated)] sm:p-7"
          >
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
              aria-hidden="true"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-bold text-slate-800 dark:text-slate-100">
                Name <span className="text-red-500">*</span>
                <input
                  value={form.name}
                  onFocus={markStarted}
                  onChange={(event) => updateField("name", event.target.value)}
                  className={classNames(fieldBase, errors.name && "border-red-500")}
                  autoComplete="name"
                  placeholder="Your name"
                />
                {errors.name && <span className="mt-2 block text-xs font-semibold text-red-600">{errors.name}</span>}
              </label>

              <label className="block text-sm font-bold text-slate-800 dark:text-slate-100">
                Work Email <span className="text-red-500">*</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className={classNames(fieldBase, errors.email && "border-red-500")}
                  autoComplete="email"
                  placeholder="you@company.com"
                />
                {errors.email && <span className="mt-2 block text-xs font-semibold text-red-600">{errors.email}</span>}
              </label>

              <label className="block text-sm font-bold text-slate-800 dark:text-slate-100">
                Phone Number <span className="text-red-500">*</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className={classNames(fieldBase, errors.phone && "border-red-500")}
                  autoComplete="tel"
                  placeholder="+91..."
                />
                {errors.phone && <span className="mt-2 block text-xs font-semibold text-red-600">{errors.phone}</span>}
              </label>

              <label className="block text-sm font-bold text-slate-800 dark:text-slate-100">
                Organization / Company <span className="text-red-500">*</span>
                <input
                  value={form.organization}
                  onChange={(event) => updateField("organization", event.target.value)}
                  className={classNames(fieldBase, errors.organization && "border-red-500")}
                  autoComplete="organization"
                  placeholder="Company name"
                />
                {errors.organization && (
                  <span className="mt-2 block text-xs font-semibold text-red-600">{errors.organization}</span>
                )}
              </label>

              <label className="block text-sm font-bold text-slate-800 dark:text-slate-100 sm:col-span-2">
                Project Location <span className="text-red-500">*</span>
                <input
                  type="text"
                  value={form.projectLocation}
                  onChange={(event) => updateField("projectLocation", event.target.value)}
                  className={classNames(fieldBase, errors.projectLocation && "border-red-500")}
                  placeholder="City, State"
                />
                {errors.projectLocation && (
                  <span className="mt-2 block text-xs font-semibold text-red-600">{errors.projectLocation}</span>
                )}
              </label>

              <div className="flex flex-col gap-4 sm:col-span-2">
                <label className="block text-sm font-bold text-slate-800 dark:text-slate-100">
                  Project Type (Select all that apply) <span className="text-red-500">*</span>
                  <MultiSelect
                    value={form.projectType}
                    onChange={(value) => updateField("projectType", value)}
                    options={projectTypeOptions}
                    className={classNames(fieldBase, errors.projectType && "border-red-500")}
                  />
                  {errors.projectType && (
                    <span className="mt-2 block text-xs font-semibold text-red-600">{errors.projectType}</span>
                  )}
                </label>
              </div>

              <label className="block text-sm font-bold text-slate-800 dark:text-slate-100">
                Estimated Budget
                <CustomSelect
                  value={form.estimatedBudget}
                  onChange={(value) => updateField("estimatedBudget", value)}
                  options={budgetOptions}
                  className={fieldBase}
                />
              </label>

              <label className="block text-sm font-bold text-slate-800 dark:text-slate-100">
                Project Timeline
                <CustomSelect
                  value={form.projectTimeline}
                  onChange={(value) => updateField("projectTimeline", value)}
                  options={timelineOptions}
                  className={fieldBase}
                />
              </label>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-bold text-slate-800 dark:text-slate-100">
                Project Description <span className="text-red-500">*</span>
                <textarea
                  className={classNames(fieldBase, "mt-2", errors.description && "border-red-500")}
                  rows={4}
                  placeholder="Tell us about the scope, requirements, or any specific challenges..."
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  onFocus={() => trackEvent("form_focus", { field: "description" })}
                />
                {errors.description && (
                  <span className="mt-2 block text-xs font-semibold text-red-600">{errors.description}</span>
                )}
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={submitting}
                className="shine-button w-full sm:w-auto relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--brand-gold)] px-7 py-4 text-sm font-black text-[#071122] shadow-[0_22px_52px_-28px_rgba(207,156,45,0.56)] transition hover:bg-[var(--brand-gold-hover)] disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.98]"
              >
                <span className="relative z-10">{submitting ? "Sending..." : "Submit Inquiry"}</span>
                <ArrowRight className="relative z-10 h-4 w-4" />
              </button>
            </div>

            {submitError && (
              <p className="mt-4 rounded-2xl border border-red-500/25 bg-red-50 p-4 text-sm font-semibold text-red-700 dark:bg-red-500/10 dark:text-red-200">
                {submitError}{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline">
                  Email {siteConfig.email}
                </a>
              </p>
            )}

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-5 space-y-4 rounded-2xl border border-emerald-500/25 bg-emerald-50 p-5 text-sm text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-100"
                >
                  <p className="font-bold text-base">Inquiry received successfully.</p>
                  <p className="leading-relaxed">
                    Thank you for reaching out to HV Construction. Our project estimation team is reviewing your requirements and will contact you shortly to discuss the next steps.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
