import { Reveal } from "../ui/Reveal";

const clients = [
  "HUGEL INFRA",
  "VTL",
  "PNC INFRATECH",
  "DRA INFRA",
  "SKYLARK",
  "DILEEP BUILDCON",
  "APCO"
];

export function ClientsSection() {
  return (
    <section className="border-b border-[var(--border-soft)] bg-white py-12 dark:bg-[#071017]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Trusted By Industry Leaders
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-16">
              {clients.map((client, idx) => (
                <div 
                  key={idx}
                  className="text-xl font-black tracking-tight text-slate-300 transition-colors hover:text-slate-900 dark:text-slate-700 dark:hover:text-slate-300 md:text-2xl"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
