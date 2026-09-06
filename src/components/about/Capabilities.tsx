import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, SectionHeader } from "../ui/Reveal";
import { classNames } from "../../lib/classNames";

const capabilitiesData = {
  capabilities: {
    title: "Our Capabilities",
    text: "Our diverse expertise spans Government & Public Infrastructure, Jal Jeevan Mission projects, Roads & Transportation, Optical Fibre & Telecom Infrastructure, Buildings & Civil Construction, High-Rise Structures, Private Property Development, Interior Design & Execution, and comprehensive Turnkey Solutions.",
    image: "/media/high-rise/curved-skyscraper-aerial.webp",
    badge: "Comprehensive Civil Execution",
    caption: "High-Rise & Public Infrastructure Projects Across India"
  },
  strengths: {
    title: "Our Strengths",
    text: "We leverage a focus on quality, unwavering commitment to safety, robust project management practices, and integrated execution. By combining technical knowledge with agile processes, we adapt to site challenges effectively and deliver exceptional structures on time.",
    image: "/media/infrastructure/bridge-pier-construction.webp",
    badge: "Safety & Engineering Rigor",
    caption: "Heavy Reinforced Concrete Piers & Specialized Structural Works"
  },
};

export function Capabilities() {
  const [activeTab, setActiveTab] = useState<"capabilities" | "strengths">("capabilities");

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[var(--border-soft)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column: Text & Tabs */}
          <div className="lg:col-span-7">
            <SectionHeader 
              eyebrow="What We Can Do"
              title="Expertise tailored for complex builds."
              text="At HV Construction, our capabilities are built on a strong foundation of engineering prowess, innovation, and a results-driven approach. We specialize in delivering comprehensive solutions tailored to meet the unique needs of every project we undertake."
              align="left"
            />
            
            <Reveal delay={0.1}>
              <div className="mt-8 relative rounded-2xl border border-[var(--border-soft)] bg-white dark:bg-slate-900 p-6 shadow-sm">
                <div className="flex flex-wrap sm:flex-nowrap gap-2 rounded-xl bg-slate-100 p-1 dark:bg-slate-800 mb-6">
                  {(["capabilities", "strengths"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={classNames(
                        "relative flex-1 rounded-lg py-2.5 text-sm font-bold transition-colors focus:outline-none",
                        activeTab === tab
                          ? "text-slate-950 dark:text-white"
                          : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                      )}
                    >
                      {activeTab === tab && (
                        <motion.div
                          layoutId="capabilities-tab"
                          className="absolute inset-0 rounded-lg bg-white shadow dark:bg-slate-700"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10 capitalize">{capabilitiesData[tab].title}</span>
                    </button>
                  ))}
                </div>

                <div className="relative min-h-[100px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                        {capabilitiesData[activeTab].text}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Dynamic Image Visual */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} className="relative aspect-square w-full max-w-[440px] mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-gold)]/20 to-[var(--brand-navy)]/20 rounded-[2.5rem] -z-10 blur-xl" />
              <div className="w-full h-full rounded-[2.5rem] border-2 border-[var(--border-soft)] shadow-2xl overflow-hidden relative bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={capabilitiesData[activeTab].image}
                      alt={capabilitiesData[activeTab].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="inline-block rounded-md bg-[var(--brand-gold)] px-2.5 py-1 text-xs font-black text-slate-950 mb-2 shadow">
                        {capabilitiesData[activeTab].badge}
                      </span>
                      <p className="text-xs font-medium text-slate-200">
                        {capabilitiesData[activeTab].caption}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
