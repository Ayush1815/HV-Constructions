import { Reveal } from "../ui/Reveal";
import { motion } from "motion/react";

const clients = [
  {
    name: "HUGEL INFRA",
    logo: <img src="/media/clients/hugel.png" alt="Hugel Infra" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:opacity-100" />
  },
  {
    name: "VTL",
    logo: <img src="/media/clients/vtl.png" alt="VTL" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:opacity-100" />
  },
  {
    name: "PNC INFRATECH",
    logo: <img src="/media/clients/pnc.png" alt="PNC Infratech" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:opacity-100" />
  },
  {
    name: "DRA INFRA",
    logo: <img src="/media/clients/dra.png" alt="DRA Infra" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:opacity-100" />
  },
  {
    name: "SKYLARK",
    logo: <img src="/media/clients/skylark.png" alt="Skylark" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:opacity-100" />
  },
  {
    name: "DILEEP BUILDCON",
    logo: <img src="/media/clients/dileep.png" alt="Dileep Buildcon" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:opacity-100" />
  },
  {
    name: "APCO",
    logo: <img src="/media/clients/apco.png" alt="APCO" className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:opacity-80 dark:invert dark:hover:opacity-100" />
  }
];

export function ClientsSection() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="overflow-hidden border-b border-[var(--border-soft)] bg-white py-12 dark:bg-[#071017]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Trusted By Industry Leaders
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-12 flex w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-[#071017]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-[#071017]"></div>

        <motion.div
          className="flex flex-nowrap items-center gap-16 pr-16"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {duplicatedClients.map((client, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center gap-4">
              <div className="flex h-12 items-center justify-center">
                {client.logo}
              </div>
              <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
